<template>
  <v-app id="zijderoute-container">
    <v-navigation-drawer app v-model="drawer" disable-resize-watcher>
      <v-list dense>
        <v-list-item class="pink lighten-3">
          <v-list-item-content>
            <v-list-item-title>Menu </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="drawer = !drawer">
              <v-icon> {{ closeIconSvg }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :href="item.path"
          :class="$route.path === item.path ? 'pink lighten-4 elevation-1' : ''"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.menuTitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="zr-full-height">
        <v-btn
          absolute
          dark
          fab
          left
          color="pink lighten-4"
          @click="drawer = !drawer"
        >
          <v-icon>{{ menuIconSvg }}</v-icon>
        </v-btn>
        <h1 class="zr-title zr-font">{{ $page.frontmatter.title }}</h1>
        <h2 class="zr-subtitle zr-font">{{ $page.frontmatter.subtitle }}</h2>

        <slot></slot>
      </v-container>
    </v-main>
    <v-footer app color="pink lighten-4" height="50">
      <v-btn icon color="white" href="mailto:joelle.spoelder@gmail.com">
        <v-icon>{{ emailIconSvg }}</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
/* TODO add fallback for Edge / IE */
@keyframes bg-images {
  0% {
    background-image: url("/assets/kinderyoga-1.jpg");
  }
  100% {
    background-image: url("/assets/flamingo.jpeg");
  }
}

#zijderoute-container {
  background-size: cover;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 15s;
  animation-direction: alternate;
  animation-name: bg-images;

  .v-list {
    padding: 0;
  }
}

.zr-title,
.zr-subtitle {
  color: #fff;
  text-shadow: 5px 3px 8px #000;
  text-align: center;
}

.zr-full-height {
  height: 100%;
}
</style>

<script>
import { mdiMenu, mdiEmail, mdiClose } from "@mdi/js";

export default {
  data() {
    return {
      drawer: false,
      menuIconSvg: mdiMenu,
      emailIconSvg: mdiEmail,
      closeIconSvg: mdiClose,
      menuItems: [],
    };
  },
  created() {
    this.menuItems = this.$site.pages
      .map((pageData) => {
        return { ...pageData.frontmatter, path: pageData.path };
      })
      .sort((pageFrontmatter, page2Frontmatter) => {
        if (pageFrontmatter.menuOrder < page2Frontmatter.menuOrder) {
          return -1;
        }
        return 1;
      });
  },
};
</script>

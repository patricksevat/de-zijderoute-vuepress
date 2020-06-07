<template>
  <v-app id="zijderoute-container">
    <v-navigation-drawer app v-model="drawer">
      <v-list dense nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :href="item.path"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.menuTitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-btn
          absolute
          dark
          fab
          left
          color="pink lighten-4"
          @click="drawer = !drawer"
        >
          <v-icon>{{ svgPath }}</v-icon>
        </v-btn>
        <h1 class="zr-title">{{ $page.frontmatter.title }}</h1>
        <h2 class="zr-subtitle">{{ $page.frontmatter.subtitle }}</h2>
        <slot></slot>
      </v-container>
    </v-content>
    <v-footer app color="pink lighten-4" height="30"></v-footer>
  </v-app>
</template>

<style>
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
}

.zr-title,
.zr-subtitle {
  color: #fff;
  text-shadow: 5px 3px 8px #000;
  font-family: "Delius Swash Caps", cursive;
  text-align: center;
}
</style>

<script>
import { mdiMenu } from "@mdi/js";

export default {
  data() {
    return {
      drawer: false,
      svgPath: mdiMenu,
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

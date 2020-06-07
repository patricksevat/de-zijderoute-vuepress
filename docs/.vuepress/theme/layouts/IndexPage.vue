<template>
  <v-app id="zijderoute-container">
    <v-navigation-drawer app v-model="drawer">
      <v-list dense nav>
        <v-list-item v-for="item in menuItems" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.menuTitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Page foo</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <Content />
      </v-container>
    </v-content>
    <v-footer app> </v-footer>
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
</style>

<script>
module.exports = {
  data() {
    return {
      drawer: false,
      menuItems: [],
    };
  },
  created() {
    this.menuItems = this.$site.pages
      .map((pageData) => {
        return pageData.frontmatter;
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

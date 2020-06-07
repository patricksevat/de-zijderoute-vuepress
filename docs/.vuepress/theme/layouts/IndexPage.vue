<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense nav>
        <!--        <v-list-item v-for="item in $site" :key="item.title" link>-->
        <!--          <v-list-item-icon>-->
        <!--            <v-icon>{{ item.icon }}</v-icon>-->
        <!--          </v-list-item-icon>-->

        <!--          <v-list-item-content>-->
        <!--            <v-list-item-title>{{ item.title }}</v-list-item-title>-->
        <!--          </v-list-item-content>-->
        <!--        </v-list-item>-->
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

<script>
module.exports = {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<template>
    <v-app>
        <v-navigation-drawer
            app
            v-model="drawer"
        >
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Page foo</v-toolbar-title>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>
            <v-container fluid>
                <Content/>
            </v-container>
        </v-content>
        <v-footer app>
        </v-footer>
    </v-app>
</template>

<script>
module.exports = {
  data() {
    return {
      drawer: false,
    }
  }
}
</script>

<template>
  <Layout>
    <v-row>
      <v-col
        v-for="card in $page.cards"
        sm="12"
        md="3"
        offset-md="1"
        lg="3"
        xl="2"
        offset-xl="2"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            :src="card.frontmatter.featuredimage"
          ></v-img>
          <v-card-title
            class="zr-font"
            v-text="card.frontmatter.title"
          ></v-card-title>
          <v-card-text v-html="card.parsedMarkdown"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>

<style>
.zr-card {
}
</style>

<script>
import Layout from "./Layout";

export default {
  components: {
    Layout,
  },
};
</script>

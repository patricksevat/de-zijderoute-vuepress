<template>
  <Layout>
    <v-row class="zr-masonry">
      <v-card
        v-for="card in $page.cards"
        class="zr-card"
        :class="{ 'zr-card--large': !!card.frontmatter.featuredimage }"
        color="light-green lighten-1"
      >
        <v-icon size="24">{{ $page.icons[card.frontmatter.icon] }}</v-icon>
        <p>{{ card.frontmatter.icon }}</p>
        <v-card-title
          class="zr-font zr-card-title"
          v-text="card.frontmatter.title"
        >
        </v-card-title>
        <v-img
          class="white--text align-end"
          :src="card.frontmatter.featuredimage"
        ></v-img>
        <v-card-text v-html="card.parsedMarkdown"></v-card-text>
      </v-card>
    </v-row>
  </Layout>
</template>

<style lang="scss">
$zr-grid-gap: 2em;

.zr-masonry {
  display: grid;
  grid-gap: $zr-grid-gap;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: row dense;

  margin: 24px 24px 0 24px;
}

.zr-card--large {
  grid-row-end: span 2;
}

.zr-card {
  min-height: 400px;

  &-title {
    background-color: white;
  }
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

<template>
  <Layout>
    <div class="zr-masonry">
      <v-card
        v-for="card in $page.cards"
        class="zr-card"
        :class="{ 'zr-card--large': !!card.frontmatter.featuredimage }"
        color="green lighten-4"
      >
        <v-card-title class="zr-font zr-card-title elevation-1">
          <v-avatar color="green lighten-3 mr-2">
            <v-icon size="24">{{ $page.icons[card.frontmatter.icon] }}</v-icon>
          </v-avatar>

          {{ card.frontmatter.title }}
        </v-card-title>
        <v-img
          class="white--text align-end"
          :src="card.frontmatter.featuredimage"
        ></v-img>
        <v-card-text v-html="card.parsedMarkdown"></v-card-text>
      </v-card>
    </div>
  </Layout>
</template>

<style lang="scss">
$zr-grid-gap: 2em;

.zr-masonry {
  display: grid;
  grid-gap: $zr-grid-gap;
  grid-template-columns: minmax(0, 1fr);
  padding: 24px;
}

@media (min-width: 768px) {
  .zr-masonry {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .zr-masonry {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
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

<template>
  <Layout>
    <v-row class="zr-contact-form" align-content="end">
      <v-col
        sm="8"
        offset-sm="2"
        md="4"
        offset-md="7"
        lg="3"
        offset-lg="8"
        xl="2"
        offset-xl="9"
      >
        <v-card>
          <v-list-item>
            <v-list-item-avatar color="light-green lighten-1">
              <v-icon size="24" color="white">{{ mdiMessageReplyText }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="zr-font zr-contact-form_title"
                >Contact</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <!-- TODO add validation-->
          <form
            name="zijderoute-contact-form"
            data-netlify="true"
            method="POST"
            class="pa-4 zr-form"
          >
            <v-text-field
              name="name"
              background-color="white"
              type="text"
              outlined
              label="Naam"
              hint="Jouw naam"
            ></v-text-field>
            <v-text-field
              name="email"
              background-color="white"
              type="email"
              outlined
              label="Email"
              hint="Jouw emailadres"
            ></v-text-field>
            <!--            <v-textarea-->
            <!--              name="message"-->
            <!--              background-color="white"-->
            <!--              label="Bericht"-->
            <!--              outlined-->
            <!--              hint="Waar kunnen we je mee helpen?"-->
            <!--            ></v-textarea>-->
            <v-btn
              class="mb-4 white--text"
              type="submit"
              color="light-green lighten-1"
              >Verstuur</v-btn
            >
          </form>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>

<style lang="scss">
@import "vuetify/src/styles/settings/_colors.scss";

.zr-contact-form {
  height: 90%;

  &_title {
    font-size: 24px;
  }
}

.zr-form {
  background-color: map-get($light-green, lighten-4);
}
</style>

<script>
import Layout from "./Layout";
import { mdiMessageReplyText } from "@mdi/js";

export default {
  components: {
    Layout,
  },
  data: () => ({
    mdiMessageReplyText,
  }),
};
</script>

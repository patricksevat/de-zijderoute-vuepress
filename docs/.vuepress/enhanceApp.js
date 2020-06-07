import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import "./theme/styles/global.scss";

export default ({ Vue, options }) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({
    icons: {
      iconfont: "mdiSvg",
    },
  });
};

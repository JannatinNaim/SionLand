import App from "./App.vue";
import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import vuetify from "./plugins/vuetify";

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");

import {
  faEarthAmericas,
  faFile,
  faMoon as fasMoon,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import vuetify from "./plugins/vuetify";

/* add icons to the library */
library.add(faEarthAmericas, faFile, fasMoon, farMoon);

loadFonts();
const pinia = createPinia();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

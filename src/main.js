import { createApp } from "vue";
import App from "./App.vue";
import upperFirst from "lodash/upperFirst";
import { camelCase } from "lodash";
import router from "./router";
import store from "./store";

const app = createApp(App);

//with require.context, allow webpack to know that it needs to require all the files in the components folder that start with "Base" + vue/js extensions
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(store).use(router).mount("#app");

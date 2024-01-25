import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@ij/navbar",
//   app: () => System.import("@ij/navbar"),
//   activeWhen: ["/"]
// });

registerApplication("@ij/nav", () => System.import("@ij/nav"), isActive.nav, {
  domElement: document.getElementById("nav-container"),
});

registerApplication("@ij/pg1", () => System.import("@ij/pg1"), isActive.page1, {
  domElement: document.getElementById("page-1-container"),
});

registerApplication("@ij/pg2", () => System.import("@ij/pg2"), isActive.page2, {
  domElement: document.getElementById("page-2-container"),
});

start({
  urlRerouteOnly: true,
});

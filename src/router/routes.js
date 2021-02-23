import MainLayout from "layouts/MainLayout.vue";
import Cards from "pages/Cards.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Cards",
        component: Cards
      },
      {
        path: "/patients",
        name: "Patients",
        component: () => import("pages/Patients.vue")
      },
      {
        path: "/price",
        name: "Price",
        component: () => import("pages/Price.vue")
      },
      {
        path: "/template",
        name: "Template",
        component: () => import("pages/Template.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

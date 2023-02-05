export const routes = [
  {
    path: "/",
    name: "MainView",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/MainView.vue"),
      },
    ],
  },
];

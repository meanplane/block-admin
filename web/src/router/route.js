/* eslint-disable */
const viewsadminIndex = resolve => require(['../views/admin/index'], resolve)
const viewsadminMenuIndex = resolve => require(['../views/admin/menu/index'], resolve)
const viewsadminMenuLists = resolve => require(['../views/admin/menu/lists'], resolve)
const viewscontent = resolve => require(['../views/content'], resolve)
const viewsindex = resolve => require(['../views/index'], resolve)
const viewslogin = resolve => require(['../views/login'], resolve)
export const routes = [
  {
    path: "/admin",
    component: viewsadminIndex,
    children: [
      {
        name: "index",
        path: "",
        component: viewsadminMenuIndex
      },
      {
        name: "index",
        path: "",
        component: viewsindex
      }
    ]
  },
  {
    name: "content",
    path: "/content",
    component: viewscontent
  },
  {
    name: "lists",
    path: "/lists",
    component: viewsadminMenuLists
  },
  {
    name: "login",
    path: "/login",
    component: viewslogin
  }
]
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/dashboard",
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
  },
  {
    url: null,
    name: 'M-Sync',
    icon: 'PackageIcon',
    i18n: 'M-Sync',
    submenu: [
      {
        url: "/m-sync/all-products",
        name: "All Products",
        slug: "all-products",
        i18n: "All Products",
      },
      {
        url: "/add-product",
        name: "Add Product",
        slug: "add-product",
        i18n: "Add Product",
      }
    ]
  }
]

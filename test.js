const navItems = [
  {
    title: "Dashboard",
    index: true,
    icon: "<MdOutlineSpaceDashboard />",
  },
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: "<MdOutlineSpaceDashboard />",
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: "<HiOutlineUsers />",
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: "<AiOutlineProduct />",
  },
  {
    title: "Oders",
    path: "/admin/orders",
    icon: "<LiaClipboardListSolid />",
  },
  {
    title: "Shop",
    path: "/",
    icon: "<HiOutlineShoppingBag />",
  },
];















const routes = [
  {
    index: true,
    element: "<AdminDashboard />",
  },
  {
    path: "/admin/dashBoard",
    element: "<AdminDashboard />",
  },
  {
    path: "/admin/users",
    element: "<Users />",
  },
  {
    path: "/admin/products",
    element: "<Products />",
  },
  {
    path: "/admin/orders",
    element: "<Orders />",
  },
];





const allItems = [
    {
        index: true,
        title: 'Dashboard',
        element: "<AdminDashboard />",
        icon: "<MdOutlineSpaceDashboard />"
    },
    {
        title: 'Dashboard',
        path: "/admin/dashboard",
        element: "<AdminDashboard />",
        icon: "<MdOutlineSpaceDashboard />"
    },
    {
        title: 'Users',
        path: "/admin/users",
        element: "<AdminDashboard />",
        icon: "<MdOutlineSpaceDashboard />"
    },
    {
        title: 'Products',
        path: "/admin/Products",
        element: "<AdminDashboard />",
        icon: "<MdOutlineSpaceDashboard />"
    },
    {
        title: 'Oders',
        path: "/admin/Oders",
        element: "<AdminDashboard />",
        icon: "<MdOutlineSpaceDashboard />"
    }
]



const result = allItems.reduce((acc, item) => {
  if(item.index && item.element){
    acc.push({
      index: item.index,
      element: item.element
    })
  }

  if(item.path && item.element){
    acc.push({
      path: item.path,
      element: item.element
    })
  }

  return acc;
}, []);


console.log(result);
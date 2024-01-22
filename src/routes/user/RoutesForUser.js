import React from "react";
import { lazy } from "react";
// import { FaThList, FaAd, FaWpforms, FaClipboardList } from "react-icons/fa";
// import { MdShop2, } from "react-icons/md";

// const Viewgoodsinshop = lazy(() => import("../../component/shop/ViewgoodsinshopComponent"));
// const Viewonegoodinshop = lazy(() => import("../../component/shop/ViewonegoodinshopComponent"));
// const AddCommentForm = lazy(() => import("../../component/comment/AddCommentForm"));
// const Comments = lazy(() => import("../../component/comment/Comments"));
// const AccountCustomer = lazy (()=> import("../../pages/customer/AccountCustomer"));
const MainPage = lazy (() => import('../../pages/MainPage'))
const NewItem = lazy(() => import('../../pages/CreateItem'))
const AddComment = lazy (() => import('../../pages/AddComment'))

const RoutesForCustomer = [
    {
        path: "",
        element: <MainPage />,
        name: "Main",
        // icon: <MdShop2 />,
        subputh: ""
      },
      {
        path: "/new-item",
        element: <NewItem/>,
        name: "NewItem",
        // icon: <FaThList />,
        subputh: ""
      },
      {
        path: "/add-comment",
        element: <AddComment/>,
        name: "AddComment",
        // icon: <FaThList />,
        subputh: "/:id"
      },
      // {
      //   path: "/add-comment",
      //   element: <AddCommentForm/>,
      //   name: "Додати коментар",
      //   icon: <FaAd />,
      //   subputh: "/:id"
      // },
      // {
      //   path: "/comments",
      //   element: <Comments/>,
      //   name: "Коментарі",
      //   icon: <FaWpforms />,
      //   subputh: ""
      // },
      // {
      //   path: "/cart",
      //   element: <Comments/>,
      //   name: "Кошик",
      //   icon: <FaWpforms />,
      //   subputh: ""
      // },
      // {
      //   path: "/cabinet",
      //   element: <AccountCustomer/>,
      //   name: "Кабінет",
      //   icon: <FaWpforms />,
      //   subputh: ""
      // }
];

export default RoutesForCustomer;

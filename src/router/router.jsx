import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Products from "../components/products/Products";
import Carts from "../components/carts/Carts";
import ProductsInfo from "../components/products/ProductsInfo";

const router=createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:'/products',
                        element:<Products></Products>
                  },
                  {
                        path:'/',
                        element:<Products></Products>
                  },
                  {
                        path:'/cart',
                        element:<Carts></Carts>
                  },
                  {
                        path: '/productInfo/:id', // Dynamic route for product info with id
                        element: <ProductsInfo></ProductsInfo> // Render ProductInfo component
                      },
                  {
                        path:'/*',
                        element:<div>not found </div>
                  }
            ]
      }
])


export default router;
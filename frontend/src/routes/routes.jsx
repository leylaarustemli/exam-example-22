import Home from "../pages/site/Home/Home"
import Basket from "../pages/site/Basket/Basket"
import Detail from "../pages/site/Detail/Detail"
import SiteRoot from "../pages/site/SiteRoot"
import AdminRoot from "../pages/admin/AdminRoot"
import Add from "../pages/admin/Add/Add"
import WishList from "../pages/site/WishList/WishList"

const ROUTES=[
    {
        path:"",
        element:<SiteRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
                path:"/basket",
                element:<Basket/>
            },{
                path:"/detail/:id",
                element:<Detail/>
            },{
                path:"/wishlist",
                element:<WishList/>
            }
        ]
    },{
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
]
export default ROUTES
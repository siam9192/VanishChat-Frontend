import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import CommonLayout from "../components/layout/CommonLayout";
const router =  createBrowserRouter([
    {
        path:'/',
        element:<CommonLayout/>,
        children:[
            {
                path:'',
                element:<Home/>
            }
        ]
    }
])



export default router




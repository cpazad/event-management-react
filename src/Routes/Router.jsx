import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import CareerFair from "../Pages/Career Fair/CareerFair";
import About from "../Pages/AboutUs/About";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/events/:id",
                element:<EventDetails></EventDetails>,
                loader: ()=> fetch('/EventSource.json')
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/careerfair",
                element: <PrivateRoute><CareerFair></CareerFair></PrivateRoute>
            },
            {
                path:"/blogs",
                element: <PrivateRoute> <Blogs></Blogs> </PrivateRoute>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default router 
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export const Private = () => {
    const tocken = Cookies.get('tocken')
    const data = tocken === undefined ? false : true
    return data ? (
        <Outlet />
    ) :
        <Navigate to={'/login'}  replace/>
}

import { useAuthContext } from "../Context/AuthContext";
import { Navigate,Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Container } from "./StyledComponents";

export default function PrivateRoute() {
    const {currentUser} = useAuthContext()
    return currentUser ? <Container><Nav/><Outlet/></Container> : <Navigate to="/signin" replace />
}
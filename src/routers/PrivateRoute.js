import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContextUse } from '../context/AuthContext'

export default function PrivateRoute({...rest}) {
    const location = useLocation();
    const {currentUser} = AuthContextUse();

    if(currentUser === null){
        return <Redirect to={{ pathname : '/login', state: { from: location}}} />;
    }
    return <Route {...rest} />
}

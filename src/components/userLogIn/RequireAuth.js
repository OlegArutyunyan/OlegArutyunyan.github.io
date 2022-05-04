import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { userLoggedIn } = useSelector(state => state.user)

    if (!userLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default RequireAuth

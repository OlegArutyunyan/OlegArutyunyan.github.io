import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { userAccessToken } = useSelector(state => state.user)

    if (!userAccessToken) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default RequireAuth

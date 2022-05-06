import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../userLogIn/userSlice';
import Login from './Login';

const UserLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userAccessToken } = useSelector(state => state.user)

    useEffect(() => {
        if (userAccessToken) {
            navigate('/')
        }
    }, [userAccessToken])

    const handleLogin = () => {
        console.log('User clicked Google login btn')
        dispatch(userLogin())
    }

    return (
        <div>
            <button onClick={handleLogin} className="btn btn-primary">Google login!</button>
            <Login/>
        </div>
    )
}

export default UserLogin
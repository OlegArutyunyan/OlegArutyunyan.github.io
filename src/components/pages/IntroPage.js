import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogin, userPressedButton } from '../userLogIn/userSlice';

import Login from '../userLogIn/Login';
import Logout from '../userLogIn/Logout';

const IntroPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userLoggedIn } = useSelector(state => state.user)

    const handleClick = () => {
                console.log('User clicked CLICK ME btn')
        dispatch(userPressedButton())
        navigate('/')
    }

    const handleLogin = () => {
                console.log('User clicked Google login btn')
        dispatch(userLogin())
    }

    return (
        <div className="intro">
            <button onClick={handleClick} className="btn btn-danger">CLICK ME!</button>
            <button onClick={handleLogin} className="btn btn-primary">Google login!</button>
            {/* <Login />
            <Logout /> */}
        </div>
    )
}

export default IntroPage

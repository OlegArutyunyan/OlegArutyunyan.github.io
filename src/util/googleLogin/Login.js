import {useGoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { userLoggedIn } from '../../components/userLogIn/userSlice'
import RefreshLogin from '../../util/RefreshLogin'
import { _client_id  as clientId } from '../../keys/keys'


const Login = () => {
    const dispatch = useDispatch()

    const onSuccess = (result) => {
        console.log('Login success of user: ', result.profileObj)
        console.log('Whole result: ', result)

        RefreshLogin(result)

        const finalRes = _transformUserData(result)

        sessionStorage.setItem('user-access-token', finalRes.accessToken)
        sessionStorage.setItem('user-data', JSON.stringify(finalRes))

        dispatch(userLoggedIn(finalRes))
    }

    const onFailure = (result) => {
        console.log('Login failure with error: ', result)
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    }) 
    
    const _transformUserData = (res) => {
        return {
            id: res.profileObj.googleId,
            accessToken: res.accessToken,
            name: res.profileObj.givenName,
            photoURL: res.profileObj.imageUrl,
        }
    }

    return (
        <button onClick={signIn} className="btn">
            Login
        </button>
    )
}

export default Login
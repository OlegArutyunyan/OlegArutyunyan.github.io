import {useGoogleLogin} from 'react-google-login'
import RefreshLogin from '../../util/RefreshLogin'

const clientId = '900478716566-ee1lqcklucppbivsp9m6osc4svs27hee.apps.googleusercontent.com'

const Login = () => {

    const onSuccess = (result) => {
        console.log('Login success of user: ', result.profileObj)
        RefreshLogin(result)
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

    return (
        <button onClick={signIn} className="btn">
            Login
        </button>
    )
}

export default Login
import { useGoogleLogout } from 'react-google-login'

const clientId = '900478716566-ee1lqcklucppbivsp9m6osc4svs27hee.apps.googleusercontent.com'

const Logout = () => {

    const onLogoutSuccess = () => {
        console.log('Logged out successfully')
    }

    const onFailure = () => {
        console.log('Logout failure')
    }

    const { signOut } = useGoogleLogout({
        onLogoutSuccess,
        onFailure,
        clientId
    }) 

    return (
        <button onClick={signOut} className="btn">
            Logout
        </button>
    )
}

export default Logout
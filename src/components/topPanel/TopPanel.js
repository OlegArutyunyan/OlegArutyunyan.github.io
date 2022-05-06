import React from 'react'
import { InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { userLogOut } from '../userLogIn/userSlice'

import yt_logo from '../../img/yt_logo.png'
import "./topPanel.scss"

    import useGoogleAuth from '../services/useGoogleAuth'

const TopPanel = () => {
        const {RefreshLogin} = useGoogleAuth()

    const { userData } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleRefresh = () => {
        RefreshLogin()
    }

    const handleLogOut = () => {
        console.log('user pressed log out')
        dispatch(userLogOut())
        sessionStorage.removeItem('user-access-token')
        sessionStorage.removeItem('user-data')
    }

    return (
        <div className="headers">
            <div className="headers__left">
                <button className="headers__left_hamb">
                    <i className="fa-solid fa-bars menu_icon"></i>
                </button>
                <div className="headers__left_logo">
                    <img src={yt_logo} alt="yt logo" />
                </div>
            </div>
            <div className="headers__center">
                <InputGroup className="mb-6">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary headers__center_btn" id="main_search_btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>
                </InputGroup>
            </div>
            <div className="headers__right">
                <div className="headers__right_acc">
                    <div className="headers__right_acc-greeting">Hello, {userData.name}</div>
                    {/* <img src={userData.photoURL} alt="user avatar" className='headers__right_acc-avatar' /> */}
                    {dropDownMenu(userData.photoURL, handleRefresh, handleLogOut)}
                </div>
            </div>
        </div>
    )
}

const dropDownMenu = (avatar, handleRefresh, handleLogOut) => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href="#"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="headers__right_acc-dropdown"
        >
            {children}
        </a>
    ));

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <img src={avatar} alt="user avatar" className='headers__right_acc-avatar' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as="button">
                    <div onClick={handleRefresh}>
                        Refresh
                    </div>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                    <div onClick={handleLogOut}>
                        Log Out
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default TopPanel
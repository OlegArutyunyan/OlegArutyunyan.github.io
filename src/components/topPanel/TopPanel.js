import { InputGroup, FormControl, Button } from 'react-bootstrap'

import yt_logo from '../../img/yt_logo.png'
import "./topPanel.scss"

const TopPanel = () => {
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
                    Hello, its me!
                </div>
            </div>
        </div>
    )
}

export default TopPanel
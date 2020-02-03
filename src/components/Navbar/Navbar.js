import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li style={{ float: "left"}}><div className="logo">Tamas Pleszkan</div></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;

import React, { useState } from 'react';
import { Button, Drawer } from 'antd'
import { AiOutlineMenu } from 'react-icons/ai'
import NavBarMenu from './NavBarMenu';
import './NavBar.css';

function NavBar() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div className="menu__logo">
                <a href="/">logo</a>
            </div>
            <div className="menu__container">
                {/* <div className="menu_left">
                    <NavBarMenu mode="horizontal" />
                </div> */}
                <div className="menu_rigth">
                    <NavBarMenu mode="horizontal" />
                </div>
                <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                    <AiOutlineMenu type="align-right" />
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <NavBarMenu mode="inline" />
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar
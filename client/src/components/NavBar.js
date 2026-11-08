import React, { useContext } from 'react';
import { Context } from '../index';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts';
import header_logo from '../header_logo.svg';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <div className='hat'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink to={SHOP_ROUTE}>
                        <img src={header_logo} alt="Logo" width="80" height="80" />
                    </NavLink>
                    {user.isAuth ? (
                        <div className='navigation'>
                            <Nav className="ml-auto" style={{ color: 'white' }}>
                                <Button variant="danger" onClick={logOut} style={{ marginRight: '10px' }}>
                                    Выйти
                                </Button>
                                <Button variant="danger" style={{ marginRight: '10px' }}>
                                    Админ
                                </Button>
                                    
                            </Nav>
                        </div>
                    ) : (
                        <div className='navigation'>
                            <Nav className="ml-auto" style={{ color: 'white' }}>
                                <Button variant="danger" onClick={() => navigate(LOGIN_ROUTE)}>
                                    Авторизация
                                </Button>
                            </Nav>
                        </div>
                    )}
                </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;

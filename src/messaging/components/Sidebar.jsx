import {GridView, LogoutOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const AdminLogo = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
    color: #fff;
    font-weight: bold;
`;

const MenuItems = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuItem = styled.div`
    width: 100%;
    position: relative;

    &:hover {
        background: black;
    }
`;


const MenuLinkIcon = {
    fontSize: "40px",
    flex: "1"
}

const MenuLinkText = {
    fontSize: "20px",
    flex: "2",
    position: "relative"
}

const MenuButton = styled.div`
    cursor: pointer;
`;

const MenuLink = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration:"none",
    marginLeft: "0px",
    color: "#fff",
    padding: "10px"
}

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/");

    }

  return (
    <Wrapper>
        <AdminLogo>BTRS MESSAGING</AdminLogo>
        <MenuItems>
            <MenuItem>
                <Link to="/messaging" style={MenuLink}>
                    <GridView style={MenuLinkIcon}/>
                    <p style={MenuLinkText}>Chats</p>
                </Link>
            </MenuItem>
        
            <MenuItem>
                <MenuButton onClick={handleLogout} style={MenuLink}>
                    <LogoutOutlined style={MenuLinkIcon}/>
                    <p style={MenuLinkText}>Logout</p>
                </MenuButton>
            </MenuItem>
        </MenuItems>

    </Wrapper>
  )
}

export default Sidebar
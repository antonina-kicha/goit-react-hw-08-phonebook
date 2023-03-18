import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiNotebook } from 'react-icons/gi';

export const Link = styled(NavLink)`
color: #ffffff;
    text-decoration: none;
    :hover{
        color: rgb(139, 0, 0)
    }
`;

export const LogoIcon = styled(GiNotebook)`
    color: rgb(139, 0, 0);
    margin-right: 5px;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 30px;
`;


import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WelcomeText = styled.p`
    color: #FFFFFF;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: none;
`;

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
`;

export const Button = styled.button`
    width: 60px;
    min-height: 40px;
    max-height: 60px;
    padding-top: 5px;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-transform: none;
    background-color: rgba(0,0,0,0);
    border-color: rgba(0, 0, 0, 0);
    border-radius: 15px;
    cursor: pointer;
    :hover{
        background-color: rgb(139, 0, 0)
    }
`;

export const UserNav = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Link = styled(NavLink)`
    text-decoration: none;  
    color: #ffffff;
    :hover{
        color: rgb(139, 0, 0)
    }
`;

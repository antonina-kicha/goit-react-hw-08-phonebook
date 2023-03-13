import styled from "styled-components";

export const Container = styled.div`
max-width: 100vw;    
height: 100vh;
margin: 0 auto;
text-align: center;
padding: 40px 40px;
background-image: url("https://p4.wallpaperbetter.com/wallpaper/979/77/271/background-book-phone-hd-wallpaper-preview.jpg");
background-repeat: no-repeat;
background-size: cover;
color: #FFFFFF;
font-weight: 500;

`;

export const Logo = styled.span`
text-transform: uppercase;
color: #8B0000;
`;

export const List = styled.ul`
 display: flex;
gap: 40px;
margin-left: 0;
    padding-left: 0;
    justify-content: center;
    margin-top: 60px;
    color: #5c5e5c;
`;
export const ListItem = styled.li`
list-style: none;

padding: 15px;
    border: 1px solid #5c5e5c;
    border-radius: 5px;
    min-width: 300px;
    justify-content: space-around;

`;
export const ListHeader = styled.h2`
font-size: 16px;
display: flex;
gap: 10px;
margin-top: 5px;
    text-transform: uppercase;

`;

export const Text = styled.p`
font-size: 12px;

`;
   
import styled from "styled-components";

export const WelcomeText = styled.p`
color: #FFFFFF;
margin-top: 0;
margin-bottom: 0;

`;

export const WelcomeContainer = styled.div`
display: flex;
align-items: center;
`;

export const Button = styled.button`
max-width: 200px;
min-width: 140px;
min-height: 40px;
max-height: 60px;


padding: 5px 5px;
font-family: inherit;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
text-transform: uppercase;
background-color: rgba(0,0,0,0);
border: 1px solid rgb(139, 0, 0);
border-radius: 15px;
cursor: pointer;
:hover{
    background-color: rgb(139, 0, 0)
}
`;


// transition: color var(--anim - fast), background - color var(--anim - fast);

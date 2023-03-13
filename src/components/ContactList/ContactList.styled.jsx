import styled from 'styled-components';

export const List = styled.ul`
    padding: 20px 40px;
    max-height: 450px;
    overflow: scroll;
    border: 1px solid black;
    border-radius: 5px;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    align-items: center;  
    border-bottom: 1px dotted;  

`;

export const Button = styled.button`
    border-radius: 4px;
    height: 30px;
    padding: 0 15px;
    margin-left: 10px;
    width: 50px;
    padding: 5px;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    color: black;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(139, 0, 0);
    border-radius: 7px;
    cursor: pointer;
    :hover{
        background-color: rgb(139, 0, 0);
        color: #ffffff;
    }
`;
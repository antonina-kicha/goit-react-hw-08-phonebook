import styled from 'styled-components';

export const FormWrapper = styled.div`
    text-align: center;
    max-width: 450px;
    min-width: 300px;
    position: relative;
    padding: 40px;
    border: 1px solid black;
    border-radius: 5px;
`;


export const Button = styled.button`
    border-radius: 4px;
    height: 30px;
    padding: 0 15px;
    margin-left: auto;
    margin-top: 15px;

`;

export const Error = styled.p`
    position: absolute;
    top: 80px;
    left: 120px;
    
    color: red;
`;


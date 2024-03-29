import styled from 'styled-components';
import {Field, Form } from 'formik';

export const FormWrapper = styled.div`
    text-align: center;
    max-width: 450px;
    min-width: 300px;
    position: relative;
    padding: 50px 40px 40px 40px;
    border: 1px solid black;
    border-radius: 5px;
`;

export const Button = styled.button`
    margin-left: auto;
    margin-top: 5px;
    padding: 0 15px;
    width: 120px;
    padding: 10px;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(139, 0, 0);
    border-radius: 7px;
    cursor: pointer;
`;

export const Error = styled.p`
    position: absolute;
    top: 160px;
    font-size: 12px;
    color: red;
`;

export const Label = styled.label`
    position: absolute;
    top: -20px;
    left: 0;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Input = styled(Field)`
    width: 305px;
    height: 25px;
`;

export const FormWithStyle = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
    justify-content: space-between;
`;



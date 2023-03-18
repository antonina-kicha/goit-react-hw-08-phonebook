import styled from "styled-components";
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';


export const Form = styled.form`
    text-align: center;
    width: 400px;
    margin-left: auto;
    margin-right: 40px;
    padding: 60px 40px 40px 40px;
    border: 1px solid;
    border-radius: 5px; 
`;

export const FieldName = styled.span`
    position: absolute;
    top: -25px;
    left: 0;
`;

export const FormField = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid;
    padding: 10px;
    padding-left: 50px;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: #8B0000;
    &:focus {
        border-color: #8B0000;
        outline: transparent;
    }
    &:invalid:not(:placeholder-shown) {
        border: 1px solid red;
        }
`;

export const FormLabel = styled.label`
    position: relative;
    display: block;
    margin-bottom: 35px;
`;

export const UserIcon = styled(FaUser)`
    position: absolute;
    top: 10px;
    left: 15px;
`;

export const EmailIcon = styled(MdEmail)`
    position: absolute;
    top: 8px;
    left: 15px;
`;

export const PassIcon = styled(RiLockPasswordFill)`
    position: absolute;
    top: 8px;
    left: 15px;
`;

export const Button = styled.button`
margin-left: auto;
    margin-top: 5px;
    padding: 10px;
    width: 120px;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(139, 0, 0);
    border-radius: 7px;
    cursor: pointer;
    :hover {
        background-color: rgb(139, 0, 0);
        color: #ffffff;
    }
`;

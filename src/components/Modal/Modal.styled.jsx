
import styled from "styled-components";
import {Field, Form } from 'formik';


export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;


export const ModalContainer = styled.div`
    position: relative;

padding: 40px;
width: 360px;
height: 210px;
background-color: #ffffff;
border: 1px solid rgb(139, 0, 0);
border-radius: 7px;
  `;

export const FormWithStyle = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    `;

export const Input = styled(Field)`
    width: 350px;
    height: 20px;
    `;

export const Button = styled.button`
    margin: 10px;
    padding: 0 15px;
    width: 160px;
    padding: 10px;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(139, 0, 0);
    border-radius: 7px;
    cursor: pointer;
    :hover{
        background-color: rgb(139, 0, 0);
        color: #ffffff;
    }
`;

export const Error = styled.p`
    position: absolute;
    top: 180px;
    font-size: 12px;
    color: red;
`;

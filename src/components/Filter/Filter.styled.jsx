import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    gap: 5px;
    position: absolute;
    top: 7px;
    right: 130px;
    color: rgb(92, 94, 92);
    font-size: 14px;
     :hover{
            color: transparent;
//         position: absolute;
//   top: 0;
//   left: 0;
    };
 
`;
export const Input = styled.input`
    box-sizing: border-box;
    width: 300px;
    border: 1px solid rgb(139, 0, 0);
    padding: 7px;
    border-radius: 5px;
    outline: rgb(139, 0, 0);
`;

export const FilterField = styled.div`
    position: relative;
`;



import styled from "styled-components";

export const Form = styled.form`
    text-align: center;
    width: 400px;
    margin-left: auto;
    margin-right: 40px;
padding: 40px;
    border: 1px solid;
    border-radius: 5px; 
`;

export const FormField = styled.input`
box-sizing: border-box;
width: 100%;
border: 1px solid #8B0000;
padding: 10px;
padding-left: 50px;
border-radius: 5px;
outline: #8B0000;
`;

export const FormLabel = styled.label`
position: relative;
display: block;
margin-bottom: 35px;
`;

export const FieldName = styled.span`
position: absolute;
    top: 8px;
    left: 15px;
    opacity:0;

`;



// .contact-form-input:focus,
// .contact-form-input:not(:placeholder-shown) {
//     border - color: #ffffff;
    

//     .contact-form-input:required:valid:not(:placeholder-shown) {
//   border-color: rgb(31, 109, 0);
// }
// .contact-form-input:required:invalid:not(:placeholder-shown) {
//   border-color: rgb(255, 217, 0);
//     }
    
//     .contact-form-input::placeholder {
//   color: transparent;
//   transition: color var(--anim-fast);
// }

// .contact-form-input:focus::placeholder {
//   color: rgba(157, 164, 189, 0.4);
//     }
    

//     .contact-form-label {
//   position: absolute;
//   top: 0;
//   left: 0;

//   transform-origin: top left;
//   transition: transform var(--anim-fast), color var(--anim-fast);

//   font-weight: 600;
//   font-size: 11px;
//   line-height: calc(15 / 11);
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: rgba(157, 164, 189, 0.4);
// }

// .contact-form-input:focus + .contact-form-label,
// .contact-form-input:not(:placeholder-shown) + .contact-form-label,
// .contact-form-message:focus + .contact-form-label,
// .contact-form-message:not(:placeholder-shown) + .contact-form-label {
//   color: #ffffff;
//   transform: translateY(-15px) scale(0.8);
//     }
//     .contact-form-input:invalid:required:not(:placeholder-shown)
//   ~ .contact-form-icon
//   .contact-form-warning {
//   opacity: 1;
//   transform: scale(1);
// }

// .contact-form-success {
//   fill: rgb(31, 109, 0);
// }

// .contact-form-input:valid:required:not(:placeholder-shown)
//   ~ .contact-form-icon
//   .contact-form-success {
//   opacity: 1;
//   transform: scale(1);
// }
    



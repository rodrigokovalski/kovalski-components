import React from "react";
import { StyledHeader, StyledModal } from "./Modal.styles";
import { ModalProps } from "./Modal.types";

const Modal : React.FC<ModalProps> = (props) => (
    <>
        {props.isOpen && (
        <StyledModal open={props.isOpen}>
            {props.title && (
                <StyledHeader>
                    <h6>{props.title}</h6>
                    <button onClick={props.onClose}>X</button>
                </StyledHeader>
            )}
            {props.children}
           
        </StyledModal>
        )}
    </>
);

export default Modal;
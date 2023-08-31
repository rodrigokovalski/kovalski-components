import React from "react";
import { StyledBox } from "./Box.styles";
import { BoxProps } from "./Box.types";

const Box: React.FC<BoxProps> = (props) => (
    <StyledBox {...props}>
        {props.children}
    </StyledBox>
)

export default Box;
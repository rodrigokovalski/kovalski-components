import styled from "styled-components";

const StyledModal = styled.dialog`
    box-shadow: #fff;
    width: 400px;
    padding: 0;
    border-radius: 4px;
    border: none;
    max-height: 80vh;

    &::backdrop {
        background-color: #fff;
        opacity: 0.35;
    }

`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 22px 28px;
    height: 68px;
    border-bottom: 0.5px solid #fff;
`;

export { StyledModal, StyledHeader }
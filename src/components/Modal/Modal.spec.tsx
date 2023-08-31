import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("<Modal />", () => {
    it('should render correctly', () => {
        render(<Modal isOpen={true} onClose={() => {}} data-testid="Modal">Modal</Modal>);

        const ModalElement = screen.getByText('Modal');

        expect(ModalElement).toBeInTheDocument();
    });
});
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("<Modal />", () => {
    it('should render correctly', () => {
        render(<Modal isOpen={true} onClose={() => {}}>Modal</Modal>);

        const ModalElement = screen.getByText('Modal');

        expect(ModalElement).toBeInTheDocument();
    });

    it('should render with a title when it is passed', () => {
        render(<Modal isOpen={true} onClose={() => {}} data-testid="Modal" title="Título">Modal</Modal>);

        const titleElement = screen.getByText('Título');

        expect(titleElement).toBeInTheDocument();
    })
});
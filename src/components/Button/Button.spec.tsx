import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
    it('should render correctly', () => {
        render(<Button>Button</Button>);

        const ButtonElement = screen.getByText('Button');

        expect(ButtonElement).toBeInTheDocument();
    });
});
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Box from "./Box";

describe("<Box />", () => {
    it('should render correctly', () => {
        render(<Box data-testid="Box">Box</Box>);

        const boxElement = screen.getByText('Box');

        expect(boxElement).toBeInTheDocument();
    });
});
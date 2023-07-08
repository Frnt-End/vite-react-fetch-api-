import { render, screen } from "@testing-library/react";
import Item from "../Components/Item";

describe("Item component", () => {
  const mockItem = {
    url: "https://example.com/cat.jpg",
    breeds: [{ name: "Bengal" }],
  };

  test("renders without errors", () => {
    render(<Item item={mockItem} />);
  });

  test("displays the correct content based on props", () => {
    render(<Item item={mockItem} />);
    const imgElement = screen.getByAltText("Bengal");
    const h2Element = screen.getByText("Bengal");
    // Assert that the expected content is displayed based on the props
    expect(imgElement).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
  });
});

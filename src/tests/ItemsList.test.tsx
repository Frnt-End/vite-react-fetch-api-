import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import ItemsList from "../Components/ItemsList";

describe("ItemsList", () => {
  it("Renders title", () => {
    render(<ItemsList />);
    expect(screen.getByRole("heading")).toHaveTextContent("The List");
  });
});

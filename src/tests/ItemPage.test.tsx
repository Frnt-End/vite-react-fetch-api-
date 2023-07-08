import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";
import ItemPage from "../Components/ItemPage";

// Mock API response
const server = setupServer(
  rest.get("http://api.thecatapi.com/v1/images/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        url: "https://example.com/cat.jpg",
        breeds: [
          {
            name: "Bengal",
            temperament: "Curious, Active",
            life_span: "12-16 years",
          },
        ],
        width: 500,
        height: 400,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("checks if alt attribute is correctly set to the name of the breed", async () => {
  render(
    <MemoryRouter>
      <ItemPage />
    </MemoryRouter>
  );

  const imgElement = await screen.findByAltText("Bengal");
  expect(imgElement).toBeInTheDocument();
});

test("checks if currentItem is defined", async () => {
  render(
    <MemoryRouter>
      <ItemPage />
    </MemoryRouter>
  );

  const currentItem = await screen.findByAltText("Bengal");
  expect(currentItem).toBeInTheDocument();
});

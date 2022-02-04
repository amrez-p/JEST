import { cleanup, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  afterEach(() => {
    cleanup();
  });
  it("should render heading", () => {
    const headerEl = screen.getByTestId("header");
    expect(headerEl.textContent).toBe("Jest Test");
  });

  it("should render total", () => {
    const total = screen.getByTestId("total");
    expect(total.textContent).toBe("0");
  });

  it("should render button", () => {
    const total = screen.getByTestId("button");
    expect(total.textContent).toBe("Enter Here");
  });
});

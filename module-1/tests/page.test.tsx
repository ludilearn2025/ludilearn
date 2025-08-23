import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("affiche le texte Ludilearn — Module 1", () => {
    render(<Page />);
    expect(screen.getByText("Ludilearn — Module 1")).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SubpageNav from "../components/common/SubpageNav";

describe("SubpageNav Pagination", () => {
  it("computes prev and next services for first subpage (Web Development)", () => {
    render(
      <MemoryRouter initialEntries={["/services/web-development"]}>
        <SubpageNav currentPath="/services/web-development" />
      </MemoryRouter>
    );

    const prevLink = document.querySelector(".prev-btn");
    const nextLink = document.querySelector(".next-btn");

    expect(prevLink.getAttribute("href")).toBe("/services/easy-integration");
    expect(nextLink.getAttribute("href")).toBe("/services/mobile-app-development");
  });

  it("computes prev and next services for middle subpage (Mobile App Development)", () => {
    render(
      <MemoryRouter initialEntries={["/services/mobile-app-development"]}>
        <SubpageNav currentPath="/services/mobile-app-development" />
      </MemoryRouter>
    );

    const prevLink = document.querySelector(".prev-btn");
    const nextLink = document.querySelector(".next-btn");

    expect(prevLink.getAttribute("href")).toBe("/services/web-development");
    expect(nextLink.getAttribute("href")).toBe("/services/ui-ux-design");
  });

  it("automatically falls back to location.pathname when currentPath is omitted", () => {
    render(
      <MemoryRouter initialEntries={["/services/ui-ux-design"]}>
        <SubpageNav />
      </MemoryRouter>
    );

    const prevLink = document.querySelector(".prev-btn");
    const nextLink = document.querySelector(".next-btn");

    expect(prevLink.getAttribute("href")).toBe("/services/mobile-app-development");
    expect(nextLink.getAttribute("href")).toBe("/services/software-development");
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

// Mock GSAP and complex components to focus on routing resolution
vi.mock("gsap", () => ({
  default: {
    registerPlugin: vi.fn(),
    timeline: () => ({ to: vi.fn(), from: vi.fn(), fromTo: vi.fn() }),
    to: vi.fn(),
    from: vi.fn(),
    fromTo: vi.fn(),
    set: vi.fn(),
    context: () => ({ revert: vi.fn() }),
    utils: { toArray: () => [] },
  },
}));

const { mockScrollTrigger } = vi.hoisted(() => {
  const trigger = { refresh: vi.fn(), create: vi.fn() };
  return { mockScrollTrigger: trigger };
});

vi.mock("gsap/ScrollTrigger", () => ({
  default: mockScrollTrigger,
  ScrollTrigger: mockScrollTrigger,
}));

describe("AppRoutes Parent-Child Routing & Redirects", () => {
  it("renders Services page under /services parent route", async () => {
    render(
      <MemoryRouter initialEntries={["/services"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.querySelector("h2")).toBeDefined();
  });

  it("renders WebDevelopment subpage under /services/web-development child route", async () => {
    render(
      <MemoryRouter initialEntries={["/services/web-development"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toContain("Web Development");
  });

  it("renders MobileAppDevelopment subpage under /services/mobile-app-development child route", async () => {
    render(
      <MemoryRouter initialEntries={["/services/mobile-app-development"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toContain("Mobile App Development");
  });

  it("renders Blog page under /blog parent route", async () => {
    render(
      <MemoryRouter initialEntries={["/blog"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toContain("Blog");
  });

  it("handles legacy /web-development by redirecting to /services/web-development", async () => {
    render(
      <MemoryRouter initialEntries={["/web-development"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toContain("Web Development");
  });

  it("handles legacy /ai-chatbots by redirecting to /services/ai-chatbots", async () => {
    render(
      <MemoryRouter initialEntries={["/ai-chatbots"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toContain("AI Chatbots");
  });

  it("handles legacy /digital-transformation by redirecting to /services/digital-transformation", async () => {
    render(
      <MemoryRouter initialEntries={["/digital-transformation"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toContain("Digital Transformation");
  });
});

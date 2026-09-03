import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  fetchServices,
  fetchPage,
  fetchBlogPosts,
  ApiError,
} from "../services/cmsApi";

describe("cmsApi Service Layer", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches services successfully", async () => {
    const mockServices = [{ id: 1, title: "Web Development", slug: "web-development" }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: mockServices }),
    });

    const services = await fetchServices();
    expect(services).toEqual(mockServices);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/services"),
      expect.any(Object)
    );
  });

  it("fetches page by slug with cleaned path", async () => {
    const mockPage = { title: "About Us", slug: "about" };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockPage,
    });

    const page = await fetchPage("/about");
    expect(page).toEqual(mockPage);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/pages/about"),
      expect.any(Object)
    );
  });

  it("throws ApiError when response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ message: "Page not found" }),
    });

    await expect(fetchPage("nonexistent")).rejects.toThrow(ApiError);
  });
});

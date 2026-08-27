import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { usePage, useServices } from "../services/useCms";
import * as cmsApi from "../services/cmsApi";

describe("useCms Hook Layer", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("handles usePage data and loading state", async () => {
    const mockPageData = { title: "About", slug: "about", sections: [] };
    vi.spyOn(cmsApi, "fetchPage").mockResolvedValue(mockPageData);

    const { result } = renderHook(() => usePage("about"));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockPageData);
    expect(result.current.error).toBeNull();
  });

  it("handles useServices error state gracefully", async () => {
    vi.spyOn(cmsApi, "fetchServices").mockRejectedValue(new Error("Network Failure"));

    const { result } = renderHook(() => useServices());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe("Network Failure");
  });
});

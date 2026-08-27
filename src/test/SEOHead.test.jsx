import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SEOHead from "../components/common/SEOHead";

describe("SEOHead Component", () => {
  beforeEach(() => {
    document.title = "";
    document.head.innerHTML = "";
  });

  it("sets default document title and meta description", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SEOHead />
      </MemoryRouter>
    );

    expect(document.title).toBe("AppebSoft - Amplifying Digital Power");
    const metaDesc = document.querySelector("meta[name=\"description\"]");
    expect(metaDesc).not.toBeNull();
    expect(metaDesc.getAttribute("content")).toContain("AppebSoft is a premier digital product studio");
  });

  it("updates custom title, description, and canonical URL for parent-child route", () => {
    render(
      <MemoryRouter initialEntries={["/services/web-development"]}>
        <SEOHead
          title="Web Development Services"
          description="Custom web applications with React and Node."
          keywords="Web, React, Next.js"
        />
      </MemoryRouter>
    );

    expect(document.title).toBe("Web Development Services | AppebSoft");

    const metaDesc = document.querySelector("meta[name=\"description\"]");
    expect(metaDesc.getAttribute("content")).toBe("Custom web applications with React and Node.");

    const canonicalEl = document.querySelector("link[rel=\"canonical\"]");
    expect(canonicalEl).not.toBeNull();
    expect(canonicalEl.getAttribute("href")).toBe("https://appebsoft.com/services/web-development");

    const ogUrl = document.querySelector("meta[property=\"og:url\"]");
    expect(ogUrl.getAttribute("content")).toBe("https://appebsoft.com/services/web-development");
  });

  it("injects and cleans up dynamic JSON-LD schema", () => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Development",
    };

    const { unmount } = render(
      <MemoryRouter initialEntries={["/services/web-development"]}>
        <SEOHead schema={schemaData} />
      </MemoryRouter>
    );

    const scriptEl = document.getElementById("dynamic-jsonld-schema");
    expect(scriptEl).not.toBeNull();
    expect(JSON.parse(scriptEl.textContent)).toEqual(schemaData);

    unmount();
    const cleanedScript = document.getElementById("dynamic-jsonld-schema");
    expect(cleanedScript).toBeNull();
  });
});

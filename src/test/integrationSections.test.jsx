import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as useCmsHooks from "../services/useCms";
import * as cmsApi from "../services/cmsApi";

import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import MenuOverlay from "../components/layout/MenuOverlay";
import ServicesUniverse from "../components/home/ServicesUniverse";
import PortfolioSection from "../components/portfolio/PortfolioSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactHero from "../components/contact/ContactHero";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";

describe("All Wired Sections & Components Verification", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("1. Footer", () => {
    it("renders with live CMS settings", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: {
          social_facebook: "https://facebook.com/custom-page",
          social_linkedin: "https://linkedin.com/custom-page",
          portfolio_pdf_url: "/custom-portfolio.pdf",
        },
        loading: false,
        error: null,
      });

      const { container } = render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      const fbLink = container.querySelector('a[href="https://facebook.com/custom-page"]');
      const liLink = container.querySelector('a[href="https://linkedin.com/custom-page"]');
      const pdfLink = container.querySelector('a[href="/custom-portfolio.pdf"]');

      expect(fbLink).toBeTruthy();
      expect(liLink).toBeTruthy();
      expect(pdfLink).toBeTruthy();
    });

    it("renders with fallback values when settings is null", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: null,
        loading: false,
        error: "Network error",
      });

      const { container } = render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      const fbLink = container.querySelector('a[href="https://www.facebook.com/profile.php?id=61585505077330"]');
      const liLink = container.querySelector('a[href="https://www.linkedin.com/company/appebsoft/home/"]');
      expect(fbLink).toBeTruthy();
      expect(liLink).toBeTruthy();
    });
  });

  describe("2. FloatingButtons", () => {
    it("renders WhatsApp button with live CMS whatsapp_url", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: { whatsapp_url: "https://wa.me/1234567890" },
        loading: false,
        error: null,
      });

      const { container } = render(<FloatingButtons />);
      const waLink = container.querySelector('a[href="https://wa.me/1234567890"]');
      expect(waLink).toBeTruthy();
    });

    it("renders WhatsApp button with fallback when settings is null", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: null,
        loading: false,
        error: null,
      });

      const { container } = render(<FloatingButtons />);
      const waLink = container.querySelector('a[href*="919836717849"]');
      expect(waLink).toBeTruthy();
    });
  });

  describe("3. MenuOverlay", () => {
    it("renders with live dynamic services from CMS", async () => {
      vi.spyOn(useCmsHooks, "useServices").mockReturnValue({
        data: [
          { title: "Custom Web Solutions", slug: "custom-web-solutions" },
          { title: "Custom AI Agentics", slug: "custom-ai-agentics" },
        ],
        loading: false,
        error: null,
      });
      vi.spyOn(cmsApi, "fetchBlogPosts").mockResolvedValue({
        data: [{ title: "Dynamic Blog 1", slug: "dynamic-blog-1" }],
      });

      render(
        <MemoryRouter initialEntries={["/services"]}>
          <MenuOverlay isOpen={true} setIsOpen={() => {}} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getAllByText("Custom Web Solutions").length).toBeGreaterThan(0);
      });
    });
  });

  describe("4. ServicesUniverse", () => {
    it("renders dynamic services from CMS", () => {
      vi.spyOn(useCmsHooks, "useServices").mockReturnValue({
        data: [
          { title: "Cloud Architecture", slug: "cloud" },
          { title: "Quantum AI", slug: "ai" },
        ],
        loading: false,
        error: null,
      });

      render(<ServicesUniverse />);
      expect(screen.getByText("Cloud Architecture")).toBeTruthy();
      expect(screen.getByText("Quantum AI")).toBeTruthy();
    });

    it("renders fallback services when API is empty or loading", () => {
      vi.spyOn(useCmsHooks, "useServices").mockReturnValue({
        data: null,
        loading: true,
        error: null,
      });

      render(<ServicesUniverse />);
      expect(screen.getByText("Web Development")).toBeTruthy();
      expect(screen.getByText("Mobile Apps")).toBeTruthy();
    });
  });

  describe("5. PortfolioSection", () => {
    it("renders dynamic portfolio items and categories from CMS", () => {
      vi.spyOn(useCmsHooks, "usePortfolio").mockReturnValue({
        data: [
          {
            id: 99,
            title: "Live Project Alpha",
            category: { name: "FinTech" },
            thumbnail_image: "/live.jpg",
            website_url: "https://live.com",
            lucide_icon: "Globe",
            description: "A fintech breakthrough",
            tech_tags: ["React", "Stripe"],
          },
        ],
        loading: false,
        error: null,
      });
      vi.spyOn(useCmsHooks, "usePortfolioCategories").mockReturnValue({
        data: [{ id: 1, name: "FinTech" }],
        loading: false,
        error: null,
      });

      render(<PortfolioSection />);
      expect(screen.getByText("Live Project Alpha")).toBeTruthy();
      expect(screen.getByText("A fintech breakthrough")).toBeTruthy();
      expect(screen.getAllByText("FinTech").length).toBeGreaterThan(0);
    });

    it("renders fallback portfolio items when CMS data is null", () => {
      vi.spyOn(useCmsHooks, "usePortfolio").mockReturnValue({
        data: null,
        loading: false,
        error: "Failed to load",
      });
      vi.spyOn(useCmsHooks, "usePortfolioCategories").mockReturnValue({
        data: null,
        loading: false,
        error: null,
      });

      render(<PortfolioSection />);
      expect(screen.getByText("The IDTL")).toBeTruthy();
      expect(screen.getByText("WASH_E LAUNDRY")).toBeTruthy();
    });
  });

  describe("6. ContactInfo", () => {
    it("renders dynamic contact info from CMS settings", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: {
          phone: "+1 800 555 0199",
          email: "custom@appebsoft.com",
          address: "100 Silicon Way, Tech City",
          working_hours: "Mon to Fri, 08:00 AM – 06:00 PM",
        },
        loading: false,
        error: null,
      });

      render(<ContactInfo />);
      expect(screen.getByText("+1 800 555 0199")).toBeTruthy();
      expect(screen.getByText("custom@appebsoft.com")).toBeTruthy();
      expect(screen.getByText("100 Silicon Way, Tech City")).toBeTruthy();
      expect(screen.getByText("Mon to Fri")).toBeTruthy();
      expect(screen.getByText("08:00 AM – 06:00 PM")).toBeTruthy();
    });

    it("renders fallback contact info when settings is null", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: null,
        loading: false,
        error: null,
      });

      render(<ContactInfo />);
      expect(screen.getByText("+91 98367 17849")).toBeTruthy();
      expect(screen.getByText("contact@appebsoft.com")).toBeTruthy();
    });
  });

  describe("7. ContactHero", () => {
    it("renders dynamic contact cards from settings", () => {
      vi.spyOn(useCmsHooks, "useSiteSettings").mockReturnValue({
        data: {
          phone: "+91 99999 88888",
          email: "hello@appebsoft.com",
          address: "Kolkata, West Bengal",
          whatsapp_url: "https://wa.me/919999988888",
        },
        loading: false,
        error: null,
      });

      render(
        <MemoryRouter>
          <ContactHero />
        </MemoryRouter>
      );

      expect(screen.getByText("+91 99999 88888")).toBeTruthy();
      expect(screen.getByText("hello@appebsoft.com")).toBeTruthy();
    });
  });

  describe("8. Blog Page", () => {
    it("renders blog posts and categories", async () => {
      vi.spyOn(cmsApi, "fetchBlogPosts").mockResolvedValue({
        data: [
          {
            id: 1,
            title: "Future of AI in 2026",
            slug: "future-of-ai-2026",
            category: { name: "AI", slug: "ai" },
            excerpt: "Explore the new AI horizon.",
            published_at: "2026-08-01",
            read_time_minutes: 5,
            is_featured: true,
            tags: [{ name: "AI" }],
            author: { name: "AppebSoft Team" },
          },
        ],
      });
      vi.spyOn(cmsApi, "fetchBlogCategories").mockResolvedValue({
        data: [{ id: 1, name: "AI", slug: "ai" }],
      });

      render(
        <MemoryRouter>
          <Blog />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getAllByText(/Future of AI in 2026/).length).toBeGreaterThan(0);
      });
    });
  });

  describe("9. BlogPost Page", () => {
    it("renders single blog post fetched from CMS API", async () => {
      vi.spyOn(cmsApi, "fetchBlogPost").mockResolvedValue({
        data: {
          title: "Custom Article Title",
          slug: "custom-article",
          category: { name: "Engineering" },
          excerpt: "Custom excerpt content",
          published_at: "2026-08-10",
          read_time_minutes: 4,
          author: { name: "Dev Lead" },
          content: "<p>Live content from CMS</p>",
        },
      });

      render(
        <MemoryRouter initialEntries={["/blog/custom-article"]}>
          <BlogPost />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText("Custom Article Title")).toBeTruthy();
      });
    });
  });
});

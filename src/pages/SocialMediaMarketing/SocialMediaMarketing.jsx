import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Users,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Target,
  BarChart2,
  CheckCircle2,
  Heart,
  MessageCircle,
  Repeat,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function SocialMediaMarketing() {
  const [platform, setPlatform] = useState("insta");
  const [activeTab, setActiveTab] = useState("community");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Social Media Marketing (SMM)"
        description="Strategic social media management, brand awareness campaigns, and paid social advertising across Meta and LinkedIn."
        keywords="Social Media Marketing, SMM, Meta Ads, LinkedIn Marketing, Social Strategy"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Social Media Marketing (SMM)" />

      {/* HERO WITH INTERACTIVE MULTI-PLATFORM SOCIAL POST SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Share2 size={14} /> <span>SOCIAL MEDIA MARKETING (SMM)</span>
            </div>
            <h1 className="hero-title">
              Build a Community, <br />
              <span className="accent-gradient">Not Just an Audience</span>
            </h1>
            <p className="hero-desc">
              Real-time optimization for every post and ad to match your audience intent and platform trends. Our team studies audience behavior and adjusts visuals, captions, and timing to drive reach, clicks, and brand loyalty across Facebook, Instagram, LinkedIn & YouTube.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                START YOUR ENGAGEMENT STRATEGY <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Campaign Results
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Strategic Community Management & Customer Care</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Data-Backed Paid Social & Viral Content Creation</span></div>
            </div>
          </div>

          {/* INTERACTIVE SOCIAL POST MOCKUP SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${platform === "insta" ? "active" : ""}`}
                  onClick={() => setPlatform("insta")}
                >
                  <Heart size={13} /> Instagram Reel
                </button>
                <button
                  className={`device-btn ${platform === "linkedin" ? "active" : ""}`}
                  onClick={() => setPlatform("linkedin")}
                >
                  <Share2 size={13} /> LinkedIn Post
                </button>
                <button
                  className={`device-btn ${platform === "yt" ? "active" : ""}`}
                  onClick={() => setPlatform("yt")}
                >
                  <TrendingUp size={13} /> Viral Campaign
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {platform === "insta" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#e1306c" }}><Heart size={12} /> Instagram Engagement</div>
                    <h4>@AppebSoft Tech Trends Reel</h4>
                    <p>"5 Web Development Trends Shaping 2026 #WebDev #AI"</p>
                    <div className="proto-stats">
                      <div><span>Views</span><strong>142.5K</strong></div>
                      <div><span>Likes</span><strong>18.4K</strong></div>
                      <div><span>Shares</span><strong>4.2K</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Instagram Viral Reel Performance</div>
                </div>
              )}

              {platform === "linkedin" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0a66c2" }}><Share2 size={12} /> B2B Thought Leadership</div>
                    <h4>AppebSoft Official Blog Post</h4>
                    <p>"How AI Automation Slashed Enterprise Operations Cost by 42%"</p>
                    <div className="proto-stats">
                      <div><span>Impressions</span><strong>84,200</strong></div>
                      <div><span>Leads</span><strong>128 B2B Calls</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">LinkedIn Enterprise B2B Post</div>
                </div>
              )}

              {platform === "yt" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#ff0000" }}><TrendingUp size={12} /> High-ROAS Paid Campaign</div>
                    <h4>Performance Social Ad</h4>
                    <p>Targeted Video Campaign converting high-intent software buyers.</p>
                    <div className="proto-stats">
                      <div><span>ROAS</span><strong>4.8x Return</strong></div>
                      <div><span>CTR</span><strong>5.2% High</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Paid Social Ad Campaign</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TECH MATRIX TABS */}
      <section className="creative-section">
        <div className="container">
          <div className="creative-head text-center">
            <span className="badge-tag">SMM SERVICES MATRIX</span>
            <h2>Complete Social Media Management</h2>
            <p>End-to-end community building, content creation, and paid advertising.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "community" ? "active" : ""}`}
              onClick={() => setActiveTab("community")}
            >
              Community Management
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "creative" ? "active" : ""}`}
              onClick={() => setActiveTab("creative")}
            >
              Creative Content
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "paid" ? "active" : ""}`}
              onClick={() => setActiveTab("paid")}
            >
              Paid Social Ads
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "community" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Users className="tech-icon" /> <h4>24/7 Response & DM Care</h4></div>
                  <p>Professional customer support response handling across DMs, comments, and mentions.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><MessageCircle className="tech-icon" /> <h4>Audience Engagement</h4></div>
                  <p>Proactively starting conversations on niche industry posts to build brand advocacy.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Repeat className="tech-icon" /> <h4>User Generated Content (UGC)</h4></div>
                  <p>Curating authentic customer stories, testimonials, and video reviews to boost social proof.</p>
                </div>
              </>
            )}

            {activeTab === "creative" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>Short-Form Video Production</h4></div>
                  <p>High-energy Reels, TikToks, and YouTube Shorts designed specifically to capture immediate attention.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Share2 className="tech-icon" /> <h4>Carousel & Infographics</h4></div>
                  <p>Educational multi-slide carousels that users save, bookmark, and share with colleagues.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Target className="tech-icon" /> <h4>Brand Voice Copywriting</h4></div>
                  <p>Persuasive, punchy captions customized with strategic call-to-actions and hashtag stacks.</p>
                </div>
              </>
            )}

            {activeTab === "paid" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Target className="tech-icon" /> <h4>Meta & LinkedIn Paid Ads</h4></div>
                  <p>Laser-targeted ad campaigns built for direct lead generation and custom audience retargeting.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><BarChart2 className="tech-icon" /> <h4>Conversion API (CAPI) Setup</h4></div>
                  <p>Server-side tracking setup ensuring 100% accurate attribution despite iOS privacy limits.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>A/B Ad Creative Testing</h4></div>
                  <p>Rapidly testing hooks, visuals, and offers to lower Cost-Per-Acquisition (CPA).</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION SECTION */}
      <section className="subpage-features-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">THE PROBLEM & OUR SOLUTION</span>
            <h2>Are You Just Broadcasting?</h2>
            <p>
              Many brands treat social media as a one-way street, posting content without a strategy for genuine interaction. At AppebSoft, we engineer engagement. We develop human-centric strategies that encourage conversations, build trust, and create brand advocates.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Users size={32} /></div>
              <h3>Strategic Community Management</h3>
              <p>We don't just reply to comments. We proactively engage with your audience, answer questions, and join relevant conversations to build a loyal community around your brand.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Sparkles size={32} /></div>
              <h3>Content That Connects</h3>
              <p>Our creative team develops shareable, relatable content â€” from compelling visuals and stories to interactive polls and reels â€” designed specifically to spark engagement.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Target size={32} /></div>
              <h3>Data-Driven Campaigns</h3>
              <p>We launch targeted campaigns (contests, hashtag challenges, live Q&As) to boost interaction, increase reach, and generate qualified leads for your sales funnel.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><BarChart2 size={32} /></div>
              <h3>Influencer & Brand Partnerships</h3>
              <p>We collaborate with authentic industry voices that resonate with your target audience to amplify your message, build credibility, and drive conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Letâ€™s Grow Your Brand Together!</h2>
            <p>Partner with certified social media experts for data-backed strategies, transparent tracking, and end-to-end campaign management.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET STARTED TODAY <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/social-media-marketing" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default SocialMediaMarketing;

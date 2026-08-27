import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import "./BreadcrumbNav.css";

export default function BreadcrumbNav({ 
  backLabel = "Back to Services", 
  backPath = "/services", 
  currentPage = "", 
  items = [] 
}) {
  const navigate = useNavigate();

  const defaultItems = items.length > 0 ? items : [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    ...(currentPage ? [{ label: currentPage, path: null }] : []),
  ];

  return (
    <div className="breadcrumb-nav-wrapper">
      <div className="container">
        <div className="breadcrumb-nav-bar">
          {/* 1-Click Back Action */}
          <button 
            type="button" 
            onClick={() => backPath ? navigate(backPath) : navigate(-1)}
            className="breadcrumb-back-btn"
            title={backLabel}
          >
            <ArrowLeft size={15} className="back-arrow-icon" />
            <span>{backLabel}</span>
          </button>

          <span className="breadcrumb-divider">|</span>

          {/* Breadcrumb Trail */}
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            {defaultItems.map((item, idx) => {
              const isLast = idx === defaultItems.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight size={13} className="crumb-separator" />}
                  {isLast || !item.path ? (
                    <span className="crumb-item current">{item.label}</span>
                  ) : (
                    <Link to={item.path} className="crumb-item link">
                      {idx === 0 && <Home size={13} className="home-icon" />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
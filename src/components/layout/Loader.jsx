import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";


function Loader({ finishLoading }) {

  const loaderRef = useRef(null);
  const logoRef = useRef(null);


  useEffect(() => {

    // Safety fallback: always finish loading after 3s even if GSAP fails
    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, 3000);

    try {
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finishLoading();
        }
      });

      tl.fromTo(
        logoRef.current,
        {
          scale: 0.5,
          opacity: 0,
          rotate: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      )

      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        }
      );

    } catch (err) {
      console.error("Loader animation error:", err);
      clearTimeout(fallbackTimer);
      finishLoading();
    }

    return () => clearTimeout(fallbackTimer);

  }, [finishLoading]);



  return (

    <div
      className="loader"
      ref={loaderRef}
    >

      <img
        src="/appebsoft%20icon.png"
        alt="AppebSoft"
        className="loader-icon"
        ref={logoRef}
        onError={() => {
          // If image fails to load, finish loading immediately
          if (loaderRef.current) {
            gsap.to(loaderRef.current, { opacity: 0, duration: 0.3, onComplete: finishLoading });
          } else {
            finishLoading();
          }
        }}
      />

    </div>

  );

}


export default Loader;
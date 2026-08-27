// src/components/services/ServiceHero.jsx

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ServiceHeroSection.css";

gsap.registerPlugin(ScrollTrigger);


const words = [
  "WEB DEVELOPMENT",
  "MOBILE APPS",
  "SOFTWARE SOLUTIONS",
  "UI/UX DESIGN",
  "ECOMMERCE PLATFORMS",
];


function ServiceHero() {

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const changingWord = useRef(null);


  useEffect(() => {

    let currentIndex = 0;


    // =========================
    // Changing Heading
    // =========================

    const interval = setInterval(() => {

      gsap.to(changingWord.current, {

        y: -60,
        opacity: 0,
        duration: 0.45,
        ease: "power3.inOut",

        onComplete: () => {

          currentIndex =
            (currentIndex + 1) % words.length;


          if (!changingWord.current) return;


          changingWord.current.textContent =
            words[currentIndex];


          gsap.fromTo(
            changingWord.current,

            {
              y: 60,
              opacity:0,
            },

            {
              y:0,
              opacity:1,
              duration:.45,
              ease:"power3.out",
            }

          );

        }

      });


    },2500);



    const ctx = gsap.context(() => {


      // =========================
      // Entry Animation
      // =========================


      const tl = gsap.timeline();


      tl.from(".service-tag",{

        y:30,
        opacity:0,
        duration:.6,

      })


      .from(".service-line-1",{

        y:120,
        opacity:0,
        duration:.9,

      },"-=0.3")


      .from(".service-line-2",{

        y:120,
        opacity:0,
        duration:.9,

      },"-=0.6")


      .from(".service-description",{

        y:40,
        opacity:0,
        duration:.7,

      },"-=0.5")


      .from(".service-actions",{

        y:40,
        opacity:0,
        duration:.7,

      },"-=0.4")


      .from(".stat",{

        y:40,
        opacity:0,
        stagger:.12,
        duration:.6,

      },"-=0.4");





      // =========================
      // Background Blob Animation
      // =========================


      gsap.to(".blob-a",{

        x:40,
        y:-50,
        repeat:-1,
        yoyo:true,
        duration:8,
        ease:"sine.inOut",

      });


      gsap.to(".blob-b",{

        x:-50,
        y:70,
        repeat:-1,
        yoyo:true,
        duration:10,
        ease:"sine.inOut",

      });





      // =========================
      // Scroll Animation
      // =========================


      const heroTl = gsap.timeline({

        scrollTrigger:{

          trigger:sectionRef.current,

          start:"top top",

          end:"+=1000",

          scrub:1.2,

        }

      });



      heroTl.to(

        contentRef.current,

        {

          y:-150,

          scale:.92,

          opacity:.4,

        },

        0

      );




    },sectionRef);





    // =========================
    // Mouse Parallax
    // =========================


    const handleMouseMove = (e)=>{


      const x =
      (e.clientX / window.innerWidth - .5) * 100;


      const y =
      (e.clientY / window.innerHeight - .5) * 100;



      gsap.to(".blob-a",{

        x:x*.35,

        y:y*.35,

        duration:1.8,

        overwrite:"auto",

      });



      gsap.to(".blob-b",{

        x:-x*.25,

        y:-y*.25,

        duration:1.8,

        overwrite:"auto",

      });



    };



    window.addEventListener(
      "mousemove",
      handleMouseMove
    );





    return ()=>{


      clearInterval(interval);


      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );


      ctx.revert();


    };


  },[]);




  return (

    <section
      className="service-hero"
      ref={sectionRef}
    >


      {/* Background */}

      <div className="blob blob-a"></div>

      <div className="blob blob-b"></div>



      <div
        className="service-content"
        ref={contentRef}
      >



        <span className="service-tag">
          OUR SERVICES
        </span>




        <div className="headline-group">


          <h1 className="service-line-1">

            WE CREATE

          </h1>



          <h1
            className="service-line-2 changing-word"
            ref={changingWord}
          >

            WEB DEVELOPMENT

          </h1>


        </div>





        <p className="service-description">

          AppebSoft delivers modern digital solutions
          that help startups, SMEs and enterprises
          accelerate growth.

        </p>





        <div className="service-actions">

          <Link to="/portfolio" className="primary-btn1" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            Explore Our Work
          </Link>

          <Link to="/contact" className="secondary-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            Get Free Consultation
          </Link>

        </div>






        <div className="service-stats">


          <div className="stat">

            <h3>
              100+
            </h3>

            <span>
              Projects Delivered
            </span>

          </div>




          <div className="stat">

            <h3>
              20+
            </h3>

            <span>
              Happy Clients
            </span>

          </div>




          <div className="stat">

            <h3>
              5+
            </h3>

            <span>
              Countries Served
            </span>

          </div>



        </div>



      </div>



    </section>

  );

}


export default ServiceHero;
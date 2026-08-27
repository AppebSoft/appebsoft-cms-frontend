import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ManifestoScene.css";

gsap.registerPlugin(ScrollTrigger);


const lines = [
  "THINK BIG.",
  "BUILD BOLD.",
  "WE DESIGN WITH PURPOSE.",
  "WE ENGINEER FOR SCALE.",
  "WE BUILD THE DIGITAL FUTURE."
];


export default function WhoWeAre(){

    const sectionRef = useRef(null);
    const contentRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const texts = gsap.utils.toArray(".who-line");
    const card = document.querySelector(".who-card");

    gsap.set(texts, {
      opacity: 0,
      y: 80,
      scale: 0.96,
    });

    gsap.set(texts[0], {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    gsap.set(card, {
      y: 120,
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: contentRef.current,
        start: "top top",

        // Much shorter section
        end: `+=${window.innerHeight * 0.8}`,

        scrub: 0.35,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    texts.forEach((text, index) => {
      if (index === 0) return;

      tl.to(
        texts[index - 1],
        {
          opacity: 0,
          y: -70,
          scale: 1.03,
          duration: 0.28,
          ease: "power2.out",
        }
      );

      tl.fromTo(
        text,
        {
          opacity: 0,
          y: 70,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.28,
          ease: "power2.out",
        },
        "<"
      );
    });

    // Last text disappears immediately
    tl.to(".who-line:last-child", {
      opacity: 0,
      y: -70,
      duration: 0.22,
      ease: "power2.out",
    });

    // Card comes immediately
    tl.to(
      card,
      {
        y: 0,
        duration: 0.22,
        ease: "power3.out",
      },
      "<0.05"
    );

    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);



return(

<section 
className="whoSection"
ref={sectionRef}
>


<div 
className="content"
ref={contentRef}
>


<div className="bg-word">
APPEBSOFT
</div>



<div className="smallTitle">
WHO WE ARE
</div>




<div className="story">


{
lines.map((line,index)=>(

<h2 
key={index}
className="who-line"
>

{line}

</h2>

))
}



</div>





<div className="who-card">


<h3>
Building The Digital Future.
</h3>


<p>
AppebSoft is a digital transformation company helping startups,
brands and enterprises build modern digital experiences through
strategy, design, engineering and innovation.

We create websites, mobile applications,
enterprise software, AI powered solutions,
cloud platforms and digital marketing strategies
that help businesses grow with confidence.
</p>



<div className="divider"></div>



<div className="stats">


<div>

<h4>
100+
</h4>

<span>
Projects
</span>

</div>


<div>

<h4>
20+
</h4>

<span>
Clients
</span>

</div>



<div>

<h4>
25+
</h4>

<span>
Experts
</span>

</div>



<div>

<h4>
5+
</h4>

<span>
Countries
</span>

</div>


</div>


</div>



</div>


</section>


)


}
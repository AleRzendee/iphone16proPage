import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-[#1D1D1F]"
    >
      <div className="screen-max-width mb-52">
        <div className="mb-8 w-full md:flex items-end justify-between md:mt-40">
          <h1
            id="title"
            className="section-heading"
            style={{ color: "#ffffff", marginBottom: "4rem" }}
          >
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link" style={{ marginBottom: "4rem" }}>
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

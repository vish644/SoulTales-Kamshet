import React from "react";
import Button from "../common/Button";
import bgImage from "../assets/bgPaperLikeImage.svg";

const Hero = () => {
  return (
    <section>
      {/* content  */}
      <div className="">
        <p>No phones. No parents. Nothing done for them.</p>
        <h1>Your child has probably never been given a job that mattered.</h1>
        <p>
          Not a chore, where the outcome was really yours. A job - where an
          adult was depending on them, and nobody stepped in to finish it.
        </p>
        <p>Three nights in Kamshet. Twenty-four children, seven to eleven.</p>
        <Button />
      </div>

      {/* video  */}
      <div>
        <video
          src="../assets/Kamshet_place_4.mp4"
          autoPlay
          className=""
        ></video>
      </div>
    </section>
  );
};

export default Hero;

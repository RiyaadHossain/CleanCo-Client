import React from "react";
import BucketBoy from "../../Assets/Images/bucketgirl.png";

const Landing = () => {
  return (
    <div class="hero lg:h-[70vh] bg-accent">
      <div class="hero-content flex-col lg:flex-row">
        <div className="pt-6 lg:pt-0">
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6 max-w-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
        <div className="h-[70vh] shrink-0">
          <img
            src={BucketBoy}
            class="h-full"
            alt="Bucket Boy"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

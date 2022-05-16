import React from "react";
import BucketBoy from "../../Assets/Images/bucketgirl.png";

const Landing = () => {
  return (
    <div>
        {/* Banner Section */}
      <div class="hero lg:h-[70vh] bg-accent">
        <div class="hero-content flex-col lg:flex-row">
          <div className="pt-6 lg:pt-0">
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[70vh] shrink-0">
            <img src={BucketBoy} class="h-full" alt="Bucket Boy" />
          </div>
        </div>
      </div>

      {/* Get Free Estimate Section */}
      <div className="p-14 w-5/6 mx-auto rounded-xl shadow-md relative z-30 mt-[-50px] bg-base-200">
        <h1 className="text-3xl text-primary font-semibold mb-6">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered input-info w-full" />

        </div>
          <button class="btn btn-primary font-light mt-4">Request A Quate</button>
      </div>
    </div>
  );
};

export default Landing;

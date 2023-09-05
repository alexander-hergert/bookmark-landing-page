import React from "react";

const FAQ = () => {
  return (
    <section className="mb-28">
      <article className="p-5">
        <h2 className="text-center font-bold text-xl">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-neutral-grayish-blue my-5">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
      <article className="p-5">
        <div className="join join-vertical block m-auto max-w-screen-lg rounded-none">
          <div className="collapse collapse-arrow join-item border-b">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg">What is Bookmark?</div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg">
              How can I request a new browser?
            </div>
            <div className="collapse-content">
              <p>
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg">Is there a mobile app?</div>
            <div className="collapse-content">
              <p>
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg">
              What about other Chromium browsers?
            </div>
            <div className="collapse-content">
              <p>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit. More Info 35,000+ already
                joined Stay up-to-date with what we’re doing Contact Us Features
                Pricing Contact
              </p>
            </div>
          </div>
        </div>
        <button className="btn bg-primary-soft-blue px-5 text-white m-auto block mt-10 shadow-lg">
          More Info
        </button>
      </article>
    </section>
  );
};

export default FAQ;

"use client";

import { useState } from "react";

const GeneralNewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://captloui.us11.list-manage.com/subscribe/post?u=6df9f3125631eaaeac7668f67&id=164f173886&f_id=007b9ce0f0",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setMessage(
          "Thank you for subscribing! Check your email to confirm your subscription."
        );
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 uppercase">
            Be the First to Know
          </h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Sign up to get our newsletter and exclusive updates and opening
            offers!
          </p>

          <form
            action="https://captloui.us11.list-manage.com/subscribe/post?u=6df9f3125631eaaeac7668f67&id=164f173886&f_id=007b9ce0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate
            onSubmit={handleSubmit}
          >
            <div id="mc_embed_signup_scroll">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  name="EMAIL"
                  className="required email text-black flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  id="mce-EMAIL"
                  placeholder="Enter your email address"
                  required
                />
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {/* Hidden fields */}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_6df9f3125631eaaeac7668f67_164f173886"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <input type="hidden" name="tags" value="9321498" />

              {/* Response messages */}
              <div id="mce-responses" className="clear">
                <div
                  className={`response ${
                    isSuccess ? "text-green-600" : "text-red-600"
                  } mt-4 text-sm`}
                  id={isSuccess ? "mce-success-response" : "mce-error-response"}
                  style={{ display: message ? "block" : "none" }}
                >
                  {message}
                </div>
              </div>
            </div>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralNewsletterForm;

const NewsletterSignup = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 uppercase">
            Be the First to Know
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up to get our newsletter and exclusive updates and opening
            offers!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
            />
            <button className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base">
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

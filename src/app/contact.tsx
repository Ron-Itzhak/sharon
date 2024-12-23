const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-8">
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Contact Us
      </h2>
      <form className="max-w-3xl mx-auto">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
      <div>
        <h1 className="text-3xl font-bold text-black text-center mb-8">
          Contact Info
        </h1>
        <h2 className="text-2xl font-bold text-black text-center mb-8">
          Email
        </h2>
        <h3 className="text-2xl font-bold text-black text-center mb-8">
          info@sharondill.com
        </h3>
      </div>
    </section>
  );
};

export default Contact;

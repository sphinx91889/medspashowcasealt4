import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    existingClient: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row w-full items-stretch shadow-lg rounded-lg overflow-hidden">
        
        {/* Left: Form Section */}
        <div className="w-full md:w-1/2 bg-[#F8EDE2] p-10 md:p-16 flex flex-col justify-center" 
             style={{ backgroundImage: "url('/path-to-your-leaf-pattern.png')", backgroundSize: "cover" }}>
          <h2 className="text-center text-gray-800 font-playfair text-2xl md:text-4xl mb-2">
            Enhance Your Glow
          </h2>
          <h3 className="text-center text-teal-700 font-playfair text-3xl md:text-5xl font-semibold mb-6">
            Let's Chat
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent p-2 outline-none"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">E-Mail Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent p-2 outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent p-2 outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent p-2 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 bg-transparent p-2 outline-none h-24 resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="existingClient"
                checked={formData.existingClient}
                onChange={handleChange}
                className="w-4 h-4 border-gray-400"
              />
              <label className="text-gray-700 text-sm">I am an existing client</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-800 text-white py-3 font-semibold hover:bg-teal-900 transition-all"
            >
              Send
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-600 text-center mt-2">
              By submitting this form you agree to be contacted via phone/text/email.  
              Reply STOP to opt-out of marketing at any time.*
            </p>
          </form>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://www.ocskinmedspa.com/wp-content/uploads/2025/01/oc-skin-img.png"
            alt="Medspa Consultation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;

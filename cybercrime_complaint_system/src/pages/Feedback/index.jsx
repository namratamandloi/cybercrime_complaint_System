import React from 'react';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';    

const FeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name) return alert("Please enter your name.");
    if (!email.includes("@") || !email.includes(".")) return alert("Please enter a valid email.");
    if (!message) return alert("Please enter your message.");

    alert(`Thank you for your feedback, ${name}!`);
    e.target.reset();
  };

  return (
    <>
    <Header />
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              name="name"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea 
              name="message"
              rows="4" 
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FeedbackForm;
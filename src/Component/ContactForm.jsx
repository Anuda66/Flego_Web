import React from 'react'
import { useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";


function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const [showSuccess, setShowSuccess] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        //  form submission logic - API call
        console.log(formData);
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      };

  return (
    <div className="min-h-screen px-4 py-12 pt-40 pb-32 -mt-40 bg-gray-100 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-8 text-3xl font-bold text-center text-primary-100">Let's connect!</h1>
    
            <p className='mb-12 text-sm font-bold text-center text-gray-500'>ome text that would compel the user to contact you if what the user have seen across the page wasn't not enough, ofcourse you want as many potential clients as possible.</p>
    
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold text-primary-100">Send Us a Message</h2>
    
                {showSuccess && (
                  <div className="px-4 py-3 mb-6 text-green-700 bg-green-100 border border-green-400 rounded">
                    <span className="block sm:inline">Thank you for your message! We'll get back to you soon.</span>
                    <button
                      className="absolute top-0 right-0 px-4 py-3"
                      onClick={() => setShowSuccess(false)}
                    >
                      ×
                    </button>
                  </div>
                )}
    
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-500">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
    
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
    
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-500">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
    
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-500">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
    
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-medium text-white rounded-md bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
    
              {/* Contact Information and Map */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="p-8 bg-white rounded-lg shadow-lg">
                  <h2 className="mb-6 text-2xl font-semibold text-primary-100">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                    <GrLocation  className='mr-2 text-xl text-primary-100'/>
                      <p className="text-sm text-gray-500"> 173/1 B , Kandy road, Mahara Kadawatha, Sri Lanka</p>
                    </div>
                    <div className="flex items-center">
                    <IoCallOutline className='mr-2 text-xl text-primary-100'/>
                      <p className="text-sm text-gray-500">+94 71 300 6900</p>
                    </div>
                    <div className="flex items-center">
                    <FiMail className='mr-2 text-xl text-primary-100'/>
                      <p className="text-sm text-gray-500"> info@flegoinnovation.com </p>
                    </div>
                  </div>
                </div>
    
                {/* Google Map */}
                <div className="p-8 bg-white rounded-lg shadow-lg">
                  <h2 className="mb-6 text-2xl font-semibold text-primary-100">Our Location</h2>
                  <div className="overflow-hidden rounded-lg">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792548828!2d-73.98773168459413!3d40.74824397932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633023226783!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactForm

import location from "../../assets/location.png";
import message1 from "../../assets/message.png";
import { useState } from "react";
export default function Contact(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubscribe = (e) => {
      e.preventDefault();
      // Here you would typically send the email to your server or email service provider
      // For demonstration, we'll just clear the form and show a success message
      setEmail('');
      setMessage('Thank you for subscribing to our newsletter!');
    };
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 space-y-8">
            <div className="flex flex-col items-center">
                <img src={location} alt ="location" className="w-24 h-24 mb-4"/>
                <h1 className="text-3xl font-bold">Address</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
            <div>
                <h1 className="text-xl font-semibold">Epicurean Adventures</h1>
                <p>1111, whistler Canada Suite 1010101</p>
                <p>+1111111100344</p>
            </div>
            <div>
                <h1 className="text-xl font-semibold">Australia Office</h1>
                <p>1111, Bruce Canberra Suite 1010101</p>
                <p>+1111111100355</p>
            </div>
            <div>
                <h1 className="text-xl font-semibold">Switzerland Office</h1>
                <p>1111, whistler Canada Suite 1010101</p>
                <p>+1111111100366</p>
            </div>
            <div>
                <h1 className="text-xl font-semibold">America Office</h1>
                <p>1111, Michigan Detroit Suite 1010101</p>
                <p>+1111111100377</p>
            </div>
            </div>
            <div className="flex flex-col items-center">
            <img src = {message1} alt ="message"className="w-24 h-24 mb-4"/>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            </div>
            <div className="newsletter-section w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded border border-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
        </div>
        </>
    )
}
import { useState } from "react";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function EventBooking() {
  const location = useLocation();
  const event = location.state?.event || { name: "Selected Event" };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: 1,
    participationType: "",
    requests: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Registration:", { event, ...formData });
    alert(`You are registered for ${event.name}!`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      participants: 1,
      participationType: "",
      requests: "",
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-24 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Register for {event.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="number"
            name="participants"
            min={1}
            value={formData.participants}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Number of participants"
            required
          />
          <select
            name="participationType"
            value={formData.participationType}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          >
            <option value="">Select Participation Type</option>
            <option value="Visitor">Visitor</option>
            <option value="Participant">Participant</option>
            <option value="VIP">VIP</option>
          </select>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleInputChange}
            placeholder="Special requests (optional)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import React from "react";

export default function Reservation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
  };

  return (
    <div>
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center flex-col justify-center">
          <h1 className="text-4xl font-bold">RESERVATION</h1>
          <p className="mt-4 text-gray-300">
            FOR BANQUET , PLEASE CALL OUR DIRECT BANQUET LINE AT +234 813 499 5529
          </p>
        </div>
      </section>

      {/* Header */}
      <div className="bg-white min-h-screen flex flex-col items-center py-16 px-6 md:px-20 text-black">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-widest text-sm mb-2">
            — Online Reservation —
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
            Book a Table
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl bg-white space-y-6"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone*
              </label>
              <input
                type="tel"
                placeholder="Enter your phone"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date*
              </label>
              <input
                type="date"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From When*
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none">
                <option>11:00am</option>
                <option>12:00pm</option>
                <option>1:00pm</option>
                <option>2:00pm</option>
                <option>3:00pm</option>
                <option>4:00pm</option>
                <option>5:00pm</option>
                <option>6:00pm</option>
                <option>7:00pm</option>
                <option>8:00pm</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Until*
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none">
                <option>11:00am</option>
                <option>12:00pm</option>
                <option>1:00pm</option>
                <option>2:00pm</option>
                <option>3:00pm</option>
                <option>4:00pm</option>
                <option>5:00pm</option>
                <option>6:00pm</option>
                <option>7:00pm</option>
                <option>8:00pm</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How Many People are coming?*
              </label>
              <select
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              >
                <option value="">Select number of guests</option>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6+ People</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests*
            </label>
            <textarea
              rows="4"
              placeholder="Write any special request here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-3 rounded-md uppercase tracking-widest text-sm hover:bg-red-600 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

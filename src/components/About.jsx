import React from "react";

export default function About() {
  return (
    <div>
      {" "}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="text-center text-lg leading-relaxed">
          At Toy Eco, our mission is simple: to provide high-quality,
          sustainable toys that bring joy to children and care for the planet.
          We believe every toy should be safe, eco-friendly, and inspire
          creativity.
        </p>
      </section>
      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p>
              All our toys are made with eco-friendly materials and packaging to
              reduce environmental impact.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Safety</h3>
            <p>
              Safety is our top priority. Each toy goes through strict quality
              checks to ensure children can play worry-free.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p>
              Our toys are designed to spark imagination and creativity,
              encouraging children to learn while having fun.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

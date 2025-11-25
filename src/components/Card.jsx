import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Card({ item }) {
  return (
    <div key={item._id} className="card bg-base-100 shadow-xl">
      <Fade cascade damping={0.2} triggerOnce={true}>
        {/* Image */}
        <figure className="h-52 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body text-left">
          <h2 className="card-title text-left">{item.title}</h2>

          {/* Short Description with Ellipsis */}
          <p className="text-base-content/70 line-clamp-2">
            {item.description}
          </p>

          {/* Meta / Price */}
          <div className="text-lg font-semibold text-primary mt-2">
            ${item.price}
          </div>

          {/* Button */}
          <div className="card-actions justify-start mt-4">
            <Link href={`/toys/${item._id}`}>
              <button className="btn btn-primary btn-sm">Details</button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

import Banner from "@/components/Banner";
import Card from "../components/Card";
import PopularToy from "@/components/PopularToy";
import CallBanner from "@/components/CallBanner";
import NewArrival from "@/components/NewArrival";
import Tastimonial from "@/components/Tastimonial";
import About from "@/components/About";
export default async function Home() {
  const res = await fetch("https://ejp-task-weld.vercel.app/toys");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-base-200 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Banner></Banner>
        <h1 className="text-4xl font-bold mb-4">Toy Features</h1>
        <p className="text-base-content/70 mb-12">
          Explore our best-selling toys
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.result.slice(0, 4).map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        <PopularToy></PopularToy>
      </div>
      <div></div>
      <Tastimonial></Tastimonial>
      <div>
        <About></About>
      </div>
    </div>
  );
}

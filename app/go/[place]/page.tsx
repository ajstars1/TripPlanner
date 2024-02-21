import { AspectRatio } from "@/components/ui/aspect-ratio";
import { location } from "@/context";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";

const Page = ({ params }: { params: { place: string } }) => {
    const allLocations = location;
    const goLocation = allLocations.find((loc) => loc.slug === params.place);
    return (
      <section className="p-8">
        <AspectRatio ratio={3.91 / 1} className="bg-muted relative ">
          <Image
            src={goLocation?.img || "/image/Mountain.jpeg"}
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
          <div className="absolute bottom-2 left-2">
            <h1 className="text-4xl mb-2 text-slate-100">
              Go to{" "}
              <span className="font-semibold text-slate-50">
                {goLocation?.name}
              </span>
            </h1>
            <p className="text-md text-slate-100">{goLocation?.description}</p>
          </div>
        </AspectRatio>
        <main className="m-2 mt-4">
          <h2 className="text-2xl font-semibold mb-2">Things to do</h2>
          {/* <ul className="list-disc ml-4">
                    {goLocation?.activities.map((activity, index) => (
                        <li key={index} className="text-md text-slate-100">{activity}</li>
                    ))}
                </ul> */}
          <ul className="ml-4 gap-2">
            <li className="flex items-center gap-2">
              <FaDotCircle/>{" "}
              <span>Bus to Jammu</span>
            </li>
            <li className="flex items-center gap-2">
              <FaDotCircle/>{" "}
              <span>Bus to Jammu</span>
            </li>
            <li className="flex items-center gap-2">
              <FaDotCircle/>{" "}
              <span>Bus to Jammu</span>
            </li>
            <li className="flex items-center gap-2">
              <FaDotCircle/>{" "}
              <span>Bus to Jammu</span>
            </li>
            <li className="flex items-center gap-2">
              <FaDotCircle/>{" "}
              <span>Bus to Jammu</span>
            </li>
          </ul>
        </main>
      </section>
    );
}
 
export default Page;
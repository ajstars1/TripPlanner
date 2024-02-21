import RoadmapPage from "@/components/roadmappage";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { location } from "@/context";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";

const Page = ({ params }: { params: { place: string } }) => {
    const allLocations = location;
    const goLocation = allLocations.find((loc) => loc.slug === params.place);
    const trainO = goLocation?.travel_options?.waytotravel
    console.log(trainO)
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
          {/* <ul className="list-disc ml-4">
                    {goLocation?.activities.map((activity, index) => (
                        <li key={index} className="text-md text-slate-100">{activity}</li>
                    ))}
                </ul> */}

          <RoadmapPage trainO={trainO}/>
        </main>
      </section>
    );
}
 
export default Page;
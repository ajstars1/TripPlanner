import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <AspectRatio ratio={3.91 / 1} className="bg-muted relative ">
      <Image
        src="/images/background.jpg"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
      <div className="absolute top-1/2 left-7 -translate-y-1/2 w-1/2">
        <Card className="bg-white p-4 rounded-md md:block hidden w-full">
          <CardContent>
            <CardHeader>
              <h1 className="text-4xl font-bold flex">Wish</h1>
              <CardDescription>
                Discover seamless travel experiences with [Your Website Name].
                From budget-friendly accommodations to comprehensive travel
                guides and tools, plan your perfect trip effortlessly. Say
                goodbye to travel woes and hello to unforgettable adventures
                with us!
              </CardDescription>
            </CardHeader>
          </CardContent>
        </Card>
      </div>
    </AspectRatio>
  );
};

export default Hero;

"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react";

export default function HomePage() {
  // const [emblaRef] = useEmblaCarousel({ loop: true, active: true }, [Autoplay()])
  // console.log({emblaRef});
  
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel 
        className="w-full max-w-md" 
        autoplay={2000} 
        // plugins={[Autoplay({delay: 2500})]}
        opts={{
          // dragFree: true,
          // skipSnaps: true,
          loop: true,
          slidesToScroll: 1,

        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"> {/**  */}
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col p-0 aspect-square items-center justify-center">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/032/242/170/small_2x/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg" 
                      className="w-[100%] h-[100%]"
                      alt="background" 
                    />
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* className="hidden md:block" */}
        <CarouselPrevious className="hidden "/>
        <CarouselNext className="hidden "/>
      </Carousel>     
    </div>
  );
}
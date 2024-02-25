// RoadmapPage.tsx
import React from 'react';
import RoadComponent from './roadmapcomponent';
import { TravelOptions, waytotravel } from '@/context';
import { Card, CardDescription, CardHeader } from './ui/card';

const RoadmapPage = ({ trainO }:{trainO: waytotravel[] | undefined}) => {
  // Example data for segments

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Roadmap <span className='text-slate-500'>#In Development</span></h1>
     <div className='grid grid-cols-2'>
       <RoadComponent trainO={trainO} />
       <div className='flex justify-center items-center'>
       <Card className='rounded-md bg-slate-100 p-5'>
        <CardHeader className='text-2xl pl-0 text-slate-500 font-semibold'>#In Development</CardHeader>
        <CardDescription>Our ongoing project aims to revolutionize travel planning by leveraging cutting-edge Google Cloud APIs. By harnessing Generative AI, we'll empower users to effortlessly create personalized
          trip adviser, itineraries tailored to their preferences and interests. Integrating Google Maps API will enable seamless route mapping, ensuring efficient and optimized travel plans. Additionally, we'll utilize advanced budget distribution algorithms to help travelers manage their expenses effectively, ensuring an enjoyable yet cost-conscious journey. With these powerful tools at our disposal, we're committed to providing users with a streamlined, intelligent, and unforgettable travel planning experience.</CardDescription>
        </Card> 
        </div>
      </div>
      <p className='text-slate-500 text-2xl font-semibold'>more....</p>
    </div>

  );
};

export default RoadmapPage;

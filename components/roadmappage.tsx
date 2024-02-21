// RoadmapPage.tsx
import React from 'react';
import RoadComponent from './roadmapcomponent';
import { TravelOptions, waytotravel } from '@/context';

const RoadmapPage = ({ trainO }:{trainO: waytotravel[] | undefined}) => {
  // Example data for segments

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Roadmap</h1>
      <RoadComponent trainO={trainO} />
    </div>
  );
};

export default RoadmapPage;

// RoadComponent.tsx
import { TravelOptions, waytotravel } from '@/context';
import React from 'react';

interface Segment {
  marker: string;
  title: string;
  description: string;
}

interface Props {
  segments: Segment[];
}

const RoadComponent = ({  trainO }:{trainO: waytotravel[] | undefined}) => {
  return (
    <div className="roadmap">
      {trainO?.map((segment, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="text-5xl mr-4">{segment.marker}</div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold">{segment.name}</h3>
            <p>{segment.type  }</p>
            <p>{segment.duration  }</p>
            <p>{segment.price  }</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadComponent;

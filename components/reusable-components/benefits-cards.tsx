import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { ReactElement } from "react";

export interface PartnerCardItem {
  icon: string; // emoji or image path
  text: string;
}

interface PartnerCardProps {
  imageSrc: ReactElement | string; // can be an image element or a string path
  title: string;
  items: PartnerCardItem[];
}

export default function PartnerCard({ imageSrc, title, items }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md text-gray-800">
      {/* Illustration */}
      <div className="flex justify-center mb-4">
        
      </div>
    
      {/* Title */}
      <h3 className="text-xl font-bold gap-6 text-gray-900 mb-6 flex justify-start items-center">
        {imageSrc}
        {title}
      </h3>

      {/* Items */}
      <ul className="space-y-4 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-2xl mr-3">{item.icon}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

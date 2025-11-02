'use client'

import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Icon } from '@iconify/react';

interface Props {
  image: StaticImageData;
  title: string;
  details: string;
  tools: string[];
  url: string;
  featured?: boolean;
}

export default function ProjectCard({ image, title, details, tools, url, featured = false }: Props) {
  return (
    <Link 
      href={url} 
      target="_blank"
      className="group relative overflow-hidden md:rounded-3xl rounded-lg bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full border border-gray-100"
    >
      {/* Image container - fixed height to prevent stretching */}
      <div className="relative md:h-[19rem] h-[10rem] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image 
          src={image} 
          alt={title}
          className="object-cover transition-all duration-700 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Hover overlay with icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
            <Icon 
              icon="ph:arrow-up-right-bold" 
              className="text-primary-blue" 
              width="32" 
              height="32" 
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="md:p-8 p-3 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-space text-2xl md:text-3xl font-bold text-dark-navy group-hover:text-primary-blue transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-dark-navy/70 mb-6  flex-1 leading-relaxed text-sm">
          {details}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tools.slice(0, featured ? 6 : 4).map((tool, index) => (
            <span 
              key={index}
              className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 text-primary-blue rounded-lg border border-primary-blue/20 hover:border-primary-blue/40 transition-colors"
            >
              {tool}
            </span>
          ))}
          {tools.length > (featured ? 6 : 4) && (
            <span className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 text-primary-blue rounded-lg border border-primary-blue/20">
              +{tools.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
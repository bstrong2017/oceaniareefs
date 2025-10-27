// src/components/HistorySection.jsx
import React from "react";

export default function HistorySection() {
  return (
    <section className="bg-white py-20 text-center relative">
      <h2 className="text-3xl font-bold italic text-reefTeal mb-4">
        Project Outline
      </h2>
      <h4>Discover more about Oceania Coral Reef with our data analysis of bleaching trends</h4>
      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
        Our analysis is partitioned into five parts —
        Background, Environmental Drivers, Exploratory Data Analysis, Bleaching Trends, 
        and Predictive modeling.Although coral reefs only make up a small percentage of 
        the ocean population, they provide numerous benefits to the ecosystem and biodiverse 
        organisms. While coral reefs contain and provide shelter to over 800 different aquatic 
        species, the structure of coral reefs protects coastal communities.
      </p>
      <h2>Data Methods</h2>
      <p>put data here</p>
    </section>
  );
}

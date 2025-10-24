// src/components/HistorySection.jsx
import React from "react";

export default function HistorySection() {
  return (
    <section className="bg-white py-20 text-center relative">
      <h2 className="text-3xl font-bold italic text-reefTeal mb-4">
        Project Outline
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
        Discover more about Oceania Coral Reef with our data analysis of bleaching trends.
        Our analysis is partitioned into five parts —
        Background, Environmental Drivers, Exploratory Data Analysis, Bleaching Trends, and Predictive modeling.
      </p>
    </section>
  );
}

// src/components/HistorySection.jsx
import React from "react";
// src/components/HistorySection.jsx
import '../App.css';   // not './App.css'

// import { Image, View, StyleSheet } from 'react-native';

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
      <p>Imported and cleaned Kaggle’s Global Bleaching Environmental dataset (limited to Oceania → 
        2,956 entries).</p>
      <p>Focused on 6 key coral reef
        regions in Australia with high
        bleaching rates.</p>
      <div>
        <div>
          <h3> Darwin north Australia</h3>
          <h3> Scott Reef west Australia</h3>
          <h3> Kimberley Coast north-west Australia</h3>
          <h3> Southern Great Barrier Reef</h3>
          <h3> Pompey and Swain Reefs</h3>
          <h3> South-east Great Barrier</h3>
          <h3>Torres Strait and far northern Great Barrier Reef</h3>
        </div>
      </div>
      <div style={{ textAlign: "left", marginTop: 20 }}>
        <img
          src="/australian_df_map.png"
          alt="map"
          loading="lazy"
          style={{
            width: 500,          // smaller size
            height: "auto",
            borderRadius: 16,    // rounded corners
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
          }}
        />
      </div>
      <h2>Discovery</h2>
      <p>Coral Bleaching Trends ​
        Strong correlation: climate temperature peaks → bleaching spikes​
        Other contributing factors: windspeed,turbidity, thermal anomalies​
        Sudden peaks (1998, 2002, 2016) showbleaching is non-linear, not constant</p>
        <div style={{ textAlign: "left", marginTop: 20 }}>
        <img
          src="/coral_heatmap.png"
          alt="heatmap"
          loading="lazy"
          style={{
            width: 500,          // smaller size
            height: "auto",
            borderRadius: 16,    // rounded corners
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
          }}
        />
      </div>
      <h2>Innovative Solutions</h2>
      <h2>Looking Ahead</h2>
      <p>Continue to expand and update data sources.​
        Continue to refine models with new data.​
        Implementation of real-time early monitoring systems.​
      Collaboration among different conservation organizations.​
      Promotion of bleaching awareness to the general public.​
      Establish a Universal strategy for Coral Reef conservation.</p>
      <h2>Links</h2>
      <p>Global Bleaching Environment Data set: <a>https://www.kaggle.com/datasets/pnminh95/global-bleaching-environmental</a></p>
      <p>Github: </p>
      <h2>References</h2>
      <p>pnminh95. (n.d.). Global bleaching environmental [Data set]. Kaggle. Global Bleaching Environmental dataset </p>
      <p>Rosane, O. (2021). 98% of the Great Barrier Reef has been affected by coral bleaching. World Economic Forum. World Economic Forum.     </p>
      <p classname = "align-text-right">(n.d.). Great Barrier Reef Timeline. GBR Biology. GBR Biology .</p>
      <p>Yeung, J.(2025). Australia’s Great Barrier Reef devastated by worst coral bleaching on record, new report finds. CNN Climate. CNN.</p>
    </section>
    
  );
}

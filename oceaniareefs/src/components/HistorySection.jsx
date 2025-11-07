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
      <div style={{   display: "flex",
      flexWrap: "wrap",          // allow wrapping on small screens
      justifyContent: "center",  // center images in the row
      gap: 20,
      marginTop: 20, }}>

      <img
          src="/health_reef.png"
          alt="healthy reef"
          loading="lazy"
          style={{
            width: "min(220px, 80vw)",  // 220px on desktop, shrinks on phones
            height: "auto",
            borderRadius: 16,
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
            display: "block",
          }}
        />
         <img
          src="/bleached reef.png"
          alt="healthy reef"
          loading="lazy"
          style={{
            width: "min(220px, 80vw)",  // 220px on desktop, shrinks on phones
            height: "auto",
            borderRadius: 16,
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
            display: "block",
          }}
        />
        <img
          src="/francisco-jesus-navarro-hernandez-dtCTfjTEOgg-unsplash (1).jpg"
          alt="unsplash"
          loading="lazy"
          style={{
            width: "min(220px, 80vw)",  // 220px on desktop, shrinks on phones
            height: "auto",
            borderRadius: 16,
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
            display: "block",
          }}
        />
      </div>
      <h2>Data Methods</h2>
      <p>Imported and cleaned Kaggle’s Global Bleaching Environmental dataset (limited to Oceania → 
        2,956 entries).</p>
      <p>This analysis focused on 6 key coral reef
        regions in Australia with high
        bleaching rates.</p>
      <div >
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
      <div style={{  display: "flex",textAlign: "left", gap: "20px", marginTop: 20 }}>
        <img
          src="/australian_df_map.png"
          alt="map"
          loading="lazy"
          style={{
            width: 200,          // smaller size
            height: "auto",
            borderRadius: 16,    // rounded corners
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
          }}
        />
        <img
          src="/Reef_by_severity.png"
          alt="severity"
          loading="lazy"
          style={{
            width: 200,          // smaller size
            height: "auto",
            borderRadius: 16,    // rounded corners
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
          }}
        />
        

      </div>
      <h2>Discovery</h2>
      <p>The environmental factors provided show a clear correlation to bleaching; as climate temperature 
        peaks in intense ranges, so does bleaching. 
        Coral Bleaching Trends:
        Strong correlation: climate temperature peaks → bleaching spikes​
        Other contributing factors: windspeed,turbidity, thermal anomalies​
        Sudden peaks (1998, 2002, 2016) show bleaching is non-linear, not constant.In the Loess Trendline graph, 
        there were a lot of unusually high recorded numbers of temperature means in the coral reef regions.</p>
        <div style={{  display: "flex",textAlign: "left", gap: "20px", marginTop: 20 }}>
        <img
          src="/coral_heatmap.png"
          alt="heatmap"
          loading="lazy"
          style={{
            width: 200,          // smaller size
            height: "auto",
            borderRadius: 16,    // rounded corners
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
          }}
        />
         <img
        src="/loess trend .png"
        alt="trend img"
        style={{
          width: 250,
          height: "auto",
          borderRadius: 12,
          objectFit: "cover",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      />
      </div>
      <h2>Innovative Solutions</h2>
      <p>Using a baseline linear regression model, Random Forest model, Extreme Gradient Boosting model, and 
        Support Vector regression model, we observe whether bleaching can be predicted. As the baseline 
        linear regression (far left graph) did not perform well, with a accuracy of 29%, we tested the Random Forest, XGBoost model,
       and SVR model. This is because the relationship between the environmental factors 
       (Climate, sea surface temperature, and thermal anomalies), does not have a linear relationship 
       with coral bleaching. Therefore, models that could capture non-linear relationship were better suited. 
       The accuracy improved the most under the Random Forest model (center graph). The Random Forest model 
       is good at handling lots of features and finding the relationship between features and predicted 
       factors. In the limited dataset, the Random Forest model had an R-squared of 0.82. Meaning that it 
       captures 82% of the variation in the relationship. This also means that the model can predict the 
       relationship to bleaching with greater accuracy. 
       </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", padding: 24 }}>
      <img
        src="/linear_regress.png"
        alt="Left"
        style={{ width: 300, height: 250, objectFit: "cover", borderRadius: 14, boxShadow: "0 8px 22px rgba(0,0,0,0.15)" }}
      />
      <img
        src="/tuned_forest.png"
        alt="Center"
        style={{ width: 300, height: 250, objectFit: "cover", borderRadius: 16, boxShadow: "0 10px 28px rgba(0,0,0,0.18)" }}
      />
      <img
        src="/XGBoost.png"
        alt="Right"
        style={{ width: 350, height: 250, objectFit: "cover", borderRadius: 14, boxShadow: "0 8px 22px rgba(0,0,0,0.15)" }}
      />
    </div>
      <h2>Looking Ahead</h2>
      <p>In the figure below, we created predictive scenarios to show us potential peaks between 2018 to 2030.
        The Predicted graph shows coral bleaching under environmental stress scenarios. The model is made 
        to mimic temperature increases paired with different increases in thermal stress anomalies. 
        We found that in instances where the temperature increases 0.9 and the thermal stress anomalies 
        increase 0.6 yearly, there is a sharp increase in bleaching followed by steep decline and plateau. 
        Looking at years past 2018, we can compare the real change in bleaching percentage to the predicted 
        scenario. In the model, we see that 2020, 2022, 2024, 2029, and 2030 have sharp increases in bleaching. 
        In researched data from CNN, we see that the years 2020, 2022, and 2024 all had temperature spikes leading 
        to increased coral bleaching (Yeung, 2025).</p>
        <div style={{ justifyContent: 'center'}}>
        <img
          src="/proj_bleaching_2.png"
          alt="projected bleach"
          loading="lazy"
          style={{
            width: 200,          // smaller size
            height: "auto",
            borderRadius: 16,    // rounded corners
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
          }}
        />
         <p>These data-driven insights emphasize the importance of developing early monitoring systems 
        that merge real-time satellite data, temperature sensing, as well as machine learning to detect any 
        preemptive warnings. With the  most important contribution to early monitoring is providing
        the most recent data to have a thorough system for conservation. The implementation of these early monitoring systems introduces a new era for 
        conservation efforts such as fishing restrictions, increased coral shading, and other temperature
        precautions.</p>
        </div>
      <h2>Links</h2>
      <p>Global Bleaching Environment Data set: <a>https://www.kaggle.com/datasets/pnminh95/global-bleaching-environmental</a></p>
      <p>Github: <a>https://github.com/bstrong2017/Data-Driven-Solutions-for-Oceania-Reefs.git</a></p>
      <h2>References</h2>
      <div style={{ textAlign: "left", marginTop: 20 }}>
      <p>pnminh95. (n.d.). Global bleaching environmental [Data set]. Kaggle. Global Bleaching Environmental dataset </p>
      <p>Rosane, O. (2021). 98% of the Great Barrier Reef has been affected by coral bleaching. World Economic Forum. World Economic Forum.     </p>
      <p>(n.d.). Great Barrier Reef Timeline. GBR Biology. GBR Biology .</p>
      <p>Yeung, J.(2025). Australia’s Great Barrier Reef devastated by worst coral bleaching on record, new report finds. CNN Climate. CNN.</p>
      </div>
    </section>
    
  );
}


import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
const algorithmImage = require('C:/DATASET2/SmartSync/SmartSync-Traffic/GCD AI/smartsync/src/assets/Algorithm.jpeg'); // Adjust path if necessary
const uniqueFeaturesData = [
  {
    title: 'Green Signal Time (GST)',
    text: 'In this scenario, GST denotes the Green Signal Time at an intersection.',
  },
  {
    title: 'Accumulated Lag (A)',
    text: 'A refers to the Accumulated Lag. T denotes the Transition Time of a vehicle.',
  },
  {
    title: 'Extended Reaction Time',
    text: 'An extra time interval of (5-1) seconds is incorporated in addition to the initial reaction time for vehicles to navigate through the intersection.',
  },
  {
    title: 'Vehicle Detection with YOLO',
    text: 'The YOLO Model detects the total count of vehicles. The Number of Lanes remains fixed and is predetermined during implementation.',
  },
];

const Features = () => (
  <div className="smartsync__features section__padding" id="features">
    <div className="smartsync__features-heading">
      <h1 className="gradient__text">ALGORITHM</h1>
      <img src={algorithmImage} alt="Algorithm Schematic" />
      <p></p>
    </div>
    <div className="smartsync__features-container">
      {uniqueFeaturesData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title+index} />
      ))}
    </div>
  </div>
);

export default Features;
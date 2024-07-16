import React from 'react';
import Feature from '../../components/feature/Feature';
import './smartsync.css';

const Smartsync = () => (
  <div className="smartsync__smartsync section__margin" id="smartsync">
    <div className="smartsync__smartsync-feature">
      <Feature title="SMARTSYNC" text="
To combat traffic congestion and accidents, we introduce the SMARTSYNC TRAFFIC SYSTEM. This system installs sensors at key intersections, collecting real-time data on vehicle counts. Using our algorithm, the system dynamically adjusts traffic light timings, optimizing traffic flow." />
    </div>
    <div className="smartsync__smartsync-heading">
      <h1 className="gradient__text">Navigate Effortlessly: AI-Powered Traffic Mastery</h1>
      
    </div>
    <div className="smartsync__smartsync-container">
      <Feature title="YOLO" text="
Our architecture relies on a custom YOLO model built with PyTorch for real-time object detection. YOLO swiftly processes images, predicting bounding boxes and class probabilities." />
      <Feature title="ALGORITHM" text="Our algorithm for real-time vehicle detection is meticulously designed, factoring in variables such as lane quantity, vehicle spacing, and transition times. By comprehensively analyzing these factors, we calculate the most efficient green signal durations to ensure smooth traffic flow." />
      <Feature title="SERVERS" text="Using data stored on servers, our real-time detection system helps predict traffic. By studying movement patterns, it forecasts congestion, making it easier to manage traffic for smoother travel." />
    </div>
  </div>
);

export default Smartsync;

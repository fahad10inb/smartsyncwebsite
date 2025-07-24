# SMARTSYNC TRAFFIC SYSTEM

SMARTSYNC TRAFFIC SYSTEM is an AI-powered solution designed to optimize traffic flow and reduce congestion at key intersections. By installing sensors to collect real-time vehicle data and leveraging a custom YOLO model for object detection, the system dynamically adjusts traffic light timings using a sophisticated algorithm to ensure smooth and efficient commuting.

## Features

- **Dynamic Traffic Light Control:** Uses real-time data from sensors to adjust green signal timings at intersections, optimizing traffic flow and reducing jams.
- **YOLO-based Vehicle Detection:** Employs a custom YOLO model built with PyTorch for fast and accurate real-time vehicle detection.
- **Advanced Algorithm:** Calculates efficient green signal durations by considering factors such as:
  - Green Signal Time (GST)
  - Accumulated Lag (A) and Transition Time (T)
  - Extended Reaction Time for vehicles to safely navigate intersections
- **Traffic Prediction:** Utilizes server-stored data to analyze movement patterns and forecast congestion for proactive traffic management.

## Installation

To install the project dependencies, run the following command in the project directory:

```bash
npm install
```

## Running the Project

To start the development server and run the app locally, use:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page will reload automatically when you make changes.

## Project Structure

- `public/` - Static files including HTML template, icons, and manifest.
- `src/` - Source code for the React app.
  - `components/` - Reusable UI components such as Navbar, Brand, CTA, Feature, Article.
  - `containers/` - Main sections of the app including Header, Footer, Blog, Features, Smartsync (core system description), Possibility.
  - `assets/` - Images and videos used in the app.
- `package.json` - Project metadata and scripts.

## Assets

The project includes various images and videos demonstrating the algorithm and traffic test cases, located in the `src/assets/` folder.

## Learn More

To learn more about React and Create React App, check out the following resources:

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

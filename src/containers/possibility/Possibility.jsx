import algorithmImage from 'src/assets/Algorithm.jpeg';
import React from 'react';
import Feature from '../../components/feature/Feature';
import './possibility.css';
const algorithmImage = require('src\assets\Algorithm.jpeg'); // Adjust path if necessary
const uniqueFeaturesData = [
  {
    title: 'CASE-1',

    link:'src/assets/TRAFFIC TESTCASE 1.mp4'
  },
  {
    title: 'CASE-2',
  
    link: 'src/assets/TRAFFIC TESTCASE 2.mp4'
  },
  {
    title: 'CASE-3',
 
    link:'src\assets\TRAFFIC TESTCASE 3.mp4'
  },
  {
    title: 'CASE-4',
    
    link: 'src/assets/TRAFFIC TESTCASE 4.mp4'
  },
];

const Possibility = () => (
  <div className="smartsync__possibilitysection__padding" id="possibility">
    <div className="smartsync__possibility-heading">
      <h1 className="gradient__text">WORKING</h1>

      <p></p>
    </div>
    <div className="smartsync__possibility-container">
      {uniqueFeaturesData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title+index} />
      ))}
    </div>
    <div className='viewButton'>
      <a href='https://source.cloud.google.com/smartsync-ai-420906/github_yadunandanv08_smartsync-ai/+/main:/TRAFFIC%20TESTCASE%201.mp4'><button className='case1View'>VIEW</button></a>
      <a href='https://source.cloud.google.com/smartsync-ai-420906/github_yadunandanv08_smartsync-ai/+/main:/TRAFFIC%20TESTCASE%202%20.mp4'><button className='case2View' >VIEW</button></a>
      <a href='https://source.cloud.google.com/smartsync-ai-420906/github_yadunandanv08_smartsync-ai/+/main:/TRAFFIC%20TESTCASE%203.mp4'><button className='case3View'>VIEW</button></a>
      <a href='https://source.cloud.google.com/smartsync-ai-420906/github_yadunandanv08_smartsync-ai/+/main:/TRAFFIC%20TESTCASE%204.mp4'><button className='case4View' >VIEW</button></a>
    </div>
  </div>
);

export default Possibility;

import React from 'react';
import './cta.css';
export const CTA = () => {
  return (
    <div className='cta'></div>
  )
}

/*var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "C:\DATASET2\SmartSync\SmartSync-Traffic\GCD AI\smartsync\src\assets\YOLOIMAGE1.png";
images[1] = "C:\DATASET2\SmartSync\SmartSync-Traffic\GCD AI\smartsync\src\assets\YOLOIMAGE2.png";
images[2] = "C:\DATASET2\SmartSync\SmartSync-Traffic\GCD AI\smartsync\src\assets\YOLOIMAGE3.png";
images[3] = "C:\DATASET2\SmartSync\SmartSync-Traffic\GCD AI\smartsync\src\assets\YOLOIMAGE4.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}*/


export default CTA;

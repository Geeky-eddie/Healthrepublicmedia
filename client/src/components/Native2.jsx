


import React, { useEffect } from 'react';

const Native2 = () => {
    useEffect(() => {
        // Create a script element for loading the ad asynchronously
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.dataset.cfasync = "false";
        adScript.src = "//traversefaultlessashamed.com/318ccffa305c39c6ef474efa4a93af9d/invoke.js";
    
        // Append the script to the document body
        document.body.appendChild(adScript);
    
        // Clean up function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(adScript);
        };
    }, []);
    
    return <div id="container-318ccffa305c39c6ef474efa4a93af9d"></div>;
};

export default Native2;

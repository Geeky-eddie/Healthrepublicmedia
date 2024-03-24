import React, { useEffect } from 'react';

const Nativead = () => {
    useEffect(() => {
        // Create a script element for loading the ad asynchronously
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.dataset.cfasync = "false";
        adScript.src = "//traversefaultlessashamed.com/74a25fca61028a23a880ea929b71b1de/invoke.js";
    
        // Append the script to the document body
        document.body.appendChild(adScript);
    
        // Clean up function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(adScript);
        };
    }, []);
    
    return <div id="container-74a25fca61028a23a880ea929b71b1de"></div>;
};

export default Nativead;

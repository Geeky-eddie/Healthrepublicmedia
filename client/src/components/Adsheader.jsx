import React, { useEffect, useRef } from 'react';

const Adsheader = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    const adOptions = {
      key: 'e308640199ad8ec8e464123fdfc3e6fd',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };

    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = `//www.topcreativeformat.com/${adOptions.key}/invoke.js`;

    const adConfigScript = document.createElement('script');
    adConfigScript.type = 'text/javascript';
    adConfigScript.innerHTML = `atOptions = ${JSON.stringify(adOptions)}`;

    // Append the scripts to the document body
    document.body.appendChild(adConfigScript);
    document.body.appendChild(adScript);

    // Clean up function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(adConfigScript);
      document.body.removeChild(adScript);
    };
  }, []);

  return <div ref={adContainerRef}></div>;
};

export default Adsheader;


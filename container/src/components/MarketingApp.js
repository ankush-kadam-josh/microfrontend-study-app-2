import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  });//TODO check dependencies  

  return <div ref={ref}></div>
}

export default MarketingApp;

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDom.render(<App />, el)
}

//to run locally 
if(process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root');
  if(devRoot){
    mount(devRoot);
  }
}

//to be run using container in microfronend architecture
export { mount }

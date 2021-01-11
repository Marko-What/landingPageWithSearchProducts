
import React from 'react';
import { BannerSlider } from './components/BannerSlider';
import { NavigationMenu } from './components/NavigationMenu';
import { WrapperDummyProducts } from './components/WrapperDummyProducts';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <BannerSlider />
      <WrapperDummyProducts /> 
    </div>
  );
}

export default App;

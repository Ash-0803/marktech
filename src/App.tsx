import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { UserSearch } from './components/UserSearch';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <UserSearch />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
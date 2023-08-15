import React from 'react';

function Navbar() {
  return (
    <div>Navbar Component</div>
  );
}

function Home() {
  return (
    <div>Home Component</div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Define the App component that renders Navbar, Home, and About components
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

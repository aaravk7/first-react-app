import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row mt-5">
          <Card title="Tesla" desc="Best electric car in the world." imgUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop" />
          <Card title="Honda" desc="dskafndlkjsanfkljndskanfkdsnaflknsda" imgUrl="https://imgd.aeplcdn.com/664x374/cw/360/honda/1100/closed-door/15.jpg?q=65" />
          <Card title="Audi" desc="One of the most premium cars." imgUrl="https://imgd.aeplcdn.com/0x0/n/cw/ec/48342/rs7-sportback-exterior-right-front-three-quarter-3.jpeg" />
        </div>
      </div>
    </>
  )
}

export default App
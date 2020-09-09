import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App"> 
      <header>
    <nav>
      <div class="logo"><h1 class=" animated infinite bounce heartBeat">My Village</h1></div>
      <div class="menu">
        <a href="#">home</a>
        <a href="#">gallery</a>
        <a href="#">about</a>
        <a href="#">contact</a>
        
      </div>
    </nav>

    <main>
      <section>
        <h3>Welcome To My Village</h3> 
        <h1>DO COME & VISIT  <span class="change_content"></span></h1>
        <p>"Village  once is not enough"</p>
          <a href="#" class="btnone">Learn more</a>
          <a href="#" class="btntwo">Signup here</a>
      </section>
    </main>
  </header>
    </div>
  );
}

export default App;

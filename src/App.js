import React from 'react';
import './App.css';
// import Header from './features/Header/component';
// import Dashboard from './features/Dashboard/container';

function App() {
  return (
    <div className="App">
      <div class="iframe-container">
        <iframe
          id="1"
          name="my_frame"
          title="Title"
          src="http://localhost:3000/gateway?order_id=5a8c56-48f-0eb8-f473-c6deffb4d110&token=61d7c2dd-a50d-4ac5-8199-3f336fbb3aff&email=anjitha.d@repute.net&phone_number=7760426651"
          style="width: 100%; height: 100%; margin: 0px; padding: 0px;"
          align="center"
          scrolling="yes"
        ></iframe>

      </div>
    </div>
  );
}

export default App;

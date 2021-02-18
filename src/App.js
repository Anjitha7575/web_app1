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
          src="https://app.forms.dev.repute.net/anjtest_dev/dev3"
          style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}
          align="center"
          scrolling="yes"
          allow="camera;microphone"
        ></iframe>

      </div>
    </div>
  );
}

export default App;

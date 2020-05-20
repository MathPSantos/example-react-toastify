import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();
function App() {

  const notifyDf = () => {
    toast("Default Notification!");
  }

  const notifyI = () => {
    toast.info("Info Notification!");
  }

  const notifyS = () => {
    toast.success("Success Notification!");
  }

  const notifyW = () => {
    toast.warn("Warn Notification!");
  }

  const notifyE = () => {
    toast.error("Error Notification!");
  }

  const notifyD = () => {
    toast.dark("Dark Notification!");
  }

  return (
    <div className="App">

      <h1>Toastify Examples</h1>

      <p>Press the buttons to see the magic!</p>

      <div className='buttons'>
        <button onClick={notifyDf} className='btn default'>
          Default
        </button>

        <button onClick={notifyI} className="btn info">
          Info
        </button>

        <button onClick={notifyS} className='btn success'>
          Success
        </button>

        <button onClick={notifyW} className='btn warn'>
          Warn
        </button>

        <button onClick={notifyE} className='btn error'>
          Error
        </button>

        <button onClick={notifyD} className="btn dark">
          Dark
        </button>
      </div>

      <p>See more at <a href="https://fkhadra.github.io/react-toastify/introduction/">Toastify Documentation</a>!</p>

    </div>
  );
}

export default App;

import * as React from 'react';
import './App.css';

const DummyFunction = () => {
  return "I am a DummyFunction";
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Execute: {DummyFunction()}
        </p>
        <p>
          Function name: {DummyFunction.name}
        </p>
      </div>
    );
  }
}

export default App;

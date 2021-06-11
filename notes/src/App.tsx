import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from '../src/components/Notes';
import AddNote from '../src/components/AddNote';
import EditNote from '../src/components/EditNote';
import { NoteProvider } from './reducer/useContext';

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Notes} />
            <Route exact path='/addNotes' component={AddNote} />
            <Route exact path='/:id' component={EditNote} />
          </Switch>
        </Router>
      </div>
    </NoteProvider>

  );
}

export default App;

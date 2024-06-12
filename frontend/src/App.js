import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/create-note">
                        <NoteForm />
                    </Route>
                    <Route path="/">
                        <NoteList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

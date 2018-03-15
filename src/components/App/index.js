import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import './style.css';
import Sidebar from '../Sidebar';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import muiTheme from '../../styles/muiTheme';
import urls from '../../utils/urls';

const theme = createMuiTheme(muiTheme);

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <MuiThemeProvider {...{theme}}>
                    <div className="app f">
                        <Reboot />
                        <Sidebar />
                        <main className="fb-100">
                            <Switch>
                                <Route exact path={urls.home} component={Home} />
                                <Route exact path={urls.about} component={About} />
                                <Route exact path={urls.skills} component={Skills} />
                                <Route exact path={urls.experience} component={Experience} />
                                <Route exact path={urls.portfolio} component={Portfolio} />
                                <Route exact path={urls.contact} component={Contact} />
                                <Route render={() => <h1>Error</h1>} />
                            </Switch>
                        </main>
                    </div>
                </MuiThemeProvider>
            </HashRouter>
        );
    }
}


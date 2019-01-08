import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Page404 from 'views/Page404';
import Good from 'views/goods';
import Welcome from 'views/welcome';
import Demo from 'views/Demo';
import Demo1 from 'views/Demo1';
import DemoPage1 from 'views/Demo1/DemoPage1';

export default class Home extends React.Component{

    render(){
        return(
            <div className="home">
                <Switch>
                    <Route exact path='/' component={Demo} />
                    <Route path='/goods' component={Good} />
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/demo' component={Demo} />
                    <Route path='/demo1' component={Demo1} />
                    <Route path='/demo_page1' component={DemoPage1} />
                    <Route path="**" component={Page404} />
                </Switch>
            </div>
        )
    }
}

import React from 'react'
import {useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from '../components/main/Main'
import Course from '../components/Course/course'

const Routes = () => {

    return (
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/Monitores' exact component={Main}/>
            <Route path='/Cursos' component={Course} />
            <Route path='/Aulas' component={Main}/>
            <Route path='/categ' component={Main}/>
        </Switch>
    )
}

export default Routes

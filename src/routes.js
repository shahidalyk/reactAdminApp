import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/about/AboutComponent';
import CoursesComponent from './components/course/CoursesComponent';
import ManageCourseComponent from './components/course/ManageCourseComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeComponent} />
        <Route path="about" component={AboutComponent} />
        <Route path="courses" component={CoursesComponent} />
        <Route path="course" component={ManageCourseComponent} />
        <Route path="course/:id" component={ManageCourseComponent} />
    </Route>
);

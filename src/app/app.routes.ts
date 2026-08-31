import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { CourseManagement } from './course-management/course-management.component';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'courses',
        component: Courses
    },
    {
        path: 'course-management',
        component: CourseManagement
    }
];

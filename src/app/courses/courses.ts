import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-courses',
  styleUrl: './courses.css',
  templateUrl: './courses.html',
})
export class Courses {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}

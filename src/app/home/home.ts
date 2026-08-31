import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
  standalone: true
})
export class Home {

  courses: Course[] = [];
  courseService: any;

  ngOnInit(): void {
    this.courses = this.courseService.getPromotedCourses();
  }
}

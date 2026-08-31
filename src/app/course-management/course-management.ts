import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,
  selector: 'app-course-management',
  styleUrl: './course-management.css',
  templateUrl: './course-management.html',
})
export class CourseManagement {

  courses: Course[] = [];

  newCourse: Course = this.emptyCourse();

  editing = false;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  emptyCourse(): Course {
    return {
      courseId: 0,
      title: '',
      description: '',
      duration: 0,
      lecturer: '',
      category: 'Basic',
      promote: false,
      courseImage: ''
    };
  }

  addCourse(): void {

    this.courseService.addCourse({
      ...this.newCourse
    });

    this.loadCourses();

    this.newCourse = this.emptyCourse();
  }

  editCourse(course: Course): void {

    this.newCourse = {
      ...course
    };

    this.editing = true;
  }

  updateCourse(): void {

    this.courseService.updateCourse({
      ...this.newCourse
    });

    this.loadCourses();

    this.newCourse = this.emptyCourse();

    this.editing = false;
  }

  deleteCourse(id: number): void {

    if (confirm('Are you sure you want to delete this course?')) {

      this.courseService.deleteCourse(id);

      this.loadCourses();
    }
  }

  cancelEdit(): void {

    this.newCourse = this.emptyCourse();

    this.editing = false;
  }
}

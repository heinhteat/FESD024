import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    courses: Course[] = [
        {
            courseId: 1,
            title: "Microsoft 365",
            description: "Using software within the Microsoft 365 suite.",
            duration: 30,
            lecturer: "Thida Mankongprasit",
            category: "Basic",
            promote: false,
            courseImage: "course1.png"
        },
        {
            courseId: 2,
            title: "Google Workspace",
            description: "Utilizing the Google Workspace software suite.",
            duration: 30,
            lecturer: "Bowornthat Nanthaphot",
            category: "Basic",
            promote: true,
            courseImage: "course2.png"
        },
        {
            courseId: 3,
            title: "Infographic by Canva",
            description: "Using the Canva program to create infographics.",
            duration: 20,
            lecturer: "Eknat Chongchanya",
            category: "Graphics",
            promote: true,
            courseImage: "course3.png"
        },
        {
            courseId: 4,
            title: "Java",
            description: "Fundamental programming with Java.",
            duration: 30,
            lecturer: "Naphatsorn Ratsameechot",
            category: "Coding",
            promote: false,
            courseImage: "course4.png"
        },
        {
            courseId: 5,
            title: "Basic Data Analysis",
            description: "Basic data analysis using Looker Studio.",
            duration: 20,
            lecturer: "Natthapol Pathumdecha",
            category: "Other",
            promote: true,
            courseImage: "course5.png"
        }
    ];

    getCourses(): Course[] {
        return this.courses;
    }

    getPromotedCourses(): Course[] {
        return this.courses.filter(course => course.promote === true);
    }

    // add
    addCourse(course: Course): void {
        this.courses.push(course);
    }

    // update
    updateCourse(updateCourse: Course): void {
        const index = this.courses.findIndex(
            course => course.courseId === updateCourse.courseId
        );

        if (index !== -1) {
            this.courses[index] = updateCourse;
        }
    }

    // delete
    deleteCourse(courseId: number): void {
        this.courses = this.courses.filter(
            course => course.courseId != courseId
        );
    }
}
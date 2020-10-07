import { Component } from '@angular/core';
import { Course } from './model/course';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];


  onCourseSelected(course: Course): void {
    console.log(course.description);
  }

}

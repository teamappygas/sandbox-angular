import { Component } from '@angular/core';
import { Course } from './model/course';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  startDate = new Date(2000, 0, 1);
  title = COURSES[1].description;
  price = 9.9345359;
  rate = 56;
  course = COURSES[4];


  onCourseSelected(course: Course): void {
    console.log(course.description);
  }

}

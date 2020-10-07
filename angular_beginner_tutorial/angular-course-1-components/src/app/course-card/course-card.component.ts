import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  // tslint:disable-next-line: no-output-rename
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed(): void {
    this.courseEmitter.emit(this.course);

  }

}

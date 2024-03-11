import { Component } from '@angular/core';
import { Course } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  course = {
    title: 'Title',
    description: "Description",
    id: '123',
    creationDate: '01-01-2024',
    duration: 3,
    authors: ['author']
  } as Course;
}

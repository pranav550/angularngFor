import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularngFor';
  Students:any[]=[
    {
      'name':'Amit verma',
    },
    {
      'name':'Ravi verma',
    },
    {
      'name':'Chetan verma',
    },
    {
      'name':'Shalaj verma',
    },
    {
      'name':'Yash verma',
    },
  ]
}

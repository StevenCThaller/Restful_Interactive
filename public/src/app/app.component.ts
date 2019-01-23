import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}
  title = 'Restful Task API';
  tasks = [];
  oneTask: object;

  ngOnInit(){
  }
  
  
  getTasksFromService(){
    let observable = this._httpService.getTasks();

    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      for(var k in data) {
        this.tasks.push(data[k]);
      }
    });
  }

  getTask(id) {
    console.log
    let observable = this._httpService.getTask(id);

    observable.subscribe(data => {
      console.log("Got this task!", data[0]);
      this.oneTask = data[0];
    })
  }
}

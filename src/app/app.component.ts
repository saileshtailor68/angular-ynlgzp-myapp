import { Component } from '@angular/core';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    a: number = 0.259;
  b: number = 1.3495;
}

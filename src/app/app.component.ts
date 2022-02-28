import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-angular';

  content = 'content11';
  tooltip = 'tooltip11';


   value: number = 6;
   options: Options = {
      showTicksValues: true,
      floor: 0,
      ceil: 36,

      step: 1,
      showTicks: true,
      tickStep: 6
   };


//   value: number = 5;
//   options: Options = {
//     showTicksValues: true,
//     stepsArray: [
//       { value: 1, legend: "Very poor" },
//       { value: 2 },
//       { value: 3, legend: "Fair" },
//       { value: 4 },
//       { value: 5, legend: "Average" },
//       { value: 6 },
//       { value: 7, legend: "Good" },
//       { value: 8 },
//       { value: 9, legend: "Excellent" }
//     ]
//   };

}

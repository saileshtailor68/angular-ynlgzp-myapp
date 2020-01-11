import { Component, Input } from '@angular/core';

@Component({
  selector: 'pipe-samples',
  template: `
      The value - {{b}}
      <br>
      using the percent pipe  - percent:'1.3-5'
      <br> 
      {{b | percent:'1.3-5'}}
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class PipeSamplesComponent  {
  @Input() name: string;
      a: number = 0.259;
  b: number = 1.3495;

}

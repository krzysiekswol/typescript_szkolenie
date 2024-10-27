import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TypescriptComponent } from './components/typescript.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <bhr-typescript-practice/>
  `,
  imports: [
    TypescriptComponent,
  ]
})
export class App {
  name = 'Angular';

  x: any = '2';
  y: unknown = 2;

  print(): void {
    // this.x.toLowerCase()
    // this.x + 2
    // this.x.push('d');

    // this.y.toLowerCase()

    console.log(this.x);
    console.log(this.y);
  }
}

bootstrapApplication(App);

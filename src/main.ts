import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <br>
    <br>
    <button (click)=print()>Click</button>
  `,
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

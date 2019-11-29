import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
    p {
      color: Red;
      font-size: 20p;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

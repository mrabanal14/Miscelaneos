import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: []
})
export class ClassComponent implements OnInit {

  alerta: string = 'alert-danger';
  propiedades: Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

}

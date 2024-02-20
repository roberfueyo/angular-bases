import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <p>
    Bienvenidos a angular
  </p>
  <button (click)="increseBy(1)">+1</button>
  <button (click)="increseBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {


  public counter:number = 10;

  constructor() { }



  increseBy( value: number): void{
    this.counter += value;
  }


  ngOnInit() { }
}

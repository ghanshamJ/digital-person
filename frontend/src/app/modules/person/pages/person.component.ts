import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <p>
      person works!
    </p>
  `,
  styles: [
  ]
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

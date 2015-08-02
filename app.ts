/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';


@Component({
  selector: 'my-app'
})
@View({
  template: '<h3>Hello {{ name }}</h3>'
})

class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'Angular2';
  }
}
bootstrap(MyAppComponent);

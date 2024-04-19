import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'colorhunt';
  search = '';

  constructor(private route: Router) {}

  active(str: string) {
    return this.route.url === str;
  }

  searchColors() {
    console.log(this.search);
  }
}

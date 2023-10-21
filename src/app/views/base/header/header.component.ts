import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuState: boolean = false;

  toggleMenu() {
    this.menuState = !this.menuState;
  }
}

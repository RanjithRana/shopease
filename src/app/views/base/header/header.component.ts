import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuState: boolean = false;
  @ViewChild('hamburger')
  hamburger!: ElementRef;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (
      !this.el.nativeElement.contains(event.target) &&
      !this.hamburger.nativeElement.contains(event.target)
    ) {
      this.menuState = false;
    }
  }

  toggleMenu() {
    this.menuState = !this.menuState;
  }
}

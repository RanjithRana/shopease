import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit{
  menuState: boolean = false;
  @ViewChild('hamburger')
  hamburger!: ElementRef;
  @ViewChildren('menuLink') menuLinks!: QueryList<ElementRef>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.menuLinks.forEach((item: ElementRef) => {
      item.nativeElement.addEventListener('click', () => {
        this.menuState = false;
      });
    });
  }

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

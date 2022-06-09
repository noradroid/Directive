import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedText]'
})
export class RedTextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }

  changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appYellowBackgroundHighlight]'
})
export class YellowBackgroundHighlightDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }

  changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

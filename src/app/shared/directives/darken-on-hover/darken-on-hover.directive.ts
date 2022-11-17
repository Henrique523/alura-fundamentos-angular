import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}

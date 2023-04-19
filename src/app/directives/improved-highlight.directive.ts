import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImprovedHighlight]',
})
export class ImprovedHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'bg-green-900'); //add styling via class
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white'); //add styling via setStyle
  }
}

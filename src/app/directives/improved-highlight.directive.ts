import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appImprovedHighlight]',
})
export class ImprovedHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'bg-green-900';
  @Input('highlightColor') highlightColor: string = 'bg-blue-900';

  @HostBinding('class') class!: string;

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // this.renderer.removeClass(this.elementRef.nativeElement, 'bg-green-900');
    // this.renderer.addClass(this.elementRef.nativeElement, 'bg-blue-900');
    this.class = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // this.renderer.addClass(this.elementRef.nativeElement, 'bg-green-900'); //add styling via class
    // this.renderer.removeClass(this.elementRef.nativeElement, 'bg-blue-900');
    this.class = this.defaultColor;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'p-4'); //add styling via class
    this.renderer.addClass(this.elementRef.nativeElement, 'mb-8'); //add styling via class
    // this.renderer.addClass(this.elementRef.nativeElement, 'bg-green-900'); //add styling via class
    this.class = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white'); //add styling via setStyle
  }
}

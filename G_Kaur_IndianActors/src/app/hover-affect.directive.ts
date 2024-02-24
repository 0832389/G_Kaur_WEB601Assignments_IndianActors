import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() hoverStyle: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else if (this.hoverStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else if (this.hoverStyle === 'border') {
      this.setCardBorder(true);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.hoverStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    } else if (this.hoverStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    } else if (this.hoverStyle === 'border') {
      this.setCardBorder(false);
    }
  }

  private setCardBorder(enable: boolean): void {
    const card = this.el.nativeElement.closest('.content-card');
    if (!card) return;
    const isFirstCard = card.previousElementSibling === null;
    const isLastCard = card.nextElementSibling === null;
    if (isFirstCard || isLastCard) {
      const borderStyle = enable ? '2px solid red' : '1px solid black';
      this.renderer.setStyle(card, 'border', borderStyle);
    }
  }
}

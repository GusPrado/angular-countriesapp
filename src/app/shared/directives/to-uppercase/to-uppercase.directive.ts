import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
 selector: '[uppercaseDir]'
})
export class ToUppercaseDirective {
  constructor(public ref: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event) {
     this.ref.nativeElement.value = event.target.value.toUpperCase()
  }
}

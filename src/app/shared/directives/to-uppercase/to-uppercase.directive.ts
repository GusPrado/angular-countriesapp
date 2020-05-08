import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[uppercaseDir]',
    host: {
      '(input)': '$event'
    }
  })
  export class ToUppercaseDirective {

    lastValue: string;

    constructor(public ref: ElementRef) { }

    @HostListener('input', ['$event']) onInput($event)
    {
      var start = $event.target.selectionStart;
      var end = $event.target.selectionEnd;
      $event.target.value = $event.target.value.toUpperCase();
      $event.target.setSelectionRange(start, end);
      $event.preventDefault();

      if (!this.lastValue || (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)) {
        this.lastValue = this.ref.nativeElement.value = $event.target.value;

        const evt = document.createEvent('HTMLEvents');
        evt.initEvent('input', false, true);
        event.target.dispatchEvent(evt);
      }
    }
  }

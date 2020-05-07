import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
    selector: '[uppercaseDir]',
    host: {
        '[value]': 'uppercase',
        '(input)': 'format($event.target.value)'
    }
})
export class ToUppercaseDirective implements OnInit {

    @Input() uppercase: string;
    @Output() uppercaseChange: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        this.uppercase = this.uppercase || '';
        this.format(this.uppercase);
    }

    format(value) {
        value = value.toUpperCase();
        this.uppercaseChange.next(value);
    }
}

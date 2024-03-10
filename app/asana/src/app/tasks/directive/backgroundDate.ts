import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLOR_DATE } from '../const';


@Directive({
    selector: '[backDate]'
})
export class BackDateDirective implements OnChanges {

    @Input() date?: Date

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {

        this.el.nativeElement.style.background = `${setColor(this.date)}`

        function setColor(date?: Date): COLOR_DATE {
            const today = new Date();
            const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

            if (date) {
                if (date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) return COLOR_DATE.green;
                if (date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) return COLOR_DATE.red;
                if (date.setHours(0, 0, 0, 0) === tomorrow.setHours(0, 0, 0, 0)) return COLOR_DATE.green;
                if (date.setHours(0, 0, 0, 0) > tomorrow.setHours(0, 0, 0, 0)) return COLOR_DATE.blue;
            }
            return COLOR_DATE.grey;
        }

    }
}
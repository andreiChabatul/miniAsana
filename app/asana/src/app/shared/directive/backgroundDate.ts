import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLOR_DATE } from '../const';
import { resetHours } from 'src/const/resetHour';
import { today, tomorrow } from '../const/date';


@Directive({
    selector: '[appBackDate]'
})
export class BackDateDirective implements OnChanges {

    @Input() date?: Date

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {

        this.el.nativeElement.style.background = `${setColor(this.date)}`

        function setColor(date?: Date): COLOR_DATE {
           
            if (date) {
                if (resetHours(date) === resetHours(today)) return COLOR_DATE.green;
                if (resetHours(date) < resetHours(today)) return COLOR_DATE.red;
                if (resetHours(date) === resetHours(tomorrow)) return COLOR_DATE.green;
                if (resetHours(date) > resetHours(tomorrow)) return COLOR_DATE.blue;
            }
            return COLOR_DATE.grey;
        }

    }
}
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLOR_DATE } from '../const';
import { EPriority, EStatus } from 'src/types/task';


@Directive({
    selector: '[backPriority]'
})
export class BackPriorityDirective implements OnChanges {

    @Input() priority?: EPriority

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {

        this.el.nativeElement.style.setProperty('background-color', setColor(this.priority), 'important');

        function setColor(priority?: EPriority): COLOR_DATE {

            switch (priority) {
                case EPriority.low:
                    return COLOR_DATE.yellow;
                case EPriority.medium:
                    return COLOR_DATE.green;
                case EPriority.high:
                    return COLOR_DATE.blue;
                case EPriority.critical:
                    return COLOR_DATE.red;
                default:
                    return COLOR_DATE.grey;
            }
        }

    }
}
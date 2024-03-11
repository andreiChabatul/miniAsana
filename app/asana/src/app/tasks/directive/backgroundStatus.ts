import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLOR_DATE } from '../const';
import { EStatus } from 'src/types/task';


@Directive({
    selector: '[backStatus]'
})
export class BackStatusDirective implements OnChanges {

    @Input() status: EStatus

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {

        this.el.nativeElement.style.setProperty('background-color', setColor(this.status), 'important');

        function setColor(status: EStatus): COLOR_DATE {

            switch (status) {
                case EStatus.new:
                    return COLOR_DATE.yellow;
                case EStatus.progress:
                    return COLOR_DATE.blue;
                case EStatus.loss:
                    return COLOR_DATE.red;
                case EStatus.close:
                    return COLOR_DATE.grey;
                case EStatus.done:
                    return COLOR_DATE.green
                default:
                    return COLOR_DATE.grey;
            }
        }

    }
}
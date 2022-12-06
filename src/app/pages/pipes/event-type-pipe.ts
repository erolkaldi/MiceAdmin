import { Pipe, PipeTransform } from '@angular/core';
import { EventTypes } from 'src/app/core/models/event/eventType';

@Pipe({
    name: 'eventtypedisplay',
    pure: false
})
export class EventTypePipe implements PipeTransform {
    transform(filter: number): string {
        if ( !filter) {
            return "";
        }
        var value= EventTypes.find(f=> f.id===filter);
        return (!value ? "" :value.name)
    }
}
import { Pipe, PipeTransform } from '@angular/core';
import { FeeTypes } from 'src/app/core/models/event/feeType';

@Pipe({
    name: 'feetypedisplay',
    pure: false
})
export class FeeTypePipe implements PipeTransform {
    transform(filter: string): string {
        if ( !filter) {
            return "";
        }
        var value= FeeTypes.find(f=> f.id===filter);
        return (!value ? "" :value.name)
    }
}
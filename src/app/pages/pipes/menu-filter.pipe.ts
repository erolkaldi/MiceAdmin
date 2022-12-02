import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu/menuitem';

@Pipe({
    name: 'menufilter',
    pure: false
})
export class MenuFilterPipe implements PipeTransform {
    transform(items: MenuItem[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.Search.indexOf(filter.Name) !== -1);
    }
}
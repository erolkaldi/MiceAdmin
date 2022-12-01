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
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => (item.Search.indexOf(filter.Name) !== -1)||(item.Name.indexOf(filter.Name) !== -1));
    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterValue: string): any {
    if (value.length === 0 || filterValue === '') {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      if (item.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}

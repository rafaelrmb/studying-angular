import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortProp: string): any {
    return [...value].sort((a: any, b: any) => {
      if (a[sortProp] < b[sortProp]) {
        return -1;
      } else if (a[sortProp] > b[sortProp]) {
        return 1;
      }
    });
  }
}

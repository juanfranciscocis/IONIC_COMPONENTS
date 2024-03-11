import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array:any[],query:string='', column:string=''): any[] {
    return array.filter(item => item[column].toLowerCase().includes(query.toLowerCase()));
  }

}

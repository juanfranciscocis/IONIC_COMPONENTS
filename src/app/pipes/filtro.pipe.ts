import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array:any[],query:string=''): any[] {
    return array.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }

}

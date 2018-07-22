import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleWidth'
})
export class TitleWidthPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const width = window.innerWidth;
    const baseWidth = 1000;
    const baseCharacter = 50;
    const ratio = width / baseWidth;
    return value.slice(0, (ratio * baseCharacter)) + '...';
  }

}

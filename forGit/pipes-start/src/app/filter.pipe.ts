import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  // , pure: false // pipes doesnt recalculate whenever you change an object or an array. They need to be triggered. which is good.
                    // This pure:false makes them recalculate all the time, but it is not good for the performance
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === ''){
      return value;
    }
    const resultArray = [];
    
    for (const item of value){
      if (item[propName] === filterString){
        resultArray.push(item);
      }  
    }
    return resultArray;
  }

}

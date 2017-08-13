import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number){
        if (value.length > limit){
            return value.substr(0, limit) + ' ...'; 
        }
            return value;

    }
}
// like limit, you can add other parameters, as you wish
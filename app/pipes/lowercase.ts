import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'lowercase'
})
@Injectable()
export class Lowercase {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: any[]) {
    //value = value + ''; // make sure it's a string
    return value.toLowerCase();
  }
}

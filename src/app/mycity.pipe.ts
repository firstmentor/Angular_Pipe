import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycity'
})
export class MycityPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  transform(value: string, cityname: string): string {
    
    switch(cityname){
      case 'gwa':{
        return value + ' From Gwalior'
      }
      case 'eta':{
        return value + ' From Etawah'
      }
      case 'bhi':{
        return value + ' From Bhind'
      }
      default: {
        return value + ' No City Found yet '
      }
      
    
    }
  }

}

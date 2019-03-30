import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'userFriendlyDate'
})

export class UserFriendlyDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        return 'Agora mesmo';
      }

      const intervals = {
        ano: 31536000,
        mes: 2592000,
        semana: 604800,
        día: 86400,
        hora: 3600,
        minuto: 60,
        segundo: 1
      };

      let counter: number;
      for (const interval of Object.keys(intervals)) {
        counter = Math.floor(seconds / intervals[interval]);
        if (counter > 0) {
          if (counter === 1) {
            return 'Hai ' + counter + ' ' + interval;
          } else {
            return 'Hai ' + counter + ' ' + interval + 's';
          }
        }
      }
    }
    return value;
  }
}
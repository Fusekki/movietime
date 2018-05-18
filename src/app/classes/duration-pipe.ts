import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

  transform(length: string) {
    return length.replace(/[PT]/g, '').replace(/[H]/g, 'h ').toLowerCase().substr(1);
  }
}

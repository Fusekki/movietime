import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

  transform(length: string) {
    return length.toUpperCase();
  }
}

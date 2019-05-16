import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'overviewTransform' })
export class OverviewTransformPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return `Overview not found.`;
    }
    return `${value} ...`;
  }
}

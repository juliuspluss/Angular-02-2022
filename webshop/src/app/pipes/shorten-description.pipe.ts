import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription'
})
export class ShortenDescriptionPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,2).join(" ");
  }

  // 3 esimest sõna
  // "elas metsas mutionu, keset kuuski"
  // string.split(" ") ---->
  // ["Elas", "metsas", "jne" ]
  // .slice(0,3); --> ["Elas", "metsas", "mutionu" ]
  // .join("::") --> Elas::metsas::mutionu,

}

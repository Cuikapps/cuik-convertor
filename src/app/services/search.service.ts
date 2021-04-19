import { Injectable } from '@angular/core';
import { titles } from '../data/buttondata.json';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search(value: string): string[] {
    let finalArr: string[] = new Array();

    //checks for any text that starts value
    for (let i = 0; i < titles.length; i++) {
      if (titles[i].toLowerCase().startsWith(value.toLowerCase())) {
        finalArr.push(titles[i]);
      }
    }

    //Checks to see if text include the value
    for (let i = 0; i < titles.length; i++) {
      if (
        titles[i].toLowerCase().includes(value.toLowerCase()) &&
        !finalArr.includes(titles[i])
      ) {
        finalArr.push(titles[i]);
      }
    }
    return finalArr;
  }
}

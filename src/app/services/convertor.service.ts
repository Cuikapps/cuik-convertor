import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';
import { CONVERSION_TABLE } from '../data/Conversions';

@Injectable({
  providedIn: 'root',
})
export class ConvertorService {
  constructor() {
    BigNumber.set({ DECIMAL_PLACES: 50 });
  }

  convert(type: string, input: string): string {
    const SEPARATED_TYPE = type.split('_');

    if (
      typeof CONVERSION_TABLE.get(SEPARATED_TYPE[0]) === 'string' &&
      typeof CONVERSION_TABLE.get(SEPARATED_TYPE[1]) === 'string'
    ) {
      //@ts-ignore
      let baseNumber: string = CONVERSION_TABLE.get(SEPARATED_TYPE[0]);

      let conversionNumber = new BigNumber(
        //@ts-ignore
        CONVERSION_TABLE.get(SEPARATED_TYPE[1])
      ).div(baseNumber);

      return new BigNumber(input).times(conversionNumber).toString();
    } else {
      //@ts-ignore
      let baseNumber: string = CONVERSION_TABLE.get(SEPARATED_TYPE[0])(
        input,
        true
      );

      //@ts-ignore
      return CONVERSION_TABLE.get(SEPARATED_TYPE[1])(baseNumber).toString();
    }
  }
}

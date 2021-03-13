import Big from 'big.js';
import { CONVERSION_TABLE } from '../data/Conversions';

export class Convert {
  public static convert(type: string, input: string): string {
    const SEPARATED_TYPE = type.split('_');

    if (
      typeof CONVERSION_TABLE.get(SEPARATED_TYPE[0]) === 'string' &&
      typeof CONVERSION_TABLE.get(SEPARATED_TYPE[1]) === 'string'
    ) {
      //@ts-ignore
      let baseNumber: string = CONVERSION_TABLE.get(SEPARATED_TYPE[0]);

      //@ts-ignore
      let conversionNumber = Big(CONVERSION_TABLE.get(SEPARATED_TYPE[1])).div(
        baseNumber
      );
      console.log(Big(input).times(conversionNumber).toString());

      return Big(input).times(conversionNumber).toString();
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

import Big from 'big.js';
import { conversions } from './data/conversiondata.json';

export class Convert {
  public static convert(type: string, input: string): string {
    for (let i = 0; i < conversions.length; i++) {
      let convType = conversions[i].split('_');
      if (type === convType[0]) {
        let multiple = new Big(input);
        return multiple.times(convType[1]).toString();
      }
    }
    return '';
  }
}

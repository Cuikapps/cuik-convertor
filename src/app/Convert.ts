export class Convert {
  public static convertLength(type: string, input: number) {
    switch (type) {
      // * Metric

      // * Kilometer
      case 'kilometerkilometer': {
        return input;
        break;
      }
      case 'kilometermeter': {
        return input * 1000;
        break;
      }
      case 'kilometercentimeter': {
        return input * 100000;
        break;
      }
      case 'kilometermillimeter': {
        return input * 1000000;
        break;
      }
      case 'kilometermicrometer': {
        return input * 1000000000;
        break;
      }
      case 'kilometernanometer': {
        return input * 1000000000000;
        break;
      }
      case 'kilometermile': {
        return input / 1.609;
        break;
      }
      case 'kilometeryard': {
        return input * 1094;
        break;
      }
      case 'kilometerfoot': {
        return input * 3281;
        break;
      }
      case 'kilometerinch': {
        return input * 39370;
        break;
      }
      case 'kilometernautical mile': {
        return input / 1.852;
        break;
      }
      // * Meters
      case 'meterkilometer': {
        return input / 1000;
      }
      case 'metermeter': {
        return input;
        break;
      }
      case 'metercentimeter': {
        return input * 100;
        break;
      }
      case 'metermillimeter': {
        return input * 1000;
        break;
      }
      case 'metermicrometer': {
        return input * 1000000;
        break;
      }
      case 'meternanometer': {
        return input * 1000000000;
        break;
      }
      case 'metermile': {
        return input / 1609;
        break;
      }
      case 'meteryard': {
        return input * 1.094;
        break;
      }
      case 'meterfoot': {
        return input * 3.281;
        break;
      }
      case 'meterinch': {
        return input * 39.37;
        break;
      }
      case 'meternautical mile': {
        return input / 1852;
        break;
      }
      // * Centimeters
      case 'centimeterkilometer': {
        return input / 100000;
        break;
      }
      case 'centimetermeter': {
        return input / 100;
      }
      case 'centimetercentimeter': {
        return input;
        break;
      }
      case 'centimetermillimeter': {
        return input * 10;
        break;
      }
      case 'centimetermicrometer': {
        return input * 10000;
        break;
      }
      case 'centimeternanometer': {
        return input * 10000000;
        break;
      }
      case 'centimetermile': {
        return input / 160934;
        break;
      }
      case 'centimeteryard': {
        return input / 91.44;
        break;
      }
      case 'centimeterfoot': {
        return input / 30.48;
        break;
      }
      case 'centimeterinch': {
        return input / 2.54;
        break;
      }
      case 'centimeternautical mile': {
        return input / 185200;
        break;
      }
      // * Millimeters
      case 'millimeterkilometer': {
        return input / 1000000;
        break;
      }
      // * Customary
      case 'milekilometer': {
        return input * 1.609;
        break;
      }
      default: {
        return input;
        break;
      }
    }
  }
}

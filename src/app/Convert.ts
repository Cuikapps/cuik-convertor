export class Convert {
  public static convertLength(type: string, input: number) {
    switch (type) {
      // * Metric

      // * Kilometer
      case 'kilometerkilometer': {
        return input;
      }
      case 'kilometermeter': {
        return input * 1000;
      }
      case 'kilometercentimeter': {
        return input * 100000;
      }
      case 'kilometermillimeter': {
        return input * 1000000;
      }
      case 'kilometermicrometer': {
        return input * 1000000000;
      }
      case 'kilometernanometer': {
        return input * 1000000000000;
      }
      case 'kilometermile': {
        return input / 1.609;
      }
      case 'kilometeryard': {
        return input * 1094;
      }
      case 'kilometerfoot': {
        return input * 3281;
      }
      case 'kilometerinch': {
        return input * 39370;
      }
      case 'kilometerlightYear': {
        return input * 0.0000000000001057;
      }
      case 'kilometernauticalMile': {
        return input / 1.852;
      }
      // * Meters
      case 'meterkilometer': {
        return input / 1000;
      }
      case 'metermeter': {
        return input;
      }
      case 'metercentimeter': {
        return input * 100;
      }
      case 'metermillimeter': {
        return input * 1000;
      }
      case 'metermicrometer': {
        return input * 1000000;
      }
      case 'meternanometer': {
        return input * 1000000000;
      }
      case 'metermile': {
        return input / 1609;
      }
      case 'meteryard': {
        return input * 1.094;
      }
      case 'meterfoot': {
        return input * 3.281;
      }
      case 'meterinch': {
        return input * 39.37;
      }
      case 'meterlightYear': {
        return input * 0.0000000000000001057;
      }
      case 'meternauticalMile': {
        return input / 1852;
      }
      // * Centimeters
      case 'centimeterkilometer': {
        return input / 100000;
      }
      case 'centimetermeter': {
        return input / 100;
      }
      case 'centimetercentimeter': {
        return input;
      }
      case 'centimetermillimeter': {
        return input * 10;
      }
      case 'centimetermicrometer': {
        return input * 10000;
      }
      case 'centimeternanometer': {
        return input * 10000000;
      }
      case 'centimetermile': {
        return input / 160934;
      }
      case 'centimeteryard': {
        return input / 91.44;
      }
      case 'centimeterfoot': {
        return input / 30.48;
      }
      case 'centimeterinch': {
        return input / 2.54;
      }
      case 'centimeterlightYear': {
        return input * 0.000000000000000001057;
      }
      case 'centimeternauticalMile': {
        return input / 185200;
      }
      // * Millimeters
      case 'millimeterkilometer': {
        return input / 1000000;
      }
      case 'millimetermeter': {
        return input / 1000;
      }
      case 'millimetercentimeter': {
        return input / 10;
      }
      case 'millimetermillimeter': {
        return input;
      }
      case 'millimetermicrometer': {
        return input * 1000;
      }
      case 'millimeternanometer': {
        return input * 1000000;
      }
      case 'millimetermile': {
        return input / 1609000;
      }
      case 'millimeteryard': {
        return input / 914;
      }
      case 'millimeterfoot': {
        return input / 305;
      }
      case 'millimeterinch': {
        return input / 25.4;
      }
      case 'millimeterlightYear': {
        return input * 0.0000000000000000001057;
      }
      case 'millimeternauticalMile': {
        return input / 1609000;
      }
      // * Micrometer
      case 'micrometerkilometer': {
        return input / 1000000000;
      }
      case 'micrometermeter': {
        return input / 1000000;
      }
      case 'micrometercentimeter': {
        return input / 10000;
      }
      case 'micrometermillimeter': {
        return input / 1000;
      }
      case 'micrometermicrometer': {
        return input;
      }
      case 'micrometernanometer': {
        return input * 1000;
      }
      case 'micrometermile': {
        return input / 1609000000;
      }
      case 'micrometeryard': {
        return input / 914400;
      }
      case 'micrometerfoot': {
        return input / 304800;
      }
      case 'micrometerinch': {
        return input / 25400;
      }
      case 'micrometerlightYear': {
        return input * 0.0000000000000000000001057;
      }
      case 'micrometernauticalMile': {
        return input / 1852000000;
      }
      // * Nanometer
      case 'nanometerkilometer': {
        return input / 1000000000000;
      }
      case 'nanometermeter': {
        return input / 1000000000;
      }
      case 'nanometercentimeter': {
        return input / 10000000;
      }
      case 'nanometermillimeter': {
        return input / 1000000;
      }
      case 'nanometermicrometer': {
        return input / 1000;
      }
      case 'nanometernanometer': {
        return input;
      }
      case 'nanometermile': {
        return input / 1609000000000;
      }
      case 'nanometeryard': {
        return input / 914400000;
      }
      case 'nanometerfoot': {
        return input / 304800000;
      }
      case 'nanometerinch': {
        return input / 25400000;
      }
      case 'nanometerlightYear': {
        return input * 0.00000000000000000000000010570008340247;
      }
      case 'nanometernauticalMile': {
        return input / 1852000000000;
      }
      // * Customary
      // * Mile
      case 'milekilometer': {
        return input * 1.609;
      }
      case 'milemeter': {
        return input * 1609.34;
      }
      case 'milecentimeter': {
        return input * 160934;
      }
      case 'milemillimeter': {
        return input * 1609340;
      }
      case 'milemicrometer': {
        return input * 1609340000;
      }
      case 'milenanometer': {
        return input * 1609340000000;
      }
      case 'milemile': {
        return input;
      }
      case 'mileyard': {
        return input * 1760;
      }
      case 'milefoot': {
        return input * 5280;
      }
      case 'mileinch': {
        return input * 63360;
      }
      case 'milelightYear': {
        return input / 5878600000000;
      }
      case 'milenauticalMile': {
        return input / 1.151;
      }
      //* Yard
      case 'yardkilometer': {
        return input / 1094;
      }
      case 'yardmeter': {
        return input / 1.094;
      }
      case 'yardcentimeter': {
        return input * 91.44;
      }
      case 'yardmillimeter': {
        return input * 914.4;
      }
      case 'yardmicrometer': {
        return input * 914400;
      }
      case 'yardnanometer': {
        return input * 914400000;
      }
      case 'yardmile': {
        return input / 1760;
      }
      case 'yardyard': {
        return input;
      }
      case 'yardfoot': {
        return input * 3;
      }
      case 'yardinch': {
        return input * 36;
      }
      case 'yardlightYear': {
        return input / 10346000000000000;
      }
      case 'yardnauticalMile': {
        return input / 2025;
      }
      // * Foot
      case 'footkilometer': {
        return input / 3281;
      }
      case 'footmeter': {
        return input / 3.281;
      }
      case 'footcentimeter': {
        return input * 30.48;
      }
      case 'footmillimeter': {
        return input * 304.8;
      }
      case 'footmicrometer': {
        return input * 304800;
      }
      case 'footnanometer': {
        return input * 304800000;
      }
      case 'footmile': {
        return input / 5280;
      }
      case 'footyard': {
        return input / 3;
      }
      case 'footfoot': {
        return input;
      }
      case 'footinch': {
        return input * 12;
      }
      case 'footlightYear': {
        return input / 31039000000000000;
      }
      case 'footnauticalMile': {
        return input / 6076;
      }
      // * Inch
      case 'inchkilometer': {
        return input / 39370;
      }
      case 'inchmeter': {
        return input / 39.37;
      }
      case 'inchcentimeter': {
        return input * 2.54;
      }
      case 'inchmillimeter': {
        return input * 25.4;
      }
      case 'inchmicrometer': {
        return input * 25400;
      }
      case 'inchnanometer': {
        return input * 25400000;
      }
      case 'inchmile': {
        return input / 63360;
      }
      case 'inchyard': {
        return input / 36;
      }
      case 'inchfoot': {
        return input / 12;
      }
      case 'inchfoot': {
        return input / 12;
      }
      case 'inchinch': {
        return input / 12;
      }
      case 'inchlightYear': {
        return input / 372470000000000000;
      }
      case 'inchnauticalMile': {
        return input / 72913;
      }
      // * Light Year
      case 'lightYearkilometer': {
        return input / 0.0000000000001057;
      }
      case 'lightYearmeter': {
        return input / 0.0000000000000001057;
      }
      case 'lightYearcentimeter': {
        return input / 0.000000000000000001057;
      }
      case 'lightYearmillimeter': {
        return input / 0.0000000000000000001057;
      }
      case 'lightYearmicrometer': {
        return input / 0.0000000000000000000001057;
      }
      case 'lightYearnanometer': {
        return input / 0.00000000000000000000000010570008340247;
      }
      case 'lightYearmile': {
        return input * 5878600000000;
      }
      case 'lightYearyard': {
        return input * 10346000000000000;
      }
      case 'lightYearfoot': {
        return input * 31039000000000000;
      }
      case 'lightYearinch': {
        return input * 372470000000000000;
      }
      case 'lightYearlightYear': {
        return input;
      }
      case 'lightYearnauticalMile': {
        return input * 5108400000000;
      }
      // Nautical Mile
      case 'nauticalMilekilometer': {
        return input * 1.852;
      }
      case 'nauticalMilemeter': {
        return input * 1852;
      }
      case 'nauticalMilecentimeter': {
        return input * 185200;
      }
      case 'nauticalMilemillimeter': {
        return input * 1852000;
      }
      case 'nauticalMilemicrometer': {
        return input * 1852000000;
      }
      case 'nauticalMilenanometer': {
        return input * 1852000000000;
      }
      case 'nauticalMilemile': {
        return input * 1.15078;
      }
      case 'nauticalMileyard': {
        return input * 2025.3728007;
      }
      case 'nauticalMilefoot': {
        return input * 6076.118402099979903;
      }
      case 'nauticalMileinch': {
        return input * 72913.420825199762476;
      }
      case 'nauticalMilelightYear': {
        return input / 5108400000000;
      }
      case 'nauticalMilenauticalMile': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
}

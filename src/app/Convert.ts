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

  public static convertWeight(type: string, input: number) {
    switch (type) {
      //Metric

      //Metric Ton
      case 'metricTonmetricTon': {
        return input;
      }
      case 'metricTonkilogram': {
        return input * 1000;
      }
      case 'metricTongram': {
        return input * 1000000;
      }
      case 'metricTonmilligram': {
        return input * 1000000000;
      }
      case 'metricTonmicrogram': {
        return input * 1000000000000;
      }
      case 'metricTonimperialTon': {
        return input / 1.016;
      }
      case 'metricTonusTon': {
        return input * 1.10231;
      }
      case 'metricTonstone': {
        return input * 157.472857135078;
      }
      case 'metricTonpound': {
        return input * 2204.619999891091993;
      }
      case 'metricTonounce': {
        return input * 35273.919998257471889;
      }
      // Kilogram
      case 'kilogrammetricTon': {
        return input / 1000;
      }
      case 'kilogramkilogram': {
        return input;
      }
      case 'kilogramgram': {
        return input * 1000;
      }
      case 'kilogrammilligram': {
        return input * 1000000;
      }
      case 'kilogrammicrogram': {
        return input * 1000000000;
      }
      case 'kilogramimperialTon': {
        return input / 1016;
      }
      case 'kilogramusTon': {
        return input / 907;
      }
      case 'kilogramstone': {
        return input / 6.35;
      }
      case 'kilogrampound': {
        return input * 2.2046199998910922524;
      }
      case 'kilogramounce': {
        return input * 35.273919998257476038;
      }
      //gram
      case 'grammetricTon': {
        return input / 1000000;
      }
      case 'gramkilogram': {
        return input / 1000;
      }
      case 'gramgram': {
        return input;
      }
      case 'grammilligram': {
        return input * 1000;
      }
      case 'grammicrogram': {
        return input * 1000000;
      }
      case 'gramimperialTon': {
        return input / 1016000;
      }
      case 'gramusTon': {
        return input / 907185;
      }
      case 'gramstone': {
        return input / 6350;
      }
      case 'grampound': {
        return input / 454;
      }
      case 'gramounce': {
        return input / 28.35;
      }
      //milligram
      case 'milligrammetricTon': {
        return input / 1000000000;
      }
      case 'milligramkilogram': {
        return input / 1000000;
      }
      case 'milligramgram': {
        return input / 1000;
      }
      case 'milligrammilligram': {
        return input;
      }
      case 'milligrammicrogram': {
        return input * 1000;
      }
      case 'milligramimperialTon': {
        return input / 1016000000;
      }
      case 'milligramusTon': {
        return input / 907200000;
      }
      case 'milligramstone': {
        return input / 6350000;
      }
      case 'milligrampound': {
        return input / 453592;
      }
      case 'milligramounce': {
        return input / 28350;
      }
      //Microgram
      case 'microgrammetricTon': {
        return input / 1000000000000;
      }
      case 'microgramkilogram': {
        return input / 1000000000;
      }
      case 'microgramgram': {
        return input / 1000000;
      }
      case 'microgrammilligram': {
        return input / 1000;
      }
      case 'microgrammicrogram': {
        return input;
      }
      case 'microgramimperialTon': {
        return input / 1016000000000;
      }
      case 'microgramusTon': {
        return input / 907200000000;
      }
      case 'microgramstone': {
        return input / 6350000000;
      }
      case 'microgrampound': {
        return input / 453592000;
      }
      case 'microgramounce': {
        return input / 28350000;
      }
      //Customary

      //Imperial Ton
      case 'imperialTonmetricTon': {
        return input * 1.016;
      }
      case 'imperialTonkilogram': {
        return input * 1016;
      }
      case 'imperialTongram': {
        return input * 1016000;
      }
      case 'imperialTonmilligram': {
        return input * 1016000000;
      }
      case 'imperialTonmicrogram': {
        return input * 1016000000000;
      }
      case 'imperialTonimperialTon': {
        return input;
      }
      case 'imperialTonusTon': {
        return input * 1.12;
      }
      case 'imperialTonstone': {
        return input * 160;
      }
      case 'imperialTonpound': {
        return input * 2240;
      }
      case 'imperialTonounce': {
        return input * 35840;
      }
      //US Ton
      case 'usTonmetricTon': {
        return input / 1.102;
      }
      case 'usTonkilogram': {
        return input * 907.185;
      }
      case 'usTongram': {
        return input * 907185;
      }
      case 'usTonmilligram': {
        return input * 907185000;
      }
      case 'usTonmicrogram': {
        return input * 907185000000;
      }
      case 'usTonimperialTon': {
        return input / 1.12;
      }
      case 'usTonusTon': {
        return input;
      }
      case 'usTonstone': {
        return input * 142.85718385714;
      }
      case 'usTonpound': {
        return input * 2000.000573999959897;
      }
      case 'usTonounce': {
        return input * 32000.009183999358356;
      }
      // Stone
      case 'stonemetricTon': {
        return input / 157;
      }
      case 'stonekilogram': {
        return input * 6.35;
      }
      case 'stonegram': {
        return input * 6350;
      }
      case 'stonemilligram': {
        return input * 6350000;
      }
      case 'stonemicrogram': {
        return input * 6350000000;
      }
      case 'stoneimperialTon': {
        return input / 160;
      }
      case 'stoneusTon': {
        return input / 143;
      }
      case 'stonestone': {
        return input;
      }
      case 'stonepound': {
        return input * 14;
      }
      case 'stoneounce': {
        return input * 224;
      }
      //Pound
      case 'poundmetricTon': {
        return input / 2205;
      }
      case 'poundkilogram': {
        return input / 2.205;
      }
      case 'poundgram': {
        return input * 453.59250018100118496;
      }
      case 'poundmilligram': {
        return input * 453592.50018100118496;
      }
      case 'poundmicrogram': {
        return input * 453592500.18100118496;
      }
      case 'poundimperialTon': {
        return input / 2240;
      }
      case 'poundusTon': {
        return input / 2000;
      }
      case 'poundstone': {
        return input / 14;
      }
      case 'poundpound': {
        return input;
      }
      case 'poundounce': {
        return input * 16;
      }
      // Ounce
      case 'ouncemetricTon': {
        return input / 35274;
      }
      case 'ouncekilogram': {
        return input / 35.274;
      }
      case 'ouncegram': {
        return input * 28.34953126131257406;
      }
      case 'ouncemilligram': {
        return input * 28349.531261312575225;
      }
      case 'ouncemicrogram': {
        return input * 28349531.261312575225;
      }
      case 'ounceimperialTon': {
        return input / 35840;
      }
      case 'ounceusTon': {
        return input / 32000;
      }
      case 'ouncestone': {
        return input / 224;
      }
      case 'ouncepound': {
        return input / 16;
      }
      case 'ounceounce': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
}

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
  public static convertTemp(type: string, input: number) {
    switch (type) {
      //Celsuis
      case 'celsiuscelsius': {
        return input;
      }
      case 'celsiusfahrenheit': {
        return input * (9 / 5) + 32;
      }
      case 'celsiuskelvin': {
        return input + 273.15;
      }
      //Fahrenheit
      case 'fahrenheitcelsius': {
        return (input - 32) * (5 / 9);
      }
      case 'fahrenheitfahrenheit': {
        return input;
      }
      case 'fahrenheitkelvin': {
        return (input - 32) * (5 / 9) + 273.15;
      }
      //Kelvin
      case 'kelvincelsius': {
        return input - 273.15;
      }
      case 'kelvinfahrenheit': {
        return (input - 273.15) * (9 / 5) + 32;
      }
      case 'kelvinkelvin': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertVolume(type: string, input: number) {
    switch (type) {
      //US Liquid Gallon
      case 'usLiquidGallonusLiquidGallon': {
        return input;
      }
      case 'usLiquidGallonusLiquidQuart': {
        return input * 4;
      }
      case 'usLiquidGallonusLiquidPint': {
        return input * 8;
      }
      case 'usLiquidGallonusLegalCup': {
        return input * 15.7725;
      }
      case 'usLiquidGallonusFluidOunce': {
        return input * 127.999601536;
      }
      case 'usLiquidGallonusTablespoon': {
        return input * 256;
      }
      case 'usLiquidGallonusTeaspoon': {
        return input * 767.99785754549;
      }
      case 'usLiquidGalloncubicMeter': {
        return input / 264;
      }
      case 'usLiquidGallonliter': {
        return input * 3.785400000013116717;
      }
      case 'usLiquidGallonmilliliter': {
        return input * 3785.400000013116717;
      }
      case 'usLiquidGallonimperialGallon': {
        return input / 1.201;
      }
      case 'usLiquidGallonimperialQuart': {
        return input * 3.3306863700570086273;
      }
      case 'usLiquidGallonimperialPint': {
        return input * 6.6613727401140172546;
      }
      case 'usLiquidGallonimperialCup': {
        return input * 13.322746652465861317;
      }
      case 'usLiquidGallonimperialFluidOunce': {
        return input * 133.22745480228033443;
      }
      case 'usLiquidGallonimperialTablespoon': {
        return input * 213.16383960643136675;
      }
      case 'usLiquidGallonimperialTeaspoon': {
        return input * 639.49151878328302701;
      }
      case 'usLiquidGalloncubicFoot': {
        return input / 7.481;
      }
      case 'usLiquidGalloncubicInch': {
        return input * 231;
      }
      //US Liquid Quart
      case 'usLiquidQuartusLiquidGallon': {
        return input / 4;
      }
      case 'usLiquidQuartusLiquidQuart': {
        return input;
      }
      case 'usLiquidQuartusLiquidPint': {
        return input * 2;
      }
      case 'usLiquidQuartusLegalCup': {
        return input * 3.9431250000136635059;
      }
      case 'usLiquidQuartusLiquidOunce': {
        return input * 32;
      }
      case 'usLiquidQuartusTablespoon': {
        return input * 64;
      }
      case 'usLiquidQuartusTeaspoon': {
        return input * 192;
      }
      case 'usLiquidQuartcubicMeter': {
        return input / 1057;
      }
      case 'usLiquidQuartliter': {
        return input / 1.057;
      }
      case 'usLiquidQuartmilliliter': {
        return input * 946;
      }
      case 'usLiquidQuartimperialGallon': {
        return input / 4.804;
      }
      case 'usLiquidQuartimperialQuart': {
        return input / 1.201;
      }
      case 'usLiquidQuartimperialPint': {
        return input * 1.6653431850285045357;
      }
      case 'usLiquidQuartimperialCup': {
        return input * 3.3306866631164657733;
      }
      case 'usLiquidQuartimperialFluidOunce': {
        return input * 33.306863700570090714;
      }
      case 'usLiquidQuartimperialTablespoon': {
        return input * 53.290959901607855898;
      }
      case 'usLiquidQuartimperialTeaspoon': {
        return input * 159.87287969582078517;
      }
      case 'usLiquidQuartcubicFoot': {
        return input / 29.922;
      }
      case 'usLiquidQuartcubicInch': {
        return input * 57.75;
      }
      //US Liquid Pint
      case 'usLiquidPintusLiquidGallon': {
        return input / 8;
      }
      case 'usLiquidPintusLiquidQuart': {
        return input / 2;
      }
      case 'usLiquidPintusLiquidPint': {
        return input;
      }
      case 'usLiquidPintusLegalCup': {
        return input * 1.97157;
      }
      case 'usLiquidPintusFluidOunce': {
        return input * 16;
      }
      case 'usLiquidPintusTablespoon': {
        return input * 32;
      }
      case 'usLiquidPintusTeaspoon': {
        return input * 96;
      }
      case 'usLiquidPintcubicMeter': {
        return input / 2113;
      }
      case 'usLiquidPintliter': {
        return input / 2.113;
      }
      case 'usLiquidPintmilliliter': {
        return input * 473.176;
      }
      case 'usLiquidPintimperialGallon': {
        return input / 9.608;
      }
      case 'usLiquidPintimperialQuart': {
        return input / 2.402;
      }
      case 'usLiquidPintimperialPint': {
        return input / 1.201;
      }
      case 'usLiquidPintimperialCup': {
        return input * 1.66534685110579;
      }
      case 'usLiquidPintimperialFluidOunce': {
        return input * 16.653467045757519571;
      }
      case 'usLiquidPintimperialTablespoon': {
        return input * 26.645536263536616417;
      }
      case 'usLiquidPintimperialTeaspoon': {
        return input * 79.936608786108450886;
      }
      case 'usLiquidPintcubicFoot': {
        return input / 59.844;
      }
      case 'usLiquidPintcubicInch': {
        return input * 28.874971136550076523;
      }
      //US Legal Cup
      case 'usLegalCupusLiquidGallon': {
        return input / 15.773;
      }
      case 'usLegalCupusLiquidQuart': {
        return input / 3.943;
      }
      case 'usLegalCupusLiquidPint': {
        return input / 1.972;
      }
      case 'usLegalCupusLegalCup': {
        return input;
      }
      case 'usLegalCupusFluidOunce': {
        return input * 8.115;
      }
      case 'usLegalCupusTablespoon': {
        return input * 16.2307;
      }
      case 'usLegalCupusTeaspoon': {
        return input * 48.692;
      }
      case 'usLegalCupcubicMeter': {
        return input / 4167;
      }
      case 'usLegalCupliter': {
        return input / 4.167;
      }
      case 'usLegalCupmilliliter': {
        return input * 240;
      }
      case 'usLegalCupimperialGallon': {
        return input / 18.942;
      }
      case 'usLegalCupimperialQuart': {
        return input / 4.736;
      }
      case 'usLegalCupimperialPint': {
        return input / 2.368;
      }
      case 'usLegalCupimperialCup': {
        return input / 1.184;
      }
      case 'usLegalCupimperialFluidOunce': {
        return input * 8.44682;
      }
      case 'usLegalCupimperialTablespoon': {
        return input * 13.514906409789;
      }
      case 'usLegalCupimperialTeaspoon': {
        return input * 40.544719227083838575;
      }
      case 'usLegalCupcubicFoot': {
        return input / 118;
      }
      case 'usLegalCupcubicInch': {
        return input * 14.645700076596497752;
      }
      //US FluidOunce
      case 'usFluidOunceusLiquidGallon': {
        return input / 128;
      }
      case 'usFluidOunceusLiquidQuart': {
        return input / 32;
      }
      case 'usFluidOunceusLiquidPint': {
        return input / 16;
      }
      case 'usFluidOunceusLegalCup': {
        return input / 8.115;
      }
      case 'usFluidOunceusFluidOunce': {
        return input;
      }
      case 'usFluidOunceusTablespoon': {
        return input * 2;
      }
      case 'usFluidOunceusTeaspoon': {
        return input * 6;
      }
      case 'usFluidOuncecubicMeter': {
        return input / 33814;
      }
      case 'usFluidOunceleter': {
        return input / 33.814;
      }
      case 'usFluidOuncemilliter': {
        return input * 29.574;
      }
      case 'usFluidOunceimperialGallon': {
        return input / 154;
      }
      case 'usFluidOunceimperialQuart': {
        return input / 38.43;
      }
      case 'usFluidOunceimperialPint': {
        return input / 19.215;
      }
      case 'usFluidOunceimperialCup': {
        return input / 9.608;
      }
      case 'usFluidOunceimperialFluidOunce': {
        return input * 1.04084;
      }
      case 'usFluidOunceimperialTablespoon': {
        return input * 1.6653433119464;
      }
      case 'usFluidOunceimperialTeaspoon': {
        return input * 4.996029935557863233;
      }
      case 'usFluidOuncecubicFoot': {
        return input / 958;
      }
      case 'usFluidOuncecubicInch': {
        return input * 1.8046827652218750959;
      }
      //US Tablespoon
      case 'usTablespoonusLiquidGallon': {
        return input / 256;
      }
      case 'usTablespoonusLiquidQuart': {
        return input / 64;
      }
      case 'usTablespoonusLiquidPint': {
        return input / 32;
      }
      case 'usTablespoonusLegalCup': {
        return input / 16.231;
      }
      case 'usTablespoonusFluidOunce': {
        return input / 2;
      }
      case 'usTablespoonusTablespoon': {
        return input;
      }
      case 'usTablespoonusTeaspoon': {
        return input * 3;
      }
      case 'usTablespooncubicMeter': {
        return input / 67628;
      }
      case 'usTablespoonliter': {
        return input / 67.628;
      }
      case 'usTablespoonmilliliter': {
        return input * 14.786725986693920021;
      }
      case 'usTablespoonimperialGallon': {
        return input / 307;
      }
      case 'usTablespoonimperialQuart': {
        return input / 76.861;
      }
      case 'usTablespoonimperialPint': {
        return input / 38.43;
      }
      case 'usTablespoonimperialCup': {
        return input / 19.215;
      }
      case 'usTablespoonimperialFluidOunce': {
        return input / 1.922;
      }
      case 'usTablespoonimperialTablespoon': {
        return input / 1.201;
      }
      case 'usTablespoonimperialTeaspoon': {
        return input * 2.498;
      }
      case 'usTablespooncubicFoot': {
        return input / 1915;
      }
      case 'usTablespooncubicInch': {
        return input / 1.108;
      }
      //US Teaspoon
      case 'usTeaspoonusLiquidGallon': {
        return input / 768;
      }
      case 'usTeaspoonusLiquidQuart': {
        return input / 192;
      }
      case 'usTeaspoonusLiquidPint': {
        return input / 96;
      }
      case 'usTeaspoonusLegalCup': {
        return input / 48.692;
      }
      case 'usTeaspoonusFluidOunce': {
        return input / 6;
      }
      case 'usTeaspoonusTablespoon': {
        return input / 3;
      }
      case 'usTeaspoonusTeaspoon': {
        return input;
      }
      case 'usTeaspooncubicMeter': {
        return input / 202884;
      }
      case 'usTeaspoonliter': {
        return input / 203;
      }
      case 'usTeaspoonmilliliter': {
        return input * 4.929;
      }
      case 'usTeaspoonimperialGallon': {
        return input / 922;
      }
      case 'usTeaspoonimperialQuart': {
        return input / 231;
      }
      case 'usTeaspoonimperialPint': {
        return input / 115;
      }
      case 'usTeaspoonimperialCup': {
        return input / 57.646;
      }
      case 'usTeaspoonimperialFluidOunce': {
        return input / 5.765;
      }
      case 'usTeaspoonimperialTablespoon': {
        return input / 3.603;
      }
      case 'usTeaspoonimperialTeaspoon': {
        return input / 1.201;
      }
      case 'usTeaspooncubicFoot': {
        return input / 5745;
      }
      case 'usTeaspooncubicInch': {
        return input / 3.325;
      }
      //Cubic Meter
      case 'cubicMeterusLiquidGallon': {
        return input * 264.172;
      }
      case 'cubicMeterusLiquidQuart': {
        return input * 1056.68799999699;
      }
      case 'cubicMeterusLiquidPint': {
        return input * 2113.3759999939798035;
      }
      case 'cubicMeterusLegalCup': {
        return input * 4166.6658408333314583;
      }
      case 'cubicMeterusFluidOunce': {
        return input * 33814.015999903684133;
      }
      case 'cubicMeterusTablespoon': {
        return input * 67628.031999807368265;
      }
      case 'cubicMeterusTeaspoon': {
        return input * 202884.16160132433288;
      }
      case 'cubicMetercubicMeter': {
        return input;
      }
      case 'cubicMeterliter': {
        return input * 1000;
      }
      case 'cubicMetermilliliter': {
        return input * 1000000;
      }
      case 'cubicMeterimperialGallon': {
        return input * 220;
      }
      case 'cubicMeterimperialQuart': {
        return input * 880;
      }
      case 'cubicMeterimperialPint': {
        return input * 1760;
      }
      case 'cubicMeterimperialCup': {
        return input * 3520;
      }
      case 'cubicMeterimperialFluidOunce': {
        return input * 35195;
      }
      case 'cubicMeterimperialTablespoon': {
        return input * 56312;
      }
      case 'cubicMeterimperialTeaspoon': {
        return input * 168936;
      }
      case 'cubicMeterimperialcubicFoot': {
        return input * 35.315;
      }
      case 'cubicMeterimperialcubicInch': {
        return input * 61024;
      }
      // Liter
      case 'literusLiquidGallon': {
        return input / 3.785;
      }
      case 'literusLiquidQuart': {
        return input * 1.057;
      }
      case 'literusLiquidPint': {
        return input * 2.113;
      }
      case 'literusLegalCup': {
        return input * 4.167;
      }
      case 'literusFluidOunce': {
        return input * 33.814;
      }
      case 'literusTablespoon': {
        return input * 67.628;
      }
      case 'literusTeaspoon': {
        return input * 203;
      }
      case 'litercubicMeter': {
        return input / 1000;
      }
      case 'literliter': {
        return input;
      }
      case 'litermilliliter': {
        return input * 1000;
      }
      case 'literimperialGallon': {
        return input / 4.546;
      }
      case 'literimperialQuart': {
        return input / 1.137;
      }
      case 'literimperialPint': {
        return input * 1.75975;
      }
      case 'literimperialCup': {
        return input * 3.51950030971673;
      }
      case 'literimperialFluidOunce': {
        return input * 35.19500000043994703;
      }
      case 'literimperialTablespoon': {
        return input * 56.311976733144966545;
      }
      case 'literimperialTeaspoon': {
        return input * 168.93593018992174848;
      }
      case 'litercubicFoot': {
        return input / 28.317;
      }
      case 'litercubicInch': {
        return input * 61.024;
      }
      //Milliliter
      case 'milliliterusLiquidGallon': {
        return input / 3785;
      }
      case 'milliliterusLiquidQuart': {
        return input / 946;
      }
      case 'milliliterusLiquidPint': {
        return input / 473;
      }
      case 'milliliterusLegalCup': {
        return input / 240;
      }
      case 'milliliterusFluidOunce': {
        return input / 29.574;
      }
      case 'milliliterusTablespoon': {
        return input / 14.787;
      }
      case 'milliliterusTeaspoon': {
        return input / 4.929;
      }
      case 'millilitercubicMeter': {
        return input / 1000000;
      }
      case 'milliliterliter': {
        return input / 1000;
      }
      case 'millilitermilliliter': {
        return input;
      }
      case 'milliliterimperialGallon': {
        return input / 4546;
      }
      case 'milliliterimperialQuart': {
        return input / 1137;
      }
      case 'milliliterimperialPint': {
        return input / 568;
      }
      case 'milliliterimperialCup': {
        return input / 284;
      }
      case 'milliliterimperialFluidOunce': {
        return input / 28.413;
      }
      case 'milliliterimperialTablespoon': {
        return input / 17.758;
      }
      case 'milliliterimperialTeaspoon': {
        return input / 5.919;
      }
      case 'millilitercubicFoot': {
        return input / 28317;
      }
      case 'millilitercubicInch': {
        return input / 16.387;
      }
      //Imperial Gallon
      case 'imperialGallonusLiquidGallon': {
        return input * 1.201;
      }
      case 'imperialGallonusLiquidQuart': {
        return input * 4.804;
      }
      case 'imperialGallonusLiquidPint': {
        return input * 9.608;
      }
      case 'imperialGallonusLegalCup': {
        return input * 18.942;
      }
      case 'imperialGallonusFluidOunce': {
        return input * 154;
      }
      case 'imperialGallonusTablespoon': {
        return input * 307;
      }
      case 'imperialGallonusTeaspoon': {
        return input * 922;
      }
      case 'imperialGalloncubicMeter': {
        return input / 220;
      }
      case 'imperialGallonliter': {
        return input * 4.546;
      }
      case 'imperialGallonmilliliter': {
        return input * 4546;
      }
      case 'imperialGallonimperialGallon': {
        return input;
      }
      case 'imperialGallonimperialQuart': {
        return input * 4;
      }
      case 'imperialGallonimperialPint': {
        return input * 8;
      }
      case 'imperialGallonimperialCup': {
        return input * 16;
      }
      case 'imperialGallonimperialFluidOunce': {
        return input * 160;
      }
      case 'imperialGallonimperialTablespoon': {
        return input * 256;
      }
      case 'imperialGallonimperialTeaspoon': {
        return input * 768;
      }
      case 'imperialGalloncubicFoot': {
        return input / 6.229;
      }
      case 'imperialGalloncubicInch': {
        return input * 277;
      }
      //Imperial Quart
      case 'imperialQuartusLiquidGallon': {
        return input / 3.331;
      }
      case 'imperialQuartusLiquidQuart': {
        return input * 1.201;
      }
      case 'imperialQuartusLiquidPint': {
        return input * 2.402;
      }
      case 'imperialQuartusLegalCup': {
        return input * 4.736;
      }
      case 'imperialQuartusFluidOunce': {
        return input * 38.43;
      }
      case 'imperialQuartusTablespoon': {
        return input * 76.861;
      }
      case 'imperialQuartusTeaspoon': {
        return input * 231;
      }
      case 'imperialQuartcubicMeter': {
        return input / 880;
      }
      case 'imperialQuartliter': {
        return input * 1.13652;
      }
      case 'imperialQuartmilliliter': {
        return input * 1136.51999999146;
      }
      case 'imperialQuartimperialGallon': {
        return input / 4;
      }
      case 'imperialQuartimperialQuart': {
        return input;
      }
      case 'imperialQuartimperialPint': {
        return input * 2;
      }
      case 'imperialQuartimperialCup': {
        return input * 4;
      }
      case 'imperialQuartimperialFluidOunce': {
        return input * 40;
      }
      case 'imperialQuartimperialTablespoon': {
        return input * 64;
      }
      case 'imperialQuartimperialTeaspoon': {
        return input * 192;
      }
      case 'imperialQuartcubicFoot': {
        return input / 24.915;
      }
      case 'imperialQuartcubicInch': {
        return input * 69.355;
      }
      // Imperial Pint
      case 'imperialPintusLiquidGallon': {
        return input / 6.661;
      }
      case 'imperialPintusLiquidQuart': {
        return input / 1.665;
      }
      case 'imperialPintusLiquidPint': {
        return input * 1.201;
      }
      case 'imperialPintusLegalCup': {
        return input * 2.368;
      }
      case 'imperialPintusFluidOunce': {
        return input * 19.215;
      }
      case 'imperialPintusTablespoon': {
        return input * 38.43;
      }
      case 'imperialPintusTeaspoon': {
        return input * 115;
      }
      case 'imperialPintcubicMeter': {
        return input / 1760;
      }
      case 'imperialPintliter': {
        return input / 1.76;
      }
      case 'imperialPintmilliliter': {
        return input * 568;
      }
      case 'imperialPintimperialGallon': {
        return input / 8;
      }
      case 'imperialPintimperialQuart': {
        return input / 2;
      }
      case 'imperialPintimperialPint': {
        return input;
      }
      case 'imperialPintimperialCup': {
        return input * 2;
      }
      case 'imperialPintimperialFluidOunce': {
        return input * 20;
      }
      case 'imperialPintimperialTablespoon': {
        return input * 32;
      }
      case 'imperialPintimperialTeaspoon': {
        return input * 96;
      }
      case 'imperialPintcubicFoot': {
        return input / 49.831;
      }
      case 'imperialPintcubicInch': {
        return input * 34.677;
      }
      // Imperial Cup
      case 'imperialCupusLiquidGallon': {
        return input / 13.323;
      }
      case 'imperialCupusLiquidQuart': {
        return input / 3.331;
      }
      case 'imperialCupusLiquidPint': {
        return input / 1.665;
      }
      case 'imperialCupusLegalCup': {
        return input * 1.184;
      }
      case 'imperialCupusFluidOunce': {
        return input * 9.608;
      }
      case 'imperialCupusTablespoon': {
        return input * 19.215;
      }
      case 'imperialCupusTeaspoon': {
        return input * 57.646;
      }
      case 'imperialCupcubicMeter': {
        return input / 3520;
      }
      case 'imperialCupliter': {
        return input / 3.52;
      }
      case 'imperialCupmilliliter': {
        return input * 284;
      }
      case 'imperialCupimperialGallon': {
        return input / 16;
      }
      case 'imperialCupimperialQuart': {
        return input / 4;
      }
      case 'imperialCupimperialPint': {
        return input / 2;
      }
      case 'imperialCupimperialCup': {
        return input;
      }
      case 'imperialCupimperialFluidOunce': {
        return input * 10;
      }
      case 'imperialCupimperialTablespoon': {
        return input * 16;
      }
      case 'imperialCupimperialTeaspoon': {
        return input * 48;
      }
      case 'imperialCupcubicFoot': {
        return input / 99.661;
      }
      case 'imperialCupcubicInch': {
        return input * 17.339;
      }
      // Imperial Fluid Ounce
      case 'imperialFluidOunceusLiquidGallon': {
        return input / 133;
      }
      case 'imperialFluidOunceusLiquidQuart': {
        return input / 33.307;
      }
      case 'imperialFluidOunceusLiquidPint': {
        return input / 16.653;
      }
      case 'imperialFluidOunceusLegalCup': {
        return input / 8.447;
      }
      case 'imperialFluidOunceusFluidOunce': {
        return input / 1.041;
      }
      case 'imperialFluidOunceusTablespoon': {
        return input * 1.922;
      }
      case 'imperialFluidOunceusTeaspoon': {
        return input * 5.765;
      }
      case 'imperialFluidOuncecubicMeter': {
        return input / 35195;
      }
      case 'imperialFluidOunceliter': {
        return input / 35.195;
      }
      case 'imperialFluidOuncemilliliter': {
        return input * 28.413;
      }
      case 'imperialFluidOunceimperialGallon': {
        return input / 160;
      }
      case 'imperialFluidOunceimperialQuart': {
        return input / 40;
      }
      case 'imperialFluidOunceimperialPint': {
        return input / 20;
      }
      case 'imperialFluidOunceimperialCup': {
        return input / 10;
      }
      case 'imperialFluidOunceimperialFluidOunce': {
        return input;
      }
      case 'imperialFluidOunceimperialTablespoon': {
        return input * 1.6;
      }
      case 'imperialFluidOunceimperialTeaspoon': {
        return input * 4.8;
      }
      case 'imperialFluidOuncecubicFoot': {
        return input / 997;
      }
      case 'imperialFluidOuncecubicInch': {
        return input * 1.734;
      }
      //Imperial Tablespoon
      case 'imperialTablespoonusLiquidGallon': {
        return input / 213;
      }
      case 'imperialTablespoonusLiquidQuart': {
        return input / 53.291;
      }
      case 'imperialTablespoonusLiquidPint': {
        return input / 26.646;
      }
      case 'imperialTablespoonusLegalCup': {
        return input / 13.515;
      }
      case 'imperialTablespoonusFluidOunce': {
        return input / 1.665;
      }
      case 'imperialTablespoonusTablespoon': {
        return input * 1.201;
      }
      case 'imperialTablespoonusTeaspoon': {
        return input * 3.603;
      }
      case 'imperialTablespooncubicMeter': {
        return input / 56312;
      }
      case 'imperialTablespoonliter': {
        return input / 56.312;
      }
      case 'imperialTablespoonmilliliter': {
        return input * 17.758;
      }
      case 'imperialTablespoonimperialGallon': {
        return input / 256;
      }
      case 'imperialTablespoonimperialQuart': {
        return input / 64;
      }
      case 'imperialTablespoonimperialPint': {
        return input / 32;
      }
      case 'imperialTablespoonimperialCup': {
        return input / 16;
      }
      case 'imperialTablespoonimperialFluidOunce': {
        return input / 1.6;
      }
      case 'imperialTablespoonimperialTablespoon': {
        return input;
      }
      case 'imperialTablespoonimperialTeaspoon': {
        return input * 3;
      }
      case 'imperialTablespooncubicFoot': {
        return input / 1595;
      }
      case 'imperialTablespooncubicInch': {
        return input * 1.084;
      }
      //Imperial Teaspoon
      case 'imperialTeaspoonusLiquidGallon': {
        return input / 639;
      }
      case 'imperialTeaspoonusLiquidQuart': {
        return input / 160;
      }
      case 'imperialTeaspoonusLiquidPint': {
        return input / 79.937;
      }
      case 'imperialTeaspoonusLegalCup': {
        return input / 40.545;
      }
      case 'imperialTeaspoonusFluidOunce': {
        return input / 4.996;
      }
      case 'imperialTeaspoonusTablespoon': {
        return input / 2.498;
      }
      case 'imperialTeaspoonusTeaspoon': {
        return input * 1.201;
      }
      case 'imperialTeaspooncubicMeter': {
        return input / 168936;
      }
      case 'imperialTeaspoonliter': {
        return input / 169;
      }
      case 'imperialTeaspoonmilliliter': {
        return input * 5.919;
      }
      case 'imperialTeaspoonimperialGallon': {
        return input / 768;
      }
      case 'imperialTeaspoonimperialQuart': {
        return input / 192;
      }
      case 'imperialTeaspoonimperialPint': {
        return input / 96;
      }
      case 'imperialTeaspoonimperialCup': {
        return input / 48;
      }
      case 'imperialTeaspoonimperialFluidOunce': {
        return input / 4.8;
      }
      case 'imperialTeaspoonimperialTablespoon': {
        return input / 3;
      }
      case 'imperialTeaspoonimperialTeaspoon': {
        return input;
      }
      case 'imperialTeaspooncubicFoot': {
        return input / 4784;
      }
      case 'imperialTeaspooncubicInch': {
        return input / 2.768;
      }
      //Cubic Foot
      case 'cubicFootusLiquidGallon': {
        return input * 7.481;
      }
      case 'cubicFootusLiquidQuart': {
        return input * 29.922;
      }
      case 'cubicFootusLiquidPint': {
        return input * 59.844;
      }
      case 'cubicFootusLegalCup': {
        return input * 118;
      }
      case 'cubicFootusFluidOunce': {
        return input * 958;
      }
      case 'cubicFootusTablespoon': {
        return input * 1915;
      }
      case 'cubicFootusTeaspoon': {
        return input * 5745;
      }
      case 'cubicFootcubicMeter': {
        return input / 35.315;
      }
      case 'cubicFootliter': {
        return input * 28.317;
      }
      case 'cubicFootmilliliter': {
        return input * 28317;
      }
      case 'cubicFootimperialGallon': {
        return input * 6.229;
      }
      case 'cubicFootimperialQuart': {
        return input * 24.915;
      }
      case 'cubicFootimperialPint': {
        return input * 49.831;
      }
      case 'cubicFootimperialCup': {
        return input * 99.661;
      }
      case 'cubicFootimperialFluidOunce': {
        return input * 997;
      }
      case 'cubicFootimperialTablespoon': {
        return input * 1595;
      }
      case 'cubicFootimperialTeaspoon': {
        return input * 4784;
      }
      case 'cubicFootcubicFoot': {
        return input;
      }
      case 'cubicFootcubicInch': {
        return input * 1728;
      }
      // Cubic Inch
      case 'cubicInchusLiquidGallon': {
        return input / 231;
      }
      case 'cubicInchusLiquidQuart': {
        return input / 57.75;
      }
      case 'cubicInchusLiquidPint': {
        return input / 28.875;
      }
      case 'cubicInchusLegalCup': {
        return input / 14.646;
      }
      case 'cubicInchusFluidOunce': {
        return input / 1.805;
      }
      case 'cubicInchusTablespoon': {
        return input * 1.108;
      }
      case 'cubicInchusTeaspoon': {
        return input * 3.325;
      }
      case 'cubicInchcubicMeter': {
        return input / 61024;
      }
      case 'cubicInchliter': {
        return input / 61.024;
      }
      case 'cubicInchmilliliter': {
        return input * 16.387;
      }
      case 'cubicInchimperialGallon': {
        return input / 277;
      }
      case 'cubicInchimperialQuart': {
        return input / 69.355;
      }
      case 'cubicInchimperialPint': {
        return input / 34.677;
      }
      case 'cubicInchimperialCup': {
        return input / 17.339;
      }
      case 'cubicInchimperialFluidOunce': {
        return input / 1.734;
      }
      case 'cubicInchimperialTablespoon': {
        return input / 1.084;
      }
      case 'cubicInchimperialTeaspoon': {
        return input * 2.768;
      }
      case 'cubicInchcubicFoot': {
        return input / 1728;
      }
      case 'cubicInchcubicInch': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertArea(type: string, input: number) {
    switch (type) {
      //Square Kilometer
      case 'squareKilometersquareKilometer': {
        return input;
      }
      case 'squareKilometersquareMeter': {
        return input * 1000000;
      }
      case 'squareKilometersquareMile': {
        return input / 2.59;
      }
      case 'squareKilometersquareYard': {
        return input * 1196000;
      }
      case 'squareKilometersquareFoot': {
        return input * 10760000;
      }
      case 'squareKilometersquareInch': {
        return input * 1550000000;
      }
      case 'squareKilometerhectare': {
        return input * 100;
      }
      case 'squareKilometeracre': {
        return input * 247.105;
      }
      //Square Meter
      case 'squareMetersquareKilometer': {
        return input / 1000000;
      }
      case 'squareMetersquareMeter': {
        return input;
      }
      case 'squareMetersquareMile': {
        return input / 2590000;
      }
      case 'squareMetersquareYard': {
        return input * 1.196;
      }
      case 'squareMetersquareFoot': {
        return input * 10.764;
      }
      case 'squareMetersquareInch': {
        return input * 1550;
      }
      case 'squareMeterhectare': {
        return input / 100000;
      }
      case 'squareMeteracre': {
        return input / 4047;
      }
      //Square Mile
      case 'squareMilesquareKilometer': {
        return input * 2.59;
      }
      case 'squareMilesquareMeter': {
        return input * 2590000;
      }
      case 'squareMilesquareMile': {
        return input;
      }
      case 'squareMilesquareYard': {
        return input * 3098000;
      }
      case 'squareMilesquareFoot': {
        return input * 27880000;
      }
      case 'squareMilesquareInch': {
        return input * 4014000000;
      }
      case 'squareMilehectare': {
        return input * 259;
      }
      case 'squareMileacre': {
        return input * 640;
      }
      // Square Yard
      case 'squareYardsquareKilometer': {
        return input / 1196000;
      }
      case 'squareYardsquareMeter': {
        return input / 1.196;
      }
      case 'squareYardsquareMile': {
        return input / 3098000;
      }
      case 'squareYardsquareYard': {
        return input;
      }
      case 'squareYardsquareFoot': {
        return input * 9;
      }
      case 'squareYardsquareInch': {
        return input * 1296;
      }
      case 'squareYardhectare': {
        return input / 11960;
      }
      case 'squareYardacre': {
        return input / 4840;
      }
      // Square Foot
      case 'squareFootsquareKilometer': {
        return input / 10760000;
      }
      case 'squareFootsquareMeter': {
        return input / 10.764;
      }
      case 'squareFootsquareMile': {
        return input / 27880000;
      }
      case 'squareFootsquareYard': {
        return input / 9;
      }
      case 'squareFootsquareFoot': {
        return input;
      }
      case 'squareFootsquareInch': {
        return input * 144;
      }
      case 'squareFoothectare': {
        return input / 107639;
      }
      case 'squareFootacre': {
        return input / 43560;
      }
      // Square Inch
      case 'squareInchsquareKilometer': {
        return input / 1550000000;
      }
      case 'squareInchsquareMeter': {
        return input / 1550;
      }
      case 'squareInchsquareMile': {
        return input / 4014000000;
      }
      case 'squareInchsquareYard': {
        return input / 1296;
      }
      case 'squareInchsquareFoot': {
        return input / 144;
      }
      case 'squareInchsquareInch': {
        return input;
      }
      case 'squareInchhectare': {
        return input / 15500000;
      }
      case 'squareInchacre': {
        return input / 6273000;
      }
      // Hectare
      case 'hectaresquareKilometer': {
        return input / 100;
      }
      case 'hectaresquareMeter': {
        return input * 10000;
      }
      case 'hectaresquareMile': {
        return input / 259;
      }
      case 'hectaresquareYard': {
        return input * 11959.9;
      }
      case 'hectaresquareFoot': {
        return input * 107639.100001464;
      }
      case 'hectaresquareInch': {
        return input * 15500000;
      }
      case 'hectarehectare': {
        return input;
      }
      case 'hectareacre': {
        return input * 2.471;
      }
      // Acre
      case 'acresquareKilometer': {
        return input / 247;
      }
      case 'acresquareMeter': {
        return input * 4047;
      }
      case 'acresquareMile': {
        return input / 640;
      }
      case 'acresquareYard': {
        return input * 4840;
      }
      case 'acresquareFoot': {
        return input * 43560;
      }
      case 'acresquareInch': {
        return input * 6273000;
      }
      case 'acrehectare': {
        return input / 2.471;
      }
      case 'acreacre': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertSpeed(type: string, input: number) {
    switch (type) {
      // Miles per hour
      case 'MPHMPH': {
        return input;
      }
      case 'MPHFPS': {
        return input * 1.46667;
      }
      case 'MPHMPS': {
        return input / 2.237;
      }
      case 'MPHKPH': {
        return input * 1.609;
      }
      case 'MPHknot': {
        return input / 1.151;
      }
      // Foot per second
      case 'FPSMPH': {
        return input / 1.46667;
      }
      case 'FPSFPS': {
        return input;
      }
      case 'FPSMPS': {
        return input / 3.281;
      }
      case 'FPSKPH': {
        return input * 1.097;
      }
      case 'FPSknot': {
        return input / 1.688;
      }
      // Meter per socond
      case 'MPSMPH': {
        return input * 2.23694;
      }
      case 'MPSFPS': {
        return input * 3.2808453346457;
      }
      case 'MPSMPS': {
        return input;
      }
      case 'MPSKPH': {
        return input * 3.6;
      }
      case 'MPSknot': {
        return input * 1.9438477170141412742;
      }
      // Kilometer per hour
      case 'KPHMPH': {
        return input / 1.609;
      }
      case 'KPHFPS': {
        return input / 1.097;
      }
      case 'KPHMPS': {
        return input / 3.6;
      }
      case 'KPHKPH': {
        return input;
      }
      case 'KPHknot': {
        return input / 1.852;
      }
      // Knot
      case 'knotMPH': {
        return input / 1.609;
      }
      case 'knotFPS': {
        return input / 1.097;
      }
      case 'knotMPS': {
        return input / 3.6;
      }
      case 'knotKPH': {
        return input;
      }
      case 'knotknot': {
        return input / 1.852;
      }
      default: {
        return input;
      }
    }
  }
  public static convertAngle(type: string, input: number) {
    switch (type) {
      // Degree
      case 'degreedegree': {
        return input;
      }
      case 'degreegradian': {
        return input * (200 / 180);
      }
      case 'degreemilliradian': {
        return input * ((1000 * Math.PI) / 180);
      }
      case 'degreeminuteArc': {
        return input * 60;
      }
      case 'degreeradian': {
        return input * (Math.PI / 180);
      }
      case 'degreesecondArc': {
        return input * 3600;
      }
      // Gradian
      case 'gradiandegree': {
        return input * (180 / 200);
      }
      case 'gradiangradian': {
        return input;
      }
      case 'gradianmilliradian': {
        return input * ((1000 * Math.PI) / 200);
      }
      case 'gradianminuteArc': {
        return input * 54;
      }
      case 'gradianradian': {
        return input * (Math.PI / 200);
      }
      case 'gradiansecondArc': {
        return input * 3240;
      }
      // Milliradian
      case 'milliradiandegree': {
        return input * (180 / (1000 * Math.PI));
      }
      case 'milliradiangradian': {
        return input * (200 / (1000 * Math.PI));
      }
      case 'milliradianmilliradian': {
        return input;
      }
      case 'milliradianminuteArc': {
        return input * ((60 * 180) / (1000 * Math.PI));
      }
      case 'milliradianradian': {
        return input / 1000;
      }
      case 'milliradiansecondArc': {
        return input * ((3600 * 180) / (1000 * Math.PI));
      }
      // Minute of Arc
      case 'minuteArcdegree': {
        return input / 60;
      }
      case 'minuteArcgradian': {
        return input / 54;
      }
      case 'minuteArcmilliradian': {
        return input * ((1000 * Math.PI) / (60 * 180));
      }
      case 'minuteArcminuteArc': {
        return input;
      }
      case 'minuteArcradian': {
        return input * (Math.PI / (60 * 180));
      }
      case 'minuteArcsecondArc': {
        return input * 60;
      }
      // Radian
      case 'radiandegree': {
        return input * (180 / Math.PI);
      }
      case 'radiangradian': {
        return input * (200 / Math.PI);
      }
      case 'radianmilliradian': {
        return input * 1000;
      }
      case 'radianminuteArc': {
        return input * ((60 * 180) / Math.PI);
      }
      case 'radianradian': {
        return input;
      }
      case 'radiansecondArc': {
        return input * ((3600 * 180) / Math.PI);
      }
      //Second of Arc
      case 'secondArcdegree': {
        return input / 3600;
      }
      case 'secondArcgradian': {
        return input / 3240;
      }
      case 'secondArcmilliradian': {
        return input * ((1000 * Math.PI) / (180 * 3600));
      }
      case 'secondArcminuteArc': {
        return input / 60;
      }
      case 'secondArcradian': {
        return input * (Math.PI / (180 * 3600));
      }
      case 'secondArcsecondArc': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertTime(type: string, input: number) {
    switch (type) {
      // Nanosecond
      case 'nanosecondnanosecond': {
        return input;
      }
      case 'nanosecondmicrosecond': {
        return input / 1000;
      }
      case 'nanosecondmillisecond': {
        return input / 1000000;
      }
      case 'nanosecondsecond': {
        return input / 1000000000;
      }
      case 'nanosecondminute': {
        return input / 60000000000;
      }
      case 'nanosecondhour': {
        return input / 3600000000000;
      }
      case 'nanosecondday': {
        return input / 86400000000000;
      }
      case 'nanosecondweek': {
        return input / 604800000000000;
      }
      case 'nanosecondmonth': {
        return input / 2628000000000000;
      }
      case 'nanosecondyear': {
        return input / 31540000000000000;
      }
      case 'nanoseconddecade': {
        return input / 315400000000000000;
      }
      case 'nanosecondcentury': {
        return input / 3154000000000000000;
      }
      //Microsecond
      case 'microsecondnanosecond': {
        return input * 1000;
      }
      case 'microsecondmicrosecond': {
        return input;
      }
      case 'microsecondmillisecond': {
        return input / 1000;
      }
      case 'microsecondsecond': {
        return input / 1000000;
      }
      case 'microsecondminute': {
        return input / 60000000;
      }
      case 'microsecondhour': {
        return input / 3600000000;
      }
      case 'microsecondday': {
        return input / 86400000000;
      }
      case 'microsecondweek': {
        return input / 604800000000;
      }
      case 'microsecondmonth': {
        return input / 2628000000000;
      }
      case 'microsecondyear': {
        return input / 31540000000000;
      }
      case 'microseconddecade': {
        return input / 315400000000000;
      }
      case 'microsecondcentury': {
        return input / 3154000000000000;
      }
      // Millisecond
      case 'millisecondnanosecond': {
        return input * 1000000;
      }
      case 'millisecondmicrosecond': {
        return input * 1000;
      }
      case 'millisecondmillisecond': {
        return input;
      }
      case 'millisecondsecond': {
        return input / 1000;
      }
      case 'millisecondminute': {
        return input / 60000;
      }
      case 'millisecondhour': {
        return input / 3600000;
      }
      case 'millisecondday': {
        return input / 86400000;
      }
      case 'millisecondweek': {
        return input / 604800000;
      }
      case 'millisecondmonth': {
        return input / 2628000000;
      }
      case 'millisecondyear': {
        return input / 31540000000;
      }
      case 'milliseconddecade': {
        return input / 315400000000;
      }
      case 'millisecondcentury': {
        return input / 3154000000000;
      }
      // Second
      case 'secondnanosecond': {
        return input * 1000000000;
      }
      case 'secondmicrosecond': {
        return input * 1000000;
      }
      case 'secondmillisecond': {
        return input * 1000;
      }
      case 'secondsecond': {
        return input;
      }
      case 'secondminute': {
        return input / 60;
      }
      case 'secondhour': {
        return input / 3600;
      }
      case 'secondday': {
        return input / 86400;
      }
      case 'secondweek': {
        return input / 604800;
      }
      case 'secondmonth': {
        return input / 2628000;
      }
      case 'secondyear': {
        return input / 31540000;
      }
      case 'seconddecade': {
        return input / 315400000;
      }
      case 'secondcentury': {
        return input / 3154000000;
      }
      //Minute
      case 'minutenanosecond': {
        return input * 60000000000;
      }
      case 'minutemicrosecond': {
        return input * 60000000;
      }
      case 'minutemillisecond': {
        return input * 60000;
      }
      case 'minutesecond': {
        return input * 60;
      }
      case 'minuteminute': {
        return input;
      }
      case 'minutehour': {
        return input / 60;
      }
      case 'minuteday': {
        return input / 1440;
      }
      case 'minuteweek': {
        return input / 10080;
      }
      case 'minutemonth': {
        return input / 43800;
      }
      case 'minuteyear': {
        return input / 525600;
      }
      case 'minutedecade': {
        return input / 5256000;
      }
      case 'minutecentury': {
        return input / 52560000;
      }
      //Hour
      case 'hournanosecond': {
        return input * 3600000000000;
      }
      case 'hourmicrosecond': {
        return input * 3600000000;
      }
      case 'hourmillisecond': {
        return input * 3600000;
      }
      case 'hoursecond': {
        return input * 3600;
      }
      case 'hourminute': {
        return input * 60;
      }
      case 'hourhour': {
        return input;
      }
      case 'hourday': {
        return input / 24;
      }
      case 'hourweek': {
        return input / 168;
      }
      case 'hourmonth': {
        return input / 730;
      }
      case 'houryear': {
        return input / 8760;
      }
      case 'hourdecade': {
        return input / 87600;
      }
      case 'hourcentury': {
        return input / 876000;
      }
      //Day
      case 'daynanosecond': {
        return input * 86400000000000;
      }
      case 'daymicrosecond': {
        return input * 86400000000;
      }
      case 'daymillisecond': {
        return input * 86400000;
      }
      case 'daysecond': {
        return input * 86400;
      }
      case 'dayminute': {
        return input * 1440;
      }
      case 'dayhour': {
        return input * 24;
      }
      case 'dayday': {
        return input;
      }
      case 'dayweek': {
        return input / 7;
      }
      case 'daymonth': {
        return input / 30.417;
      }
      case 'dayyear': {
        return input / 365;
      }
      case 'daydecade': {
        return input / 3650;
      }
      case 'daycentury': {
        return input / 36500;
      }
      //Week
      case 'weeknanosecond': {
        return input * 86400000000000;
      }
      case 'weekmicrosecond': {
        return input * 86400000000;
      }
      case 'weekmillisecond': {
        return input * 86400000;
      }
      case 'weeksecond': {
        return input * 604800;
      }
      case 'weekminute': {
        return input * 10080;
      }
      case 'weekhour': {
        return input * 168;
      }
      case 'weekday': {
        return input * 7;
      }
      case 'weekweek': {
        return input;
      }
      case 'weekmonth': {
        return input / 4.345;
      }
      case 'weekyear': {
        return input / 52.143;
      }
      case 'weekdecade': {
        return input / 521;
      }
      case 'weekcentury': {
        return input / 5214;
      }
      // Month
      case 'monthnanosecond': {
        return input * 2628000000000000;
      }
      case 'monthmicrosecond': {
        return input * 2628000000000;
      }
      case 'monthmillisecond': {
        return input * 2628000000;
      }
      case 'monthsecond': {
        return input * 2628000;
      }
      case 'monthminute': {
        return input * 43800;
      }
      case 'monthhour': {
        return input * 730;
      }
      case 'monthday': {
        return input * 30.417;
      }
      case 'monthweek': {
        return input * 4.345;
      }
      case 'monthmonth': {
        return input;
      }
      case 'monthyear': {
        return input / 12;
      }
      case 'monthdecade': {
        return input / 120;
      }
      case 'monthcentury': {
        return input / 1200;
      }
      //Year
      case 'yearnanosecond': {
        return input * 31540000000000000;
      }
      case 'yearmicrosecond': {
        return input * 31540000000000;
      }
      case 'yearmillisecond': {
        return input * 31540000000;
      }
      case 'yearsecond': {
        return input * 31540000;
      }
      case 'yearminute': {
        return input * 525600;
      }
      case 'yearhour': {
        return input * 8760;
      }
      case 'yearday': {
        return input * 365;
      }
      case 'yearweek': {
        return input * 52.143;
      }
      case 'yearmonth': {
        return input * 12;
      }
      case 'yearyear': {
        return input;
      }
      case 'yeardecade': {
        return input / 10;
      }
      case 'yearcentury': {
        return input / 100;
      }
      //Decade
      case 'decadenanosecond': {
        return input * 315400000000000000;
      }
      case 'decademicrosecond': {
        return input * 315400000000000;
      }
      case 'decademillisecond': {
        return input * 315400000000;
      }
      case 'decadesecond': {
        return input * 315400000;
      }
      case 'decademinute': {
        return input * 5256000;
      }
      case 'decadehour': {
        return input * 87600;
      }
      case 'decadeday': {
        return input * 3650;
      }
      case 'decadeweek': {
        return input * 521.43;
      }
      case 'decademonth': {
        return input * 120;
      }
      case 'decadeyear': {
        return input * 10;
      }
      case 'decadedecade': {
        return input;
      }
      case 'decadecentury': {
        return input / 10;
      }
      //Century
      case 'centurynanosecond': {
        return input * 3154000000000000000;
      }
      case 'centurymicrosecond': {
        return input * 3154000000000000;
      }
      case 'centurymillisecond': {
        return input * 3154000000000;
      }
      case 'centurysecond': {
        return input * 3154000000;
      }
      case 'centuryminute': {
        return input * 52560000;
      }
      case 'centuryhour': {
        return input * 876000;
      }
      case 'centuryday': {
        return input * 36500;
      }
      case 'centuryweek': {
        return input * 5214.3;
      }
      case 'centurymonth': {
        return input * 1200;
      }
      case 'centuryyear': {
        return input * 100;
      }
      case 'centurydecade': {
        return input * 10;
      }
      case 'centurycentury': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertPressure(type: string, input: number) {
    switch (type) {
      // Bar
      case 'barbar': {
        return input;
      }
      case 'barpascal': {
        return input * 100000;
      }
      case 'barpound-force': {
        return input * 14.5038;
      }
      case 'baratmosphere': {
        return input / 1.013;
      }
      case 'bartorr': {
        return input * 750;
      }
      // Pascal
      case 'pascalbar': {
        return input / 100000;
      }
      case 'pascalpascal': {
        return input;
      }
      case 'pascalpound-force': {
        return input / 6895;
      }
      case 'pascalatmosphere': {
        return input / 101325;
      }
      case 'pascaltorr': {
        return input / 133;
      }
      // Pound-force per Square Inch
      case 'pound-forcebar': {
        return input / 14.504;
      }
      case 'pound-forcepascal': {
        return input * 6895;
      }
      case 'pound-forcepound-force': {
        return input;
      }
      case 'pound-forceatmosphere': {
        return input / 14.696;
      }
      case 'pound-forcetorr': {
        return input / 51.715;
      }
      // Atmosphere
      case 'atmospherebar': {
        return input * 1.013;
      }
      case 'atmospherepascal': {
        return input * 101325;
      }
      case 'atmospherepound-force': {
        return input * 14.696;
      }
      case 'atmosphereatmosphere': {
        return input;
      }
      case 'atmospheretorr': {
        return input * 760;
      }
      // Torr
      case 'torrbar': {
        return input / 750;
      }
      case 'torrpascal': {
        return input * 133;
      }
      case 'torrpound-force': {
        return input / 51.715;
      }
      case 'torratmosphere': {
        return input / 760;
      }
      case 'torrtorr': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertDigStorage(type: string, input: number) {
    switch (type) {
      //Bit
      case 'bitbit': {
        return input;
      }
      case 'bitkilobit': {
        return input / 1000;
      }
      case 'bitmegabit': {
        return input / 1000000;
      }
      case 'bitgigabit': {
        return input / 1000000000;
      }
      case 'bitterabit': {
        return input / 1000000000000;
      }
      case 'bitpetabit': {
        return input / 1000000000000000;
      }
      case 'bitbyte': {
        return input / 8;
      }
      case 'bitkilobyte': {
        return input / 8000;
      }
      case 'bitmegabyte': {
        return input / 8000000;
      }
      case 'bitgigabyte': {
        return input / 8000000000;
      }
      case 'bitterabyte': {
        return input / 8000000000000;
      }
      case 'bitpetabyte': {
        return input / 8000000000000000;
      }
      //Kilobit
      case 'kilobitbit': {
        return input * 1000;
      }
      case 'kilobitkilobit': {
        return input;
      }
      case 'kilobitmegabit': {
        return input / 1000;
      }
      case 'kilobitgigabit': {
        return input / 1000000;
      }
      case 'kilobitterabit': {
        return input / 1000000000;
      }
      case 'kilobitpetabit': {
        return input / 1000000000000;
      }
      case 'kilobitbyte': {
        return input * 125;
      }
      case 'kilobitkilobyte': {
        return input / 8;
      }
      case 'kilobitmegabyte': {
        return input / 8000;
      }
      case 'kilobitgigabyte': {
        return input / 8000000;
      }
      case 'kilobitterabyte': {
        return input / 8000000000;
      }
      case 'kilobitpetabyte': {
        return input / 8000000000000;
      }
      // Megabit
      case 'megabitbit': {
        return input * 1000000;
      }
      case 'megabitkilobit': {
        return input * 1000;
      }
      case 'megabitmegabit': {
        return input;
      }
      case 'megabitgigabit': {
        return input / 1000;
      }
      case 'megabitterabit': {
        return input / 1000000;
      }
      case 'megabitpetabit': {
        return input / 1000000000;
      }
      case 'megabitbyte': {
        return input * 125000;
      }
      case 'megabitkilobyte': {
        return input * 125;
      }
      case 'megabitmegabyte': {
        return input / 8;
      }
      case 'megabitgigabyte': {
        return input / 8000;
      }
      case 'megabitterabyte': {
        return input / 8000000;
      }
      case 'megabitpetabyte': {
        return input / 8000000000;
      }
      //Gigabit
      case 'gigabitbit': {
        return input * 1000000000;
      }
      case 'gigabitkilobit': {
        return input * 1000000;
      }
      case 'gigabitmegabit': {
        return input * 1000;
      }
      case 'gigabitgigabit': {
        return input;
      }
      case 'gigabitterabit': {
        return input / 1000;
      }
      case 'gigabitpetabit': {
        return input / 1000000;
      }
      case 'gigabitbyte': {
        return input * 125000000;
      }
      case 'gigabitkilobyte': {
        return input * 125000;
      }
      case 'gigabitmegabyte': {
        return input * 125;
      }
      case 'gigabitgigabyte': {
        return input / 8;
      }
      case 'gigabitterabyte': {
        return input / 8000;
      }
      case 'gigabitpetabyte': {
        return input / 8000000;
      }
      //Terabit
      case 'terabitbit': {
        return input * 1000000000000;
      }
      case 'terabitkilobit': {
        return input * 1000000000;
      }
      case 'terabitmegabit': {
        return input * 1000000;
      }
      case 'terabitgigabit': {
        return input * 1000;
      }
      case 'terabitterabit': {
        return input;
      }
      case 'terabitpetabit': {
        return input / 1000;
      }
      case 'terabitbyte': {
        return input * 125000000000;
      }
      case 'terabitkilobyte': {
        return input * 125000000;
      }
      case 'terabitmegabyte': {
        return input * 125000;
      }
      case 'terabitgigabyte': {
        return input * 125;
      }
      case 'terabitterabyte': {
        return input / 8;
      }
      case 'terabitpetabyte': {
        return input / 8000;
      }
      //Petabit
      case 'petabitbit': {
        return input * 1000000000000000;
      }
      case 'petabitkilobit': {
        return input * 1000000000000;
      }
      case 'petabitmegabit': {
        return input * 1000000000;
      }
      case 'petabitgigabit': {
        return input * 1000000;
      }
      case 'petabitterabit': {
        return input * 1000;
      }
      case 'petabitpetabit': {
        return input;
      }
      case 'petabitbyte': {
        return input * 125000000000000;
      }
      case 'petabitkilobyte': {
        return input * 125000000000;
      }
      case 'petabitmegabyte': {
        return input * 125000000;
      }
      case 'petabitgigabyte': {
        return input * 125000;
      }
      case 'petabitterabyte': {
        return input * 125;
      }
      case 'petabitpetabyte': {
        return input / 8;
      }
      //Byte
      case 'bytebit': {
        return input * 8;
      }
      case 'bytekilobit': {
        return input / 125;
      }
      case 'bytemegabit': {
        return input / 125000;
      }
      case 'bytegigabit': {
        return input / 125000000;
      }
      case 'byteterabit': {
        return input / 125000000000;
      }
      case 'bytepetabit': {
        return input / 125000000000000;
      }
      case 'bytebyte': {
        return input;
      }
      case 'bytekilobyte': {
        return input / 1000;
      }
      case 'bytemegabyte': {
        return input / 1000000;
      }
      case 'bytegigabyte': {
        return input / 1000000000;
      }
      case 'byteterabyte': {
        return input / 1000000000000;
      }
      case 'bytepetabyte': {
        return input / 1000000000000000;
      }
      // Kilobyte
      case 'kilobytebit': {
        return input * 8000;
      }
      case 'kilobytekilobit': {
        return input * 8;
      }
      case 'kilobytemegabit': {
        return input / 125;
      }
      case 'kilobytegigabit': {
        return input / 125000;
      }
      case 'kilobyteterabit': {
        return input / 125000000;
      }
      case 'kilobytepetabit': {
        return input / 125000000000;
      }
      case 'kilobytebyte': {
        return input * 1000;
      }
      case 'kilobytekilobyte': {
        return input;
      }
      case 'kilobytemegabyte': {
        return input / 1000;
      }
      case 'kilobytegigabyte': {
        return input / 1000000;
      }
      case 'kilobyteterabyte': {
        return input / 1000000000;
      }
      case 'kilobytepetabyte': {
        return input / 1000000000000;
      }
      //Megabyte
      case 'megabytebit': {
        return input * 8000000;
      }
      case 'megabytekilobit': {
        return input * 8000;
      }
      case 'megabytemegabit': {
        return input * 8;
      }
      case 'megabytegigabit': {
        return input / 125;
      }
      case 'megabyteterabit': {
        return input / 125000;
      }
      case 'megabytepetabit': {
        return input / 125000000;
      }
      case 'megabytebyte': {
        return input * 1000000;
      }
      case 'megabytekilobyte': {
        return input * 1000;
      }
      case 'megabytemegabyte': {
        return input;
      }
      case 'megabytegigabyte': {
        return input / 1000;
      }
      case 'megabyteterabyte': {
        return input / 1000000;
      }
      case 'megabytepetabyte': {
        return input / 1000000000;
      }
      //Gigabyte
      case 'gigabytebit': {
        return input * 8000000000;
      }
      case 'gigabytekilobit': {
        return input * 8000000;
      }
      case 'gigabytemegabit': {
        return input * 8000;
      }
      case 'gigabytegigabit': {
        return input * 8;
      }
      case 'gigabyteterabit': {
        return input / 125;
      }
      case 'gigabytepetabit': {
        return input / 125000;
      }
      case 'gigabytebyte': {
        return input * 1000000000;
      }
      case 'gigabytekilobyte': {
        return input * 1000000;
      }
      case 'gigabytemegabyte': {
        return input * 1000;
      }
      case 'gigabytegigabyte': {
        return input;
      }
      case 'gigabyteterabyte': {
        return input / 1000;
      }
      case 'gigabytepetabyte': {
        return input / 1000000;
      }
      //Terabyte
      case 'terabytebit': {
        return input * 8000000000000;
      }
      case 'terabytekilobit': {
        return input * 8000000000;
      }
      case 'terabytemegabit': {
        return input * 8000000;
      }
      case 'terabytegigabit': {
        return input * 8000;
      }
      case 'terabyteterabit': {
        return input * 8;
      }
      case 'terabytepetabit': {
        return input / 125;
      }
      case 'terabytebyte': {
        return input * 1000000000000;
      }
      case 'terabytekilobyte': {
        return input * 1000000000;
      }
      case 'terabytemegabyte': {
        return input * 1000000;
      }
      case 'terabytegigabyte': {
        return input * 1000;
      }
      case 'terabyteterabyte': {
        return input;
      }
      case 'terabytepetabyte': {
        return input / 1000;
      }
      //Petabyte
      case 'petabytebit': {
        return input * 8000000000000000;
      }
      case 'petabytekilobit': {
        return input * 8000000000000;
      }
      case 'petabytemegabit': {
        return input * 8000000000;
      }
      case 'petabytegigabit': {
        return input * 8000000;
      }
      case 'petabyteterabit': {
        return input * 8000;
      }
      case 'petabytepetabit': {
        return input * 8;
      }
      case 'petabytebyte': {
        return input * 1000000000000000;
      }
      case 'petabytekilobyte': {
        return input * 1000000000000;
      }
      case 'petabytemegabyte': {
        return input * 1000000000;
      }
      case 'petabytegigabyte': {
        return input * 1000000;
      }
      case 'petabyteterabyte': {
        return input * 1000;
      }
      case 'petabytepetabyte': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertDataTransfer(type: string, input: number) {
    switch (type) {
      //Bit per second
      case 'bitPSbitPS': {
        return input;
      }
      case 'bitPSbytePS': {
        return input / 8;
      }
      case 'bitPSkilobitPS': {
        return input / 1000;
      }
      case 'bitPSkilobytePS': {
        return input / 8000;
      }
      case 'bitPSmegabitPS': {
        return input / 1000000;
      }
      case 'bitPSmegabytePS': {
        return input / 8000000;
      }
      case 'bitPSgigabitPS': {
        return input / 1000000000;
      }
      case 'bitPSgigabytePS': {
        return input / 8000000000;
      }
      case 'bitPSterabitPS': {
        return input / 1000000000000;
      }
      case 'bitPSterabytePS': {
        return input / 8000000000000;
      }
      // Byte per second
      case 'bytePSbitPS': {
        return input * 8;
      }
      case 'bytePSbytePS': {
        return input;
      }
      case 'bytePSkilobitPS': {
        return input / 125;
      }
      case 'bytePSkilobytePS': {
        return input / 1000;
      }
      case 'bytePSmegabitPS': {
        return input / 125000;
      }
      case 'bytePSmegabytePS': {
        return input / 100000;
      }
      case 'bytePSgigabitPS': {
        return input / 125000000;
      }
      case 'bytePSgigabytePS': {
        return input / 100000000;
      }
      case 'bytePSterabitPS': {
        return input / 125000000000;
      }
      case 'bytePSterabytePS': {
        return input / 100000000000;
      }
      //Kilobit per second
      case 'kilobitPSbitPS': {
        return input * 1000;
      }
      case 'kilobitPSbytePS': {
        return input * 125;
      }
      case 'kilobitPSkilobitPS': {
        return input;
      }
      case 'kilobitPSkilobytePS': {
        return input / 8;
      }
      case 'kilobitPSmegabitPS': {
        return input / 1000;
      }
      case 'kilobitPSmegabytePS': {
        return input / 8000;
      }
      case 'kilobitPSgigabitPS': {
        return input / 1000000;
      }
      case 'kilobitPSgigabytePS': {
        return input / 8000000;
      }
      case 'kilobitPSterabitPS': {
        return input / 1000000000;
      }
      case 'kilobitPSterabytePS': {
        return input / 8000000000;
      }
      //Kilobyte per second
      case 'kilobytePSbitPS': {
        return input * 8000;
      }
      case 'kilobytePSbytePS': {
        return input * 1000;
      }
      case 'kilobytePSkilobitPS': {
        return input * 8;
      }
      case 'kilobytePSkilobytePS': {
        return input;
      }
      case 'kilobytePSmegabitPS': {
        return input / 125;
      }
      case 'kilobytePSmegabytePS': {
        return input / 1000;
      }
      case 'kilobytePSgigabitPS': {
        return input / 125000;
      }
      case 'kilobytePSgigabytePS': {
        return input / 100000;
      }
      case 'kilobytePSterabitPS': {
        return input / 125000000;
      }
      case 'kilobytePSterabytePS': {
        return input / 100000000;
      }
      //Megabit per second
      case 'megabitPSbitPS': {
        return input * 1000000;
      }
      case 'megabitPSbytePS': {
        return input * 125000;
      }
      case 'megabitPSkilobitPS': {
        return input * 1000;
      }
      case 'megabitPSkilobytePS': {
        return input * 125;
      }
      case 'megabitPSmegabitPS': {
        return input;
      }
      case 'megabitPSmegabytePS': {
        return input / 8;
      }
      case 'megabitPSgigabitPS': {
        return input / 1000;
      }
      case 'megabitPSgigabytePS': {
        return input / 8000;
      }
      case 'megabitPSterabitPS': {
        return input / 1000000;
      }
      case 'megabitPSterabytePS': {
        return input / 8000000;
      }
      //Megabyte per second
      case 'megabytePSbitPS': {
        return input * 8000000;
      }
      case 'megabytePSbytePS': {
        return input * 1000000;
      }
      case 'megabytePSkilobitPS': {
        return input * 8000;
      }
      case 'megabytePSkilobytePS': {
        return input * 1000;
      }
      case 'megabytePSmegabitPS': {
        return input * 8;
      }
      case 'megabytePSmegabytePS': {
        return input;
      }
      case 'megabytePSgigabitPS': {
        return input / 125;
      }
      case 'megabytePSgigabytePS': {
        return input / 1000;
      }
      case 'megabytePSterabitPS': {
        return input / 125000;
      }
      case 'megabytePSterabytePS': {
        return input / 1000000;
      }
      //Gigabit per second
      case 'gigabitPSbitPS': {
        return input * 1000000000;
      }
      case 'gigabitPSbytePS': {
        return input * 125000000;
      }
      case 'gigabitPSkilobitPS': {
        return input * 1000000;
      }
      case 'gigabitPSkilobytePS': {
        return input * 125000;
      }
      case 'gigabitPSmegabitPS': {
        return input * 1000;
      }
      case 'gigabitPSmegabytePS': {
        return input * 125;
      }
      case 'gigabitPSgigabitPS': {
        return input;
      }
      case 'gigabitPSgigabytePS': {
        return input / 8;
      }
      case 'gigabitPSterabitPS': {
        return input / 1000;
      }
      case 'gigabitPSterabytePS': {
        return input / 8000;
      }
      //Gigabyte per second
      case 'gigabytePSbitPS': {
        return input * 8000000000;
      }
      case 'gigabytePSbytePS': {
        return input * 1000000000;
      }
      case 'gigabytePSkilobitPS': {
        return input * 8000000;
      }
      case 'gigabytePSkilobytePS': {
        return input * 1000000;
      }
      case 'gigabytePSmegabitPS': {
        return input * 8000;
      }
      case 'gigabytePSmegabytePS': {
        return input * 1000;
      }
      case 'gigabytePSgigabitPS': {
        return input * 8;
      }
      case 'gigabytePSgigabytePS': {
        return input;
      }
      case 'gigabytePSterabitPS': {
        return input / 125;
      }
      case 'gigabytePSterabytePS': {
        return input / 1000;
      }
      //Terabit per second
      case 'terabitPSbitPS': {
        return input * 1000000000000;
      }
      case 'terabitPSbytePS': {
        return input * 125000000000;
      }
      case 'terabitPSkilobitPS': {
        return input * 1000000000;
      }
      case 'terabitPSkilobytePS': {
        return input * 125000000;
      }
      case 'terabitPSmegabitPS': {
        return input * 1000000;
      }
      case 'terabitPSmegabytePS': {
        return input * 125000;
      }
      case 'terabitPSgigabitPS': {
        return input * 1000;
      }
      case 'terabitPSgigabytePS': {
        return input * 125;
      }
      case 'terabitPSterabitPS': {
        return input;
      }
      case 'terabitPSterabytePS': {
        return input / 8;
      }
      default: {
        return input;
      }
    }
  }
  public static convertEnergy(type: string, input: number) {
    switch (type) {
      //Joule
      case 'joulejoule': {
        return input;
      }
      case 'joulekilojoule': {
        return input / 1000;
      }
      case 'joulegramCalorie': {
        return input / 4.184;
      }
      case 'joulekilocalorie': {
        return input / 4184;
      }
      case 'joulewattHour': {
        return input / 3600;
      }
      case 'joulekilowattHour': {
        return input / 3600000;
      }
      case 'jouleelectronvolt': {
        return input * 6242000000000000000;
      }
      case 'jouleBTU': {
        return input / 1055;
      }
      case 'jouleusTherm': {
        return input / 105500000;
      }
      case 'joulefoot-pound': {
        return input / 1.356;
      }
      //Kilojoule
      case 'kilojoulejoule': {
        return input * 1000;
      }
      case 'kilojoulekilojoule': {
        return input;
      }
      case 'kilojoulegramCalorie': {
        return input * 239.006;
      }
      case 'kilojoulekilocalorie': {
        return input / 4.184;
      }
      case 'kilojoulewattHour': {
        return input / 3.6;
      }
      case 'kilojoulekilowattHour': {
        return input / 3600;
      }
      case 'kilojouleelectronvolt': {
        return input * 6242000000000000000000;
      }
      case 'kilojouleBTU': {
        return input / 1.055;
      }
      case 'kilojouleusTherm': {
        return input / 105480;
      }
      case 'kilojoulefoot-pound': {
        return input * 738;
      }
      // Gram Calorie
      case 'gramCaloriejoule': {
        return input * 4.184;
      }
      case 'gramCaloriekilojoule': {
        return input / 239;
      }
      case 'gramCaloriegramCalorie': {
        return input;
      }
      case 'gramCaloriekilocalorie': {
        return input / 1000;
      }
      case 'gramCaloriewattHour': {
        return input / 860.421;
      }
      case 'gramCaloriekilowattHour': {
        return input / 860421;
      }
      case 'gramCalorieelectronvolt': {
        return input * 96110000000000000000;
      }
      case 'gramCalorieBTU': {
        return input / 252;
      }
      case 'gramCalorieusTherm': {
        return input / 25210000;
      }
      case 'gramCaloriefoot-pound': {
        return input * 3.08596;
      }
      //Kilocalorie
      case 'kilocaloriejoule': {
        return input * 4184;
      }
      case 'kilocaloriekilojoule': {
        return input * 4.184;
      }
      case 'kilocaloriegramCalorie': {
        return input * 1000;
      }
      case 'kilocaloriekilocalorie': {
        return input;
      }
      case 'kilocaloriewattHour': {
        return input * 1.6222;
      }
      case 'kilocaloriekilowattHour': {
        return input / 860.421;
      }
      case 'kilocalorieelectronvolt': {
        return input * 26110000000000000000000;
      }
      case 'kilocalorieBTU': {
        return input * 3.96567;
      }
      case 'kilocalorieusTherm': {
        return input / 25210;
      }
      case 'kilocaloriefoot-pound': {
        return input * 3085.96;
      }
      // Watt Hour
      case 'wattHourjoule': {
        return input * 3600;
      }
      case 'wattHourkilojoule': {
        return input * 3.6;
      }
      case 'wattHourgramCalorie': {
        return input * 860.421;
      }
      case 'wattHourkilocalorie': {
        return input / 1.162;
      }
      case 'wattHourwattHour': {
        return input;
      }
      case 'wattHourkilowattHour': {
        return input / 1000;
      }
      case 'wattHourelectronvolt': {
        return input * 22469442780800000000000;
      }
      case 'wattHourBTU': {
        return input * 3.4121430218701735981;
      }
      case 'wattHourusTherm': {
        return input / 29300;
      }
      case 'wattHourfoot-pound': {
        return input * 2655;
      }
      //Kilowatt Hour
      case 'kilowattHourjoule': {
        return input * 3600000;
      }
      case 'kilowattHourkilojoule': {
        return input * 3600;
      }
      case 'kilowattHourgramCalorie': {
        return input * 860421;
      }
      case 'kilowattHourkilocalorie': {
        return input * 860.421;
      }
      case 'kilowattHourwattHour': {
        return input * 1000;
      }
      case 'kilowattHourkilowattHour': {
        return input;
      }
      case 'kilowattHourelectronvolt': {
        return input * 22469442780800000000000000;
      }
      case 'kilowattHourBTU': {
        return input * 3412.1430218701735981;
      }
      case 'kilowattHourusTherm': {
        return input / 29.3;
      }
      case 'kilowattHourfoot-pound': {
        return input * 2655000;
      }
      //Electron Volt
      case 'electronvoltjoule': {
        return input / 6242000000000000000;
      }
      case 'electronvoltkilojoule': {
        return input * 0.00000000000000000000016022;
      }
      case 'electronvoltgramCalorie': {
        return input * 0.000000000000000000038293;
      }
      case 'electronvoltkilocalorie': {
        return input * 0.000000000000000000000038293;
      }
      case 'electronvoltwattHour': {
        return input * 0.000000000000000000000044505;
      }
      case 'electronvoltkilowattHour': {
        return input * 0.000000000000000000000000044505;
      }
      case 'electronvoltelectronvolt': {
        return input;
      }
      case 'electronvoltBTU': {
        return input * 0.00000000000000000000015186;
      }
      case 'electronvoltusTherm': {
        return input * 0.0000000000000000000000000015186;
      }
      case 'electronvoltfoot-pound': {
        return input * 0.00000000000000000011817;
      }
      //British Thermal Unit
      case 'BTUjoule': {
        return input * 1055.06;
      }
      case 'BTUkilojoule': {
        return input * 1.05506;
      }
      case 'BTUgramCalorie': {
        return input * 252.164;
      }
      case 'BTUkilocalorie': {
        return input / 3.966;
      }
      case 'BTUwattHour': {
        return input / 3.412;
      }
      case 'BTUkilowattHour': {
        return input / 3412;
      }
      case 'BTUelectronvolt': {
        return input * 6585000000000000000000;
      }
      case 'BTUBTU': {
        return input;
      }
      case 'BTUusTherm': {
        return input / 99976.1;
      }
      case 'BTUfoot-pound': {
        return input * 778;
      }
      //US Therm
      case 'usThermjoule': {
        return input * 105480000;
      }
      case 'usThermkilojoule': {
        return input * 105480;
      }
      case 'usThermgramCalorie': {
        return input * 25216400;
      }
      case 'usThermkilocalorie': {
        return input * 25210.4;
      }
      case 'usThermwattHour': {
        return input * 29300.1;
      }
      case 'usThermkilowattHour': {
        return input * 29.3001;
      }
      case 'usThermelectronvolt': {
        return input * 658400000000000000000000000;
      }
      case 'usThermBTU': {
        return input * 99976.1;
      }
      case 'usThermusTherm': {
        return input;
      }
      case 'usThermfoot-pound': {
        return input * 77800000;
      }
      // Foot-Pound
      case 'foot-poundjoule': {
        return input * 1.35582;
      }
      case 'foot-poundkilojoule': {
        return input / 738;
      }
      case 'foot-poundgramCalorie': {
        return input / 3.086;
      }
      case 'foot-poundkilocalorie': {
        return input / 3086;
      }
      case 'foot-poundwattHour': {
        return input / 2655;
      }
      case 'foot-poundkilowattHour': {
        return input / 2655000;
      }
      case 'foot-poundelectronvolt': {
        return input * 8462000000000000000;
      }
      case 'foot-poundBTU': {
        return input * 778;
      }
      case 'foot-poundusTherm': {
        return input / 77800000;
      }
      case 'foot-poundfoot-pound': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertFrequency(type: string, input: number) {
    switch (type) {
      //Hertz
      case 'hertzhertz': {
        return input;
      }
      case 'hertzkilohertz': {
        return input / 1000;
      }
      case 'hertzmegahertz': {
        return input / 1000000;
      }
      case 'hertzgigahertz': {
        return input / 1000000000;
      }
      //Kilohertz
      case 'kilohertzhertz': {
        return input * 1000;
      }
      case 'kilohertzkilohertz': {
        return input;
      }
      case 'kilohertzmegahertz': {
        return input / 1000;
      }
      case 'kilohertzgigahertz': {
        return input / 1000000;
      }
      //Megahertz
      case 'megahertzhertz': {
        return input * 1000000;
      }
      case 'megahertzkilohertz': {
        return input * 1000;
      }
      case 'megahertzmegahertz': {
        return input;
      }
      case 'megahertzgigahertz': {
        return input / 1000;
      }
      //Gigahertz
      case 'gigahertzhertz': {
        return input * 1000000000;
      }
      case 'gigahertzkilohertz': {
        return input * 1000000;
      }
      case 'gigahertzmegahertz': {
        return input * 1000;
      }
      case 'gigahertzgigahertz': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
  public static convertFuel(type: string, input: number) {
    switch (type) {
      // Mile per Gallon
      case 'MPGMPG': {
        return input;
      }
      case 'MPGMPIG': {
        return input * 1.20095;
      }
      case 'MPGKPL': {
        return input / 2.352;
      }
      case 'MPGLPK': {
        return 235.215 / input;
      }
      //Mile per Imperial Gallon
      case 'MPGMPG': {
        return input / 1.20095;
      }
      case 'MPGMPIG': {
        return input;
      }
      case 'MPGKPL': {
        return input / 2.825;
      }
      case 'MPGLPK': {
        return 282.481 / input;
      }
      // Kilometer per Liter
      case 'MPGMPG': {
        return input * 2.352;
      }
      case 'MPGMPIG': {
        return input * 2.825;
      }
      case 'MPGKPL': {
        return input;
      }
      case 'MPGLPK': {
        return 100 / input;
      }
      //Liter per 100 Kilometer
      case 'MPGMPG': {
        return 235.215 / input;
      }
      case 'MPGMPIG': {
        return 282.481 / input;
      }
      case 'MPGKPL': {
        return 100 / input;
      }
      case 'MPGLPK': {
        return input;
      }
      default: {
        return input;
      }
    }
  }
}

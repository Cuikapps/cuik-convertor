import BigNumber from 'bignumber.js';

let CT: Map<string, string | ((a: string, b: boolean) => string)> = new Map();

//Length
CT.set('Kilometer', '1');
CT.set('Meter', '1e+3');
CT.set('Centimeter', '1e+5');
CT.set('Millimeter', '1e+6');
CT.set('Micrometer', '1e+9');
CT.set('Nanometer', '1e+12');
CT.set('Mile', '0.6213688756');
CT.set('Yard', '1093.6132983');
CT.set('Foot', '3280.839895');
CT.set('Inch', '39370.07874');
CT.set('Light Year', '1.057008707e-13');

//Weight
CT.set('Kilogram', '1');
CT.set('Gram', '1e+3');
CT.set('Milligram', '1e+6');
CT.set('Metric Ton', '1e-3');
CT.set('Long Ton', '9.842073e-4');
CT.set('Short Ton', '1.1023122e-3');
CT.set('Pound', '2.2046244202');
CT.set('Ounce', '35.273990723');
CT.set('Carrat', '5e+3');

//Temperature
CT.set('Celsius', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).times('1').toString();
  return new BigNumber(inputValue).times('1').toString();
});
CT.set('Fahrenheit', (inputValue: string, op: boolean): string => {
  if (op)
    return new BigNumber(inputValue)
      .minus('32')
      .times(`${5 / 9}`)
      .toString();

  return new BigNumber(inputValue)
    .times(`${(9 / 5).toString()}`)
    .plus('32')
    .toString();
});
CT.set('Kelvin', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).minus('273.15').toString();

  return new BigNumber(inputValue).plus('273.15').toString();
});

//Volume
CT.set('Cubic Kilometer', '1');
CT.set('Cubic Meter', '1e+9');
CT.set('Cubic Centimeter', '1e+15');
CT.set('Cubic Millimeter', '1e+18');
CT.set('US Gallon', '264172176858');
CT.set('US Quart', '1056688707432');
CT.set('US Pint', '2113377414864');
CT.set('US Cup', '4226754829728');
CT.set('US Fluid Ounce', '33814038637823');
CT.set('US Table Spoon', '67628077275645');
CT.set('US Tea Spoon', '67628077275645');
CT.set('Imperial Gallon', '219969248299');
CT.set('Imperial Quart', '879876993196');
CT.set('Imperial Pint', '1759753986393');
CT.set('Imperial Fluid Ounce', '35195079727854');
CT.set('Imperial Table Spoon', '56312127564566');
CT.set('Imperial Tea Spoon', '168936382693699');
CT.set('Cubic Mile', '0.2399128636');
CT.set('Cubic Yard', '1307950619.3');
CT.set('Cubic Foot', '35314666721');
CT.set('Cubic Inch', '61023744094732');

//Area
CT.set('Square Kilometer', '1');
CT.set('Square Meter', '1e+6');
CT.set('Square Centimeter', '1e+10');
CT.set('Square Millimeter', '1e+12');
CT.set('Square Micrometer', '1e+18');
CT.set('Hectare', '100');
CT.set('Square Mile', '0.3861018768');
CT.set('Square Yard', '1195990.0463');
CT.set('Square Foot', '10763910.417');
CT.set('Square Inch', '1550003100');
CT.set('Acre', '247.10538147');

//Speed
CT.set('Meter/second', '1');
CT.set('Kilometer/hour', '3.6');
CT.set('Foot/second', '3.28083989501312');
CT.set('Mile/hour', '2.2369362920544');
CT.set('Mile/second', '0.000621371192237334');
CT.set('Knot', '1.9438444924406');
CT.set('Speed of Light', '3.33564095198151e-9');

//Plane Angle
CT.set('Degree', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).times('1').toString();
  return new BigNumber(inputValue).times('1').toString();
});
CT.set('Gradian', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).times(`${180 / 200}`).toString();
  return new BigNumber(inputValue).times(`${200 / 180}`).toString();
});
CT.set('Milliradian', (inputValue: string, op: boolean): string => {
  if (op)
    return new BigNumber(inputValue)
      .times(
        new BigNumber('180').div(
          new BigNumber('1000').times(Math.PI.toString())
        )
      )
      .toString();
  return new BigNumber(inputValue)
    .times(new BigNumber('1000').times(Math.PI.toString()).div('180'))
    .toString();
});
CT.set('Minute of Arc', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).div('60').toString();
  return new BigNumber(inputValue).times('60').toString();
});
CT.set('Radian', (inputValue: string, op: boolean): string => {
  if (op)
    return new BigNumber(inputValue)
      .times(new BigNumber('180').div(Math.PI.toString()))
      .toString();
  return new BigNumber(inputValue)
    .times(new BigNumber(Math.PI.toString()).div('180'))
    .toString();
});
CT.set('Second of Arc', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).div('3600').toString();
  return new BigNumber(inputValue).times('3600').toString();
});

//Time
CT.set('Second', '1');
CT.set('Millisecond', '1e+3');
CT.set('Microsecond', '1e+6');
CT.set('Nanosecond', '1e+9');
CT.set('Picosecond', '1e+12');
CT.set('Minute', '1.66666667e-2');
CT.set('Hour', '2.777778e-4');
CT.set('Day', '1.15741e-5');
CT.set('Week', '1.6534e-6');
CT.set('Month', '3.802570537E-7');
CT.set('Year', '3.168808781E-8');

//Pressure
CT.set('Bar', '1');
CT.set('Pascal', '1e+5');
CT.set('Pound-force per Square Inch', '14.503773773');
CT.set('Standard Atmosphere', '0.9869232667');
CT.set('Torr', '750.0616827');

//Digital Storage
CT.set('Bit', '1');
CT.set('Kilobit', '1e-3');
CT.set('Kibibit', '9.76563e-4');
CT.set('Megabit', '1e-6');
CT.set('Mebibit', '9.5367e-7');
CT.set('Gigabit', '1e-9');
CT.set('Gibibit', '9.3132e-10');
CT.set('Terabit', '1e-12');
CT.set('Tebibit', '9.0949e-13');
CT.set('Petabit', '1e-15');
CT.set('Pebibit', '8.8818e-16');
CT.set('Byte', '0.125');
CT.set('Kilobyte', '1.25e-4');
CT.set('Kibibyte', '1.2207e-4');
CT.set('Megabyte', '1.25e-7');
CT.set('Mebibyte', '1.1921e-7');
CT.set('Gigabyte', '1.25e-10');
CT.set('Gibibyte', '1.1642e-10');
CT.set('Terabyte', '1.25e-13');
CT.set('Tebibyte', '1.1369e-13');
CT.set('Petabyte', '1.25e-16');
CT.set('Pebibyte', '1.1102e-16');

//Data Transfer Rate
CT.set('Bit/second', '1');
CT.set('Kilobit/second', '1e-3');
CT.set('Kibibit/second', '9.76563e-4');
CT.set('Kilobyte/second', '1.25e-4');
CT.set('Megabit/second', '1e-6');
CT.set('Mebibit/second', '9.5367e-7');
CT.set('Megabyte/second', '1.25e-7');
CT.set('Gigabit/second', '1e-9');
CT.set('Gibibit/second', '9.3132e-10');
CT.set('Gigabyte/second', '1.25e-10');
CT.set('Terabit/second', '1e-12');
CT.set('Tebibit/second', '9.0949e-13');
CT.set('Terabyte/second', '1.25e-13');
CT.set('Petabit/second', '1e-15');
CT.set('Pebibit/second', '8.8818e-16');
CT.set('Petabyte/second', '1.25e-16');

//Energy
CT.set('Joule', '1');
CT.set('Kilojoule', '1e-3');
CT.set('Gram Calorie', '2.39006e-1');
CT.set('Kilocalorie', '2.39006e-4');
CT.set('Watt Hour', '2.77778e-4');
CT.set('Kilowatt Hour', '2.77778e-7');
CT.set('Electronvolt', '6.242e+18');
CT.set('British Thermal Unit', '9.47817e-4');
CT.set('US Thermal Unit', '9.4804e-9');
CT.set('Foot-pound', '0.737562');

//Frequency
CT.set('Hertz', '1');
CT.set('Kilohertz', '1e-3');
CT.set('Megahertz', '1e-6');
CT.set('Gigahertz', '1e-9');

//Fuel Economy
CT.set('Miles/gallon', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).times('1').toString();
  return new BigNumber(inputValue).times('1').toString();
});
CT.set('Miles/gallon(Imperial)', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).div('1.20095').toString();
  return new BigNumber(inputValue).times('1.20095').toString();
});
CT.set('Kilometer/liter', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber(inputValue).times('2.35215').toString();
  return new BigNumber(inputValue).div('2.35215').toString();
});
CT.set('Liter/100 Kilometer', (inputValue: string, op: boolean): string => {
  if (op) return new BigNumber('235.215').div(inputValue).toString();
  return new BigNumber('235.215').div(inputValue).toString();
});

export const CONVERSION_TABLE = CT;

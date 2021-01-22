import { Component, ViewChild } from '@angular/core';
import { LogService } from './log.service';
import { ConversionTypeBtnComponent } from './conversion-type-btn/conversion-type-btn.component';
import { Convert } from './Convert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cuik-convertor';

  @ViewChild('lengthBtn') lengthBtn!: ConversionTypeBtnComponent;
  @ViewChild('weightBtn') weightBtn!: ConversionTypeBtnComponent;
  @ViewChild('tempBtn') tempBtn!: ConversionTypeBtnComponent;
  @ViewChild('volumeBtn') volumeBtn!: ConversionTypeBtnComponent;
  @ViewChild('areaBtn') areaBtn!: ConversionTypeBtnComponent;
  @ViewChild('speedBtn') speedBtn!: ConversionTypeBtnComponent;
  @ViewChild('angleBtn') angleBtn!: ConversionTypeBtnComponent;
  @ViewChild('timeBtn') timeBtn!: ConversionTypeBtnComponent;
  @ViewChild('pressureBtn') pressureBtn!: ConversionTypeBtnComponent;
  @ViewChild('digStorageBtn') digStorageBtn!: ConversionTypeBtnComponent;
  @ViewChild('dataTransferBtn') dataTransferBtn!: ConversionTypeBtnComponent;
  @ViewChild('energyBtn') energyBtn!: ConversionTypeBtnComponent;
  @ViewChild('frequencyBtn') frequencyBtn!: ConversionTypeBtnComponent;
  @ViewChild('fuelBtn') fuelBtn!: ConversionTypeBtnComponent;

  //input data
  lengthInputNumber: string = '';
  lengthOutputNumber: string = '';
  weightInputNumber: string = '';
  weightOutputNumber: string = '';
  tempInputNumber: string = '';
  tempOutputNumber: string = '';
  volumeInputNumber: string = '';
  volumeOutputNumber: string = '';
  areaInputNumber: string = '';
  areaOutputNumber: string = '';
  speedInputNumber: string = '';
  speedOutputNumber: string = '';
  angleInputNumber: string = '';
  angleOutputNumber: string = '';
  timeInputNumber: string = '';
  timeOutputNumber: string = '';
  pressureInputNumber: string = '';
  pressureOutputNumber: string = '';
  digStorageInputNumber: string = '';
  digStorageOutputNumber: string = '';
  dataTransferInputNumber: string = '';
  dataTransferOutputNumber: string = '';
  energyInputNumber: string = '';
  energyOutputNumber: string = '';
  frequencyInputNumber: string = '';
  frequencyOutputNumber: string = '';
  fuelInputNumber: string = '';
  fuelOutputNumber: string = '';

  // page data
  buttonTypes: Array<string> = [
    'weight',
    'temp',
    'volume',
    'area',
    'speed',
    'plane angle',
    'time',
    'pressure',
    'digital storage',
    'data transfer rate',
    'energy',
    'frequency',
    'fuel economy',
  ];
  loadedPageNumber: number = 1;

  // scroll data
  lengthInScrollData: string = 'kilometer';
  lengthOutScrollData: string = 'kilometer';

  weightInScrollData: string = 'metricTon';
  weightOutScrollData: string = 'metricTon';

  tempInScrollData: string = 'celsius';
  tempOutScrollData: string = 'celsius';

  volumeInScrollData: string = 'usLiquidGallon';
  volumeOutScrollData: string = 'usLiquidGallon';

  areaInScrollData: string = '';
  areaOutScrollData: string = '';

  speedInScrollData: string = '';
  speedOutScrollData: string = '';

  angleInScrollData: string = '';
  angleOutScrollData: string = '';

  timeInScrollData: string = '';
  timeOutScrollData: string = '';

  pressureInScrollData: string = '';
  pressureOutScrollData: string = '';

  digStorageInScrollData: string = '';
  digStorageOutScrollData: string = '';

  dataTransferInScrollData: string = '';
  dataTransferOutScrollData: string = '';

  energyInScrollData: string = '';
  energyOutScrollData: string = '';

  frequencyInScrollData: string = '';
  frequencyOutScrollData: string = '';

  fuelInScrollData: string = '';
  fuelOutScrollData: string = '';

  lengthScrollData: string = this.lengthInScrollData + this.lengthOutScrollData;
  weightScrollData: string = this.weightInScrollData + this.weightOutScrollData;
  tempScrollData: string = this.tempInScrollData + this.tempOutScrollData;
  volumeScrollData: string = this.volumeInScrollData + this.volumeOutScrollData;
  areaScrollData: string = this.areaInScrollData + this.areaOutScrollData;
  speedScrollData: string = this.speedInScrollData + this.speedOutScrollData;
  angleScrollData: string = this.angleInScrollData + this.angleOutScrollData;
  timeScrollData: string = this.timeInScrollData + this.timeOutScrollData;
  pressureScrollData: string =
    this.pressureInScrollData + this.pressureOutScrollData;
  digStorageScrollData: string =
    this.digStorageInScrollData + this.digStorageOutScrollData;
  dataTransferScrollData: string =
    this.dataTransferInScrollData + this.dataTransferOutScrollData;
  energyScrollData: string = this.energyInScrollData + this.energyOutScrollData;
  frequencyScrollData: string =
    this.frequencyInScrollData + this.frequencyOutScrollData;
  fuelScrollData: string = this.fuelInScrollData + this.fuelOutScrollData;

  constructor(private logger: LogService) {}

  //load the corresponding page and activate buttons
  loadPage(pageNumber: any) {
    this.loadedPageNumber = pageNumber;
    //this.logger.log(pageNumber);

    if (this.loadedPageNumber == 1) {
      this.lengthBtn.isActivated = true;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 2) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = true;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 3) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = true;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 4) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = true;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 5) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = true;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 6) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = true;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 7) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = true;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 8) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = true;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 9) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = true;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 10) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = true;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 11) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = true;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 12) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = true;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 13) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = true;
      this.fuelBtn.isActivated = false;
    } else if (this.loadedPageNumber == 14) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = false;
      this.tempBtn.isActivated = false;
      this.volumeBtn.isActivated = false;
      this.areaBtn.isActivated = false;
      this.speedBtn.isActivated = false;
      this.angleBtn.isActivated = false;
      this.timeBtn.isActivated = false;
      this.pressureBtn.isActivated = false;
      this.digStorageBtn.isActivated = false;
      this.dataTransferBtn.isActivated = false;
      this.energyBtn.isActivated = false;
      this.frequencyBtn.isActivated = false;
      this.fuelBtn.isActivated = true;
    }
  }
  //Show credits
  alertCredits(msg: string) {
    alert(msg);
  }

  // get scroll data from scroll component
  setLengthInScrollData(scrollIn: string) {
    this.lengthInScrollData = scrollIn;
    this.updateLengthScrollData();
  }
  setLengthOutScrollData(scrollOut: string) {
    this.lengthOutScrollData = scrollOut;
    this.updateLengthScrollData();
  }
  setWeightInScrollData(scrollIn: string) {
    this.weightInScrollData = scrollIn;
    this.updateWeightScrollData();
  }
  setWeightOutScrollData(scrollOut: string) {
    this.weightOutScrollData = scrollOut;
    this.updateWeightScrollData();
  }
  setTempInScrollData(scrollIn: string) {
    this.tempInScrollData = scrollIn;
    this.updateTempScrollData();
  }
  setTempOutScrollData(scrollOut: string) {
    this.tempOutScrollData = scrollOut;
    this.updateTempScrollData();
  }
  setVolumeInScrollData(scrollIn: string) {
    this.volumeInScrollData = scrollIn;
    this.updateVolumeScrollData();
  }
  setVolumeOutScrollData(scrollOut: string) {
    this.volumeOutScrollData = scrollOut;
    this.updateVolumeScrollData();
  }
  setAreaInScrollData(scrollIn: string) {
    this.areaInScrollData = scrollIn;
    this.updateAreaScrollData();
  }
  setAreaOutScrollData(scrollOut: string) {
    this.areaOutScrollData = scrollOut;
    this.updateAreaScrollData();
  }
  setSpeedInScrollData(scrollIn: string) {
    this.speedInScrollData = scrollIn;
    this.updateSpeedScrollData();
  }
  setSpeedOutScrollData(scrollOut: string) {
    this.speedOutScrollData = scrollOut;
    this.updateSpeedScrollData();
  }
  setAngleInScrollData(scrollIn: string) {
    this.angleInScrollData = scrollIn;
    this.updateAngleScrollData();
  }
  setAngleOutScrollData(scrollOut: string) {
    this.angleOutScrollData = scrollOut;
    this.updateAngleScrollData();
  }
  setTimeInScrollData(scrollIn: string) {
    this.timeInScrollData = scrollIn;
    this.updateTimeScrollData();
  }
  setTimeOutScrollData(scrollOut: string) {
    this.timeOutScrollData = scrollOut;
    this.updateTimeScrollData();
  }
  setPressureInScrollData(scrollIn: string) {
    this.volumeInScrollData = scrollIn;
    this.updatePressureScrollData();
  }
  setPressureOutScrollData(scrollOut: string) {
    this.volumeOutScrollData = scrollOut;
    this.updatePressureScrollData();
  }
  setDigStorageInScrollData(scrollIn: string) {
    this.digStorageInScrollData = scrollIn;
    this.updateDigStorageScrollData();
  }
  setDigStorageOutScrollData(scrollOut: string) {
    this.digStorageOutScrollData = scrollOut;
    this.updateDigStorageScrollData();
  }
  setDataTransferInScrollData(scrollIn: string) {
    this.dataTransferInScrollData = scrollIn;
    this.updateDataTransferScrollData();
  }
  setDataTransferOutScrollData(scrollOut: string) {
    this.dataTransferOutScrollData = scrollOut;
    this.updateDataTransferScrollData();
  }
  setEnergyInScrollData(scrollIn: string) {
    this.energyInScrollData = scrollIn;
    this.updateEnergyScrollData();
  }
  setEnergyOutScrollData(scrollOut: string) {
    this.energyOutScrollData = scrollOut;
    this.updateEnergyScrollData();
  }
  setFrequencyInScrollData(scrollIn: string) {
    this.frequencyInScrollData = scrollIn;
    this.updateFrequencyScrollData();
  }
  setFrequencyOutScrollData(scrollOut: string) {
    this.frequencyOutScrollData = scrollOut;
    this.updateFrequencyScrollData();
  }
  setFuelInScrollData(scrollIn: string) {
    this.fuelInScrollData = scrollIn;
    this.updateFuelScrollData();
  }
  setFuelOutScrollData(scrollOut: string) {
    this.fuelOutScrollData = scrollOut;
    this.updateFuelScrollData();
  }

  // Convert
  updateLengthScrollData() {
    this.lengthScrollData = this.lengthInScrollData + this.lengthOutScrollData;
    if (this.lengthInputNumber !== '') {
      this.lengthOutputNumber = Convert.convertLength(
        this.lengthScrollData,
        parseFloat(this.lengthInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateWeightScrollData() {
    this.weightScrollData = this.weightInScrollData + this.weightOutScrollData;
    if (this.weightInputNumber !== '') {
      this.weightOutputNumber = Convert.convertWeight(
        this.weightScrollData,
        parseFloat(this.weightInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateTempScrollData() {
    this.tempScrollData = this.tempInScrollData + this.tempOutScrollData;
    if (this.tempInputNumber !== '') {
      this.tempOutputNumber = Convert.convertTemp(
        this.tempScrollData,
        parseFloat(this.tempInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateVolumeScrollData() {
    this.volumeScrollData = this.volumeInScrollData + this.volumeOutScrollData;
    if (this.volumeInputNumber !== '') {
      this.volumeOutputNumber = Convert.convertVolume(
        this.volumeScrollData,
        parseFloat(this.volumeInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateAreaScrollData() {
    this.areaScrollData = this.areaInScrollData + this.areaOutScrollData;
    if (this.areaInputNumber !== '') {
      this.areaOutputNumber = Convert.convertArea(
        this.areaScrollData,
        parseFloat(this.areaInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateSpeedScrollData() {
    this.speedScrollData = this.speedInScrollData + this.speedOutScrollData;
    if (this.speedInputNumber !== '') {
      this.speedOutputNumber = Convert.convertSpeed(
        this.speedScrollData,
        parseFloat(this.speedInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateAngleScrollData() {
    this.angleScrollData = this.angleInScrollData + this.angleOutScrollData;
    if (this.angleInputNumber !== '') {
      this.angleOutputNumber = Convert.convertAngle(
        this.angleScrollData,
        parseFloat(this.angleInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateTimeScrollData() {
    this.timeScrollData = this.timeInScrollData + this.timeOutScrollData;
    if (this.timeInputNumber !== '') {
      this.timeOutputNumber = Convert.convertTime(
        this.timeScrollData,
        parseFloat(this.timeInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updatePressureScrollData() {
    this.pressureScrollData =
      this.pressureInScrollData + this.pressureOutScrollData;
    if (this.pressureInputNumber !== '') {
      this.pressureOutputNumber = Convert.convertPressure(
        this.pressureScrollData,
        parseFloat(this.pressureInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateDigStorageScrollData() {
    this.digStorageScrollData =
      this.digStorageInScrollData + this.digStorageOutScrollData;
    if (this.digStorageInputNumber !== '') {
      this.digStorageOutputNumber = Convert.convertDigStorage(
        this.digStorageScrollData,
        parseFloat(this.digStorageInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateDataTransferScrollData() {
    this.dataTransferScrollData =
      this.dataTransferInScrollData + this.dataTransferOutScrollData;
    if (this.dataTransferInputNumber !== '') {
      this.dataTransferOutputNumber = Convert.convertDataTransfer(
        this.dataTransferScrollData,
        parseFloat(this.dataTransferInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateEnergyScrollData() {
    this.energyScrollData = this.energyInScrollData + this.energyOutScrollData;
    if (this.energyInputNumber !== '') {
      this.energyOutputNumber = Convert.convertEnergy(
        this.energyScrollData,
        parseFloat(this.energyInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateFrequencyScrollData() {
    this.frequencyScrollData =
      this.frequencyInScrollData + this.frequencyOutScrollData;
    if (this.frequencyInputNumber !== '') {
      this.frequencyOutputNumber = Convert.convertFrequency(
        this.frequencyScrollData,
        parseFloat(this.frequencyInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateFuelScrollData() {
    this.fuelScrollData = this.fuelInScrollData + this.fuelOutScrollData;
    if (this.fuelInputNumber !== '') {
      this.fuelOutputNumber = Convert.convertFuel(
        this.fuelScrollData,
        parseFloat(this.fuelInputNumber)
      ).toString();
    } else {
      return;
    }
  }
}

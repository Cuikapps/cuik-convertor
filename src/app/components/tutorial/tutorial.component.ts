import { Component, OnInit } from '@angular/core';
import { sides } from './tutorial-block/tutorial-block.component';

//#region types
declare type tutorials = 0 | 1 | 2 | 3 | 4 | 5;
declare type tutData = {
  title: string;
  text: string;
  arrow: boolean;
  'button-one-color': string;
  'button-one-hover': string;
  'button-one-text': string;
  'button-two-color': string;
  'button-two-hover': string;
  'button-two-text': string;
  'arrow-side': sides;
};
declare type props =
  | 'title'
  | 'text'
  | 'button-one-color'
  | 'button-one-hover'
  | 'button-one-text'
  | 'button-two-color'
  | 'button-two-hover'
  | 'button-two-text';
//#endregion

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  constructor() {}

  bTutorial: boolean = JSON.parse(localStorage.getItem('first time') || 'true');
  currentTutorial: tutorials = 0;
  tutorialData: tutData[] = [
    {
      //start
      title: 'Start Tutorial',
      text: 'This tutorial will go through all the features of the app.',
      'button-one-color': '#0f3057',
      'button-one-hover': '#00587a',
      'button-one-text': 'Begin',
      'button-two-color': '#8b0000',
      'button-two-hover': '#bb0000',
      'button-two-text': 'Cancel',
      'arrow-side': 'W',
      arrow: false,
    },
    {
      //menubar
      title: 'Menu Bar',
      text:
        'This is the menu where you can access the settings, conversion history, calculator, and give feedback',
      'button-one-color': '#0f3057',
      'button-one-hover': '#00587a',
      'button-one-text': 'Next',
      'button-two-color': '#0f3057',
      'button-two-hover': '#00587a',
      'button-two-text': 'Previous',
      'arrow-side': 'NE',
      arrow: true,
    },
    {
      //button bar
      title: 'Button Bar',
      text: 'This is the button bar where you can choose the conversion type.',
      'button-one-color': '#0f3057',
      'button-one-hover': '#00587a',
      'button-one-text': 'Next',
      'button-two-color': '#0f3057',
      'button-two-hover': '#00587a',
      'button-two-text': 'Previous',
      'arrow-side': 'W',
      arrow: true,
    },
    {
      //search bar
      title: 'Search Bar',
      text: 'This is a faster way to find you conversion type of your choice.',
      'button-one-color': '#0f3057',
      'button-one-hover': '#00587a',
      'button-one-text': 'Next',
      'button-two-color': '#0f3057',
      'button-two-hover': '#00587a',
      'button-two-text': 'Previous',
      'arrow-side': 'NW',
      arrow: true,
    },
    {
      //input area
      title: 'Input Area',
      text:
        'This is where you choose input type of your conversion and input you data below',
      'button-one-color': '#0f3057',
      'button-one-hover': '#00587a',
      'button-one-text': 'Next',
      'button-two-color': '#0f3057',
      'button-two-hover': '#00587a',
      'button-two-text': 'Previous',
      'arrow-side': 'E',
      arrow: true,
    },
    {
      //output area
      title: 'Output Area',
      text: 'This is where you choose output type of your conversion',
      'button-one-color': '#8b0000',
      'button-one-hover': '#bb0000',
      'button-one-text': 'End',
      'button-two-color': '#0f3057',
      'button-two-hover': '#00587a',
      'button-two-text': 'Previous',
      'arrow-side': 'SE',
      arrow: true,
    },
  ];

  keyframes = [
    'start',
    'menu-bar',
    'button-bar',
    'search-bar',
    'input-area',
    'output-area',
  ];

  ngOnInit(): void {}

  next() {
    if (this.currentTutorial < 5) this.currentTutorial++;
    else this.skip();
  }
  previous() {
    if (this.currentTutorial > 0) this.currentTutorial--;
    else this.skip();
  }

  skip() {
    this.bTutorial = false;
    localStorage.setItem('first time', 'false');
  }
  //#region  property getters
  getData(key: number, prop: props): string {
    return this.tutorialData[key][prop];
  }
  getArrowSide(key: number): sides {
    return this.tutorialData[key]['arrow-side'];
  }
  getArrow(key: number): boolean {
    return this.tutorialData[key].arrow;
  }
  //#endregion
}

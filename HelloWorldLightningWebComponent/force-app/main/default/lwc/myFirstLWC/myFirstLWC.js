import { LightningElement, api, track } from 'lwc';
import Id from '@salesforce/user/Id';

export default class MyFirstLWC extends LightningElement {
  @api name = 'Linda Yang';
  @track title = 'Salesforce Developer';
  phone = '8429470184';
  email = 'l.yang@frgta.com';
  userId = Id;

  handleClick() {
    /* eslint-disable no-console */
    console.log('I am inside JS file');
    this.name = 'Caroline Crossland';
    this.title = 'Salesforce Developer';
  }
}
import { LightningElement,track } from 'lwc';
console.log('TEST');

export default class HelloWorldLWC extends LightningElement {
  @track firstname='Yuta';

}
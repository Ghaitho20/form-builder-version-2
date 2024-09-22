import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import  Data  from './data.json';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  class?: string; //importation bootstrap
}
interface JsonFormControlOptions {//range
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}


interface InputOption{
 op: {dict: { [key: string]: string }}

}
interface JsonFormattributes{
  container1: {d1:{[key:string]:boolean}};
  container2: {d2:{[key:string]:InputOption}}

}


interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  validators: JsonFormValidators;

  options?: JsonFormControlOptions;//range 

  add?:boolean;//number of rooms 
  added?: {dict: { [key: string]: string }};//number of rooms 
  
  
  attributes?: JsonFormattributes;//pour check box et select option et button et radio 
 
}
export interface JsonFormData {
  controls: JsonFormControls[];
}
interface InputField{
  label:string,
  type:string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})





export class AppComponent {
  title = 'convert';
  public dataList: JsonFormControls[] = Data as JsonFormControls[];
  num: number = 0;//
  text : string = '';
  
  getArrayFromNumber(num: number): number[] {
    return Array(num).fill(0).map((x, i) => i);
  }

  getKeys(dict?: { [key: string]: any }): string[] {
    return dict ? Object.keys(dict) : [];
  }



  onModelChange( key: string) {
    console.log('Changed value for key:', key, 'to event ');
  }





















 











}

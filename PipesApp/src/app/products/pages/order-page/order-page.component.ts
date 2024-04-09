import { Component, ElementRef, ViewChild } from '@angular/core';

import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styles: ``
})
export class OrderPageComponent {
  
  @ViewChild('textToTransformInput')
  public textToTransformInput!: ElementRef<HTMLInputElement>;

  public textToTransform: string = '';
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public reverseSorting: boolean = false;

  public genderMap = {
    'male': 'he',
    'female': 'she'
  }
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      gender: 'male',
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      gender: 'male',
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      gender: 'male',
      color: Color.red,
    },
    {
      name: 'Hulk',
      canFly: false,
      gender: 'male',
      color: Color.green,
    },
    {
      name: 'SheHulk',
      canFly: false,
      gender: 'female',
      color: Color.green,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      gender: 'male',
      color: Color.green,
    },
    {
      name: 'Robin',
      canFly: false,
      gender: 'female',
      color: Color.red,
    },
    {
      name: 'Black Widow',
      canFly: false,
      gender: 'female',
      color: Color.black,
    }

  ];
Color: any;

  public changeOrder( value: keyof Hero) {
    this.reverseSorting = this.orderBy === value ? !this.reverseSorting : false;
    this.orderBy = value;
  }

  public toggleUppercase() {
    this.isUpperCase = !this.isUpperCase;
  }
}

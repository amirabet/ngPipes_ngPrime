import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styles: ``
})
export class NumbersPageComponent {

  @ViewChild('numberToTransformInput')

  public numberToTransformInput!: ElementRef<HTMLInputElement>;
  public stringToNumber: string = '';
  public numberToTransform?: number; 
  
  public totalSells: number = 256537.8659;
  public percent: number = 0.1645;


  public customDate = Date.now();

  public changeNumberToTransform(){
    if(this.numberToTransformInput.nativeElement.value && parseFloat(this.numberToTransformInput.nativeElement.value)){
      console.log(parseFloat(this.numberToTransformInput.nativeElement.value));
      this.numberToTransform = parseFloat(this.numberToTransformInput.nativeElement.value);
    }
      
    else
      this.numberToTransform = undefined;
  }

  public getArrowsColor(): string {
    if(this.numberToTransform !== undefined)
      return 'color: var(--primary-color)';

    return '';
  }
}

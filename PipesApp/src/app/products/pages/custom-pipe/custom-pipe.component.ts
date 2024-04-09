import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styles: ``
})
export class CustomPipeComponent {
  @ViewChild('textToTransformInput')
  public textToTransformInput!: ElementRef<HTMLInputElement>;

  public textToTransform: string = '';
  public isUpperCase: boolean = false;


  public changeTextToTransform() {
    this.textToTransform = this.textToTransformInput.nativeElement.value;
  }

  public getArrowsColor(): string {
    return this.textToTransform !== '' ? 'color: var(--primary-color)' : '';
  }
}

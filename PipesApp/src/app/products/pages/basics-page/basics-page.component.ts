import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles:``
})
export class BasicsPageComponent {

  @ViewChild('textToTransformInput')
  public textToTransformInput!: ElementRef<HTMLInputElement>;

  public nameLower: string = 'i love pipes!';
  public nameUpper: string = 'I LOVE PIPES!';
  public fullName: string = 'i lOvE piPEs!';
  public textToTransform: string = '';

  public customDate = Date.now();

  public changeTextToTransform(){
    this.textToTransform = this.textToTransformInput.nativeElement.value;
  }

  public getArrowsColor(): string {
    if(this.textToTransform !== '')
      return 'color: var(--primary-color)';

    return '';
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/hero.interface";

@Pipe({name: 'returnColor'})
export class ReturnColorPipe implements PipeTransform{

    transform( value: number): string {
        return Color[value];
    }

}
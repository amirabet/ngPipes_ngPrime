import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'canFly'})
export class CanFlyPipe implements PipeTransform{

    transform( value: boolean, gender: string): string {
        return value ? `Yes, ${gender} can!` : `No, ${gender} can't :(`;
    }

}
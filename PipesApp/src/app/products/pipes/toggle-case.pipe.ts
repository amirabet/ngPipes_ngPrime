import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'toggleCase'})
export class ToggleCasePipe implements PipeTransform{

    transform( value: string, toUpper: boolean = false, useCapitalize = false ): string {
        return toUpper ? value.toUpperCase() : useCapitalize ? value.charAt(0).toUpperCase() + value.slice(1) : value.toLowerCase();
    }

}
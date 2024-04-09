import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from '../interfaces/hero.interface'

@Pipe({name: 'sortBy'})
export class SortByPipe implements PipeTransform{

    transform( heroes: Hero[], sortBy?: keyof Hero | '', reverseSorting: boolean = false): Hero[] {
        switch ( sortBy ) {
            case 'name':
                const returnHeroesName = heroes.sort( (a,b) => ( a.name > b.name ) ? 1: -1);
                return reverseSorting ? returnHeroesName.reverse() : returnHeroesName;
            case 'canFly':
                const returnHeroesCanFly = heroes.sort( (a,b) => ( a.canFly > b.canFly ) ? 1: -1);
                return reverseSorting ? returnHeroesCanFly.reverse() : returnHeroesCanFly;
            case 'color':
                const returnHeroesColor = heroes.sort( (a,b) => ( a.color > b.color ) ? 1: -1);
                return reverseSorting ? returnHeroesColor.reverse() : returnHeroesColor;
            case 'gender':
                const returnHeroesGender = heroes.sort( (a,b) => ( a.gender > b.gender ) ? 1: -1);
                return reverseSorting ? returnHeroesGender.reverse() : returnHeroesGender;
            default:
                return reverseSorting ? heroes.reverse() : heroes;
        }
    }
}
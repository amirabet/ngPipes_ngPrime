export enum Color {
    red, black, blue, green
}

export type HeroeGender = 'male'| 'female';

export interface Hero {
    name: string;
    canFly: boolean;
    gender: HeroeGender, 
    color: Color;
}
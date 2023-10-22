import Color from 'color';

export const alpha = (base:string, val:number) => Color(base).alpha(val).hex()
export const lighen = (base:string, val:number) => Color(base).lighten(val).hex()
export const darken = (base:string, val:number) => Color(base).darken(val).hex()
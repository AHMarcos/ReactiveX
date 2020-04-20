import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1,10).pipe(
 
    filter(val => val % 2 === 1)

 )//.subscribe(console.log);

const personajes = [

    {
        tipo: 'heroe',
        nombre: 'Batman'
    },

    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    
    {
        tipo: 'villano',
        nombre: 'joker'
    },
];

from(personajes).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code),
    filter( key => key === 'Enter')
)

keyup$.subscribe(console.log);
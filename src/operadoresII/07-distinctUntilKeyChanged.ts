import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'superman'
    },
    {
        nombre: 'megamente'
    },
    {
        nombre: 'batman'
    },
    {
        nombre: 'batman'
    },
    {
        nombre: 'robin'
    },
    {
        nombre: 'megamente'
    },
    {
        nombre: 'megamente'
    },
]

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);


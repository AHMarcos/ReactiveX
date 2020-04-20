import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) =>{
return acc + cur;
}

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0),
)
.subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0),
)
.subscribe(console.log);

// Redux
interface Usuario{
    id?:String;
    autenticado?:boolean;
    token?:String;
    edad?:number;
}
const user: Usuario[] = [
    {id: 'fernado', autenticado: false, token: null},
    {id: 'fernado', autenticado: true, token: 'abc'},
    {id: 'fernado', autenticado: true, token: 'abc123'},
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur)=>{
        return{ ... acc, ...cur}
    },{ edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);
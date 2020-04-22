import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('e','w','q')
);
numeros$.subscribe(console.log);
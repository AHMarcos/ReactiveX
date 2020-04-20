import { range} from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {  
        console.log('antes', x)
        return 100;    
    }),
    map(val => val *10),
    tap(otro => console.log('despues', otro)),
)
.subscribe(val => console.log('subs', val));
 
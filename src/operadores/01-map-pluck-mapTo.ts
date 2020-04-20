import { range, fromEvent } from 'rxjs';
import  { map, pluck, mapTo  } from 'rxjs/operators';

//range(1,5).pipe(
   // map<number, number>(val => val * 10)
    //map<number,string>(val => (val * 10).toString())
//)
//.subscribe( console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

const keyMapTo$ = keyup$.pipe(
    mapTo('tecla precionada')
);


keyup$.subscribe(console.log);
keyupCode$.subscribe( code => console.log('map',code) );
keyPluck$.subscribe( code => console.log('pluck',code) );
keyMapTo$.subscribe( code => console.log('MapTo',code) );

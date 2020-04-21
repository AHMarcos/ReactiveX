
import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/dssselay/1';

const manejoError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios:[]
    });
}

const obs$ = ajax.getJSON(url);
const ob3$ = ajax(url);

obs$.pipe(
    catchError(manejoError)
)
.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('complete')
})











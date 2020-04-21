
import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'content-Type': 'application/json',
    'mi-token':'abc123'
});

obs$.subscribe(data => console.log('data', data) );














import { ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

//ajax.post(url, {
//    id:1,
//    nombre:'marcos',
//},{
//    'mi.token':'abc123',
//}).subscribe(console.log);

ajax({
    url:url,
    method:'POST',
    headers:{
        'mi-token':'abc123'
    },
    body:{
        id: 1,
        nombre: 'marcos'
    }
}).subscribe(console.log);

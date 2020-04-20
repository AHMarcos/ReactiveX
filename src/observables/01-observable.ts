import {Observable, Subscriber, Observer, onErrorResumeNext} from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('siguiente[next]:', value),
    error : error => console.warn('error [obs] :', error),
    complete : () => console.info('completado[obs]')
};

// const obs$ = observable.create();
const obs$ = new Observable<string>( Subscriber =>{
    
    Subscriber.next('Holi')
    Subscriber.next('Mundo')

    Subscriber.complete();

    Subscriber.next('Cruel')

    });

obs$.subscribe(resp => console.log(resp));
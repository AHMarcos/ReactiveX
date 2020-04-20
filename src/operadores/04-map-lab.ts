import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto =   document.createElement('div');
texto.innerHTML= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna est, fringilla non turpis vel, imperdiet ornare leo. Curabitur a dui eget libero pretium volutpat. Ut nec imperdiet sapien, quis dignissim libero. Pellentesque faucibus ligula a semper vulputate. In vel efficitur metus. Nunc rhoncus quam a porta gravida. Suspendisse dapibus blandit massa, vitae ultrices augue feugiat molestie. Etiam sed imperdiet lectus. Donec ultricies feugiat justo ut dapibus. Curabitur blandit malesuada leo, id tincidunt lacus lacinia non. Morbi sit amet lectus auctor, rhoncus enim sit amet, aliquam ante. Mauris id quam nec justo placerat hendrerit nec at diam. Aenean in consequat nibh, in semper neque. Suspendisse vel urna feugiat, lobortis urna non, vehicula purus. Praesent feugiat diam neque, ut malesuada metus convallis ut.
<br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sapien tellus, fringilla sed tristique sit amet, suscipit et mauris. Maecenas molestie libero non risus mattis ullamcorper. Nunc erat lectus, posuere sit amet viverra et, vehicula id ante. Ut sollicitudin ante at porttitor consequat. Nam ante mauris, efficitur ac elit vitae, posuere maximus tellus. Suspendisse hendrerit, velit pretium pellentesque aliquet, magna metus varius enim, vitae maximus ante tellus quis sem. Morbi imperdiet nisi non nisl vestibulum, eget cursus est aliquet. Etiam velit eros, pellentesque vitae elementum id, ultrices ac eros. Donec vel velit magna.
<br/><br/>
Nullam sit amet mauris magna. Nulla sed quam sed sem ultrices luctus nec ornare dolor. Integer id orci justo. Integer vitae ligula lorem. Sed at ipsum nisi. Nunc in tellus nulla. Quisque vulputate enim ut dolor semper, sit amet aliquet arcu volutpat. Maecenas a ante eget erat interdum luctus non eget ipsum. Sed ornare leo eget mauris lobortis, eu blandit urna ultrices.
<br/><br/>
Aenean neque turpis, pretium ac nibh non, venenatis semper purus. Integer elementum, massa in tristique aliquet, sapien erat euismod metus, dictum facilisis sem risus quis ante. Vestibulum sed nunc nec sapien pretium porta in a dolor. Nulla nisi quam, molestie sodales dui sit amet, luctus finibus felis. Aenean ut placerat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur at elementum sapien. Proin urna felis, vehicula sed tellus eu, blandit luctus tellus. Mauris sed iaculis ex, in cursus velit. Fusce hendrerit fermentum ligula id scelerisque. Proin a ullamcorper tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Pellentesque hendrerit nunc diam, et sollicitudin erat finibus at. Ut sagittis commodo hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas commodo erat vel dui semper, a suscipit erat luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ultricies risus non neque pulvinar, scelerisque iaculis dui laoreet. Nullam mollis tincidunt diam, sed consectetur urna consectetur in. Aliquam iaculis dolor non risus iaculis pellentesque. Pellentesque odio quam, pulvinar at commodo vel, mattis sed ante.

`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => { 
    const { 
        scrollTop, 
        ScrollHeight,
        clientHeight
     } = event.target.documentElement;

     return ( scrollTop / (ScrollHeight - clientHeight) ) * 100;
 }

  
//streams
const scroll$ = fromEvent(document,'scroll');
//scroll$.subscribe(console.log);
const progress$ =  scroll$.pipe(

    map(event => calcularPorcentajeScroll(event) ),
    //map( calcularPorcentajeScroll ),
    tap(console.log)
  );

progress$.subscribe(porcentaje => {

    progressBar.style.width = ` ${ porcentaje } %`;

});
# ReactiveX
- Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:
###### npm install
- Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando
###### npm start
## Cambiar Puerto
- Por defecto, el puerto que configuré para este proyecto es el 8081, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el package.json >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo
###### "start": "webpack-dev-server --mode development --open --port=8081"
- Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el npm start nuevamente)

//Un navegador es un programam que viene predeterminadamente instalado en windows 
//Utilizamos un navegador para meternos en la web y llegar al servidor 
//Un servidor es un computador de mayores rendimietos(lo llaman armarios (raws))
//Esta rquitectura permitio que la vida cambiara(nav, web, servidor)
//Cuando no existia internet la aplicaciones eran solo de escritorio y se pagaba por instalacion
//En tiempo real puedo hacer muchas cosas 
//Una pelicula para un servidor es un dato, todo es un dato, ventajas, tenemos escabilidad todo cambia automaticamente 
//Todos los sistemas sistemas operativos tienen navegadores, esto todo es multiplatafoma, 
//No se necesita cambiar de sistemasd operativos para acceder a estos 
//Arquitectura web tradicional. Plano con los principales actotres de esa aplicacion(cliente, web, servidor, bd)
//Desarrollo del lado del cliente, desarrollo del lado del servidor 
//Establecieron unas normas que son los protocolos de Bioseguridad, protocolo cliente servidor. 
//Para que el cliente hable con el servidor le dimos un nopmbre:HTTP. Eso es un estadar, un conjunto de normas
//W3C los que establecieron las normas
//URL Direccion del servidoro dominio que tiene un direccion IP por allá dentro un número
//Mensaje cliente a servidor(petición, request), servidor cliente(respuesta, response)
//Hard delete, soft delete
//Cabecera por fuera, Body por dentro
//post escribir, get buscar, put modificar, delete eliminar
//Datos de control, solo recibo json 
//La cabecera seria la url, el metodo y datos de control si existen
//Siempre que ese mande datos en gran cantidad van por el body por dentro. 
//Códigos de respuesta
//Recepción de peticiones
//Back recibir peticiones, mandar respuesta y establecer conexion con base de datos 
//API, el mesero, es capaz de recibir multiples peticiones llevarla a mi servidor y dar respuesta 
//Apoyo para las reglas de HTTP
//Si uso apis aparece nuevas reglas uri, metodo, json. JSON aunque somos diferente hablamos igual y nos entendemos
//Endpoint nombre de la rutina, url+endpoint=URI garantiza que sea única
//Url para servidor, uri para db.
//soap en vez de enviar objetos envia xml etiquetas más pesadas como las de android
//Pruebas unitarias, programar un programar que pruebe lo que uno programo 
//Archivo de configuración del proyecto packge.json
//Express framework para crear apis en javaScript node me lo traduce 
//NPM gestor de dependencias de javaScript. //Gestor de dfependencias, tienda virtual Ejemlo, regalar un codigo para recibir peticiones
//Para que express funcione necesita de todas esas carpetas 
//Todo archivo de configuración comienza por punto
//Gitignore todo lo que este ahí ignorelo 
//Una cosa es descargar un paquete y otra es utilizar el paquete 
//Una cosa es comprar ingredientes para una galletas y otra es prepararlas 
//La ruta para ir desde un punto A a punto B el puertoo
//Express es un software que recibe peticiones y responde. 
//Express no conecta mi aplicaciopn a la base de datos 
//Front prueba sus desarrollo en navegador y consola de navegador 
//BACH prueba sus desarrollo en un servidor local 
//Cliente REST postman, insomnia,thunder ciente //Necesitaremos un cliente para probar esto 
//Node levanto el sevidor con node app.js, utilizar la consola del sistema ooperativo por agilidad 
//Todo enpoint empieza con / 
//Apagar el servidor y volverlo a levatar para actualizar los cambios 
//Variables de entorno, variables del servidor que no dependen de mi sino del servidor (3000)

const express = require('express')
const app = express()


//Su endpoint es un / 
app.get('/api/v1/sabado', function (req, res) {
  res.send('Hola soy la peticion GET')
})

//Express levanta el servidor 
app.listen(3000, function(){
    console.log("SERVIDOR ENCENDIDO")
})
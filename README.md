# api_basic_avalith

Servidor relativamente basico, el cual ofrece 3 endpoints

<h3>1 - Devuelve la Fecha</h3>
<h4>Metodo GET</h4>

```
http://localhost:3001/fecha
```

ejemplo:
```js
{
  "Fecha": "2/8/2021"
}
```

<h3>2 - Devuelve el texto de un Archivo TXT</h3>
<h4>Metodo GET</h4>

```
http://localhost:3001/fs
```

ejemplo:
```js
{
  "texto":"texto del archivo"
}
```

<h3>3 Devuelve un saludo, despues de haber recibo el nombre enviado por Post</h3>
<h4>Metodo POST</h4>

```
http://localhost:3001/saludo
```

ejemplo (enviado por post) {"name":"Dario Elguero"}:
```js
{
  "saludo": "Buenos Días Dario Elguero"
}
```

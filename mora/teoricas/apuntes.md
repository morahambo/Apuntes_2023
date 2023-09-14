### CLASE 1, 7/08 
- Para comentar <!-- comentocomento -->
- "<"hr">" sirve para hacer una linea divisoria 
- "<"span"> </"span">"  etiqueta para poner un style distinta a una parte del texto, siempre y cuando esta todo en el mismo título o parrafo.

### CLASE 2
# Tablas
- primero hay que poner <<```"table"```js>>
- <"th"> <"/th"> es Table Header
- abajo de eso va <"td"> <"/td"> --> Table Data
    - Esas son las **filas**. Todas las td que haga adentro de una tabla, entre td son sus filas.
    - "<"tr>" "<"/tr>" marca el pase a otra **fila nueva**. Agrega una fila. Table Row.
- Para ponerle **color** hay que usar:
    - "<"td>" style="background-color:pink"> CONTENIDO QUE QUIERO EN ROSA "<"/tr>"
- Para ponerle **color a toda la columna**:
    - "<"table>"
        "<"colgroup">"
            <"col">
            <"col style="backround-color:pink"">
        <"/colgroup">
        "<"tr>"
            (hago las filas y columnas que quiera)
     "<"/table>"
     - despues del color, se le puede agregar un **span ="2"** para indicar el nro de columnas que quiero que tenga ese estilo

### CLASE 3
- rowspan=3 se extiende la fila para abarcar 3 columnas
- colspan=3 mismo pero se extiende la columna

### CSS
- "CSS portal"
- Con una pseudo clase puedo hacer cosas como poner sombras.
- responsive --> se adapta, si achico la pestaña se achica todo.
- **nav** en vez de div.
-  El css puede estar en un archivo a parte.
- Si hay dos reglas que se llaman igual, gana la última.
- <"p id=i1 class=a"> <"/p">
- Al ponerle un id y una class, después puedo ponerle color solo a ese parrafo (segun id) o a todos los que tengan la misma class.
- para class uso "."
- p #i1 {
    color:red
}
- .a{
    color:blue
}
- Se puede poner un backround y elegir donde posicionarlo(x,y), o si repetirlo, etc.
- Caracteristica: Scroll → se mueve el fondo.
- Se puede combinar con Overflow

### JAVA
- Todo termina con ";"
- Es un Interprete
- Template strings → el texto es dinámico. Pongo las veriables y despues lo que quiero que aparezca, console.log.
    - Diapositiva 9.
- **IF** y **ELSE**
    - Abro, pongo todo entre parentesis y cierro con {}, no con : como en python.
    - Diap 10.
- Punto rojo a la izquierda → **breakpoint**
- Debug
- const → constante 
- Conocemos la cantidad de iteraciones → ciclo **for**
    - Diap 15
- Repetir una serie de instrucciones mientras una condición es verdadera → ciclo **while**
- **Do While**
- **Let** → parecido a var.
- **Array** → para hacer listas.
- Se pueden hacer diccionarios.
-   Diap 19
- Se puede poner una función con nombre o anónima (más moderna)
    - Con nombre:
    function suma (n1, n2){
        let r = n1+n2
        return r
    }
    - Anónima:
    let suma = function (n1, n2){

    }
    suma(3,2)
    - **La más usada:** 
    Let suma = (n1,n2) → {

    }
    suma(3,2)
    - Cuando es **Una sola línea**
    Let suma = (a,b) → a+b

    - **Prompt:** es para entrada, carga datos, variables.
    - **Alert:** es para salida, hace que "salte" un cartelito.


### CLASE 1, 7/08 
- Para comentar <!-- comentocomento -->
- "<"hr">" sirve para hacer una linea divisoria 
- "<"span"> </"span">"  etiqueta para poner un style distinta a una parte del texto, siempre y cuando esta todo en el mismo título o parrafo.

### CLASE 2
# Tablas
- primero hay que poner ```"table"``` 
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
    - getElementByid → trae algo cuando es único
    - getElementsByClassName → trae una lista de todas las clases

- **Para CAPTURAR UNE EVENTO**: let=

#### VUE JS
## Angular:
ej:
- < cronometro> < /cronometro>
    - se va a poner un widget de un cronometro que hiciste antes con HTML, CSS.
- podes hacer dashboards.

## 12/10
- v-bind
- v-html
- v-if
- v-else
---------
- v-for
- v-model → de lectura y escritura

### 19/10
- "e" → evento
    - ej; diap 14 → recuperar la X y la Y de ese evento.
    - tiene muchas propiedades.
        - se pueden ver desde inspeccionar.
- **modifcar un evento** diap 15
    - se va a modificar el evento @keyup.enter → cuando se suelta la tecla enter.
    - @keydown.enter → solo apretar la tecla.
- **To-do list**
    - diapositiva 19: lo hace funcional

### 26/10 WEB COMPONENTS
- demo_u06
- diap 25
- pase de parametros.
    - sepueden definir variables a nivel componente en **vue**
   
    - Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 36
        }
    },
        - ahí estaria diciendoque Messi tiene 36 años
        - palabra clave: **data**
- se pueden reutilizar componentes 
    - por ejemplo para vaya subiendo el numero cuando se hacen clicks (6.04)
- se agregan funciones(methods) 6.06
- Cuando hay mas de un componente "hijo" hay que poner un div "padre" para que funcione todo.
    - el padre le puede pasar propiedades al hijo.
    - el hijo lo hace emitiendo
        - padre: darle bola al emit:

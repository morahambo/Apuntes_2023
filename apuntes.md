### CLASE 1, 7/08 
- Para comentar <!-- comentocomento -->
- "<hr>" sirve para hacer una linea divisoria 
- "<span> </span>"  etiqueta para poner un style distinta a una parte del texto, siempre y cuando esta todo en el mismo título o parrafo.
# Tablas
- primero hay que poner <<table>>
- <<th>> <</th>> es Table Header
- abajo de eso va <<td>> <</td>> --> Table Data
    - Esas son las **filas**. Todas las td que haga adentro de una tabla, entre td son sus filas.
    - <<tr>> <</tr>> marca el pase a otra **fila nueva**. Agrega una fila. Table Row.
- Para ponerle **color** hay que usar:
    - <<td> style="background-color:pink"> CONTENIDO QUE QUIERO EN ROSA <</td>>
- Para ponerle **color a toda la columna**:
    - <<table>>
        <<colgroup>>
            <<col>>
            <<col style="backround-color:pink">>
        <</colgroup>>
        <tr>
            (hago las filas y columnas que quiera)
     <</table>>
     - despues del color, se le puede agregar un **span ="2"** para indicar el nro de columnas que quiero que tenga ese estilo
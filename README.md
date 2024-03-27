# arbol-familiar-costarricense
Árbol familiar / Árbol Genealógico costarricense usando número de cédula.

[Ir al sitio web](https://juanandres-montero.github.io/arbolfamiliar_CostaRica/)

Este es un código de Python que utiliza Selenium para automatizar la interacción con un sitio web. El propósito de este código es buscar información sobre el árbol genealógico de una persona en particular utilizando su número de cédula.

Aquí está una explicación detallada del código:

1. Se instalan los paquetes necesarios. Este código asume que está siendo ejecutado en un entorno de Python donde se pueden instalar paquetes usando `pip` y se está utilizando Ubuntu como sistema operativo, por lo que también se actualiza el sistema y se instala el controlador de Chromium.
   
2. Se importan las bibliotecas necesarias, como `webdriver` de Selenium, `ChromeDriverManager` y `pandas`.

3. Se definen dos funciones principales:

   - `get_info(cedula)`: Esta función toma un número de cédula como entrada y utiliza Selenium para interactuar con un sitio web gubernamental costarricense que busca información sobre una persona a partir de su número de cédula. Extrae la información de una tabla en la página web y devuelve un DataFrame de Pandas que contiene esta información.
   
   - `get_info_by_name(nombre, apellido1, apellido2)`: Similar a `get_info(cedula)`, esta función busca información basada en el nombre y apellidos de una persona en lugar de su número de cédula. Esto se hace en caso de que el número de cédula no esté disponible o no sea válido. Retorna el número de cédula de la persona si se encuentra en la base de datos.

4. Se define una función `format(df)` que toma un DataFrame y lo transforma para que sea más legible y fácil de manejar. 

5. Se define la función `tree(data, yo, string_var)` que busca el árbol genealógico de una persona. Toma como entrada el DataFrame con la información de la persona, el nombre de la persona (`yo`) y una cadena de caracteres (`string_var`) que se va actualizando con información sobre el árbol genealógico. Esta función busca la información de los padres de la persona y la añade a `string_var`.

6. La función principal `main()`:

   - Solicita al usuario que ingrese su número de cédula.
   
   - Intenta obtener información sobre la persona utilizando su número de cédula.
   
   - Formatea la información obtenida y muestra el nombre de la persona.
   
   - Utiliza la función `tree()` para buscar el árbol genealógico de la persona y actualizar `string_var`.
   
   - Repite el proceso para los padres de la persona (hasta 3 generaciones). **El nivel de generaciones puede editarse si se cambia el valor de ```i=3``` en la función ```main()```**
   
7. Finalmente, se imprime el árbol genealógico resultante en la consola.
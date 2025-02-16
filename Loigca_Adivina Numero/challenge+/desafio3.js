/*
### Resolución de los desafíos del curso de lógica de programación

**Practicar la lógica de programación**, que incluye conceptos como variables, condicionales (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear iteraciones controladas e interactuar eficazmente con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar eficientemente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una base sólida y exitosa en el campo de la programación.

#### Calentamiento en programación - Respuestas

1. **Mensaje de bienvenida**

   ```
   console.log('¡Bienvenido!');
   ```

2. **Saludo personalizado**

   ```
   nombre = 'Gui Lima';
   console.log(`¡Hola, ${nombre}!`);
   ```

3. **Saludo personalizado con alerta**

   ```
   nombre = 'Gui Lima';
   alert(`¡Hola, ${nombre}!`);
   ```

4. **Pregunta y respuesta utilizando prompt**

   ```
   lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
   console.log(lenguajePreferido);
   ```

5. **Suma de dos valores**

   ```
   valor1 = 42;
   let valor2 = 8;
   let resultado = valor1 + valor2;
   console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
   ```

6. **Resta de dos valores**

   ```
   valor1 = 10;
   let valor2 = 8;
   let resultado = valor1 - valor2;
   console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
   ```

7. **Determinar si es mayor o menor de edad**

   ```
   edad = prompt('Ingresa tu edad:');
   if (edad > 17) {
       console.log('Eres mayor de edad.');
   } else {
       console.log('Eres menor de edad.');
   }
   ```

8. **Verificar si un número es positivo, negativo o cero**

   ```
   numero = parseFloat(prompt("Ingresa un número:"));
   if (numero > 0) {
       console.log("El número es positivo.");
   } else if (numero < 0) {
       console.log("El número es negativo.");
   } else {
       console.log("El número es cero.");
   }
   ```

9. **Imprimir números del 1 al 10 con un bucle while**

   ```
   numero = 1;
   while (numero <= 10) {
       console.log(numero);
       numero++;
   }
   ```

10. **Determinar si una nota es aprobada o reprobada**

    ```
    nota = 8; // Reemplaza con el valor de la nota que deseas probar
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
    ```

11. **Número aleatorio con Math.random**

    ```
    numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
    ```

12. **Número entero aleatorio entre 1 y 10 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
    console.log(numeroIntAleatorio);
    ```

13. **Número entero aleatorio entre 1 y 1000 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
    console.log(numeroIntAleatorio);
    ```
    
*/
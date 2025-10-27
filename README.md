# Inmobiliaria ADL 🏡

Proyecto de una página web para una inmobiliaria, desarrollado como parte del desafío "Arreglos y objetos" del curso 'JS para la Web' de Desafío Latam. La aplicación muestra propiedades en venta y en alquiler, cargadas dinámicamente desde arreglos de objetos en JavaScript.

## ✨ Características Principales

El proyecto cumple con los siguientes requerimientos:

-   **Página Principal (`index.html`):** Muestra una vista previa de las primeras 3 propiedades en venta y las primeras 3 en alquiler. Cada sección tiene un botón para "Ver todas las propiedades" que redirige a la página correspondiente.
-   **Páginas de Propiedades:**
    -   `propiedades_venta.html`: Lista completa de todas las propiedades disponibles para la venta.
    -   `propiedades_alquiler.html`: Lista completa de todas las propiedades disponibles para alquilar.
-   **Renderizado Dinámico:** Las tarjetas de las propiedades se generan dinámicamente en el DOM utilizando JavaScript. Se recorren los arreglos de datos y se inserta el HTML correspondiente mediante `innerHTML` y plantillas de texto (template literals).
-   **Lógica Condicional:** Se utilizan condicionales para mostrar información específica de cada propiedad, como:
    -   ✅ Un ícono y texto en verde si se permite fumar (`smoke: true`).
    -   🚭 Un ícono y texto en rojo si no se permite fumar (`smoke: false`).
    -   🐾 Un ícono y texto en verde si se permiten mascotas (`pets: true`).
    -   🚫 Un ícono y texto en rojo si no se permiten mascotas (`pets: false`).
-   **Diseño Responsivo:** La interfaz está construida con Bootstrap 5, asegurando una correcta visualización en diferentes tamaños de pantalla.

## 🚀 Tecnologías Utilizadas

-   **HTML5:** Para la estructura semántica de las páginas.
-   **CSS3:** Para estilos personalizados básicos.
-   **JavaScript (ES6+):** Para la manipulación del DOM y la lógica de la aplicación.
-   **Bootstrap 5:** Framework CSS para el diseño responsivo y componentes de UI.
-   **Font Awesome:** Para los íconos utilizados en las tarjetas de propiedades.

## 🔧 Uso

Para visualizar el proyecto, simplemente clona o descarga este repositorio y abre el archivo `index.html` en tu navegador web preferido.

# ElisaOrtiz-Inmobiliaria

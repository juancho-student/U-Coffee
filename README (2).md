# U'Coffee · Sitio web de café de especialidad

Sitio web de una sola página (*landing page*) para **U'Coffee**, una tienda de café colombiano de especialidad. Presenta los orígenes del café, un catálogo de productos **Arábica Premium**, videos de preparaciones y shorts de YouTube, todo con HTML, CSS y JavaScript puros, sin frameworks ni dependencias de instalación.

## Características

- **Header fijo** con logo y menú de navegación que desplaza suavemente a cada sección. En celular se convierte en menú hamburguesa.
- **Slider de 3 banners** con rotación automática cada 5 segundos y puntos de navegación.
- **Orígenes:** fotografía de fondo con una tarjeta descriptiva de las fincas cafeteras.
- **Sabores que cuentan historias:** catálogo de productos en carrusel (4 visibles en escritorio), con animación de zoom al pasar el cursor y rotación continua.
- **Preparaciones:** carrusel de videos de YouTube en formato 16:9 (3 visibles en escritorio).
- **Redes sociales:** 4 shorts de YouTube en formato 9:16.
- **Footer** con datos de contacto e íconos de YouTube, WhatsApp, Facebook, Instagram y TikTok.
- **Responsive:** se adapta a escritorio, tableta y celular, y los carruseles también se deslizan con el dedo.
- **SEO y accesibilidad:** etiquetas semánticas, metadatos, Open Graph, datos estructurados (Schema.org) y textos alternativos en las imágenes.

## Estructura del proyecto

```
ucoffee/
├── index.html
├── estilos.css
├── script.js
├── imagenes_header/
│   ├── logo_ucoffee.svg
│   ├── logo_ucoffee_favicon.svg
│   ├── imagen_header_1.jpg
│   ├── imagen_header_2.jpg
│   └── imagen_header_3.jpg
├── imagenes_origen/
│   └── imagen_origenes_1.jpg
├── imagenes_producto/
│   └── empaque_1.jpg ... empaque_7.jpg
└── imagenes_preparaciones/
```

> La carpeta `imagenes_preparaciones` está reservada para miniaturas propias; los videos se incrustan desde YouTube.

## Cómo ejecutarlo en local

Los videos de YouTube **no se muestran** si abres `index.html` con doble clic (dirección `file:///...`): YouTube devuelve el *Error 153*. Hay que abrir el sitio desde un servidor local.

**Opción 1: VS Code + Live Server**
1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Clic derecho sobre `index.html` → **Open with Live Server**.

**Opción 2: Python**
```bash
cd ucoffee
python3 -m http.server 8000
```
Luego abre `http://localhost:8000` en el navegador.

## Personalización

### Imágenes
Reemplaza los archivos de cada carpeta manteniendo el mismo nombre, o cambia la ruta en el atributo `src` del `index.html`.

| Elemento | Carpeta | Tamaño recomendado |
|---|---|---|
| Banners del header | `imagenes_header` | 1920 × 700 px (JPG/WebP, < 300 KB) |
| Foto de Orígenes | `imagenes_origen` | 1600 × 800 px |
| Empaques de producto | `imagenes_producto` | Proporción ≈ 223 : 235 |
| Logo y favicon | `imagenes_header` | SVG |

### Videos de YouTube
En `index.html`, reemplaza los marcadores por el **ID** de cada video (no el enlace completo):

- Preparaciones: `ID_VIDEO_1`, `ID_VIDEO_2`, ...
- Shorts: `ID_SHORT_1` a `ID_SHORT_4`

```html
<!-- https://youtu.be/kxlPJmgxBK0  →  ID: kxlPJmgxBK0 -->
<iframe src="https://www.youtube.com/embed/kxlPJmgxBK0" ...></iframe>
```

Cambia también el `title` del iframe y el texto del `<figcaption>`.

### Productos
Cada producto es un `<article class="card">` dentro de la sección `#sabores`. Edita el nombre, la región, las notas de sabor y el precio directamente en el HTML. Para agregar un producto, copia un `<article>` completo y pégalo dentro del mismo carrusel.

### Contacto y redes
En el `<footer>`, actualiza la dirección, el teléfono, el correo, el horario y los enlaces de redes sociales. El enlace de WhatsApp usa el formato `https://wa.me/573000000000`.

### Colores y tamaños
Las variables principales están al inicio de `estilos.css`, en `:root`:

```css
--bg:#F2B032;     /* naranja de fondo */
--pill:#F28C0F;   /* naranja de botones y etiquetas */
--ink:#1d1710;    /* color del texto */
--gap:24px;       /* espacio entre tarjetas */
```

### SEO
Antes de publicar, reemplaza `https://www.tudominio.com` por tu dominio real en el `canonical`, en las etiquetas `og:` y en el bloque JSON-LD. Si cambias nombres, regiones o precios de un producto, actualízalos también en ese bloque.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub (los archivos deben quedar en la raíz).
2. Ve a **Settings → Pages**.
3. En **Source**, elige **Deploy from a branch**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos minutos el sitio estará disponible en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Tecnologías y recursos externos

- HTML5, CSS3 y JavaScript (ES6) sin librerías.
- Fuentes: [Poppins](https://fonts.google.com/specimen/Poppins) y [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) desde Google Fonts.
- Íconos de redes sociales: [Simple Icons](https://simpleicons.org/) mediante jsDelivr.
- Videos incrustados con el reproductor de YouTube.

Fuentes e íconos requieren conexión a internet.

## Licencia

Proyecto de uso privado de **U'Coffee**. Todos los derechos reservados. Si quieres que el código sea abierto, agrega aquí la licencia que prefieras (por ejemplo, MIT).

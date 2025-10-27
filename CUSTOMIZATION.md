# 🎨 Guía de Personalización - LAN XP

## Cómo personalizar tu web

---

## 🎨 Cambiar Colores

### En `styles.css`, modifica las variables CSS (líneas 8-13):

```css
:root {
    --primary-color: #00ff88;      /* Color principal (verde neón) */
    --secondary-color: #ff0066;    /* Color secundario (rosa neón) */
    --accent-color: #00d4ff;       /* Color de acento (azul cyan) */
    --dark-bg: #0a0e27;            /* Fondo oscuro */
    --darker-bg: #050814;          /* Fondo más oscuro */
}
```

### Ejemplos de paletas alternativas:

#### Paleta Morada/Dorada:
```css
--primary-color: #FFD700;    /* Dorado */
--secondary-color: #9D00FF;  /* Morado */
--accent-color: #FF69B4;     /* Rosa */
```

#### Paleta Azul/Naranja:
```css
--primary-color: #FF6B35;    /* Naranja */
--secondary-color: #004E89;  /* Azul */
--accent-color: #00D9FF;     /* Cyan */
```

---

## ✏️ Cambiar Textos

### Título Principal (Hero)
**Archivo**: `index.html` (línea ~50)
```html
<div class="hero-glitch" data-text="TU TEXTO">TU TEXTO</div>
<h1 class="hero-title">Tu Título</h1>
```

### Información de la Empresa
**Archivo**: `index.html` (línea ~100)
Busca la sección "Sobre el Evento" y modifica los textos dentro de los `<p>` tags.

---

## 🖼️ Añadir Imágenes

### Imágenes de Fondo en Competiciones
**Archivo**: `styles.css` (busca `.valorant-bg`, `.lol-bg`, etc.)

```css
.valorant-bg {
    background-image: url('ruta/a/tu/imagen.jpg');
}
```

### Logos de Patrocinadores
En `index.html`, sección de patrocinadores, reemplaza el texto con imágenes:

```html
<div class="sponsor-logo">
    <img src="ruta/logo-patrocinador.png" alt="Patrocinador">
</div>
```

---

## 🎯 Modificar Horarios

### En `script.js` (línea ~200), modifica el objeto `scheduleData`:

```javascript
const scheduleData = {
    lunes: [
        {
            time: '10:00',
            title: '🎮 Tu Evento',
            desc: 'Descripción del evento'
        },
        // Añade más eventos...
    ]
};
```

---

## 🏆 Cambiar Competiciones

### En `index.html`, busca `.competitions-grid` y modifica/añade tarjetas:

```html
<div class="competition-card" data-aos="flip-left">
    <div class="competition-image tu-juego-bg"></div>
    <div class="competition-content">
        <h3>Tu Juego</h3>
        <p class="competition-day">Tu Día</p>
        <p>Descripción del juego</p>
        <div class="competition-prize">🏆 Premio: Tu Premio</div>
    </div>
</div>
```

Luego en `styles.css`, añade el fondo:

```css
.tu-juego-bg {
    background-image: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

---

## 💰 Modificar Productos de la Tienda

### En `index.html`, sección `.products-grid`:

```html
<div class="product-card" data-aos="flip-up">
    <div class="product-badge">Nuevo</div>
    <div class="product-icon">🎁</div>
    <h3>Tu Producto</h3>
    <p>Descripción del producto</p>
    <div class="product-price">
        <span class="price-xp">15</span>
        <span class="price-coin">🪙 XP</span>
    </div>
</div>
```

---

## 🎟️ Cambiar Precios de Entradas

### En `index.html`, busca `.tickets-grid` y modifica:

```html
<div class="ticket-price">
    <span class="price-amount">75</span>
    <span class="price-currency">€</span>
</div>
```

Y actualiza las características en `.ticket-features`:

```html
<ul class="ticket-features">
    <li><span class="check">✓</span> Tu beneficio 1</li>
    <li><span class="check">✓</span> Tu beneficio 2</li>
    <!-- Añade más... -->
</ul>
```

---

## 📧 Cambiar Información de Contacto

### En `index.html`, sección `.team-members`:

```html
<div class="team-member">
    <div class="member-icon">👤</div>
    <div class="member-info">
        <h4>Tu Nombre</h4>
        <a href="mailto:tu@email.com">tu@email.com</a>
    </div>
</div>
```

---

## 🎨 Personalizar Fuentes

### En `index.html` (línea 8), cambia las fuentes de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente1&family=TuFuente2&display=swap" rel="stylesheet">
```

Luego en `styles.css`:

```css
:root {
    --font-display: 'TuFuente1', sans-serif;
    --font-body: 'TuFuente2', sans-serif;
}
```

---

## ⚡ Añadir Nuevas Secciones

### Template básico de sección:

```html
<section id="tu-seccion" class="section tu-seccion-class">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">
            <span class="title-icon">🎯</span>
            Tu Título
            <span class="title-decoration"></span>
        </h2>

        <div class="tu-contenido">
            <!-- Tu contenido aquí -->
        </div>
    </div>
</section>
```

Y añade la sección al menú de navegación:

```html
<li><a href="#tu-seccion" class="nav-link">Tu Sección</a></li>
```

---

## 🎭 Modificar Animaciones

### Cambiar velocidad de animaciones en `styles.css`:

```css
:root {
    --transition-fast: 0.2s ease;    /* Rápido */
    --transition-normal: 0.3s ease;  /* Normal */
    --transition-slow: 0.5s ease;    /* Lento */
}
```

### Desactivar animaciones de scroll:

En `index.html`, elimina los atributos `data-aos` de los elementos.

---

## 🌈 Cambiar Partículas del Fondo

### En `script.js` (línea ~20), modifica la configuración de particles.js:

```javascript
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,  // Número de partículas (más = más denso)
        },
        color: {
            value: ['#00ff88', '#00d4ff']  // Tus colores
        },
        size: {
            value: 3,  // Tamaño de las partículas
        },
        // ... más configuraciones
    }
});
```

---

## 📱 Ajustar Responsive

### En `styles.css`, busca los media queries (línea ~2600):

```css
@media (max-width: 768px) {
    /* Estilos para tablet */
}

@media (max-width: 480px) {
    /* Estilos para móvil */
}
```

Modifica los breakpoints según necesites:

```css
@media (max-width: 1024px) {
    /* iPad Pro */
}

@media (max-width: 414px) {
    /* iPhone */
}
```

---

## 🎮 Añadir Más Easter Eggs

### En `script.js`, crea tu propia secuencia:

```javascript
const tuCodigo = ['t', 'u', 'c', 'o', 'd', 'i', 'g', 'o'];
let tuIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === tuCodigo[tuIndex]) {
        tuIndex++;
        if (tuIndex === tuCodigo.length) {
            // Tu efecto especial aquí
            alert('¡Easter Egg Encontrado!');
            tuIndex = 0;
        }
    } else {
        tuIndex = 0;
    }
});
```

---

## 🔧 Optimizaciones Avanzadas

### Minificar CSS y JS

Usa herramientas online como:
- CSS: https://cssminifier.com/
- JS: https://javascript-minifier.com/

### Comprimir Imágenes

Usa herramientas como:
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

### Añadir Meta Tags SEO

En `index.html`, dentro de `<head>`:

```html
<meta name="description" content="Tu descripción">
<meta name="keywords" content="lan, party, gaming, esports">
<meta name="author" content="Tu Nombre">
<meta property="og:title" content="LAN XP">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="ruta/a/imagen.jpg">
```

---

## 🎯 Consejos Pro

1. **Mantén la Consistencia**: Usa las variables CSS para mantener colores coherentes
2. **Prueba en Móvil**: Siempre verifica cómo se ve en diferentes dispositivos
3. **Optimiza Imágenes**: Usa formatos modernos como WebP
4. **Accesibilidad**: Mantén buenos contrastes de color
5. **Performance**: No abuses de las animaciones
6. **Backups**: Guarda copias antes de hacer cambios grandes

---

## 🆘 Solución de Problemas

### Las animaciones no funcionan
- Verifica que particles.js esté cargado
- Abre la consola del navegador (F12) para ver errores

### Los estilos no se aplican
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica que styles.css esté vinculado correctamente

### El JavaScript no funciona
- Abre la consola (F12) para ver errores
- Verifica que script.js esté al final del `<body>`

### El responsive no funciona
- Verifica el viewport meta tag en el `<head>`
- Prueba con las DevTools del navegador

---

## 📚 Recursos Útiles

- **Colores**: https://coolors.co/
- **Iconos**: https://emojipedia.org/
- **Fuentes**: https://fonts.google.com/
- **Gradientes**: https://cssgradient.io/
- **Animaciones CSS**: https://animate.style/
- **Inspiración**: https://dribbble.com/

---

¡Happy Coding! 🚀

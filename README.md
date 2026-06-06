# KcQ - Consultoría de Diseño de Interiores

Landing page profesional para KcQ, una consultora especializada en diseño de interiores residencial, corporativo y home staging.

## Descripción del Proyecto

Este proyecto es una landing page completa desarrollada como evaluación del Taller de Desarrollo Web. Incluye 7 secciones obligatorias con diseño responsive, accesibilidad WCAG AA y validación de formulario con JavaScript.

**Tema seleccionado:** Consultora de Diseño de Interiores (Tema N°9)

## Estructura de Carpetas

```
disenokcq/
├── index.html                  # Punto de entrada principal
│   styles.css  
├── README.md                   # Documentación del proyecto
├── .gitignore                  # Archivos ignorados por Git
└── src/
    ├── js/
    │   └── main.js             # Validación de formulario e interacciones
    └── assets/
        └── images/             # Imágenes del sitio
            ├── hero.jpg
            ├── servicio-residencial.jpg
            ├── servicio-corporativo.jpg
            ├── servicio-staging.jpg
            ├── equipo-1.jpg
            ├── equipo-2.jpg
            ├── portfolio-dormitorio.jpg
            └── portfolio-cocina.jpg
```

## Tecnologías Utilizadas

- **HTML5** semántico (header, nav, main, section, article, footer)
- **CSS3** con variables personalizadas, Flexbox y CSS Grid
- **JavaScript** vanilla para validación de formulario
- **Google Fonts** (Cormorant Garamond + Inter)

*No se utilizaron frameworks CSS (Bootstrap, Tailwind) ni librerías JS.*

## Secciones Implementadas

1. **Hero/Portada** - Imagen de fondo con titular, subtítulo y CTAs
2. **Sobre Nosotros** - Descripción, misión y valores con imágenes
3. **Servicios** - 3 servicios: Diseño Residencial, Corporativo y Home Staging
4. **Planes** - Tabla comparativa de precios (Básico, Profesional, Premium)
5. **Equipo** - Presentación de 2 profesionales + 3 testimonios
6. **Contacto** - Formulario con validación JS + información de contacto
7. **Footer** - Navegación, servicios, datos de contacto y copyright

## Cómo Visualizar

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en cualquier navegador web moderno
3. No requiere servidor ni instalación de dependencias

### Opción con servidor local (recomendado)

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (npx serve)
npx serve .

# Usando PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Características Técnicas

- ✅ Documento HTML5 válido con etiquetas semánticas
- ✅ Atributo `alt` descriptivo en todas las imágenes
- ✅ Navegación interna funcional con anclas (#sección)
- ✅ CSS externo con variables CSS para colores y tipografía
- ✅ Layout con CSS Grid y Flexbox
- ✅ Diseño responsive (breakpoint 768px)
- ✅ Contraste de color WCAG AA (≥4.5:1)
- ✅ Fuente base de 16px
- ✅ Formulario con validación JavaScript
- ✅ Labels correctamente asociados a inputs
- ✅ Roles ARIA para accesibilidad

## Autor

Proyecto desarrollado para el Taller de Desarrollo Web - Ingeniería en Informática.

**URL del repositorio:** [https://github.com/usuario/disenokcq](https://github.com/usuario/disenokcq)

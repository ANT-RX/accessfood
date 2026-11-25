# accessfood

**Restaurantes accesibles en Puebla.** accessfood ayuda a personas con discapacidad, mujeres embarazadas,
familias con niños pequeños y adultos mayores a encontrar restaurantes aptos para ellas y a reservar mesa.

🌐 **Sitio:** https://ant-rx.github.io/accessfood/

> **Prototipo académico.** La demo usa restaurantes reales de la ciudad de Puebla, pero **no existe ningún
> convenio actual con ellos**. Los beneficios, calificaciones, horarios, cupos y características de
> accesibilidad son datos de ejemplo, y las reservas no se envían a los establecimientos. Los nombres y
> marcas pertenecen a sus dueños; no se usan sus logotipos.

## Qué se puede hacer

| Sección | Funciones |
|---|---|
| **Inicio** | Reservadas, visitadas y fecha de corte; próxima visita; restaurantes con convenio; botón *Cargar datos de demostración*. |
| **Buscar restaurante** | Búsqueda estilo Airbnb con mapa: tipo de comida, «Aptos para mí», favoritos, filtros de accesibilidad, distancia y orden. Ubicación por GPS, por zona o marcando un punto en el mapa. |
| **Mis visitas** | Próximas (modificar o eliminar) y visitadas (reservar de nuevo). El restaurante confirma o rechaza en unos segundos (simulado, según horario y cupo). |
| **Favoritos** | Restaurantes guardados con el corazón. |
| **Perfil** | Nombre, teléfono y correo con validación; foto desde la galería o la cámara; para quién son las reservas; necesidades; recordatorios; tema, tamaño de texto y alto contraste. |

Se puede **instalar en el teléfono**: en Chrome (Android), menú ⋮ → *Agregar a la pantalla principal*; en Safari
(iPhone), botón Compartir → *Agregar a inicio*.

## Cómo está hecho

- Un solo `index.html` con HTML, CSS y JavaScript sin dependencias de compilación ni servidor.
- Mapa: [Leaflet](https://leafletjs.com/) (incluido en `vendor/leaflet`) con mapas de © OpenStreetMap. Si no hay
  conexión, la app usa un mapa esquemático de Puebla dibujado en la propia página.
- Los datos (perfil, foto, reservas, favoritos y avisos) se guardan en el navegador de cada persona
  (`localStorage`). No se envían a ningún servidor ni se comparten entre dispositivos.
- `manifest.webmanifest` y `sw.js` permiten instalarla y abrirla sin conexión.

## Publicación

GitHub Pages publica la rama `main` desde la raíz. Cualquier cambio en `index.html` subido a `main` se publica
en uno o dos minutos.

Para probarla en tu computadora basta con abrir `index.html` en el navegador, o servir la carpeta con
`python -m http.server` y entrar a http://localhost:8000.

## Siguiente etapa (con servidor)

- Convenios reales y datos de accesibilidad verificados con cada restaurante.
- Cuentas de usuario y datos sincronizados entre dispositivos.
- Confirmación real por parte del restaurante y notificaciones push.

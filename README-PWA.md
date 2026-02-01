# 🎲 Juego de Dados - PWA (Progressive Web App)

## 📱 ¿Qué es una PWA?

Una Progressive Web App (Aplicación Web Progresiva) te permite instalar este juego en tu celular o tablet como si fuera una app nativa, **SIN necesidad de:**
- ❌ Rootear el dispositivo
- ❌ Descargar APKs
- ❌ Usar Google Play Store o App Store
- ❌ Permisos especiales

## ✨ Características de la PWA

- 📱 Se instala como una app normal en tu teléfono
- 🔌 Funciona offline (una vez cargada)
- 🚀 Carga más rápido
- 📲 Ícono en la pantalla de inicio
- 🎨 Se abre en pantalla completa (sin barra del navegador)

## 📥 Cómo instalar en tu celular

### Android (Chrome, Edge, Samsung Internet)

1. Abre el juego en tu navegador: `https://tu-url-aqui.com`
2. El navegador mostrará un banner o ícono de "Instalar" o "Agregar a pantalla de inicio"
3. Toca **"Instalar"** o **"Agregar a inicio"**
4. ¡Listo! El icono aparecerá en tu pantalla de inicio

**Otra forma en Android:**
1. Abre el juego en Chrome
2. Toca el menú (⋮) → **"Agregar a pantalla de inicio"** o **"Instalar app"**
3. Confirma la instalación

### iOS (iPhone/iPad con Safari)

1. Abre el juego en Safari
2. Toca el botón de **Compartir** (□↑)
3. Desplázate y toca **"Agregar a pantalla de inicio"**
4. Toca **"Agregar"**
5. ¡Listo! El icono aparecerá en tu pantalla de inicio

## 🖥️ Instalación local (desarrollo)

### Paso 1: Generar los iconos

1. Abre el archivo `generar-iconos.html` en tu navegador
2. Los iconos se generan automáticamente
3. Haz clic en **"Descargar 192x192"** y guárdalo como `icon-192.png`
4. Haz clic en **"Descargar 512x512"** y guárdalo como `icon-512.png`
5. Guarda ambos archivos en la carpeta raíz del proyecto

### Paso 2: Probar localmente

Para probar la PWA necesitas un servidor local con HTTPS:

**Opción 1: Python (simple)**
```bash
# Python 3
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

**Opción 2: Node.js con http-server**
```bash
npm install -g http-server
http-server -p 8000
```

**Opción 3: Visual Studio Code**
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

### Paso 3: Verificar instalación

1. Abre las DevTools (F12)
2. Ve a la pestaña "Application" → "Manifest"
3. Verifica que el manifest.json esté cargado correctamente
4. Ve a "Service Workers" y verifica que esté registrado

## 🚀 Desplegar en línea

Para que funcione como PWA real, necesitas:
1. Subir los archivos a un servidor web
2. Debe tener **HTTPS** (obligatorio para PWAs)

**Opciones gratuitas recomendadas:**
- **GitHub Pages** (gratis, con HTTPS automático)
- **Netlify** (gratis, fácil de usar)
- **Vercel** (gratis, rápido)
- **Firebase Hosting** (gratis)

## 📝 Archivos PWA creados

- ✅ `manifest.json` - Configuración de la app
- ✅ `service-worker.js` - Para funcionamiento offline
- ✅ `generar-iconos.html` - Generador de iconos (temporal)
- ✅ `icon-192.png` - Icono pequeño (debes generar)
- ✅ `icon-512.png` - Icono grande (debes generar)
- ✅ `index.html` - Actualizado con enlaces PWA

## 🔧 Actualizaciones

Cuando hagas cambios al juego:
1. Actualiza la versión en `service-worker.js` (línea `CACHE_NAME`)
2. Los usuarios recibirán la actualización automáticamente

## ❓ Solución de problemas

**"No me aparece la opción de instalar"**
- Verifica que estés usando HTTPS (o localhost)
- Verifica que los iconos existan (icon-192.png y icon-512.png)
- Actualiza la página (F5)
- Revisa la consola (F12) por errores

**"No funciona offline"**
- Abre la página al menos una vez con internet
- Verifica que el Service Worker esté registrado (DevTools → Application → Service Workers)

**"Los cambios no aparecen"**
- Cierra completamente la app y vuelve a abrirla
- Borra el cache del navegador
- Cambia la versión en `service-worker.js`

## 📚 Recursos

- [PWA Documentation (MDN)](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)
- [Service Workers (MDN)](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/es/docs/Web/Manifest)

---

**Versión:** 1.4.0
**Autor:** Juego de Dados - Aprende a Leer
**Licencia:** Uso educativo

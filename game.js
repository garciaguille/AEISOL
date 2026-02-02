// ==========================================
// JUEGO DE DADOS - APRENDE A LEER
// Versión 1.2.0 - Con configuración para padres
// ==========================================

// ==========================================
// CONFIGURACIÓN DEL JUEGO (modificable por padres)
// ==========================================

let configuracion = {
    tiempoPorTurno: 158,      // segundos
    totalRondas: 5,            // número de rondas
    dificultad: 'normal',      // 'facil', 'normal', 'dificil', 'mixto'
    sonidosActivados: true,
    modoJuego: 'dos-jugadores' // 'dos-jugadores' o 'un-jugador'
};

// ==========================================
// SISTEMA DE LOGROS Y PROGRESO
// ==========================================

const LOGROS = {
    // Primeros Pasos
    primera_palabra: {
        id: 'primera_palabra',
        nombre: 'Primera Palabra',
        descripcion: 'Lee tu primera palabra correctamente',
        icono: '🌱',
        categoria: 'primeros-pasos',
        condicion: (progreso) => progreso.palabrasCorrectas >= 1
    },
    primera_partida: {
        id: 'primera_partida',
        nombre: '¡Empezamos!',
        descripcion: 'Completa tu primera partida',
        icono: '🎮',
        categoria: 'primeros-pasos',
        condicion: (progreso) => progreso.partidasCompletadas >= 1
    },

    // Rachas
    racha_3: {
        id: 'racha_3',
        nombre: 'Racha de 3',
        descripcion: '3 palabras correctas seguidas',
        icono: '🔥',
        categoria: 'rachas',
        condicion: (progreso) => progreso.rachaMaxima >= 3
    },
    racha_5: {
        id: 'racha_5',
        nombre: 'Racha de 5',
        descripcion: '5 palabras correctas seguidas',
        icono: '🔥',
        categoria: 'rachas',
        condicion: (progreso) => progreso.rachaMaxima >= 5
    },
    racha_10: {
        id: 'racha_10',
        nombre: 'Racha de 10',
        descripcion: '10 palabras correctas seguidas',
        icono: '🔥',
        categoria: 'rachas',
        condicion: (progreso) => progreso.rachaMaxima >= 10
    },
    imparable: {
        id: 'imparable',
        nombre: 'Imparable',
        descripcion: '20 palabras correctas seguidas',
        icono: '💥',
        categoria: 'rachas',
        condicion: (progreso) => progreso.rachaMaxima >= 20
    },

    // Velocidad
    rapido: {
        id: 'rapido',
        nombre: 'Rápido',
        descripcion: 'Acertar una palabra en menos de 10 segundos',
        icono: '⚡',
        categoria: 'velocidad',
        condicion: (progreso) => progreso.aciertosRapidos >= 1
    },
    relampago: {
        id: 'relampago',
        nombre: 'Relámpago',
        descripcion: 'Acertar 5 palabras en menos de 10 segundos',
        icono: '⚡',
        categoria: 'velocidad',
        condicion: (progreso) => progreso.aciertosRapidos >= 5
    },
    sin_ayuda: {
        id: 'sin_ayuda',
        nombre: 'Flash',
        descripcion: 'Acertar sin usar ayudas',
        icono: '⚡',
        categoria: 'velocidad',
        condicion: (progreso) => progreso.aciertosSinAyuda >= 1
    },

    // Maestría
    aprendiz: {
        id: 'aprendiz',
        nombre: 'Aprendiz',
        descripcion: '10 palabras correctas en total',
        icono: '📖',
        categoria: 'maestria',
        condicion: (progreso) => progreso.palabrasCorrectas >= 10
    },
    estudiante: {
        id: 'estudiante',
        nombre: 'Estudiante',
        descripcion: '25 palabras correctas en total',
        icono: '📚',
        categoria: 'maestria',
        condicion: (progreso) => progreso.palabrasCorrectas >= 25
    },
    experto: {
        id: 'experto',
        nombre: 'Experto',
        descripcion: '50 palabras correctas en total',
        icono: '🎓',
        categoria: 'maestria',
        condicion: (progreso) => progreso.palabrasCorrectas >= 50
    },
    maestro: {
        id: 'maestro',
        nombre: 'Maestro',
        descripcion: '100 palabras correctas en total',
        icono: '👨‍🎓',
        categoria: 'maestria',
        condicion: (progreso) => progreso.palabrasCorrectas >= 100
    },
    leyenda: {
        id: 'leyenda',
        nombre: 'Leyenda',
        descripcion: '200 palabras correctas en total',
        icono: '🏆',
        categoria: 'maestria',
        condicion: (progreso) => progreso.palabrasCorrectas >= 200
    },

    // Dedicación
    jugador_frecuente: {
        id: 'jugador_frecuente',
        nombre: 'Jugador Frecuente',
        descripcion: 'Jugar 5 días diferentes',
        icono: '📅',
        categoria: 'dedicacion',
        condicion: (progreso) => progreso.diasJugados >= 5
    },
    dedicado: {
        id: 'dedicado',
        nombre: 'Dedicado',
        descripcion: 'Jugar 10 días diferentes',
        icono: '📅',
        categoria: 'dedicacion',
        condicion: (progreso) => progreso.diasJugados >= 10
    },
    comprometido: {
        id: 'comprometido',
        nombre: 'Comprometido',
        descripcion: 'Jugar 20 días diferentes',
        icono: '🗓️',
        categoria: 'dedicacion',
        condicion: (progreso) => progreso.diasJugados >= 20
    },

    // Especiales
    perfeccionista: {
        id: 'perfeccionista',
        nombre: 'Perfeccionista',
        descripcion: 'Completar una partida sin fallar ninguna palabra',
        icono: '💯',
        categoria: 'especiales',
        condicion: (progreso) => progreso.partidasPerfectas >= 1
    },
    explorador: {
        id: 'explorador',
        nombre: 'Explorador',
        descripcion: 'Probar los 3 niveles de dificultad',
        icono: '🗺️',
        categoria: 'especiales',
        condicion: (progreso) => progreso.dificultadesJugadas.size >= 3
    },
    personalizado: {
        id: 'personalizado',
        nombre: 'Creativo',
        descripcion: 'Crear una palabra personalizada',
        icono: '✨',
        categoria: 'especiales',
        condicion: (progreso) => progreso.palabrasCreadas >= 1
    }
};

// Progreso del jugador
let progresoJugador = {
    palabrasCorrectas: 0,
    palabrasIncorrectas: 0,
    partidasCompletadas: 0,
    partidasPerfectas: 0,
    rachaActual: 0,
    rachaMaxima: 0,
    aciertosRapidos: 0,
    aciertosSinAyuda: 0,
    diasJugados: 0,
    ultimoDiaJugado: '',
    dificultadesJugadas: new Set(),
    palabrasCreadas: 0,
    logrosDesbloqueados: [],
    recordPersonal: 0
};

// Configuración de los dados (cada dado solo se usa UNA vez)
// Dado consonante 1: p, m, s, t, n, d
// Dado consonante 2: l, t, p, d, r, s, m
// Dado consonante 3: c, h, f, k, l, j
// Dados vocales (x3): cada uno tiene a, e, i, o, u
//
// REGLAS para formar palabras:
// - Máximo 1 consonante del dado 1
// - Máximo 1 consonante del dado 2
// - Máximo 1 consonante del dado 3
// - Máximo 3 vocales (una por cada dado de vocales)
// - Letras repetidas: "l" está en dado 2 y 3, se puede usar 2 veces
//   "t,p,d,s,m" están en dado 1 y 2, se pueden usar 2 veces

// Banco de palabras VERIFICADAS que se pueden formar con los dados
// Categorizadas por dificultad

// FÁCIL: 2-3 letras
const PALABRAS_FACIL = [
    { palabra: "sol", imagen: "🌞" },
    { palabra: "sal", imagen: "🧂" },
    { palabra: "mar", imagen: "🌊" },
    { palabra: "pan", imagen: "🍞" },
    { palabra: "pie", imagen: "🦶" },
    { palabra: "dos", imagen: "✌️" },
    { palabra: "mes", imagen: "📅" },
    { palabra: "red", imagen: "🕸️" },
    { palabra: "sur", imagen: "🧭" },
    { palabra: "tos", imagen: "🤧" },
    { palabra: "ala", imagen: "🪽" },
    { palabra: "oso", imagen: "🐻" },
    { palabra: "uno", imagen: "1️⃣" }
];

// NORMAL: 4 letras
const PALABRAS_NORMAL = [
    { palabra: "casa", imagen: "🏠" },
    { palabra: "mesa", imagen: "🪑" },
    { palabra: "pato", imagen: "🦆" },
    { palabra: "luna", imagen: "🌙" },
    { palabra: "cama", imagen: "🛏️" },
    { palabra: "pera", imagen: "🍐" },
    { palabra: "nido", imagen: "🪺" },
    { palabra: "sapo", imagen: "🐸" },
    { palabra: "dedo", imagen: "👆" },
    { palabra: "lado", imagen: "➡️" },
    { palabra: "lata", imagen: "🥫" },
    { palabra: "sopa", imagen: "🍲" },
    { palabra: "seta", imagen: "🍄" },
    { palabra: "foto", imagen: "📷" },
    { palabra: "pala", imagen: "🥄" },
    { palabra: "polo", imagen: "🧊" },
    { palabra: "ropa", imagen: "👕" },
    { palabra: "rosa", imagen: "🌹" },
    { palabra: "saco", imagen: "🎒" },
    { palabra: "tela", imagen: "🧵" },
    { palabra: "codo", imagen: "💪" },
    { palabra: "cola", imagen: "🦊" },
    { palabra: "copa", imagen: "🏆" },
    { palabra: "faro", imagen: "🗼" },
    { palabra: "hilo", imagen: "🧶" },
    { palabra: "humo", imagen: "💨" },
    { palabra: "lomo", imagen: "🥩" },
    { palabra: "nudo", imagen: "🪢" },
    { palabra: "pico", imagen: "⛏️" },
    { palabra: "rana", imagen: "🐸" },
    { palabra: "rama", imagen: "🌿" },
    { palabra: "remo", imagen: "🚣" },
    { palabra: "seda", imagen: "🎀" },
    { palabra: "suma", imagen: "➕" },
    { palabra: "nata", imagen: "🍦" },
    { palabra: "nota", imagen: "📝" },
    { palabra: "puma", imagen: "🐆" },
    { palabra: "rata", imagen: "🐀" },
    { palabra: "ruta", imagen: "🛤️" },
    { palabra: "tapa", imagen: "🫕" },
    { palabra: "toro", imagen: "🐂" },
    { palabra: "moto", imagen: "🏍️" },
    { palabra: "paso", imagen: "👣" },
    { palabra: "peso", imagen: "⚖️" },
    { palabra: "sumo", imagen: "🤼" },
    { palabra: "tomo", imagen: "📚" },
    { palabra: "mudo", imagen: "🤐" },
    { palabra: "mula", imagen: "🫏" },
    { palabra: "judo", imagen: "🥋" },
    { palabra: "sola", imagen: "👩" },
    { palabra: "mole", imagen: "🍲" },
    { palabra: "cura", imagen: "⛪" },
    { palabra: "fila", imagen: "👥" },
    { palabra: "hora", imagen: "🕐" },
    { palabra: "jota", imagen: "🇯" },
    { palabra: "cuna", imagen: "🛒" },
    { palabra: "cupo", imagen: "🎫" },
    { palabra: "cero", imagen: "0️⃣" },
    { palabra: "cara", imagen: "😊" },
    { palabra: "cosa", imagen: "📦" },
    { palabra: "come", imagen: "🍽️" }
];

// DIFÍCIL: 5+ letras
const PALABRAS_DIFICIL = [
    { palabra: "falda", imagen: "👗" },
    { palabra: "mosca", imagen: "🪰" },
    { palabra: "crema", imagen: "🧴" },
    { palabra: "fruta", imagen: "🍎" },
    { palabra: "fresa", imagen: "🍓" },
    { palabra: "freno", imagen: "🛑" },
    { palabra: "norte", imagen: "🧭" },
    { palabra: "cuero", imagen: "🧥" },
    { palabra: "suero", imagen: "💉" }
];

// ==========================================
// SISTEMA DE PERSONALIZACIÓN DE PALABRAS
// ==========================================

// Almacena las personalizaciones del usuario
let palabrasPersonalizadas = {};

// Almacena las palabras nuevas creadas por el usuario
let palabrasNuevas = [];

// Variable temporal para la imagen de nueva palabra
let imagenNuevaPalabraTemp = null;

// Cargar personalizaciones desde localStorage
function cargarPalabrasPersonalizadas() {
    const guardado = localStorage.getItem('juegoLeerDados_palabras');
    if (guardado) {
        palabrasPersonalizadas = JSON.parse(guardado);
    }

    const nuevasGuardadas = localStorage.getItem('juegoLeerDados_palabrasNuevas');
    if (nuevasGuardadas) {
        palabrasNuevas = JSON.parse(nuevasGuardadas);
    }
}

// Guardar personalizaciones en localStorage
function guardarPalabrasPersonalizadas() {
    localStorage.setItem('juegoLeerDados_palabras', JSON.stringify(palabrasPersonalizadas));
    localStorage.setItem('juegoLeerDados_palabrasNuevas', JSON.stringify(palabrasNuevas));
}

// ==========================================
// FUNCIONES DE PROGRESO Y LOGROS
// ==========================================

// Cargar progreso desde localStorage
function cargarProgreso() {
    const guardado = localStorage.getItem('juegoLeerDados_progreso');
    if (guardado) {
        const progresoGuardado = JSON.parse(guardado);
        progresoJugador = {
            ...progresoJugador,
            ...progresoGuardado,
            dificultadesJugadas: new Set(progresoGuardado.dificultadesJugadas || [])
        };
    }

    // Registrar día actual
    const hoy = new Date().toDateString();
    if (progresoJugador.ultimoDiaJugado !== hoy) {
        if (progresoJugador.ultimoDiaJugado) {
            progresoJugador.diasJugados++;
        } else {
            progresoJugador.diasJugados = 1;
        }
        progresoJugador.ultimoDiaJugado = hoy;
        guardarProgreso();
    }
}

// Guardar progreso en localStorage
function guardarProgreso() {
    const progresoParaGuardar = {
        ...progresoJugador,
        dificultadesJugadas: Array.from(progresoJugador.dificultadesJugadas)
    };
    localStorage.setItem('juegoLeerDados_progreso', JSON.stringify(progresoParaGuardar));
}

// Actualizar progreso después de acierto
function registrarAciertoPalabraLogros(tiempoUsado, usaronAyuda) {
    progresoJugador.palabrasCorrectas++;
    progresoJugador.rachaActual++;

    // Actualizar racha máxima
    if (progresoJugador.rachaActual > progresoJugador.rachaMaxima) {
        progresoJugador.rachaMaxima = progresoJugador.rachaActual;
    }

    // Acierto rápido (menos de 10 segundos)
    if (tiempoUsado < 10) {
        progresoJugador.aciertosRapidos++;
    }

    // Acierto sin ayuda
    if (!usaronAyuda) {
        progresoJugador.aciertosSinAyuda++;
    }

    // Registrar dificultad jugada
    progresoJugador.dificultadesJugadas.add(configuracion.dificultad);

    // Verificar logros desbloqueados
    verificarLogros();

    guardarProgreso();
}

// Actualizar progreso después de fallo
function registrarFalloPalabraLogros() {
    progresoJugador.palabrasIncorrectas++;
    progresoJugador.rachaActual = 0;
    guardarProgreso();
}

// Registrar partida completada
function registrarPartidaCompletada(fallos) {
    progresoJugador.partidasCompletadas++;

    // Partida perfecta
    if (fallos === 0) {
        progresoJugador.partidasPerfectas++;
    }

    verificarLogros();
    guardarProgreso();
}

// Registrar palabra creada
function registrarPalabraCreada() {
    progresoJugador.palabrasCreadas++;
    verificarLogros();
    guardarProgreso();
}

// Verificar y desbloquear logros
function verificarLogros() {
    const logrosNuevos = [];

    Object.values(LOGROS).forEach(logro => {
        // Si el logro no está desbloqueado y cumple la condición
        if (!progresoJugador.logrosDesbloqueados.includes(logro.id) &&
            logro.condicion(progresoJugador)) {
            progresoJugador.logrosDesbloqueados.push(logro.id);
            logrosNuevos.push(logro);
        }
    });

    // Mostrar notificaciones de logros nuevos
    if (logrosNuevos.length > 0) {
        logrosNuevos.forEach(logro => {
            mostrarNotificacionLogro(logro);
        });
    }
}

// Mostrar notificación de logro desbloqueado
function mostrarNotificacionLogro(logro) {
    reproducirSonidoBonus();

    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion-logro';
    notificacion.innerHTML = `
        <div class="logro-desbloqueado">
            <div class="logro-icono">${logro.icono}</div>
            <div class="logro-info">
                <div class="logro-titulo">¡Logro Desbloqueado!</div>
                <div class="logro-nombre">${logro.nombre}</div>
                <div class="logro-descripcion">${logro.descripcion}</div>
            </div>
        </div>
    `;

    document.body.appendChild(notificacion);

    // Animar entrada
    setTimeout(() => notificacion.classList.add('mostrar'), 100);

    // Ocultar después de 4 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => notificacion.remove(), 500);
    }, 4000);
}

// Obtener estadísticas para mostrar
function obtenerEstadisticas() {
    const totalPalabras = progresoJugador.palabrasCorrectas + progresoJugador.palabrasIncorrectas;
    const precision = totalPalabras > 0
        ? Math.round((progresoJugador.palabrasCorrectas / totalPalabras) * 100)
        : 0;

    return {
        palabrasCorrectas: progresoJugador.palabrasCorrectas,
        palabrasIncorrectas: progresoJugador.palabrasIncorrectas,
        precision: precision,
        rachaMaxima: progresoJugador.rachaMaxima,
        partidasCompletadas: progresoJugador.partidasCompletadas,
        logrosDesbloqueados: progresoJugador.logrosDesbloqueados.length,
        logrosTotal: Object.keys(LOGROS).length,
        diasJugados: progresoJugador.diasJugados
    };
}

// ==========================================
// FUNCIONES DE UI - PANTALLA DE LOGROS
// ==========================================

function mostrarPantallaLogros() {
    reproducirSonidoClick();
    renderizarLogros();
    actualizarEstadisticasLogros();
    mostrarPantalla('pantalla-logros');
}

function renderizarLogros(categoriaFiltro = 'todos') {
    const lista = document.getElementById('lista-logros');
    lista.innerHTML = '';

    Object.values(LOGROS).forEach(logro => {
        // Filtrar por categoría
        if (categoriaFiltro !== 'todos' && logro.categoria !== categoriaFiltro) {
            return;
        }

        const desbloqueado = progresoJugador.logrosDesbloqueados.includes(logro.id);
        const logroElement = document.createElement('div');
        logroElement.className = `logro-card ${desbloqueado ? 'desbloqueado' : 'bloqueado'}`;

        logroElement.innerHTML = `
            <div class="logro-icono-grande">${logro.icono}</div>
            <div class="logro-detalles">
                <div class="logro-nombre-card">${logro.nombre}</div>
                <div class="logro-descripcion-card">${logro.descripcion}</div>
                ${!desbloqueado ? '<div class="logro-bloqueado-texto">🔒 Bloqueado</div>' : '<div class="logro-desbloqueado-marca">✅ Desbloqueado</div>'}
            </div>
        `;

        lista.appendChild(logroElement);
    });
}

function actualizarEstadisticasLogros() {
    const stats = obtenerEstadisticas();

    document.getElementById('stat-palabras').textContent = stats.palabrasCorrectas;
    document.getElementById('stat-precision').textContent = `${stats.precision}%`;
    document.getElementById('stat-racha').textContent = stats.rachaMaxima;
    document.getElementById('stat-logros-desbloqueados').textContent = `${stats.logrosDesbloqueados}/${stats.logrosTotal}`;

    // Actualizar barra de progreso
    const porcentaje = Math.round((stats.logrosDesbloqueados / stats.logrosTotal) * 100);
    document.getElementById('progreso-fill').style.width = `${porcentaje}%`;
    document.getElementById('progreso-texto').textContent = `${porcentaje}% completado`;
}

// Obtener todas las palabras base (sin modificar) + palabras nuevas del usuario
function obtenerTodasLasPalabrasBase() {
    const palabrasBase = [
        ...PALABRAS_FACIL.map(p => ({ ...p, dificultad: 'facil', esNueva: false })),
        ...PALABRAS_NORMAL.map(p => ({ ...p, dificultad: 'normal', esNueva: false })),
        ...PALABRAS_DIFICIL.map(p => ({ ...p, dificultad: 'dificil', esNueva: false }))
    ];

    // Agregar palabras nuevas creadas por el usuario
    const palabrasUsuario = palabrasNuevas.map(p => ({
        palabra: p.palabra,
        imagen: p.imagen,
        dificultad: p.dificultad,
        esNueva: true,
        id: p.id
    }));

    return [...palabrasBase, ...palabrasUsuario];
}

// Obtener palabra personalizada o la original
function obtenerPalabraPersonalizada(palabraOriginal, imagen) {
    const key = `${palabraOriginal}_${imagen}`;
    if (palabrasPersonalizadas[key]) {
        return {
            palabra: palabrasPersonalizadas[key].palabraPersonalizada || palabraOriginal,
            imagen: palabrasPersonalizadas[key].imagenPersonalizada || imagen,
            imagenOriginal: imagen,
            esImagenPersonalizada: !!palabrasPersonalizadas[key].imagenPersonalizada,
            habilitada: palabrasPersonalizadas[key].habilitada !== false,
            original: palabraOriginal
        };
    }
    return {
        palabra: palabraOriginal,
        imagen: imagen,
        imagenOriginal: imagen,
        esImagenPersonalizada: false,
        habilitada: true,
        original: palabraOriginal
    };
}

// Función para obtener palabras según dificultad (MODIFICADA)
function obtenerPalabrasPorDificultad() {
    let palabrasBase;
    switch (configuracion.dificultad) {
        case 'facil':
            palabrasBase = [...PALABRAS_FACIL];
            break;
        case 'normal':
            palabrasBase = [...PALABRAS_FACIL, ...PALABRAS_NORMAL];
            break;
        case 'dificil':
            palabrasBase = [...PALABRAS_NORMAL, ...PALABRAS_DIFICIL];
            break;
        case 'mixto':
        default:
            palabrasBase = [...PALABRAS_FACIL, ...PALABRAS_NORMAL, ...PALABRAS_DIFICIL];
    }

    // Agregar palabras nuevas del usuario según dificultad
    const palabrasNuevasFiltradas = palabrasNuevas.filter(p => {
        if (configuracion.dificultad === 'mixto') return true;
        if (configuracion.dificultad === 'facil') return p.dificultad === 'facil';
        if (configuracion.dificultad === 'normal') return p.dificultad === 'facil' || p.dificultad === 'normal';
        if (configuracion.dificultad === 'dificil') return p.dificultad === 'normal' || p.dificultad === 'dificil';
        return true;
    });

    // Combinar palabras base con palabras nuevas
    const todasLasPalabras = [
        ...palabrasBase.map(p => obtenerPalabraPersonalizada(p.palabra, p.imagen)),
        ...palabrasNuevasFiltradas.map(p => ({
            palabra: p.palabra,
            imagen: p.imagen,
            imagenOriginal: p.imagen,
            esImagenPersonalizada: p.imagen.startsWith('data:'),
            habilitada: p.habilitada !== false,
            original: p.palabra,
            esNueva: true,
            id: p.id
        }))
    ];

    // Filtrar deshabilitadas
    return todasLasPalabras.filter(p => p.habilitada);
}

// Estado del juego
let estadoJuego = {
    jugador1: { nombre: "", puntos: 0 },
    jugador2: { nombre: "", puntos: 0 },
    turnoActual: 1,
    rondaActual: 1,
    totalRondas: 5,
    palabrasUsadas: [],
    palabraActual: null,
    tiempoRestante: 158,
    tiempoInicio: 0,           // Para calcular bonus por tiempo
    intervaloTemporizador: null,
    intervaloAyuda: null,      // Para mostrar ayudas periódicas
    nivelAyuda: 0,             // 0 = sin ayuda, 1 = primera letra, 2 = dos letras, etc.
    juegoTerminado: false
};

// ==========================================
// FUNCIONES DE CONFIGURACIÓN
// ==========================================

function cargarConfiguracion() {
    // Cargar configuración guardada en localStorage si existe
    const configGuardada = localStorage.getItem('juegoLeerDados_config');
    if (configGuardada) {
        configuracion = JSON.parse(configGuardada);
    }
    actualizarInterfazConfig();
}

function guardarConfiguracion() {
    // Leer valores de la interfaz
    const tiempoPersonalizadoCheck = document.getElementById('tiempo-personalizado-check');
    const tiempoPersonalizado = document.getElementById('tiempo-personalizado');

    if (tiempoPersonalizadoCheck.checked && tiempoPersonalizado.value) {
        configuracion.tiempoPorTurno = parseInt(tiempoPersonalizado.value);
    } else {
        const tiempoSeleccionado = document.querySelector('input[name="tiempo"]:checked');
        if (tiempoSeleccionado) {
            configuracion.tiempoPorTurno = parseInt(tiempoSeleccionado.value);
        }
    }

    const rondasSeleccionadas = document.querySelector('input[name="rondas"]:checked');
    if (rondasSeleccionadas) {
        configuracion.totalRondas = parseInt(rondasSeleccionadas.value);
    }

    const dificultadSeleccionada = document.querySelector('input[name="dificultad"]:checked');
    if (dificultadSeleccionada) {
        configuracion.dificultad = dificultadSeleccionada.value;
    }

    configuracion.sonidosActivados = document.getElementById('sonidos-activados').checked;

    // Guardar en localStorage
    localStorage.setItem('juegoLeerDados_config', JSON.stringify(configuracion));

    // Actualizar resumen
    actualizarResumenConfig();
}

function actualizarInterfazConfig() {
    // Actualizar tiempo
    const tiempoRadios = document.querySelectorAll('input[name="tiempo"]');
    let tiempoEncontrado = false;
    tiempoRadios.forEach(radio => {
        if (parseInt(radio.value) === configuracion.tiempoPorTurno) {
            radio.checked = true;
            tiempoEncontrado = true;
        }
    });

    // Si no es un valor predefinido, usar personalizado
    if (!tiempoEncontrado) {
        document.getElementById('tiempo-personalizado-check').checked = true;
        document.getElementById('tiempo-personalizado').value = configuracion.tiempoPorTurno;
        document.getElementById('tiempo-personalizado').disabled = false;
    }

    // Actualizar rondas
    const rondasRadios = document.querySelectorAll('input[name="rondas"]');
    rondasRadios.forEach(radio => {
        if (parseInt(radio.value) === configuracion.totalRondas) {
            radio.checked = true;
        }
    });

    // Actualizar dificultad
    const dificultadRadios = document.querySelectorAll('input[name="dificultad"]');
    dificultadRadios.forEach(radio => {
        if (radio.value === configuracion.dificultad) {
            radio.checked = true;
        }
    });

    // Actualizar sonidos
    document.getElementById('sonidos-activados').checked = configuracion.sonidosActivados;

    // Actualizar visual de opciones seleccionadas
    actualizarEstilosOpciones();
    actualizarResumenConfig();
}

function actualizarEstilosOpciones() {
    // Quitar clase selected de todos
    document.querySelectorAll('.option-box').forEach(box => {
        box.classList.remove('selected');
    });

    // Agregar clase selected a los seleccionados
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        const optionBox = radio.nextElementSibling;
        if (optionBox) {
            optionBox.classList.add('selected');
        }
    });
}

function actualizarResumenConfig() {
    const minutos = Math.floor(configuracion.tiempoPorTurno / 60);
    const segundos = configuracion.tiempoPorTurno % 60;
    const tiempoTexto = minutos > 0
        ? (segundos > 0 ? `${minutos}:${segundos.toString().padStart(2, '0')} min` : `${minutos} min`)
        : `${segundos} seg`;

    const dificultadTexto = {
        'facil': 'Fácil',
        'normal': 'Normal',
        'dificil': 'Difícil',
        'mixto': 'Mixto'
    };

    const resumen = `Tiempo: ${tiempoTexto} | Rondas: ${configuracion.totalRondas} | Dificultad: ${dificultadTexto[configuracion.dificultad]} | Sonidos: ${configuracion.sonidosActivados ? 'Sí' : 'No'}`;

    document.getElementById('resumen-config').textContent = resumen;
}

function aplicarConfiguracionAlJuego() {
    estadoJuego.totalRondas = configuracion.totalRondas;
    estadoJuego.tiempoRestante = configuracion.tiempoPorTurno;
}

// Contexto de audio para los sonidos
let audioContext = null;

// ==========================================
// FUNCIONES DE SONIDO - ORIGINALES
// ==========================================

function inicializarAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function reproducirSonidoTick() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function reproducirSonidoWarning() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 1000;
    oscillator.type = 'square';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
}

function reproducirSonidoFin() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = 600;
            oscillator.type = 'sawtooth';
            gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }, i * 200);
    }
}

function reproducirSonidoAcierto() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const notas = [523.25, 659.25, 783.99];
    notas.forEach((freq, i) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, i * 150);
    });
}

function reproducirSonidoError() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 200;
    oscillator.type = 'sawtooth';
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// ==========================================
// FUNCIONES DE SONIDO - NUEVAS
// ==========================================

// Melodía de inicio (Do-Re-Mi-Fa-Sol)
function reproducirSonidoInicio() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const notas = [261.63, 293.66, 329.63, 349.23, 392.00]; // Do, Re, Mi, Fa, Sol
    notas.forEach((freq, i) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.25);
        }, i * 150);
    });
}

// Sonido Pop de confirmación
function reproducirSonidoPop() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Fanfarria corta (Ta-da!)
function reproducirSonidoFanfarria() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const notas = [392.00, 523.25, 659.25, 783.99]; // Sol, Do, Mi, Sol
    notas.forEach((freq, i) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'triangle';
            gainNode.gain.setValueAtTime(0.35, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }, i * 100);
    });
}

// Sonido de revelar (Whoosh)
function reproducirSonidoRevelar() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Sonido de hover suave
function reproducirSonidoHover() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 880;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
}

// Sonido de click
function reproducirSonidoClick() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 1200;
    oscillator.type = 'square';
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.03);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.03);
}

// Redoble de tambor corto
function reproducirSonidoDrumroll() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = 150 + (i * 10);
            oscillator.type = 'triangle';
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.08);
        }, i * 60);
    }
}

// Sonido de transición
function reproducirSonidoTransicion() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(600, audioContext.currentTime + 0.15);
    oscillator.frequency.linearRampToValueAtTime(400, audioContext.currentTime + 0.3);
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Música de victoria épica
function reproducirSonidoVictoria() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const melodia = [
        { freq: 523.25, dur: 0.15 },  // Do
        { freq: 523.25, dur: 0.15 },  // Do
        { freq: 523.25, dur: 0.15 },  // Do
        { freq: 523.25, dur: 0.4 },   // Do largo
        { freq: 415.30, dur: 0.4 },   // Lab
        { freq: 466.16, dur: 0.4 },   // Sib
        { freq: 523.25, dur: 0.15 },  // Do
        { freq: 466.16, dur: 0.15 },  // Sib
        { freq: 523.25, dur: 0.6 }    // Do largo final
    ];

    let tiempo = 0;
    melodia.forEach((nota) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = nota.freq;
            oscillator.type = 'triangle';
            gainNode.gain.setValueAtTime(0.35, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + nota.dur);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + nota.dur);
        }, tiempo * 1000);
        tiempo += nota.dur;
    });
}

// Sonido de empate (neutral/amigable)
function reproducirSonidoEmpate() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const notas = [392.00, 349.23, 392.00, 440.00, 392.00];
    notas.forEach((freq, i) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.25);
        }, i * 200);
    });
}

// Sonido de ayuda (campanita suave)
function reproducirSonidoAyuda() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 1046.50; // Do alto
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
}

// Sonido de bonus (cascada de notas)
function reproducirSonidoBonus() {
    if (!audioContext || !configuracion.sonidosActivados) return;
    const notas = [523.25, 659.25, 783.99, 1046.50]; // Do-Mi-Sol-Do
    notas.forEach((freq, i) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        }, i * 80);
    });
}

// ==========================================
// SISTEMA DE CONFETI
// ==========================================

function crearConfeti() {
    const container = document.getElementById('confeti-container');
    container.innerHTML = '';

    const colores = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'];
    const formas = ['cuadrado', 'circulo', 'triangulo'];

    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.className = `confeti ${formas[Math.floor(Math.random() * formas.length)]}`;

        const color = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.backgroundColor = color;
        confeti.style.borderBottomColor = color;
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confeti.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(confeti);
    }

    // Limpiar confeti después de la animación
    setTimeout(limpiarConfeti, 5000);
}

function limpiarConfeti() {
    const container = document.getElementById('confeti-container');
    container.innerHTML = '';
}

// ==========================================
// FUNCIONES DE NAVEGACIÓN DE PANTALLAS
// ==========================================

function mostrarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });

    const pantalla = document.getElementById(idPantalla);
    if (pantalla) {
        pantalla.classList.add('activa');
    }
}

// ==========================================
// FUNCIONES DEL JUEGO
// ==========================================

function obtenerPalabraAleatoria() {
    const PALABRAS = obtenerPalabrasPorDificultad();
    const disponibles = PALABRAS.filter(p => !estadoJuego.palabrasUsadas.includes(p.palabra));

    if (disponibles.length === 0) {
        estadoJuego.palabrasUsadas = [];
        return PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
    }

    const seleccionada = disponibles[Math.floor(Math.random() * disponibles.length)];
    estadoJuego.palabrasUsadas.push(seleccionada.palabra);
    return seleccionada;
}

function iniciarTemporizador() {
    estadoJuego.tiempoRestante = configuracion.tiempoPorTurno;
    actualizarDisplayTemporizador();

    const temporizadorElement = document.getElementById('temporizador');
    temporizadorElement.classList.remove('warning', 'medio');

    estadoJuego.intervaloTemporizador = setInterval(() => {
        estadoJuego.tiempoRestante--;
        actualizarDisplayTemporizador();

        // Cambiar color del temporizador según el tiempo
        if (estadoJuego.tiempoRestante <= 10) {
            temporizadorElement.classList.remove('medio');
            temporizadorElement.classList.add('warning');
            reproducirSonidoWarning();
        } else if (estadoJuego.tiempoRestante <= 30) {
            temporizadorElement.classList.add('medio');
            reproducirSonidoTick();
        } else {
            reproducirSonidoTick();
        }

        if (estadoJuego.tiempoRestante <= 0) {
            tiempoAgotado();
        }
    }, 1000);
}

function detenerTemporizador() {
    if (estadoJuego.intervaloTemporizador) {
        clearInterval(estadoJuego.intervaloTemporizador);
        estadoJuego.intervaloTemporizador = null;
    }
    // Detener también el intervalo de ayuda
    if (estadoJuego.intervaloAyuda) {
        clearInterval(estadoJuego.intervaloAyuda);
        estadoJuego.intervaloAyuda = null;
    }
}

// ==========================================
// SISTEMA DE AYUDA PROGRESIVA
// ==========================================

function iniciarSistemaAyuda() {
    estadoJuego.nivelAyuda = 0;
    actualizarDisplayAyuda();

    // Calcular intervalo de ayuda dinámico: tiempo total / largo de palabra
    // Ejemplo: 60 segundos / 4 letras = 15 segundos por ayuda
    const largoPalabra = estadoJuego.palabraActual.palabra.length;
    const intervaloAyudaSegundos = Math.floor(configuracion.tiempoPorTurno / largoPalabra);

    estadoJuego.intervaloAyuda = setInterval(() => {
        if (estadoJuego.palabraActual && estadoJuego.nivelAyuda < estadoJuego.palabraActual.palabra.length) {
            estadoJuego.nivelAyuda++;
            actualizarDisplayAyuda();
            reproducirSonidoAyuda();

            // Animación de la ayuda
            const ayudaElement = document.getElementById('ayuda-container');
            if (ayudaElement) {
                ayudaElement.classList.add('nueva-ayuda');
                setTimeout(() => ayudaElement.classList.remove('nueva-ayuda'), 500);
            }
        }
    }, intervaloAyudaSegundos * 1000);
}

function actualizarDisplayAyuda() {
    const ayudaContainer = document.getElementById('ayuda-container');
    if (!ayudaContainer || !estadoJuego.palabraActual) return;

    const palabra = estadoJuego.palabraActual.palabra;
    let ayudaTexto = '';

    if (estadoJuego.nivelAyuda === 0) {
        // Sin ayuda - mostrar guiones
        ayudaTexto = '_ '.repeat(palabra.length).trim();
    } else {
        // Mostrar las primeras letras según el nivel de ayuda
        for (let i = 0; i < palabra.length; i++) {
            if (i < estadoJuego.nivelAyuda) {
                ayudaTexto += palabra[i].toUpperCase() + ' ';
            } else {
                ayudaTexto += '_ ';
            }
        }
    }

    ayudaContainer.innerHTML = `
        <div class="ayuda-label">💡 Pista:</div>
        <div class="ayuda-letras">${ayudaTexto}</div>
        ${estadoJuego.nivelAyuda > 0 ? `<div class="ayuda-info">Cada ayuda reduce el bonus de tiempo</div>` : ''}
    `;
}

// ==========================================
// SISTEMA DE PUNTOS POR TIEMPO
// ==========================================

function calcularPuntosPorTiempo() {
    const tiempoUsado = configuracion.tiempoPorTurno - estadoJuego.tiempoRestante;
    const tiempoTotal = configuracion.tiempoPorTurno;

    // Penalización por cada nivel de ayuda usado
    const penalizacionAyuda = estadoJuego.nivelAyuda * 0.2; // 20% menos por cada ayuda

    // Calcular porcentaje de tiempo restante
    const porcentajeTiempoRestante = estadoJuego.tiempoRestante / tiempoTotal;

    // Bonus base: 1 punto siempre + bonus por tiempo
    let bonusTiempo = 0;

    if (porcentajeTiempoRestante >= 0.8) {
        // Muy rápido (80%+ del tiempo restante) = +3 bonus
        bonusTiempo = 3;
    } else if (porcentajeTiempoRestante >= 0.6) {
        // Rápido (60-80% tiempo restante) = +2 bonus
        bonusTiempo = 2;
    } else if (porcentajeTiempoRestante >= 0.4) {
        // Normal (40-60% tiempo restante) = +1 bonus
        bonusTiempo = 1;
    }
    // Si usó más del 60% del tiempo, no hay bonus

    // Aplicar penalización por ayuda
    bonusTiempo = Math.max(0, Math.floor(bonusTiempo * (1 - penalizacionAyuda)));

    return {
        puntoBase: 1,
        bonusTiempo: bonusTiempo,
        total: 1 + bonusTiempo,
        tiempoUsado: tiempoUsado,
        ayudasUsadas: estadoJuego.nivelAyuda
    };
}

function mostrarAnimacionPuntos(puntos) {
    const container = document.querySelector('.marcador');
    if (!container) return;

    const animacion = document.createElement('div');
    animacion.className = 'puntos-animacion';

    if (puntos.bonusTiempo > 0) {
        animacion.innerHTML = `+${puntos.total} <span class="bonus-texto">🚀 ¡Bonus velocidad!</span>`;
        animacion.classList.add('con-bonus');
        reproducirSonidoBonus();
    } else {
        animacion.textContent = `+${puntos.total}`;
    }

    container.appendChild(animacion);

    // Remover después de la animación
    setTimeout(() => {
        animacion.remove();
    }, 2000);
}

function actualizarDisplayTemporizador() {
    document.getElementById('tiempo').textContent = estadoJuego.tiempoRestante;
}

function tiempoAgotado() {
    detenerTemporizador();
    reproducirSonidoFin();

    document.getElementById('palabra-tiempo-agotado').textContent = estadoJuego.palabraActual.palabra;
    mostrarPantalla('pantalla-tiempo-agotado');
}

function actualizarMarcador() {
    const marcadorJ1 = document.getElementById('marcador-j1');
    const marcadorJ2 = document.getElementById('marcador-j2');

    marcadorJ1.textContent = estadoJuego.jugador1.puntos;
    marcadorJ2.textContent = estadoJuego.jugador2.puntos;

    // Efecto sparkle al actualizar
    const marcador = document.querySelector('.marcador');
    marcador.classList.add('updated');
    setTimeout(() => marcador.classList.remove('updated'), 500);
}

function obtenerJugadorActual() {
    return estadoJuego.turnoActual === 1 ? estadoJuego.jugador1 : estadoJuego.jugador2;
}

function siguienteTurno() {
    reproducirSonidoTransicion();

    if (estadoJuego.turnoActual === 1) {
        estadoJuego.turnoActual = 2;
    } else {
        estadoJuego.turnoActual = 1;
        estadoJuego.rondaActual++;
    }

    if (estadoJuego.rondaActual > estadoJuego.totalRondas) {
        finalizarJuego();
        return;
    }

    mostrarPantallaTurno();
}

function mostrarPantallaTurno() {
    reproducirSonidoFanfarria();

    const jugador = obtenerJugadorActual();
    document.getElementById('jugador-turno-nombre').textContent = jugador.nombre;
    document.getElementById('ronda-actual').textContent = estadoJuego.rondaActual;
    document.getElementById('total-rondas').textContent = configuracion.totalRondas;
    mostrarPantalla('pantalla-turno');
}

function iniciarRonda() {
    inicializarAudio();
    reproducirSonidoRevelar();

    const jugador = obtenerJugadorActual();
    document.getElementById('nombre-jugador-actual').textContent = `🎮 ${jugador.nombre}`;

    estadoJuego.palabraActual = obtenerPalabraAleatoria();
    estadoJuego.tiempoInicio = Date.now(); // Guardar tiempo de inicio para calcular bonus
    estadoJuego.nivelAyuda = 0; // Resetear nivel de ayuda

    const imgElement = document.getElementById('imagen-palabra');
    const container = document.querySelector('.imagen-container');
    let emojiElement = container.querySelector('.emoji-display');

    // Verificar si es una imagen personalizada (base64) o un emoji
    if (estadoJuego.palabraActual.esImagenPersonalizada) {
        // Mostrar imagen personalizada
        imgElement.src = estadoJuego.palabraActual.imagen;
        imgElement.style.display = 'block';
        if (emojiElement) {
            emojiElement.style.display = 'none';
        }
    } else {
        // Mostrar emoji
        imgElement.style.display = 'none';
        if (!emojiElement) {
            emojiElement = document.createElement('span');
            emojiElement.className = 'emoji-display';
            emojiElement.style.fontSize = '120px';
            container.appendChild(emojiElement);
        }
        emojiElement.style.display = 'block';
        emojiElement.textContent = estadoJuego.palabraActual.imagen;
    }

    document.getElementById('area-respuesta').classList.add('oculto');
    document.getElementById('btn-mostrar-respuesta').style.display = 'block';

    actualizarMarcador();
    mostrarPantalla('pantalla-juego');
    iniciarTemporizador();
    iniciarSistemaAyuda(); // Iniciar sistema de ayuda progresiva
}

function mostrarRespuesta() {
    detenerTemporizador();
    reproducirSonidoDrumroll();

    setTimeout(() => {
        document.getElementById('palabra-correcta').textContent = estadoJuego.palabraActual.palabra;
        document.getElementById('area-respuesta').classList.remove('oculto');
        document.getElementById('btn-mostrar-respuesta').style.display = 'none';
    }, 500);
}

function registrarAcierto() {
    reproducirSonidoAcierto();
    detenerTemporizador(); // Detener temporizador y sistema de ayuda

    const jugador = obtenerJugadorActual();

    // Calcular puntos con bonus por tiempo
    const puntos = calcularPuntosPorTiempo();
    jugador.puntos += puntos.total;

    // Registrar logros (tiempo usado y si usó ayudas)
    const tiempoUsado = configuracion.tiempoPorTurno - estadoJuego.tiempoRestante;
    const usaronAyuda = estadoJuego.nivelAyuda > 0;
    registrarAciertoPalabraLogros(tiempoUsado, usaronAyuda);

    // Mostrar animación de puntos
    mostrarAnimacionPuntos(puntos);

    actualizarMarcador();

    // Pequeño delay para que se vea la animación
    setTimeout(() => {
        siguienteTurno();
    }, puntos.bonusTiempo > 0 ? 1500 : 500);
}

function registrarFallo() {
    reproducirSonidoError();
    registrarFalloPalabraLogros();
    siguienteTurno();
}

function finalizarJuego() {
    estadoJuego.juegoTerminado = true;

    // Registrar partida completada (contar fallos desde palabrasIncorrectas)
    const fallosEnPartida = progresoJugador.palabrasIncorrectas;
    registrarPartidaCompletada(fallosEnPartida);

    document.getElementById('final-nombre1').textContent = estadoJuego.jugador1.nombre;
    document.getElementById('final-puntos1').textContent = `${estadoJuego.jugador1.puntos} puntos`;

    document.getElementById('final-nombre2').textContent = estadoJuego.jugador2.nombre;
    document.getElementById('final-puntos2').textContent = `${estadoJuego.jugador2.puntos} puntos`;

    // Marcar ganador visualmente
    const resultados = document.querySelectorAll('.resultado-jugador');
    resultados.forEach(r => r.classList.remove('ganador'));

    const mensajeGanador = document.getElementById('mensaje-ganador');

    if (estadoJuego.jugador1.puntos > estadoJuego.jugador2.puntos) {
        mensajeGanador.textContent = `🎉 ¡${estadoJuego.jugador1.nombre} es el ganador! 🎉`;
        resultados[0].classList.add('ganador');
        reproducirSonidoVictoria();
        crearConfeti();
    } else if (estadoJuego.jugador2.puntos > estadoJuego.jugador1.puntos) {
        mensajeGanador.textContent = `🎉 ¡${estadoJuego.jugador2.nombre} es el ganador! 🎉`;
        resultados[1].classList.add('ganador');
        reproducirSonidoVictoria();
        crearConfeti();
    } else {
        mensajeGanador.textContent = `🤝 ¡Es un empate! ¡Ambos son ganadores! 🤝`;
        reproducirSonidoEmpate();
        crearConfeti();
    }

    mostrarPantalla('pantalla-final');
}

function reiniciarJuego() {
    limpiarConfeti();
    reproducirSonidoClick();

    estadoJuego = {
        jugador1: { nombre: "", puntos: 0 },
        jugador2: { nombre: "", puntos: 0 },
        turnoActual: 1,
        rondaActual: 1,
        totalRondas: configuracion.totalRondas,
        palabrasUsadas: [],
        palabraActual: null,
        tiempoRestante: configuracion.tiempoPorTurno,
        intervaloTemporizador: null,
        juegoTerminado: false
    };

    document.getElementById('nombre-jugador1').value = '';
    document.getElementById('nombre-jugador2').value = '';
    document.getElementById('registro-jugador1').classList.remove('oculto');
    document.getElementById('registro-jugador2').classList.add('oculto');
    document.getElementById('jugadores-registrados').classList.add('oculto');

    // Quitar clase ganador
    document.querySelectorAll('.resultado-jugador').forEach(r => r.classList.remove('ganador'));

    mostrarPantalla('pantalla-inicio');
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // Cargar progreso y configuración
    cargarProgreso();
    cargarPalabrasPersonalizadas();
    cargarConfiguracion();

    // Agregar sonidos de hover a todos los botones
    const botones = document.querySelectorAll('button');
    botones.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            inicializarAudio();
            reproducirSonidoHover();
        });
    });

    // Botón comenzar
    document.getElementById('btn-comenzar').addEventListener('click', () => {
        inicializarAudio();
        reproducirSonidoInicio();
        setTimeout(() => {
            mostrarPantalla('pantalla-registro');
        }, 800);
    });

    // ==========================================
    // SELECCIÓN DE MODO DE JUEGO
    // ==========================================

    // Modo un jugador (solitario)
    document.getElementById('btn-modo-solitario').addEventListener('click', () => {
        reproducirSonidoClick();
        configuracion.modoJuego = 'un-jugador';
        document.querySelector('.seleccion-modo').classList.add('oculto');
        document.getElementById('formulario-registro').classList.remove('oculto');
        document.getElementById('titulo-registro').textContent = '📝 Ingresa tu nombre';
        document.getElementById('nombre-jugador1').focus();
    });

    // Modo dos jugadores
    document.getElementById('btn-modo-dos-jugadores').addEventListener('click', () => {
        reproducirSonidoClick();
        configuracion.modoJuego = 'dos-jugadores';
        document.querySelector('.seleccion-modo').classList.add('oculto');
        document.getElementById('formulario-registro').classList.remove('oculto');
        document.getElementById('titulo-registro').textContent = '📝 Registro de Jugadores';
        document.getElementById('nombre-jugador1').focus();
    });

    // Confirmar jugador 1
    document.getElementById('btn-confirmar1').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-jugador1').value.trim();
        if (nombre) {
            reproducirSonidoPop();
            estadoJuego.jugador1.nombre = nombre;
            document.getElementById('nombre1-display').textContent = nombre;
            document.getElementById('registro-jugador1').classList.add('oculto');

            // Si es modo un jugador, ir directo al juego
            if (configuracion.modoJuego === 'un-jugador') {
                estadoJuego.jugador2.nombre = "CPU"; // Jugador dummy
                document.getElementById('jugadores-registrados').classList.remove('oculto');
                document.getElementById('jugador2-display-container').style.display = 'none';

                setTimeout(() => {
                    mostrarPantallaTurno();
                }, 1000);
            } else {
                // Modo dos jugadores
                document.getElementById('registro-jugador2').classList.remove('oculto');
                document.getElementById('nombre-jugador2').focus();
            }
        } else {
            reproducirSonidoError();
            alert('Por favor, ingresa un nombre');
        }
    });

    // Permitir Enter para confirmar jugador 1
    document.getElementById('nombre-jugador1').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('btn-confirmar1').click();
        }
    });

    // Confirmar jugador 2
    document.getElementById('btn-confirmar2').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-jugador2').value.trim();
        if (nombre) {
            reproducirSonidoPop();
            estadoJuego.jugador2.nombre = nombre;
            document.getElementById('nombre2-display').textContent = nombre;
            document.getElementById('registro-jugador2').classList.add('oculto');
            document.getElementById('jugadores-registrados').classList.remove('oculto');

            setTimeout(() => {
                mostrarPantallaTurno();
            }, 1500);
        } else {
            reproducirSonidoError();
            alert('Por favor, ingresa un nombre');
        }
    });

    // Permitir Enter para confirmar jugador 2
    document.getElementById('nombre-jugador2').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('btn-confirmar2').click();
        }
    });

    // Botón iniciar ronda
    document.getElementById('btn-iniciar-ronda').addEventListener('click', () => {
        reproducirSonidoClick();
        iniciarRonda();
    });

    // Botón mostrar respuesta
    document.getElementById('btn-mostrar-respuesta').addEventListener('click', () => {
        reproducirSonidoClick();
        mostrarRespuesta();
    });

    // Botones de resultado
    document.getElementById('btn-acerto').addEventListener('click', () => {
        reproducirSonidoClick();
        registrarAcierto();
    });

    document.getElementById('btn-fallo').addEventListener('click', () => {
        reproducirSonidoClick();
        registrarFallo();
    });

    // Botón continuar después de tiempo agotado
    document.getElementById('btn-continuar-tiempo').addEventListener('click', () => {
        reproducirSonidoClick();
        siguienteTurno();
    });

    // Botón jugar de nuevo
    document.getElementById('btn-jugar-nuevo').addEventListener('click', reiniciarJuego);

    // Sonidos en los dados decorativos
    document.querySelectorAll('.dados-decorativos .dado').forEach(dado => {
        dado.addEventListener('click', () => {
            inicializarAudio();
            reproducirSonidoPop();
        });
    });

    // ==========================================
    // EVENT LISTENERS - CONFIGURACIÓN
    // ==========================================

    // Cargar configuración al iniciar
    cargarConfiguracion();

    // Botón abrir configuración
    document.getElementById('btn-config').addEventListener('click', () => {
        reproducirSonidoClick();
        cargarConfiguracion();
        mostrarPantalla('pantalla-config');
    });

    // Botón guardar configuración
    document.getElementById('btn-guardar-config').addEventListener('click', () => {
        reproducirSonidoPop();
        guardarConfiguracion();
        aplicarConfiguracionAlJuego();
        mostrarPantalla('pantalla-inicio');
    });

    // Botón cancelar configuración
    document.getElementById('btn-cancelar-config').addEventListener('click', () => {
        reproducirSonidoClick();
        cargarConfiguracion(); // Restaurar valores guardados
        mostrarPantalla('pantalla-inicio');
    });

    // ==========================================
    // EVENT LISTENERS - LOGROS
    // ==========================================

    // Botón abrir logros
    document.getElementById('btn-logros').addEventListener('click', () => {
        mostrarPantallaLogros();
    });

    // Botón volver desde logros
    document.getElementById('btn-volver-logros').addEventListener('click', () => {
        reproducirSonidoClick();
        mostrarPantalla('pantalla-inicio');
    });

    // Filtros de logros
    document.querySelectorAll('.filtro-logro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            reproducirSonidoClick();
            document.querySelectorAll('.filtro-logro-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const categoria = btn.dataset.categoria;
            renderizarLogros(categoria);
        });
    });

    // Tiempo personalizado checkbox
    document.getElementById('tiempo-personalizado-check').addEventListener('change', (e) => {
        const inputTiempo = document.getElementById('tiempo-personalizado');
        inputTiempo.disabled = !e.target.checked;
        if (e.target.checked) {
            inputTiempo.focus();
            // Desmarcar las opciones de radio
            document.querySelectorAll('input[name="tiempo"]').forEach(radio => {
                radio.checked = false;
            });
        }
        actualizarEstilosOpciones();
    });

    // Actualizar estilos cuando cambian los radios
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            reproducirSonidoClick();
            actualizarEstilosOpciones();

            // Si se selecciona un tiempo predefinido, desmarcar personalizado
            if (radio.name === 'tiempo') {
                document.getElementById('tiempo-personalizado-check').checked = false;
                document.getElementById('tiempo-personalizado').disabled = true;
            }

            // Actualizar resumen en tiempo real
            guardarConfiguracion();
        });
    });

    // Actualizar resumen cuando cambia el tiempo personalizado
    document.getElementById('tiempo-personalizado').addEventListener('input', () => {
        guardarConfiguracion();
    });

    // Actualizar cuando cambia el toggle de sonidos
    document.getElementById('sonidos-activados').addEventListener('change', () => {
        guardarConfiguracion();
    });

    // ==========================================
    // EVENT LISTENERS - EDITOR DE PALABRAS
    // ==========================================

    // Cargar palabras personalizadas al iniciar
    cargarPalabrasPersonalizadas();

    // Botón abrir editor de palabras
    document.getElementById('btn-abrir-editor').addEventListener('click', () => {
        reproducirSonidoClick();
        abrirEditorPalabras();
    });

    // Botón cerrar modal
    document.getElementById('btn-cerrar-modal').addEventListener('click', () => {
        reproducirSonidoClick();
        cerrarEditorPalabras();
    });

    // Cerrar modal al hacer clic fuera
    document.getElementById('modal-editor').addEventListener('click', (e) => {
        if (e.target.id === 'modal-editor') {
            cerrarEditorPalabras();
        }
    });

    // Búsqueda de palabras
    document.getElementById('buscar-palabra').addEventListener('input', (e) => {
        filtrarListaPalabras();
    });

    // Filtros de dificultad
    document.querySelectorAll('.filtro-dificultad .filtro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtro-dificultad .filtro-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtrarListaPalabras();
        });
    });

    // Filtros de estado
    document.querySelectorAll('.filtro-estado .filtro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtro-estado .filtro-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtrarListaPalabras();
        });
    });

    // Acciones masivas
    document.getElementById('btn-habilitar-todas').addEventListener('click', () => {
        habilitarTodasLasPalabras(true);
    });

    document.getElementById('btn-deshabilitar-todas').addEventListener('click', () => {
        habilitarTodasLasPalabras(false);
    });

    document.getElementById('btn-restaurar-palabras').addEventListener('click', () => {
        if (confirm('¿Restaurar todas las palabras a su estado original? Se perderán todos los cambios y las palabras personalizadas.')) {
            palabrasPersonalizadas = {};
            palabrasNuevas = [];
            renderizarListaPalabras();
            actualizarEstadisticasPalabras();
        }
    });

    // Guardar cambios de palabras
    document.getElementById('btn-guardar-palabras').addEventListener('click', () => {
        reproducirSonidoPop();
        guardarPalabrasPersonalizadas();
        cerrarEditorPalabras();
    });

    // Cancelar cambios de palabras
    document.getElementById('btn-cancelar-palabras').addEventListener('click', () => {
        reproducirSonidoClick();
        cargarPalabrasPersonalizadas(); // Recargar desde localStorage
        cerrarEditorPalabras();
    });

    // ==========================================
    // EVENT LISTENERS - NUEVA PALABRA
    // ==========================================

    // Botón nueva palabra
    document.getElementById('btn-nueva-palabra').addEventListener('click', () => {
        reproducirSonidoClick();
        mostrarFormularioNuevaPalabra();
    });

    // Click en preview de imagen para seleccionar archivo
    document.getElementById('preview-nueva-imagen').addEventListener('click', () => {
        document.getElementById('input-nueva-imagen').click();
    });

    // Cuando se selecciona una imagen
    document.getElementById('input-nueva-imagen').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 500 * 1024) {
                alert('La imagen es muy grande. Por favor usa una imagen menor a 500KB.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                imagenNuevaPalabraTemp = event.target.result;
                const preview = document.getElementById('preview-nueva-imagen');
                preview.innerHTML = `<img src="${imagenNuevaPalabraTemp}" alt="Preview">`;
                reproducirSonidoPop();
            };
            reader.readAsDataURL(file);
        }
    });

    // Botón confirmar nueva palabra
    document.getElementById('btn-confirmar-nueva').addEventListener('click', () => {
        agregarNuevaPalabra();
    });

    // Botón cancelar nueva palabra
    document.getElementById('btn-cancelar-nueva').addEventListener('click', () => {
        reproducirSonidoClick();
        ocultarFormularioNuevaPalabra();
    });

    // Enter en input de nueva palabra
    document.getElementById('input-nueva-palabra').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarNuevaPalabra();
        }
    });
});

// ==========================================
// FUNCIONES DEL EDITOR DE PALABRAS
// ==========================================

function abrirEditorPalabras() {
    document.getElementById('modal-editor').classList.remove('oculto');
    document.getElementById('buscar-palabra').value = '';

    // Bloquear scroll del body
    document.body.classList.add('modal-abierto');

    // Resetear filtros
    document.querySelectorAll('.filtro-dificultad .filtro-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filtro-dificultad .filtro-btn[data-filtro="todas"]').classList.add('active');
    document.querySelectorAll('.filtro-estado .filtro-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filtro-estado .filtro-btn[data-estado="todas"]').classList.add('active');

    renderizarListaPalabras();
    actualizarEstadisticasPalabras();
}

function cerrarEditorPalabras() {
    document.getElementById('modal-editor').classList.add('oculto');
    // Restaurar scroll del body
    document.body.classList.remove('modal-abierto');
}

function renderizarListaPalabras() {
    const lista = document.getElementById('lista-palabras');
    const palabras = obtenerTodasLasPalabrasBase();

    lista.innerHTML = palabras.map((p, index) => {
        const esNueva = p.esNueva || false;
        const key = `${p.palabra}_${p.imagen}`;
        const personalizada = palabrasPersonalizadas[key] || {};

        // Para palabras nuevas, no aplicamos personalizaciones adicionales
        const palabraActual = esNueva ? p.palabra : (personalizada.palabraPersonalizada || p.palabra);
        const habilitada = esNueva ? (p.habilitada !== false) : (personalizada.habilitada !== false);
        const modificada = !esNueva && personalizada.palabraPersonalizada && personalizada.palabraPersonalizada !== p.palabra;

        // Para palabras nuevas, la imagen ya puede ser base64
        const imagenPersonalizada = esNueva ? null : personalizada.imagenPersonalizada;
        const tieneImagenPersonalizada = esNueva ? p.imagen.startsWith('data:') : !!imagenPersonalizada;

        // Determinar qué mostrar: imagen personalizada o emoji original
        let contenidoImagen;
        if (esNueva && p.imagen.startsWith('data:')) {
            contenidoImagen = `<img src="${p.imagen}" alt="${p.palabra}" class="imagen-personalizada-preview">`;
        } else if (tieneImagenPersonalizada) {
            contenidoImagen = `<img src="${imagenPersonalizada}" alt="${p.palabra}" class="imagen-personalizada-preview">`;
        } else {
            contenidoImagen = p.imagen;
        }

        return `
            <div class="palabra-item ${habilitada ? '' : 'deshabilitada'} ${esNueva ? 'palabra-nueva' : ''}"
                 data-index="${index}"
                 data-dificultad="${p.dificultad}"
                 data-original="${p.palabra}"
                 data-imagen="${p.imagen}"
                 data-es-nueva="${esNueva}"
                 data-id="${p.id || ''}">
                <div class="palabra-emoji-container">
                    <div class="palabra-emoji ${tieneImagenPersonalizada ? 'con-imagen' : ''}">${contenidoImagen}</div>
                    ${!esNueva ? `<button class="btn-cambiar-imagen" title="Cambiar imagen">📷</button>` : ''}
                    ${!esNueva && tieneImagenPersonalizada ? `<button class="btn-quitar-imagen" title="Volver al emoji original">❌</button>` : ''}
                </div>
                <div class="palabra-contenido">
                    ${esNueva ? `
                        <div class="palabra-texto-nueva">${palabraActual}</div>
                    ` : `
                        <input type="text"
                               class="palabra-input"
                               value="${palabraActual}"
                               data-original="${p.palabra}"
                               placeholder="${p.palabra}">
                    `}
                    <div class="palabra-info">
                        ${esNueva ? `
                            <span class="etiqueta-nueva">⭐ Palabra personalizada</span>
                        ` : `
                            <span class="palabra-original ${modificada ? 'modificada' : ''}">
                                Original: ${p.palabra}
                            </span>
                        `}
                        <span class="palabra-dificultad dificultad-${p.dificultad}">
                            ${p.dificultad === 'facil' ? '🌱 Fácil' : p.dificultad === 'normal' ? '🌿 Normal' : '🌳 Difícil'}
                        </span>
                        ${!esNueva && tieneImagenPersonalizada ? '<span class="imagen-modificada">📷 Imagen personalizada</span>' : ''}
                    </div>
                </div>
                <div class="palabra-acciones">
                    ${esNueva ? `
                        <button class="btn-eliminar-palabra" title="Eliminar palabra">🗑️</button>
                    ` : `
                        <label class="toggle-palabra">
                            <input type="checkbox" class="checkbox-habilitar" ${habilitada ? 'checked' : ''}>
                            <span class="toggle-slider-mini"></span>
                        </label>
                        <button class="btn-restaurar-palabra" title="Restaurar original">🔄</button>
                    `}
                </div>
            </div>
        `;
    }).join('');

    // Agregar event listeners a los elementos generados
    agregarEventListenersPalabras();
}

function agregarEventListenersPalabras() {
    // Checkboxes de habilitar/deshabilitar
    document.querySelectorAll('.checkbox-habilitar').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const item = e.target.closest('.palabra-item');
            const original = item.dataset.original;
            const imagen = item.dataset.imagen;
            const key = `${original}_${imagen}`;

            if (!palabrasPersonalizadas[key]) {
                palabrasPersonalizadas[key] = {};
            }
            palabrasPersonalizadas[key].habilitada = e.target.checked;

            item.classList.toggle('deshabilitada', !e.target.checked);
            actualizarEstadisticasPalabras();
        });
    });

    // Inputs de palabras personalizadas
    document.querySelectorAll('.palabra-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const item = e.target.closest('.palabra-item');
            const original = item.dataset.original;
            const imagen = item.dataset.imagen;
            const key = `${original}_${imagen}`;
            const nuevoValor = e.target.value.trim().toLowerCase();

            if (!palabrasPersonalizadas[key]) {
                palabrasPersonalizadas[key] = { habilitada: true };
            }

            if (nuevoValor && nuevoValor !== original) {
                palabrasPersonalizadas[key].palabraPersonalizada = nuevoValor;
                item.querySelector('.palabra-original').classList.add('modificada');
            } else {
                delete palabrasPersonalizadas[key].palabraPersonalizada;
                item.querySelector('.palabra-original').classList.remove('modificada');
                e.target.value = original;
            }
        });
    });

    // Botones de restaurar individual
    document.querySelectorAll('.btn-restaurar-palabra').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.palabra-item');
            const original = item.dataset.original;
            const imagen = item.dataset.imagen;
            const key = `${original}_${imagen}`;

            // Restaurar valores
            delete palabrasPersonalizadas[key];

            // Actualizar UI - re-renderizar la lista para mostrar el emoji original
            renderizarListaPalabras();
            actualizarEstadisticasPalabras();
        });
    });

    // Botones de cambiar imagen
    document.querySelectorAll('.btn-cambiar-imagen').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.palabra-item');
            const original = item.dataset.original;
            const imagen = item.dataset.imagen;

            // Crear input file temporal
            const inputFile = document.createElement('input');
            inputFile.type = 'file';
            inputFile.accept = 'image/png, image/jpeg, image/gif, image/webp';

            inputFile.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    // Verificar tamaño (máximo 500KB para no saturar localStorage)
                    if (file.size > 500 * 1024) {
                        alert('La imagen es muy grande. Por favor usa una imagen menor a 500KB.');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const base64 = e.target.result;
                        const key = `${original}_${imagen}`;

                        if (!palabrasPersonalizadas[key]) {
                            palabrasPersonalizadas[key] = { habilitada: true };
                        }
                        palabrasPersonalizadas[key].imagenPersonalizada = base64;

                        // Re-renderizar para mostrar la nueva imagen
                        renderizarListaPalabras();
                        reproducirSonidoPop();
                    };
                    reader.readAsDataURL(file);
                }
            });

            inputFile.click();
        });
    });

    // Botones de quitar imagen personalizada
    document.querySelectorAll('.btn-quitar-imagen').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.palabra-item');
            const original = item.dataset.original;
            const imagen = item.dataset.imagen;
            const key = `${original}_${imagen}`;

            if (palabrasPersonalizadas[key]) {
                delete palabrasPersonalizadas[key].imagenPersonalizada;
            }

            // Re-renderizar para mostrar el emoji original
            renderizarListaPalabras();
        });
    });

    // Botones de eliminar palabra personalizada
    document.querySelectorAll('.btn-eliminar-palabra').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.palabra-item');
            const id = item.dataset.id;

            if (confirm('¿Eliminar esta palabra personalizada?')) {
                // Eliminar del array de palabras nuevas
                palabrasNuevas = palabrasNuevas.filter(p => p.id !== id);

                // Re-renderizar
                renderizarListaPalabras();
                actualizarEstadisticasPalabras();
                reproducirSonidoClick();
            }
        });
    });
}

function filtrarListaPalabras() {
    const busqueda = document.getElementById('buscar-palabra').value.toLowerCase();
    const filtroDificultad = document.querySelector('.filtro-dificultad .filtro-btn.active')?.dataset.filtro || 'todas';
    const filtroEstado = document.querySelector('.filtro-estado .filtro-btn.active')?.dataset.estado || 'todas';

    document.querySelectorAll('.palabra-item').forEach(item => {
        const original = item.dataset.original.toLowerCase();
        const esNueva = item.dataset.esNueva === 'true';
        const palabraInput = item.querySelector('.palabra-input');
        const palabraActual = palabraInput ? palabraInput.value.toLowerCase() : original;
        const dificultad = item.dataset.dificultad;
        const checkboxHabilitar = item.querySelector('.checkbox-habilitar');
        const habilitada = esNueva ? true : (checkboxHabilitar ? checkboxHabilitar.checked : true);

        let mostrar = true;

        // Filtro de búsqueda
        if (busqueda && !original.includes(busqueda) && !palabraActual.includes(busqueda)) {
            mostrar = false;
        }

        // Filtro de dificultad
        if (filtroDificultad !== 'todas' && dificultad !== filtroDificultad) {
            mostrar = false;
        }

        // Filtro de estado
        if (filtroEstado === 'habilitadas' && !habilitada) {
            mostrar = false;
        } else if (filtroEstado === 'deshabilitadas' && habilitada) {
            mostrar = false;
        }

        item.style.display = mostrar ? 'flex' : 'none';
    });
}

function habilitarTodasLasPalabras(habilitar) {
    document.querySelectorAll('.palabra-item').forEach(item => {
        // Solo afectar a las visibles (filtradas)
        if (item.style.display !== 'none') {
            const original = item.dataset.original;
            const imagen = item.dataset.imagen;
            const key = `${original}_${imagen}`;

            if (!palabrasPersonalizadas[key]) {
                palabrasPersonalizadas[key] = {};
            }
            palabrasPersonalizadas[key].habilitada = habilitar;

            item.querySelector('.checkbox-habilitar').checked = habilitar;
            item.classList.toggle('deshabilitada', !habilitar);
        }
    });

    actualizarEstadisticasPalabras();
}

function actualizarEstadisticasPalabras() {
    const todas = document.querySelectorAll('.palabra-item');
    let habilitadas = 0;
    let personalizadas = 0;

    todas.forEach(item => {
        const esNueva = item.dataset.esNueva === 'true';
        const checkbox = item.querySelector('.checkbox-habilitar');

        if (esNueva) {
            habilitadas++; // Las palabras nuevas siempre están habilitadas
            personalizadas++;
        } else if (checkbox && checkbox.checked) {
            habilitadas++;
        }
    });

    document.getElementById('stats-habilitadas').textContent = `${habilitadas} habilitadas`;
    document.getElementById('stats-total').textContent = `${todas.length} total`;
    document.getElementById('stats-personalizadas').textContent = `${personalizadas} personalizadas`;
}

// ==========================================
// FUNCIONES PARA NUEVA PALABRA
// ==========================================

function mostrarFormularioNuevaPalabra() {
    const form = document.getElementById('form-nueva-palabra');
    form.classList.remove('oculto');

    // Limpiar formulario
    document.getElementById('input-nueva-palabra').value = '';
    document.getElementById('select-nueva-dificultad').value = 'normal';
    document.getElementById('preview-nueva-imagen').innerHTML = `
        <span>📷</span>
        <small>Clic para agregar imagen</small>
    `;
    imagenNuevaPalabraTemp = null;
    document.getElementById('input-nueva-imagen').value = '';

    // Focus en el input
    setTimeout(() => {
        document.getElementById('input-nueva-palabra').focus();
    }, 100);
}

function ocultarFormularioNuevaPalabra() {
    const form = document.getElementById('form-nueva-palabra');
    form.classList.add('oculto');
    imagenNuevaPalabraTemp = null;
}

function agregarNuevaPalabra() {
    const palabra = document.getElementById('input-nueva-palabra').value.trim().toLowerCase();
    const dificultad = document.getElementById('select-nueva-dificultad').value;

    // Validaciones
    if (!palabra) {
        alert('Por favor escribe una palabra');
        document.getElementById('input-nueva-palabra').focus();
        return;
    }

    if (palabra.length < 2) {
        alert('La palabra debe tener al menos 2 letras');
        return;
    }

    if (!imagenNuevaPalabraTemp) {
        alert('Por favor selecciona una imagen para la palabra');
        return;
    }

    // Verificar que no exista ya
    const todasLasPalabras = obtenerTodasLasPalabrasBase();
    const existe = todasLasPalabras.some(p => p.palabra.toLowerCase() === palabra);
    if (existe) {
        alert('Esta palabra ya existe en el juego');
        return;
    }

    // Crear nueva palabra
    const nuevaPalabra = {
        id: 'nueva_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        palabra: palabra,
        imagen: imagenNuevaPalabraTemp,
        dificultad: dificultad,
        habilitada: true
    };

    // Agregar al array
    palabrasNuevas.push(nuevaPalabra);

    // Registrar logro de palabra creada
    registrarPalabraCreada();

    // Ocultar formulario y re-renderizar
    ocultarFormularioNuevaPalabra();
    renderizarListaPalabras();
    actualizarEstadisticasPalabras();
    reproducirSonidoPop();

    // Scroll al final de la lista para ver la nueva palabra
    const lista = document.getElementById('lista-palabras');
    lista.scrollTop = lista.scrollHeight;
}

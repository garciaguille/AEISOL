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
    sonidosActivados: true
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

// Función para obtener palabras según dificultad
function obtenerPalabrasPorDificultad() {
    switch (configuracion.dificultad) {
        case 'facil':
            return PALABRAS_FACIL;
        case 'normal':
            return [...PALABRAS_FACIL, ...PALABRAS_NORMAL];
        case 'dificil':
            return [...PALABRAS_NORMAL, ...PALABRAS_DIFICIL];
        case 'mixto':
        default:
            return [...PALABRAS_FACIL, ...PALABRAS_NORMAL, ...PALABRAS_DIFICIL];
    }
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
    intervaloTemporizador: null,
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

    const imgElement = document.getElementById('imagen-palabra');
    imgElement.style.display = 'none';

    const container = document.querySelector('.imagen-container');
    let emojiElement = container.querySelector('.emoji-display');
    if (!emojiElement) {
        emojiElement = document.createElement('span');
        emojiElement.className = 'emoji-display';
        emojiElement.style.fontSize = '120px';
        container.appendChild(emojiElement);
    }
    emojiElement.textContent = estadoJuego.palabraActual.imagen;

    document.getElementById('area-respuesta').classList.add('oculto');
    document.getElementById('btn-mostrar-respuesta').style.display = 'block';

    actualizarMarcador();
    mostrarPantalla('pantalla-juego');
    iniciarTemporizador();
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

    const jugador = obtenerJugadorActual();
    jugador.puntos++;
    actualizarMarcador();

    siguienteTurno();
}

function registrarFallo() {
    reproducirSonidoError();
    siguienteTurno();
}

function finalizarJuego() {
    estadoJuego.juegoTerminado = true;

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

    // Confirmar jugador 1
    document.getElementById('btn-confirmar1').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-jugador1').value.trim();
        if (nombre) {
            reproducirSonidoPop();
            estadoJuego.jugador1.nombre = nombre;
            document.getElementById('nombre1-display').textContent = nombre;
            document.getElementById('registro-jugador1').classList.add('oculto');
            document.getElementById('registro-jugador2').classList.remove('oculto');
            document.getElementById('nombre-jugador2').focus();
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
});

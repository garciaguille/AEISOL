// ==========================================
// JUEGO DE DADOS - APRENDE A LEER
// ==========================================

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
const PALABRAS = [
    // === PALABRAS DE 2-3 LETRAS ===
    // sol: s(dado1) + o(vocal) + l(dado2) ✓
    { palabra: "sol", imagen: "🌞" },
    // sal: s(dado1) + a(vocal) + l(dado2) ✓
    { palabra: "sal", imagen: "🧂" },
    // mar: m(dado1) + a(vocal) + r(dado2) ✓
    { palabra: "mar", imagen: "🌊" },
    // pan: p(dado1) + a(vocal) + n(dado1)? NO - dos del mismo dado
    // pan: p(dado2) + a(vocal) + n(dado1) ✓
    { palabra: "pan", imagen: "🍞" },
    // pie: p(dado1) + i(vocal) + e(vocal) ✓
    { palabra: "pie", imagen: "🦶" },
    // dos: d(dado1) + o(vocal) + s(dado2) ✓
    { palabra: "dos", imagen: "✌️" },
    // mes: m(dado1) + e(vocal) + s(dado2) ✓
    { palabra: "mes", imagen: "📅" },
    // red: r(dado2) + e(vocal) + d(dado1) ✓
    { palabra: "red", imagen: "🕸️" },
    // sur: s(dado1) + u(vocal) + r(dado2) ✓
    { palabra: "sur", imagen: "🧭" },
    // tos: t(dado1) + o(vocal) + s(dado2) ✓
    { palabra: "tos", imagen: "🤧" },
    // ala: a(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "ala", imagen: "🪽" },
    // oso: o(vocal) + s(dado1) + o(vocal) ✓
    { palabra: "oso", imagen: "🐻" },
    // uno: u(vocal) + n(dado1) + o(vocal) ✓
    { palabra: "uno", imagen: "1️⃣" },

    // === PALABRAS DE 4 LETRAS ===
    // casa: c(dado3) + a(vocal) + s(dado1) + a(vocal) ✓
    { palabra: "casa", imagen: "🏠" },
    // mesa: m(dado1) + e(vocal) + s(dado2) + a(vocal) ✓
    { palabra: "mesa", imagen: "🪑" },
    // pato: p(dado1) + a(vocal) + t(dado2) + o(vocal) ✓
    { palabra: "pato", imagen: "🦆" },
    // mano: m(dado1) + a(vocal) + n(dado1)? NO
    // luna: l(dado2) + u(vocal) + n(dado1) + a(vocal) ✓
    { palabra: "luna", imagen: "🌙" },
    // cama: c(dado3) + a(vocal) + m(dado1) + a(vocal) ✓
    { palabra: "cama", imagen: "🛏️" },
    // pera: p(dado1) + e(vocal) + r(dado2) + a(vocal) ✓
    { palabra: "pera", imagen: "🍐" },
    // foca: f(dado3) + o(vocal) + c(dado3)? NO - dos del dado 3
    // nido: n(dado1) + i(vocal) + d(dado2) + o(vocal) ✓
    { palabra: "nido", imagen: "🪺" },
    // pino: p(dado1) + i(vocal) + n(dado1)? NO
    // sapo: s(dado1) + a(vocal) + p(dado2) + o(vocal) ✓
    { palabra: "sapo", imagen: "🐸" },
    // dedo: d(dado1) + e(vocal) + d(dado2) + o(vocal) ✓
    { palabra: "dedo", imagen: "👆" },
    // lado: l(dado2) + a(vocal) + d(dado1) + o(vocal) ✓
    { palabra: "lado", imagen: "➡️" },
    // lata: l(dado2) + a(vocal) + t(dado1) + a(vocal) ✓
    { palabra: "lata", imagen: "🥫" },
    // sopa: s(dado1) + o(vocal) + p(dado2) + a(vocal) ✓
    { palabra: "sopa", imagen: "🍲" },
    // taza: t(dado1) + a(vocal) + z? NO hay z
    // seta: s(dado1) + e(vocal) + t(dado2) + a(vocal) ✓
    { palabra: "seta", imagen: "🍄" },
    // foto: f(dado3) + o(vocal) + t(dado1) + o(vocal) ✓
    { palabra: "foto", imagen: "📷" },
    // pala: p(dado1) + a(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "pala", imagen: "🥄" },
    // polo: p(dado1) + o(vocal) + l(dado2) + o(vocal) ✓
    { palabra: "polo", imagen: "🧊" },
    // ropa: r(dado2) + o(vocal) + p(dado1) + a(vocal) ✓
    { palabra: "ropa", imagen: "👕" },
    // rosa: r(dado2) + o(vocal) + s(dado1) + a(vocal) ✓
    { palabra: "rosa", imagen: "🌹" },
    // saco: s(dado1) + a(vocal) + c(dado3) + o(vocal) ✓
    { palabra: "saco", imagen: "🎒" },
    // tela: t(dado1) + e(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "tela", imagen: "🧵" },
    // codo: c(dado3) + o(vocal) + d(dado1) + o(vocal) ✓
    { palabra: "codo", imagen: "💪" },
    // cola: c(dado3) + o(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "cola", imagen: "🦊" },
    // copa: c(dado3) + o(vocal) + p(dado1) + a(vocal) ✓
    { palabra: "copa", imagen: "🏆" },
    // faro: f(dado3) + a(vocal) + r(dado2) + o(vocal) ✓
    { palabra: "faro", imagen: "🗼" },
    // hilo: h(dado3) + i(vocal) + l(dado2) + o(vocal) ✓
    { palabra: "hilo", imagen: "🧶" },
    // humo: h(dado3) + u(vocal) + m(dado1) + o(vocal) ✓
    { palabra: "humo", imagen: "💨" },
    // lomo: l(dado2) + o(vocal) + m(dado1) + o(vocal) ✓
    { palabra: "lomo", imagen: "🥩" },
    // nudo: n(dado1) + u(vocal) + d(dado2) + o(vocal) ✓
    { palabra: "nudo", imagen: "🪢" },
    // pico: p(dado1) + i(vocal) + c(dado3) + o(vocal) ✓
    { palabra: "pico", imagen: "⛏️" },
    // rana: r(dado2) + a(vocal) + n(dado1) + a(vocal) ✓
    { palabra: "rana", imagen: "🐸" },
    // rama: r(dado2) + a(vocal) + m(dado1) + a(vocal) ✓
    { palabra: "rama", imagen: "🌿" },
    // remo: r(dado2) + e(vocal) + m(dado1) + o(vocal) ✓
    { palabra: "remo", imagen: "🚣" },
    // seda: s(dado1) + e(vocal) + d(dado2) + a(vocal) ✓
    { palabra: "seda", imagen: "🎀" },
    // suma: s(dado1) + u(vocal) + m(dado2) + a(vocal) ✓
    { palabra: "suma", imagen: "➕" },
    // nata: n(dado1) + a(vocal) + t(dado2) + a(vocal) ✓
    { palabra: "nata", imagen: "🍦" },
    // nota: n(dado1) + o(vocal) + t(dado2) + a(vocal) ✓
    { palabra: "nota", imagen: "📝" },
    // puma: p(dado1) + u(vocal) + m(dado2) + a(vocal) ✓
    { palabra: "puma", imagen: "🐆" },
    // rata: r(dado2) + a(vocal) + t(dado1) + a(vocal) ✓
    { palabra: "rata", imagen: "🐀" },
    // ruta: r(dado2) + u(vocal) + t(dado1) + a(vocal) ✓
    { palabra: "ruta", imagen: "🛤️" },
    // tapa: t(dado1) + a(vocal) + p(dado2) + a(vocal) ✓
    { palabra: "tapa", imagen: "🫕" },
    // toro: t(dado1) + o(vocal) + r(dado2) + o(vocal) ✓
    { palabra: "toro", imagen: "🐂" },
    // moto: m(dado1) + o(vocal) + t(dado2) + o(vocal) ✓
    { palabra: "moto", imagen: "🏍️" },
    // paso: p(dado1) + a(vocal) + s(dado2) + o(vocal) ✓
    { palabra: "paso", imagen: "👣" },
    // peso: p(dado1) + e(vocal) + s(dado2) + o(vocal) ✓
    { palabra: "peso", imagen: "⚖️" },
    // sumo: s(dado1) + u(vocal) + m(dado2) + o(vocal) ✓
    { palabra: "sumo", imagen: "🤼" },
    // tomo: t(dado1) + o(vocal) + m(dado2) + o(vocal) ✓
    { palabra: "tomo", imagen: "📚" },
    // mudo: m(dado1) + u(vocal) + d(dado2) + o(vocal) ✓
    { palabra: "mudo", imagen: "🤐" },
    // mula: m(dado1) + u(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "mula", imagen: "🫏" },
    // fuma: f(dado3) + u(vocal) + m(dado1) + a(vocal) ✓
    { palabra: "fuma", imagen: "🚬" },
    // judo: j(dado3) + u(vocal) + d(dado1) + o(vocal) ✓
    { palabra: "judo", imagen: "🥋" },
    // sola: s(dado1) + o(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "sola", imagen: "👩" },
    // mole: m(dado1) + o(vocal) + l(dado2) + e(vocal) ✓
    { palabra: "mole", imagen: "🍲" },
    // loro: l(dado2) + o(vocal) + r(dado2)? NO
    // cura: c(dado3) + u(vocal) + r(dado2) + a(vocal) ✓
    { palabra: "cura", imagen: "⛪" },
    // fila: f(dado3) + i(vocal) + l(dado2) + a(vocal) ✓
    { palabra: "fila", imagen: "👥" },
    // hora: h(dado3) + o(vocal) + r(dado2) + a(vocal) ✓
    { palabra: "hora", imagen: "🕐" },
    // jota: j(dado3) + o(vocal) + t(dado1) + a(vocal) ✓
    { palabra: "jota", imagen: "🇯" },
    // cuna: c(dado3) + u(vocal) + n(dado1) + a(vocal) ✓
    { palabra: "cuna", imagen: "🛒" },
    // cupo: c(dado3) + u(vocal) + p(dado1) + o(vocal) ✓
    { palabra: "cupo", imagen: "🎫" },
    // cero: c(dado3) + e(vocal) + r(dado2) + o(vocal) ✓
    { palabra: "cero", imagen: "0️⃣" },
    // cara: c(dado3) + a(vocal) + r(dado2) + a(vocal) ✓
    { palabra: "cara", imagen: "😊" },
    // cosa: c(dado3) + o(vocal) + s(dado1) + a(vocal) ✓
    { palabra: "cosa", imagen: "📦" },
    // come: c(dado3) + o(vocal) + m(dado1) + e(vocal) ✓
    { palabra: "come", imagen: "🍽️" },

    // === PALABRAS DE 5+ LETRAS (más difíciles) ===
    // falda: f(dado3) + a + l(dado2) + d(dado1) + a ✓
    { palabra: "falda", imagen: "👗" },
    // selva: s(dado1) + e + l(dado2) + v? NO hay v
    // mosca: m(dado1) + o + s(dado2) + c(dado3) + a ✓
    { palabra: "mosca", imagen: "🪰" },
    // pasta: p(dado1) + a + s(dado2) + t(dado1)? NO dos del dado1
    // pasta: p(dado2) + a + s(dado1) + t(dado2)? NO dos del dado2
    // crema: c(dado3) + r(dado2) + e + m(dado1) + a ✓
    { palabra: "crema", imagen: "🧴" },
    // pluma: p(dado1) + l(dado2) + u + m(dado2)? NO
    // plato: p(dado1) + l(dado2) + a + t(dado1)? NO
    // primo: p(dado1) + r(dado2) + i + m(dado1)? NO
    // sudor: s(dado1) + u + d(dado2) + o + r(dado2)? NO
    // tumor: t(dado1) + u + m(dado2) + o + r(dado2)? NO
    // sudor: necesita 2 del dado 2
    // multa: m(dado1) + u + l(dado2) + t(dado1)? NO
    // delta: d(dado1) + e + l(dado2) + t(dado1)? NO
    // salto: s(dado1) + a + l(dado2) + t(dado1)? NO - t está en dado1 y dado2!
    // salto: s(dado1) + a + l(dado2) + t(dado2) + o? - s y l ya usados... NO necesita 2 vocales después
    // fruta: f(dado3) + r(dado2) + u + t(dado1) + a ✓
    { palabra: "fruta", imagen: "🍎" },
    // flora: f(dado3) + l(dado2) + o + r(dado2)? NO
    // fresa: f(dado3) + r(dado2) + e + s(dado1) + a ✓
    { palabra: "fresa", imagen: "🍓" },
    // freno: f(dado3) + r(dado2) + e + n(dado1) + o ✓
    { palabra: "freno", imagen: "🛑" },
    // claro: c(dado3) + l(dado2) + a + r(dado2)? NO
    // turno: t(dado1) + u + r(dado2) + n(dado1)? NO
    // norte: n(dado1) + o + r(dado2) + t(dado1)? NO, t(dado2) + e ✓
    { palabra: "norte", imagen: "🧭" },
    // metro: m(dado1) + e + t(dado2) + r(dado2)? NO
    // otros: solo 1 del dado 2
    // cuero: c(dado3) + u + e + r(dado2) + o ✓ (solo 1 consonante de cada dado)
    { palabra: "cuero", imagen: "🧥" },
    // suero: s(dado1) + u + e + r(dado2) + o ✓
    { palabra: "suero", imagen: "💉" }
];

// Estado del juego
let estadoJuego = {
    jugador1: { nombre: "", puntos: 0 },
    jugador2: { nombre: "", puntos: 0 },
    turnoActual: 1, // 1 o 2
    rondaActual: 1,
    totalRondas: 5,
    palabrasUsadas: [],
    palabraActual: null,
    tiempoRestante: 158,
    intervaloTemporizador: null,
    juegoTerminado: false
};

// Contexto de audio para los sonidos
let audioContext = null;

// ==========================================
// FUNCIONES DE SONIDO
// ==========================================

function inicializarAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function reproducirSonidoTick() {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function reproducirSonidoWarning() {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 1000;
    oscillator.type = 'square';

    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
}

function reproducirSonidoFin() {
    if (!audioContext) return;

    // Sonido de alarma cuando se acaba el tiempo
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 600;
            oscillator.type = 'sawtooth';

            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }, i * 200);
    }
}

function reproducirSonidoAcierto() {
    if (!audioContext) return;

    const notas = [523.25, 659.25, 783.99]; // Do, Mi, Sol

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
    if (!audioContext) return;

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
// FUNCIONES DE NAVEGACIÓN DE PANTALLAS
// ==========================================

function mostrarPantalla(idPantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });

    // Mostrar la pantalla solicitada
    const pantalla = document.getElementById(idPantalla);
    if (pantalla) {
        pantalla.classList.add('activa');
    }
}

// ==========================================
// FUNCIONES DEL JUEGO
// ==========================================

function obtenerPalabraAleatoria() {
    // Filtrar palabras no usadas
    const disponibles = PALABRAS.filter(p => !estadoJuego.palabrasUsadas.includes(p.palabra));

    // Si ya usamos todas, reiniciar
    if (disponibles.length === 0) {
        estadoJuego.palabrasUsadas = [];
        return PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
    }

    const seleccionada = disponibles[Math.floor(Math.random() * disponibles.length)];
    estadoJuego.palabrasUsadas.push(seleccionada.palabra);
    return seleccionada;
}

function iniciarTemporizador() {
    estadoJuego.tiempoRestante = 158;
    actualizarDisplayTemporizador();

    const temporizadorElement = document.getElementById('temporizador');
    temporizadorElement.classList.remove('warning');

    estadoJuego.intervaloTemporizador = setInterval(() => {
        estadoJuego.tiempoRestante--;
        actualizarDisplayTemporizador();

        // Sonido de tick cada segundo
        if (estadoJuego.tiempoRestante > 10) {
            reproducirSonidoTick();
        } else if (estadoJuego.tiempoRestante > 0) {
            // Warning cuando quedan menos de 10 segundos
            temporizadorElement.classList.add('warning');
            reproducirSonidoWarning();
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

    // Mostrar la palabra correcta
    document.getElementById('palabra-tiempo-agotado').textContent = estadoJuego.palabraActual.palabra;
    mostrarPantalla('pantalla-tiempo-agotado');
}

function actualizarMarcador() {
    document.getElementById('marcador-j1').textContent = estadoJuego.jugador1.puntos;
    document.getElementById('marcador-j2').textContent = estadoJuego.jugador2.puntos;
}

function obtenerJugadorActual() {
    return estadoJuego.turnoActual === 1 ? estadoJuego.jugador1 : estadoJuego.jugador2;
}

function siguienteTurno() {
    // Cambiar turno
    if (estadoJuego.turnoActual === 1) {
        estadoJuego.turnoActual = 2;
    } else {
        estadoJuego.turnoActual = 1;
        estadoJuego.rondaActual++;
    }

    // Verificar si terminó el juego
    if (estadoJuego.rondaActual > estadoJuego.totalRondas) {
        finalizarJuego();
        return;
    }

    // Mostrar pantalla de turno
    mostrarPantallaTurno();
}

function mostrarPantallaTurno() {
    const jugador = obtenerJugadorActual();
    document.getElementById('jugador-turno-nombre').textContent = jugador.nombre;
    document.getElementById('ronda-actual').textContent = estadoJuego.rondaActual;
    mostrarPantalla('pantalla-turno');
}

function iniciarRonda() {
    inicializarAudio();

    const jugador = obtenerJugadorActual();

    // Actualizar información del jugador
    document.getElementById('nombre-jugador-actual').textContent = `🎮 ${jugador.nombre}`;

    // Obtener nueva palabra
    estadoJuego.palabraActual = obtenerPalabraAleatoria();

    // Mostrar imagen (emoji)
    const imgElement = document.getElementById('imagen-palabra');
    imgElement.style.display = 'none';

    // Crear elemento de texto con el emoji
    const container = document.querySelector('.imagen-container');
    let emojiElement = container.querySelector('.emoji-display');
    if (!emojiElement) {
        emojiElement = document.createElement('span');
        emojiElement.className = 'emoji-display';
        emojiElement.style.fontSize = '120px';
        container.appendChild(emojiElement);
    }
    emojiElement.textContent = estadoJuego.palabraActual.imagen;

    // Ocultar área de respuesta
    document.getElementById('area-respuesta').classList.add('oculto');
    document.getElementById('btn-mostrar-respuesta').style.display = 'block';

    // Actualizar marcador
    actualizarMarcador();

    // Mostrar pantalla de juego
    mostrarPantalla('pantalla-juego');

    // Iniciar temporizador
    iniciarTemporizador();
}

function mostrarRespuesta() {
    detenerTemporizador();

    // Mostrar la palabra correcta
    document.getElementById('palabra-correcta').textContent = estadoJuego.palabraActual.palabra;

    // Mostrar área de respuesta y ocultar botón
    document.getElementById('area-respuesta').classList.remove('oculto');
    document.getElementById('btn-mostrar-respuesta').style.display = 'none';
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

    // Mostrar resultados
    document.getElementById('final-nombre1').textContent = estadoJuego.jugador1.nombre;
    document.getElementById('final-puntos1').textContent = `${estadoJuego.jugador1.puntos} puntos`;

    document.getElementById('final-nombre2').textContent = estadoJuego.jugador2.nombre;
    document.getElementById('final-puntos2').textContent = `${estadoJuego.jugador2.puntos} puntos`;

    // Determinar ganador
    const mensajeGanador = document.getElementById('mensaje-ganador');
    if (estadoJuego.jugador1.puntos > estadoJuego.jugador2.puntos) {
        mensajeGanador.textContent = `🎉 ¡${estadoJuego.jugador1.nombre} es el ganador! 🎉`;
    } else if (estadoJuego.jugador2.puntos > estadoJuego.jugador1.puntos) {
        mensajeGanador.textContent = `🎉 ¡${estadoJuego.jugador2.nombre} es el ganador! 🎉`;
    } else {
        mensajeGanador.textContent = `🤝 ¡Es un empate! ¡Ambos son ganadores! 🤝`;
    }

    mostrarPantalla('pantalla-final');
}

function reiniciarJuego() {
    // Reiniciar estado
    estadoJuego = {
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

    // Reiniciar formularios de registro
    document.getElementById('nombre-jugador1').value = '';
    document.getElementById('nombre-jugador2').value = '';
    document.getElementById('registro-jugador1').classList.remove('oculto');
    document.getElementById('registro-jugador2').classList.add('oculto');
    document.getElementById('jugadores-registrados').classList.add('oculto');

    mostrarPantalla('pantalla-inicio');
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Botón comenzar
    document.getElementById('btn-comenzar').addEventListener('click', () => {
        inicializarAudio();
        mostrarPantalla('pantalla-registro');
    });

    // Confirmar jugador 1
    document.getElementById('btn-confirmar1').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-jugador1').value.trim();
        if (nombre) {
            estadoJuego.jugador1.nombre = nombre;
            document.getElementById('nombre1-display').textContent = nombre;
            document.getElementById('registro-jugador1').classList.add('oculto');
            document.getElementById('registro-jugador2').classList.remove('oculto');
            document.getElementById('nombre-jugador2').focus();
        } else {
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
            estadoJuego.jugador2.nombre = nombre;
            document.getElementById('nombre2-display').textContent = nombre;
            document.getElementById('registro-jugador2').classList.add('oculto');
            document.getElementById('jugadores-registrados').classList.remove('oculto');

            // Después de un momento, mostrar la pantalla de turno
            setTimeout(() => {
                mostrarPantallaTurno();
            }, 1500);
        } else {
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
    document.getElementById('btn-iniciar-ronda').addEventListener('click', iniciarRonda);

    // Botón mostrar respuesta
    document.getElementById('btn-mostrar-respuesta').addEventListener('click', mostrarRespuesta);

    // Botones de resultado
    document.getElementById('btn-acerto').addEventListener('click', registrarAcierto);
    document.getElementById('btn-fallo').addEventListener('click', registrarFallo);

    // Botón continuar después de tiempo agotado
    document.getElementById('btn-continuar-tiempo').addEventListener('click', siguienteTurno);

    // Botón jugar de nuevo
    document.getElementById('btn-jugar-nuevo').addEventListener('click', reiniciarJuego);
});

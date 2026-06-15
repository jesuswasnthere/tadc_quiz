// ---------- PREGUNTAS: 8 preguntas, cada una con 8 opciones ----------
const preguntas = [
    { texto: "1. ¿Qué haces cuando tienes tiempo libre sin planes?",
      opciones: [
          { texto: "Imagino mundos imposibles", personaje: "Caine" },
          { texto: "Hago algo con las manos", personaje: "Gangle" },
          { texto: "Pongo orden en mi espacio", personaje: "Ragatha" },
          { texto: "Me quedo mirando el techo", personaje: "Bubble" },
          { texto: "Leo algo interesante", personaje: "Kinger" },
          { texto: "Veo vídeos sin parar", personaje: "Pomni" },
          { texto: "Salgo a molestar a alguien", personaje: "Jax" },
          { texto: "Pienso en qué sentido tiene todo", personaje: "Zooble" }
      ] },
    { texto: "2. Cuando alguien te cae mal, tú...",
      opciones: [
          { texto: "Se lo digo en la cara", personaje: "Zooble" },
          { texto: "Intento caerle bien", personaje: "Ragatha" },
          { texto: "Me alejo sin explicación", personaje: "Pomni" },
          { texto: "Le hago bromas pesadas", personaje: "Jax" },
          { texto: "Cambio de humor según el día", personaje: "Gangle" },
          { texto: "Finjo que no existe", personaje: "Bubble" },
          { texto: "Planeo su perdición", personaje: "Caine" },
          { texto: "Analizo por qué me cae mal", personaje: "Kinger" }
      ] },
    { texto: "3. ¿Qué ambiente te hace sentir más a gusto?",
      opciones: [
          { texto: "Un lugar ordenado y silencioso", personaje: "Kinger" },
          { texto: "Una fiesta descontrolada", personaje: "Jax" },
          { texto: "Un espacio con plantas y luz natural", personaje: "Ragatha" },
          { texto: "Un rincón donde nadie me hable", personaje: "Zooble" },
          { texto: "Un sitio con colores y música alegre", personaje: "Gangle" },
          { texto: "Un escenario donde yo dirija", personaje: "Caine" },
          { texto: "Una hamaca sin hacer nada", personaje: "Bubble" },
          { texto: "Un lugar cerrado pero con salida de emergencia", personaje: "Pomni" }
      ] },
    { texto: "4. ¿Cómo reaccionas ante una crítica inesperada?",
      opciones: [
          { texto: "Me pongo nervioso y me disculpo", personaje: "Pomni" },
          { texto: "La tomo como un reto para mejorar", personaje: "Kinger" },
          { texto: "Me río y le resto importancia", personaje: "Jax" },
          { texto: "Le doy la razón para evitar conflicto", personaje: "Ragatha" },
          { texto: "Me pongo triste y cambio de humor", personaje: "Gangle" },
          { texto: "Respondo con otra crítica", personaje: "Zooble" },
          { texto: "Finjo que no me importa", personaje: "Bubble" },
          { texto: "La convierto en un espectáculo", personaje: "Caine" }
      ] },
    { texto: "5. ¿Qué es lo que más odias en una conversación?",
      opciones: [
          { texto: "Que me interrumpan", personaje: "Kinger" },
          { texto: "Que no lleguen al punto", personaje: "Zooble" },
          { texto: "Que se pongan muy intensos", personaje: "Pomni" },
          { texto: "Que se rían de mí", personaje: "Gangle" },
          { texto: "Que me digan lo que tengo que hacer", personaje: "Jax" },
          { texto: "Que sea muy aburrida", personaje: "Bubble" },
          { texto: "Que no me dejen opinar", personaje: "Ragatha" },
          { texto: "Que no me tomen en serio", personaje: "Caine" }
      ] },
    { texto: "6. ¿Qué cualidad te gusta más de ti mismo?",
      opciones: [
          { texto: "Mi creatividad", personaje: "Gangle" },
          { texto: "Mi lógica", personaje: "Kinger" },
          { texto: "Mi honestidad", personaje: "Zooble" },
          { texto: "Mi paciencia", personaje: "Ragatha" },
          { texto: "Mi sentido del humor", personaje: "Jax" },
          { texto: "Mi adaptabilidad", personaje: "Pomni" },
          { texto: "Mi imaginación", personaje: "Caine" },
          { texto: "Mi tranquilidad", personaje: "Bubble" }
      ] },
    { texto: "7. ¿Cómo enfrentas una tarea difícil?",
      opciones: [
          { texto: "La divido en pasos pequeños", personaje: "Kinger" },
          { texto: "Pido ayuda a alguien", personaje: "Ragatha" },
          { texto: "La dejo para último momento", personaje: "Pomni" },
          { texto: "La convierto en un juego", personaje: "Jax" },
          { texto: "La hago con cambios de ánimo", personaje: "Gangle" },
          { texto: "Me quejo pero la hago", personaje: "Zooble" },
          { texto: "La ignoro hasta que desaparezca", personaje: "Bubble" },
          { texto: "La convierto en un desafío épico", personaje: "Caine" }
      ] },
    { texto: "8. ¿Qué tipo de persona te cae mejor?",
      opciones: [
          { texto: "Alguien predecible y tranquilo", personaje: "Kinger" },
          { texto: "Alguien que siempre hace reír", personaje: "Jax" },
          { texto: "Alguien que escucha sin juzgar", personaje: "Ragatha" },
          { texto: "Alguien sincero aunque sea borde", personaje: "Zooble" },
          { texto: "Alguien que entienda mis cambios", personaje: "Gangle" },
          { texto: "Alguien que me dé seguridad", personaje: "Pomni" },
          { texto: "Alguien que sea muy divertido", personaje: "Bubble" },
          { texto: "Alguien que tenga grandes ideas", personaje: "Caine" }
      ] }
];

// Descripciones finales
const descripciones = {
    Pomni: "🎭 Eres Pomni. Vives con cierta ansiedad, te preocupas por el futuro, pero eres ingenioso y muy humano. Siempre buscas mejorar y aprender cosas nuevas.",
    Jax: "🐰 Eres Jax. Divertido, caótico y un poco sarcástico. Te gusta provocar y reírte, pero debajo de esa fachada hay alguien que no soporta el aburrimiento.",
    Ragatha: "🎀 Eres Ragatha. Amable, empática y el pilar de tu grupo. Te gusta cuidar de los demás y encontrar soluciones que dejen a todos contentos.",
    Zooble: "🧩 Eres Zooble. Directo, auténtico y sin miedo a decir lo que piensas. Valoras la honestidad y tu espacio personal por encima de todo.",
    Gangle: "🎭 Eres Gangle. Pasas por altibajos emocionales, pero tu creatividad y sentido del humor te ayudan a salir adelante. Eres más fuerte de lo que aparentas.",
    Caine: "✨ Eres Caine. Carismático, imaginativo y con una chispa de locura creadora. Te gusta liderar y sorprender a los demás con ideas grandiosas.",
    Bubble: "🫧 Eres Bubble. Ligero, adorable y un poco despistado. Apareces cuando menos te esperan y alegras el día con tu sencillez y espontaneidad.",
    Kinger: "👑 Eres Kinger. Analítico, metódico y amante de los desafíos intelectuales. Prefieres la lógica al caos, y cuando te apasiona algo, te sumerges por completo."
};

let respuestas = new Array(preguntas.length).fill(null);

// Función para barajar (shuffle) un array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function renderPreguntas() {
    const container = document.getElementById("preguntasArea");
    if (!container) return;
    container.innerHTML = "";
    preguntas.forEach((preg, idx) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.innerHTML = `<strong>${preg.texto}</strong>`;
        fieldset.appendChild(legend);
        
        // Barajar opciones (copiar array original para no modificarlo)
        const opcionesBarajadas = shuffleArray([...preg.opciones]);
        
        opcionesBarajadas.forEach((opt, optIdx) => {
            const radioId = `q${idx}_opt${optIdx}`;
            const div = document.createElement("div");
            div.style.marginBottom = "0.5rem";
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.gap = "0.5rem";
            div.innerHTML = `
                <input type="radio" name="q${idx}" id="${radioId}" value="${opt.personaje}" ${respuestas[idx] === opt.personaje ? 'checked' : ''}>
                <label for="${radioId}" style="margin:0; font-weight:normal;">${opt.texto}</label>
            `;
            const radio = div.querySelector("input");
            radio.addEventListener("change", () => {
                respuestas[idx] = radio.value;
            });
            fieldset.appendChild(div);
        });
        container.appendChild(fieldset);
    });
}

function calcularResultado() {
    if (respuestas.some(r => r === null)) {
        alert("❌ Responde todas las preguntas para conocer a tu personaje TADC.");
        return;
    }
    const conteo = {
        Pomni: 0, Jax: 0, Ragatha: 0, Zooble: 0,
        Gangle: 0, Caine: 0, Bubble: 0, Kinger: 0
    };
    respuestas.forEach(personaje => {
        if (conteo[personaje] !== undefined) conteo[personaje]++;
    });
    
    let maxVotos = Math.max(...Object.values(conteo));
    let ganadores = Object.keys(conteo).filter(p => conteo[p] === maxVotos);
    let ganador = ganadores[Math.floor(Math.random() * ganadores.length)];
    
    const imagenURL = `assets/${ganador.toLowerCase()}.jpg`;
    const resultadoDiv = document.getElementById("resultadoArea");
    if (!resultadoDiv) return;
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <div class="resultado-personaje">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                <img src="${imagenURL}" alt="${ganador}" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 4px solid #ffaa66; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                <h2 style="margin: 0; color: var(--result-accent, #ffc285); text-shadow: 1px 1px 0 #5a2e1a; font-size: 2rem;">🎪 ¡Eres ${ganador}! 🎪</h2>
            </div>
            <p style="margin: 1.2rem 0 0.5rem; font-size: 1.05rem; line-height: 1.4; background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 1.5rem; color: #ffffff; font-weight: 500;">
                ${descripciones[ganador]}
            </p>
            <button id="btnReset" class="secondary" style="margin-top: 1.5rem;">🔄 Hacer el quiz de nuevo</button>
        </div>
    `;
    const btnCalcular = document.getElementById("btnCalcular");
    if (btnCalcular) btnCalcular.style.display = "none";
    const btnReset = document.getElementById("btnReset");
    if (btnReset) {
        btnReset.addEventListener("click", () => {
            respuestas.fill(null);
            renderPreguntas();
            resultadoDiv.style.display = "none";
            if (btnCalcular) btnCalcular.style.display = "block";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderPreguntas();
    const btnCalcular = document.getElementById("btnCalcular");
    if (btnCalcular) btnCalcular.addEventListener("click", calcularResultado);
});
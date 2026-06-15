// ---------- PREGUNTAS CON 5 OPCIONES CADA UNA (balance 8 personajes, cada uno aparece 5 veces) ----------
const preguntas = [
    { texto: "1. ¿Qué haces cuando estás solo en casa?",
      opciones: [
          { texto: "Pienso en planes locos", personaje: "Caine" },
          { texto: "Me pongo a hacer algo creativo", personaje: "Gangle" },
          { texto: "Ordeno y limpio todo", personaje: "Ragatha" },
          { texto: "Me acuesto a no hacer nada", personaje: "Bubble" },
          { texto: "Leo o veo documentales", personaje: "Kinger" }
      ] },
    { texto: "2. ¿Cómo reaccionas si alguien te interrumpe mientras trabajas?",
      opciones: [
          { texto: "Me molesto pero no digo nada", personaje: "Pomni" },
          { texto: "Le suelto un comentario seco", personaje: "Zooble" },
          { texto: "Me río y sigo la corriente", personaje: "Jax" },
          { texto: "Le explico con calma", personaje: "Ragatha" },
          { texto: "Aprovecho para descansar", personaje: "Bubble" }
      ] },
    { texto: "3. ¿Qué tipo de clima prefieres?",
      opciones: [
          { texto: "Soleado y cálido", personaje: "Ragatha" },
          { texto: "Lluvioso y tranquilo", personaje: "Kinger" },
          { texto: "Nublado y fresco", personaje: "Zooble" },
          { texto: "Tormentoso y extremo", personaje: "Caine" },
          { texto: "Me da igual, todo me sirve", personaje: "Bubble" }
      ] },
    { texto: "4. ¿Qué cualidad valoras más en ti mismo?",
      opciones: [
          { texto: "Mi honestidad", personaje: "Zooble" },
          { texto: "Mi paciencia", personaje: "Ragatha" },
          { texto: "Mi creatividad", personaje: "Gangle" },
          { texto: "Mi sentido del humor", personaje: "Jax" },
          { texto: "Mi inteligencia", personaje: "Kinger" }
      ] },
    { texto: "5. ¿Qué haces si ves a alguien triste?",
      opciones: [
          { texto: "Le pregunto qué le pasa", personaje: "Ragatha" },
          { texto: "Intento hacerlo reír", personaje: "Jax" },
          { texto: "No sé qué decir", personaje: "Pomni" },
          { texto: "Le ofrezco compañía en silencio", personaje: "Zooble" },
          { texto: "Hago una broma para animarlo", personaje: "Gangle" }
      ] },
    { texto: "6. ¿Cómo prefieres pasar tus vacaciones?",
      opciones: [
          { texto: "Aventura y caos", personaje: "Caine" },
          { texto: "Relajación extrema", personaje: "Bubble" },
          { texto: "Aprendiendo algo nuevo", personaje: "Kinger" },
          { texto: "Con amigos y risas", personaje: "Jax" },
          { texto: "En contacto con la naturaleza", personaje: "Ragatha" }
      ] },
    { texto: "7. ¿Qué papel tomas en un equipo?",
      opciones: [
          { texto: "El que idea proyectos", personaje: "Caine" },
          { texto: "El que ejecuta en silencio", personaje: "Kinger" },
          { texto: "El que anima al grupo", personaje: "Gangle" },
          { texto: "El que critica constructivamente", personaje: "Zooble" },
          { texto: "El que sigue al resto", personaje: "Pomni" }
      ] },
    { texto: "8. ¿Qué es lo que más temes?",
      opciones: [
          { texto: "Quedarme atrapado", personaje: "Pomni" },
          { texto: "Aburrirme", personaje: "Jax" },
          { texto: "No ser útil", personaje: "Ragatha" },
          { texto: "Perder mi esencia", personaje: "Zooble" },
          { texto: "Ser olvidado", personaje: "Bubble" }
      ] }
];

// Descripciones finales (más neutras, sin alusión directa a trabajos previos)
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

function renderPreguntas() {
    const container = document.getElementById("preguntasArea");
    container.innerHTML = "";
    preguntas.forEach((preg, idx) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.innerHTML = `<strong>${preg.texto}</strong>`;
        fieldset.appendChild(legend);
        preg.opciones.forEach((opt, optIdx) => {
            const radioId = `q${idx}_opt${optIdx}`;
            const div = document.createElement("div");
            div.style.marginBottom = "0.6rem";
            div.innerHTML = `
                <input type="radio" name="q${idx}" id="${radioId}" value="${opt.personaje}" ${respuestas[idx] === opt.personaje ? 'checked' : ''}>
                <label for="${radioId}">${opt.texto}</label>
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
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <div class="resultado-personaje">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                <img src="${imagenURL}" alt="${ganador}" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 4px solid #ffaa66; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                <h2 style="margin: 0; color: #ffc285; text-shadow: 1px 1px 0 #5a2e1a; font-size: 2rem;">🎪 ¡Eres ${ganador}! 🎪</h2>
            </div>
            <p style="margin: 1.2rem 0 0.5rem; font-size: 1.05rem; line-height: 1.4; background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 1.5rem; color: #ffffff; font-weight: 500;">
                ${descripciones[ganador]}
            </p>
            <button id="btnReset" class="secondary" style="margin-top: 1.5rem;">🔄 Hacer el quiz de nuevo</button>
        </div>
    `;
    document.getElementById("btnCalcular").style.display = "none";
    document.getElementById("btnReset").addEventListener("click", () => {
        respuestas.fill(null);
        renderPreguntas();
        resultadoDiv.style.display = "none";
        document.getElementById("btnCalcular").style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderPreguntas();
    document.getElementById("btnCalcular").addEventListener("click", calcularResultado);
});
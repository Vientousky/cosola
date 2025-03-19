"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./terminal.module.css";
import { BsCommand } from "react-icons/bs";

type CommandHistoryItem = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>(
    []
  );
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCommandHistory([
      {
        command: "",
        output: (
          <article className={styles.bienvenida}>
            <h2>¡Bienvenido a mi consola!</h2>
            <p>
              Escribe <span>help</span> para ver la lista de comandos.
            </p>
            <h4>system.version: f19.01.2008</h4>
          </article>
        ),
      },
    ]);
  }, []);

  // Foco en el input al cargar el componente
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Manejo del cambio de input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Manejo de teclas en el input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      let newIndex = historyIndex;

      if (e.key === "ArrowUp" && historyIndex < commandHistory.length - 1) {
        newIndex++;
      } else if (e.key === "ArrowDown" && historyIndex > 0) {
        newIndex--;
      } else if (e.key === "ArrowDown" && historyIndex === 0) {
        newIndex = -1;
      }

      setHistoryIndex(newIndex);
      setInput(newIndex >= 0 ? commandHistory[newIndex].command : "");
    }
  };

  // Manejo del envío del comando
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const command = input.trim().toLowerCase();
    let output: React.ReactNode;

    switch (command) {
      case "help":
        output = (
          <article className={styles.article}>
            <p>Comandos válidos:</p>
            <ul>
              <li>
                <span>about</span> - Aprende sobre mí
              </li>
              <li>
                <span>hobbies</span> - Mis pasatiempos
              </li>
              <li>
                <span>experience</span> - Mi experiencia profesional
              </li>
              <li>
                <span>projects</span> - Mis proyectos
              </li>
              <li>
                <span>contact</span> - Información de contacto
              </li>
              <li>
                <span>clear</span> - Limpiar la terminal
              </li>
            </ul>
          </article>
        );
        break;

      case "about":
        output = (
          <article className={styles.article}>
            <h1>Sobre mí</h1>
            <p>
              Algunos ya me conocen, pero para los que no, me presento: soy
              <strong>Jose David Mancuello</strong>. Mi apodo es
              <strong>Jocesito</strong>. Soy bastante reservado con lo que hago
              y digo, pero aquí les dejo un poco de información sobre mí.
            </p>
            <p>
              Soy de <strong>Sáenz Peña, Chaco</strong>, y tengo 17 años.
              Anteriormente vivía en <strong>Pampa del Indio</strong>, pero esa
              es una historia para otro momento.
            </p>
            <p>
              Me apasiona la programación, el diseño web y la tecnología en
              general. También me gustan los animales y la pesca.
            </p>
          </article>
        );
        break;

      case "hobbies":
        output = (
          <article className={styles.article}>
            <h1>Mis pasatiempos</h1>
            <p>
              En mi tiempo libre, me gusta programar sitios web mientras escucho
              mi música favorita. También disfruto jugar videojuegos y ver
              alguna que otra serie.
            </p>
            <p>Además, voy al gimnasio y me gusta el inglés.</p>
            <p>
              Antes solía salir a pescar con mi <strong>padre</strong> y también
              disfrutaba criar animales.
            </p>
          </article>
        );
        break;

      case "experience":
        output = (
          <article className={styles.article}>
            <h1>Experiencia profesional</h1>
            <p>
              Actualmente estoy estudiando en la{" "}
              <strong>Escuela de Educacion secundaria N°59</strong> de Sáenz
              Peña, Chaco.
            </p>
            <p>
              También estoy aprendiendo de forma autodidacta sobre desarrollo
              web y tecnologías relacionadas.
            </p>
            <p>
              He realizado algunos proyectos personales y colaboraciones con
              amigos y conocidos.
            </p>
          </article>
        );
        break;

      case "projects":
        output = (
          <article className={styles.projects}>
            <h1> Mis proyectos</h1>
            <hr />
            <p>
              A lo largo de mi aprendizaje, he realizado algunos proyectos
              personales y colaboraciones:
            </p>

            <ul>
              <li>
                <span>[✔] EES N59:</span>
                <p>
                  └── Proyecto para facilitar la comunicación entre padres y
                  directivos.
                </p>
                <a href="https://ees-n59.vercel.app/" target="_blank">
                  ➜ Ver más
                </a>
              </li>

              <li>
                <span>[🚧] Federación de Boxeo:</span>
                <p>└── Actualmente en desarrollo.</p>
              </li>

              <li>
                <span>[🚧] Instituto Popular de Capacitación:</span>
                <p>└── Actualmente en desarrollo.</p>
              </li>
            </ul>
          </article>
        );
        break;

      case "contact":
        output = (
          <article className={styles.projects}>
            <h1>Contacto</h1>
            <ul>
              <li>
                <span>Email:</span>{" "}
                <a href="mailto:jotamancuello2048819@gmail.com">
                  └──[ jotamancuello2048819@gmail.com ] 
                </a>
              </li>
              <li>
                <span>LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/mancuello/" target="_blank">
                  └──[ Mancuello ]
                </a>
              </li>
              <li>
                <span>GitHub:</span>
                <a href="https://github.com/Vientousky" target="_blank">
                  └──[ Vientousky ] 
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <span>Facebook</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61563499826060"
                  target="_blank"
                >
                  └──[ Jose David Mancuello ]
                </a>
              </li>

              <li>
                <span>Intagram</span>
                <a href="https://www.instagram.com/vientousky/" target="_blank">
                  └──[ Vientousky ]
                </a>
              </li>
            </ul>
          </article>
        );
        break;

      case "clear":
        setCommandHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p>
            Comando no reconocido: <strong>{command}</strong>. Escribe{" "}
            <span style={{ fontWeight: "bold" }}>help</span> para ver los
            comandos disponibles.
          </p>
        );
    }

    setCommandHistory((prev) => [...prev, { command, output }]);
    setInput("");
    setHistoryIndex(-1);
  };

  return (
    <section ref={terminalRef} className={styles.terminal}>
      <header className={styles.header}>
        <BsCommand size={30} />
        <h1>Terminal Personal</h1>
      </header>

      {commandHistory.map((item, index) => (
        <section key={index} className={styles.command}>
          {item.command && (
            <p>
              <span>$</span> {item.command}
            </p>
          )}
          <div>{item.output}</div>
        </section>
      ))}

      <form className={styles.formulario} onSubmit={handleSubmit}>
        <span>$</span>
        <input
          ref={inputRef}
          type="text"
          className={styles.retro}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </form>
    </section>
  );
}

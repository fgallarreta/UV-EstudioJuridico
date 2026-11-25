const services = [
  {
    number: "01",
    title: "Laboral",
    description:
      "Defendemos tus derechos en cada etapa de la relación laboral, con respuestas claras y acompañamiento cercano.",
    items: ["Despidos", "Accidentes", "Liquidaciones"],
  },
  {
    number: "02",
    title: "Civil",
    description:
      "Asesoramiento para proteger tu patrimonio, ordenar acuerdos y resolver conflictos de forma estratégica.",
    items: ["Patrimonial", "Contratos", "Propiedad"],
  },
  {
    number: "03",
    title: "Daños y perjuicios",
    description:
      "Evaluamos tu caso y trabajamos para obtener una reparación justa por los daños que sufriste.",
    items: ["Accidentes de tránsito", "Accidentes personales", "Daños ilícitos"],
  },
  {
    number: "04",
    title: "Sucesiones y divorcios",
    description:
      "Te acompañamos con sensibilidad y precisión jurídica en decisiones familiares importantes.",
    items: ["Sucesiones", "Divorcios", "Acuerdos familiares"],
  },
  {
    number: "05",
    title: "Comercial · Empresarial",
    description:
      "Soluciones legales pensadas para dar respaldo y previsibilidad a tu actividad comercial.",
    items: ["Contratos", "Sociedades", "Asesoramiento integral"],
  },
  {
    number: "06",
    title: "Otros servicios",
    description:
      "No todos los conflictos tienen una etiqueta. Te escuchamos y te acompañamos en la búsqueda de una solución.",
    items: ["Análisis personalizado", "Estrategia legal", "Acompañamiento"],
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 3.2A12.6 12.6 0 0 0 5.3 22.5L3.7 28.3l6-1.6A12.6 12.6 0 1 0 16 3.2Z" />
    <path d="M12 10.2c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.3c.2.3 2.9 4.5 7.1 6.1 3.5 1.4 4.2 1.1 5 .9.8-.1 2.5-1 2.8-2 .3-.9.3-1.8.2-2-.1-.2-.4-.3-.9-.6l-3-1.4c-.4-.2-.8-.3-1.1.3-.3.5-1.1 1.4-1.4 1.7-.2.3-.5.3-1 .1a10.2 10.2 0 0 1-3.6-2.2 13.6 13.6 0 0 1-2.5-3.1c-.3-.5 0-.7.2-1l.7-.8c.2-.2.3-.5.5-.8.1-.3 0-.6-.1-.8L12 10.2Z" />
  </svg>
);

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-main">
          <a className="lawyer-id" href="#inicio" aria-label="Ir al inicio">
            <span>Urbano Vitolo</span>
            <small>Abogados · Mat. Prof. 12345</small>
          </a>
          <a className="header-logo" href="#inicio" aria-label="Urbano Vitolo Estudio Jurídico">
            <img src="/urbano-vitolo-logo-transparent.png" alt="" />
          </a>
          <a className="header-cta" href="#contacto">
            Consultar
            <Arrow />
          </a>
        </div>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Página principal</a>
          <a href="#servicios">Servicio jurídico</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="#preguntas">Preguntas frec.</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow" />
          <div className="hero-content">
            <p className="eyebrow">Estudio jurídico · Atención personalizada</p>
            <h1>
              Respuestas claras.
              <br />
              <em>Defensa cercana.</em>
            </h1>
            <p className="hero-copy">
              Escuchamos tu situación, analizamos cada detalle y diseñamos una estrategia legal a tu medida.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#contacto">
                Hacer una consulta
                <Arrow />
              </a>
              <a className="text-link" href="#servicios">
                Conocer servicios
              </a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            UV
          </div>
          <div className="scroll-note">
            <span />
            Deslizá para conocer más
          </div>
        </section>

        <section className="intro" id="nosotros">
          <p className="section-label">Nuestro compromiso</p>
          <div className="intro-grid">
            <h2>Tu tranquilidad empieza por entender tus opciones.</h2>
            <div>
              <p>
                Creemos en una práctica jurídica humana, directa y responsable. Te explicamos cada paso sin
                tecnicismos innecesarios para que puedas decidir con confianza.
              </p>
              <a className="underlined-link" href="#contacto">
                Conocé cómo trabajamos <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="services" id="servicios">
          <div className="services-heading">
            <p className="section-label">Áreas de práctica</p>
            <h2>Servicios jurídicos</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="service-link"
                  href={`https://wa.me/5491100000000?text=${encodeURIComponent(
                    `Hola, quisiera consultar por ${service.title}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar por ${service.title}`}
                >
                  Quiero saber más
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto">
          <div>
            <p className="section-label">Primera consulta</p>
            <h2>Contanos tu caso.</h2>
            <p>No hace falta que sepas qué tipo de problema legal tenés. Empecemos por conversar.</p>
          </div>
          <a
            className="button button-dark"
            href="https://wa.me/5491100000000?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
            target="_blank"
            rel="noreferrer"
          >
            Escribinos por WhatsApp
            <Arrow />
          </a>
        </section>

        <section className="faq" id="preguntas">
          <div>
            <p className="section-label">Información útil</p>
            <h2>Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                ¿Cómo es la primera consulta?
                <span>+</span>
              </summary>
              <p>Nos contás brevemente tu situación, revisamos la información inicial y te orientamos sobre los próximos pasos.</p>
            </details>
            <details>
              <summary>
                ¿Qué documentación necesito?
                <span>+</span>
              </summary>
              <p>Depende de cada caso. Si tenés contratos, recibos, cartas documento o fotografías, podés tenerlos a mano.</p>
            </details>
            <details>
              <summary>
                ¿Atienden de manera virtual?
                <span>+</span>
              </summary>
              <p>Sí. Coordinamos consultas presenciales o virtuales según tu ubicación y preferencia.</p>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <img src="/urbano-vitolo-logo-transparent.png" alt="Urbano Vitolo Estudio Jurídico" />
        <div>
          <p>Urbano Vitolo · Estudio Jurídico</p>
          <small>Asesoramiento legal con compromiso y cercanía.</small>
        </div>
        <small>© {new Date().getFullYear()} · Todos los derechos reservados</small>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/5491100000000?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
      >
        <span className="whatsapp-label">
          <strong>¿Necesitás ayuda?</strong>
          Escribinos
        </span>
        <span className="whatsapp-icon">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  );
}

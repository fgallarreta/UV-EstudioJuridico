const services = [
  {
    number: "01",
    slug: "laboral",
    title: "Laboral",
    description:
      "Defendemos tus derechos en cada etapa de la relación laboral, con respuestas claras y acompañamiento cercano.",
    items: ["Despidos", "Accidentes", "Liquidaciones"],
    detail:
      "Intervenimos tanto en la prevención como en la resolución de conflictos laborales, acompañando a trabajadores y empleadores con una estrategia clara.",
    solutions: ["Despidos y desvinculaciones", "Accidentes y enfermedades laborales", "Liquidaciones e indemnizaciones", "Intercambio telegráfico", "Conciliaciones laborales", "Asesoramiento preventivo"],
  },
  {
    number: "02",
    slug: "civil",
    title: "Civil",
    description:
      "Asesoramiento para proteger tu patrimonio, ordenar acuerdos y resolver conflictos de forma estratégica.",
    items: ["Patrimonial", "Contratos", "Propiedad"],
    detail:
      "Abordamos conflictos entre particulares y protegemos tus intereses patrimoniales mediante soluciones jurídicas sólidas y sostenibles.",
    solutions: ["Redacción y revisión de contratos", "Conflictos patrimoniales", "Propiedad y posesión", "Cobro de deudas", "Incumplimientos contractuales", "Mediaciones y acuerdos"],
  },
  {
    number: "03",
    slug: "danos-y-perjuicios",
    title: "Daños y perjuicios",
    description:
      "Evaluamos tu caso y trabajamos para obtener una reparación justa por los daños que sufriste.",
    items: ["Accidentes de tránsito", "Accidentes personales", "Daños ilícitos"],
    detail:
      "Analizamos el alcance del daño, reunimos la documentación necesaria y reclamamos la reparación integral que corresponde.",
    solutions: ["Accidentes de tránsito", "Lesiones y accidentes personales", "Daño material y moral", "Reclamos ante aseguradoras", "Responsabilidad civil", "Negociaciones y juicios"],
  },
  {
    number: "04",
    slug: "sucesiones-y-divorcios",
    title: "Sucesiones y divorcios",
    description:
      "Te acompañamos con sensibilidad y precisión jurídica en decisiones familiares importantes.",
    items: ["Sucesiones", "Divorcios", "Acuerdos familiares"],
    detail:
      "Brindamos contención y claridad jurídica para transitar procesos familiares y sucesorios de la manera más ordenada posible.",
    solutions: ["Sucesiones testamentarias", "Sucesiones intestadas", "Divorcio de común acuerdo", "Divorcio unilateral", "Convenios reguladores", "División de bienes"],
  },
  {
    number: "05",
    slug: "comercial-empresarial",
    title: "Comercial · Empresarial",
    description:
      "Soluciones legales pensadas para dar respaldo y previsibilidad a tu actividad comercial.",
    items: ["Contratos", "Sociedades", "Asesoramiento integral"],
    detail:
      "Trabajamos junto a empresas y emprendimientos para anticipar riesgos, ordenar relaciones comerciales y acompañar su crecimiento.",
    solutions: ["Contratos comerciales", "Constitución de sociedades", "Conflictos societarios", "Asesoramiento corporativo", "Negociaciones comerciales", "Prevención de contingencias"],
  },
  {
    number: "06",
    slug: "otros-servicios",
    title: "Otros servicios",
    description:
      "No todos los conflictos tienen una etiqueta. Te escuchamos y te acompañamos en la búsqueda de una solución.",
    items: ["Análisis personalizado", "Estrategia legal", "Acompañamiento"],
    detail:
      "Si tu situación no encaja en una categoría tradicional, la estudiamos de manera integral para identificar el camino jurídico adecuado.",
    solutions: ["Evaluación inicial del caso", "Investigación jurídica", "Diseño de estrategia", "Mediación y negociación", "Derivación especializada", "Seguimiento personalizado"],
  },
];

type Service = (typeof services)[number];

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

function ServiceDetail({ service }: { service: Service }) {
  return (
    <div className="app-shell detail-page">
      <header className="site-header detail-site-header">
        <div className="header-main">
          <a className="lawyer-id" href="./#inicio" aria-label="Volver al inicio">
            <span>Urbano Vitolo</span>
            <small>Abogados · Mat. Prof. 12345</small>
          </a>
          <a className="header-logo" href="./#inicio" aria-label="Urbano Vitolo Estudio Jurídico">
            <img src={`${import.meta.env.BASE_URL}urbano-vitolo-logo-transparent.png`} alt="" />
          </a>
          <a className="header-cta" href="./#servicios">
            Volver
            <Arrow />
          </a>
        </div>
      </header>

      <main>
        <section className="detail-hero">
          <a className="detail-back" href="./#servicios">
            <span>←</span> Todos los servicios
          </a>
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">Área de práctica · {service.number}</p>
              <h1>{service.title}</h1>
            </div>
            <p>{service.detail}</p>
          </div>
          <div className="detail-outline-number" aria-hidden="true">
            {service.number}
          </div>
        </section>

        <section className="detail-content">
          <div className="detail-intro">
            <p className="section-label">Cómo podemos ayudarte</p>
            <h2>Una estrategia para tu situación.</h2>
            <p>
              Cada caso requiere una mirada particular. Primero escuchamos, luego analizamos la documentación y
              te presentamos alternativas concretas para avanzar.
            </p>
          </div>
          <div className="solution-list">
            {service.solutions.map((solution, index) => (
              <div className="solution-row" key={solution}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-process">
          <p className="section-label">Nuestro proceso</p>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Escuchamos</h3>
              <p>Nos contás tu situación y revisamos la información inicial.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Analizamos</h3>
              <p>Estudiamos las alternativas, los tiempos y los posibles escenarios.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Actuamos</h3>
              <p>Definimos juntos una estrategia y te acompañamos en cada paso.</p>
            </article>
          </div>
        </section>

        <section className="detail-cta">
          <p className="section-label">Primera consulta</p>
          <h2>Conversemos sobre tu caso.</h2>
          <p>Una orientación a tiempo puede hacer la diferencia.</p>
          <a
            className="button button-light"
            href={`https://wa.me/5491100000000?text=${encodeURIComponent(
              `Hola, quisiera hacer una consulta sobre ${service.title}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp
            <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <img src={`${import.meta.env.BASE_URL}urbano-vitolo-logo-transparent.png`} alt="Urbano Vitolo Estudio Jurídico" />
        <div>
          <p>Urbano Vitolo · Estudio Jurídico</p>
          <small>Asesoramiento legal con compromiso y cercanía.</small>
        </div>
        <a className="footer-back" href="./#servicios">Ver todos los servicios</a>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/5491100000000?text=${encodeURIComponent(
          `Hola, quisiera hacer una consulta sobre ${service.title}.`,
        )}`}
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

export default function App() {
  const selectedService = services.find(
    (service) => service.slug === new URLSearchParams(window.location.search).get("servicio"),
  );

  if (selectedService) {
    return <ServiceDetail service={selectedService} />;
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-main">
          <a className="lawyer-id" href="#inicio" aria-label="Ir al inicio">
            <span>Urbano Vitolo</span>
            <small>Abogados · Mat. Prof. 12345</small>
          </a>
          <a className="header-logo" href="#inicio" aria-label="Urbano Vitolo Estudio Jurídico">
            <img src={`${import.meta.env.BASE_URL}urbano-vitolo-logo-transparent.png`} alt="" />
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
                  href={`?servicio=${service.slug}`}
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
        <img src={`${import.meta.env.BASE_URL}urbano-vitolo-logo-transparent.png`} alt="Urbano Vitolo Estudio Jurídico" />
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

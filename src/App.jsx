import { useEffect, useRef, useState } from "react";
import DitherVeil from "./DitherVeil.jsx";

const assetUrl = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

const services = [
  {
    title: "Automação de processos",
    description:
      "Configuramos fluxos para cadastrar informações, classificar solicitações, atualizar registros, enviar documentos e avisar responsáveis. Regras e exceções são definidas com sua equipe; situações fora do padrão ficam para revisão humana.",
    icon: "icon-process.svg",
    featured: true,
  },
  {
    title: "Assistentes de IA internos",
    description:
      "Configuramos um assistente com acesso às fontes escolhidas pela empresa. A equipe pode fazer perguntas sobre procedimentos e documentos, localizar informações e preparar respostas para revisão.",
    icon: "icon-ai.svg",
  },
  {
    title: "Atendimento organizado",
    description:
      "Integramos WhatsApp ou e-mail a um fluxo que coleta os dados necessários, identifica o assunto e encaminha cada solicitação à fila ou pessoa responsável.",
    icon: "icon-whatsapp.svg",
  },
  {
    title: "Integração de sistemas",
    description:
      "Integramos CRM, formulários, planilhas e sistemas de gestão. Por exemplo: um novo cadastro pode atualizar o CRM, abrir uma tarefa para a equipe e iniciar uma sequência de acompanhamento.",
    icon: "icon-systems.svg",
  },
  {
    title: "Sistemas web sob medida",
    description:
      "Desenvolvemos sistemas web internos para registrar pedidos, acompanhar etapas, consultar dados e emitir relatórios. Definimos permissões conforme as funções da equipe.",
    icon: "icon-web.svg",
  },
];

const clientTiles = [
  { color: "yellow", image: "proof-rockfalls-brand.png" },
  { color: "navy", image: "proof-client-new.png" },
  { color: "blue", image: "proof-client-alt-new.png" },
  { color: "teal", image: "proof-client-new.png" },
  { color: "gray", image: "proof-client-new.png" },
  { color: "red", image: "proof-client-new.png" },
];

const methodologySteps = [
  {
    label: "Mapeamos",
    title: "Mapeamos as suas necessidades",
    description:
      "Conversamos com as pessoas envolvidas e documentamos as etapas, ferramentas, dados necessários e exceções.",
    image: "method-mapeamos-veil.png",
    imageAlt: "Servidores que representam o mapeamento da infraestrutura e dos processos",
  },
  {
    label: "Priorizamos",
    title: "Priorizamos o que importa",
    description:
      "Definimos o processo prioritário, o escopo inicial e os indicadores para avaliar a mudança.",
    image: "method-priorizamos-veil.png",
    imageAlt: "Ilustração de uma pessoa analisando informações para definir prioridades",
  },
  {
    label: "Implementamos",
    title: "Implementamos e validamos a integração do sistema",
    description:
      "Configuramos a automação, integração ou sistema e validamos o funcionamento com exemplos reais.",
    image: "method-implementamos-veil.png",
    imageAlt: "Equipamento de áudio representando a integração entre sistemas",
  },
  {
    label: "Acompanhamos",
    title: "Acompanhamos o seu projeto.",
    description:
      "Acompanhamos o uso, corrigimos problemas identificados e orientamos a equipe responsável pela operação.",
    image: "method-acompanhamos-veil.png",
    imageAlt: "Headset representando o acompanhamento contínuo do projeto",
  },
];

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__texture" src={assetUrl("hero-background.png")} alt="" />
      <div className="hero__inner">
        <header className="site-header">
          <a className="hero__brand" href="#inicio" aria-label="Clava Creative, início"><img src={assetUrl("hero-logo.svg")} alt="Clava" /></a>
        </header>
        <div className="hero__content" id="inicio">
          <div className="hero__intro">
            <img className="hero__mark" src={assetUrl("section-mark.svg")} alt="" />
            <div className="hero__copy">
              <h1 id="hero-title">
                <strong>Saia da passividade:</strong> as empresas não querem esperar o futuro, querem dominá-lo agora.
              </h1>
              <div className="hero__summary">
                <p>
                  A Clava é a aliada definitiva para líderes visionários, antecipando tendências e aplicando IA e
                  Automação garantindo que sua empresa esteja sempre à frente da concorrência.
                </p>
                <a className="button button--light" href="#contato">
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const marks = [
    ['partner-1.png'], ['partner-2-symbol.png', 'partner-2-word.png'],
    ['partner-3.png'], ['partner-4-symbol.png', 'partner-4-word.png'], ['partner-5.png'],
  ];
  return (
    <section className="partners" aria-label="Marcas que confiam na Clava">
      <div className="partners__track">
        {[0, 1, 2, 3].map(copy => (
          <div className="partners__group" aria-hidden={copy > 0 ? true : undefined} key={copy}>
            {marks.map((images, index) => (
              <div className={`partners__mark partners__mark--${index}`} key={index}>
                {images.map(image => <img src={assetUrl(image)} alt="" key={image} />)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Results() {
  const metrics = [
    { value: '87', unit: '%', description: 'Do tempo reduzido em processos repetitivos' },
    { value: '3', unit: 'x', description: 'Mais velocidade para tomada de decisões' },
    { value: '30', unit: '%', description: 'Menos custos operacionais' },
  ];
  return (
    <section className="section results" aria-labelledby="results-title">
      <div className="results__heading">
        <p className="eyebrow">O amanhã pertence aos que criam.</p>
        <h2 id="results-title"><span>Poucos têm acesso ao futuro.</span><br />E você pode ser um deles.</h2>
      </div>
      <div className="results__grid">
        {metrics.map(metric => (
          <article className="metric-card" key={metric.value}>
            <p className="metric-card__value">{metric.value}<span>{metric.unit}</span></p>
            <h3>{metric.description}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, titleId }) {
  return (
    <div className="section-heading">
      <div className="section-heading__title">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}

function Methodology() {
  const stackRef = useRef(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const stack = stackRef.current;
    const cards = [...stack.querySelectorAll('.method-card')];
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 760px)');
    const updateFit = () => setCompact(mobile.matches);
    updateFit();
    mobile.addEventListener('change', updateFit);
    let frame = 0;
    let inView = false;

    const update = () => {
      frame = 0;
      const enabled = !mobile.matches && !motion.matches && window.innerHeight > 600 &&
        cards.every(card => card.offsetHeight < window.innerHeight - 72);
      stack.classList.toggle('methodology__stack--animated', enabled);
      const stage = stack.querySelector('.methodology__stage');
      const viewport = window.innerHeight;
      const hold = Math.min(360, Math.max(180, viewport * .35));
      const transition = Math.max(400, viewport * .8);
      const stageHeight = Math.max(...cards.map(card => card.offsetHeight)) + 36;
      const travel = cards.length * hold + (cards.length - 1) * transition;
      stack.style.height = enabled ? `${stageHeight + travel}px` : '';
      stage.style.height = enabled ? `${stageHeight}px` : '';
      const scroll = Math.max(0, 24 - stack.getBoundingClientRect().top);
      const arrival = index => index === 0 ? 1 : Math.min(1, Math.max(0,
        (scroll - ((index - 1) * (hold + transition) + hold)) / transition));
      cards.forEach((card, index) => {
        const incoming = enabled ? arrival(index) : 1;
        const eased = incoming * incoming * (3 - 2 * incoming);
        card.style.transform = enabled && index > 0
          ? `translateY(${(viewport + 64) * (1 - eased)}px)` : '';
        const progress = enabled && index < cards.length - 1 ? arrival(index + 1) : 0;
        const visual = card.querySelector('.method-card__visual');
        visual.style.transform = progress ? `translateY(${-18 * progress}px) scale(${1 - .06 * progress})` : '';
        visual.style.opacity = String(1 - .45 * progress);
      });
    };
    const schedule = () => {
      if (!frame && inView) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) schedule();
    }, { rootMargin: '200px 0px' });
    observer.observe(stack);
    const resize = new ResizeObserver(() => {
      // Resize must update the layout even when the section is offscreen.
      if (!frame) frame = requestAnimationFrame(update);
    });
    cards.forEach(card => resize.observe(card));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', update);
      mobile.removeEventListener('change', updateFit);
    };
  }, []);

  return (
    <section className="section methodology" id="metodologia" aria-labelledby="method-title">
      <div className="section-heading methodology__heading">
        <div className="section-heading__title">
          <p className="eyebrow">Entenda a nossa metodologia</p>
          <h2 id="method-title">Um sistema de precisão para líderes que não podem perder tempo.</h2>
        </div>
        <p className="section-heading__description">
          A Clava existe para transformar essa urgência em impacto real. Criamos sistemas de precisão que unem IA,
          automação e estratégia, garantindo que cada decisão seja certeira e cada passo leve você mais rápido ao futuro.
        </p>
      </div>
      <div className="methodology__stack" ref={stackRef}>
        <div className="methodology__stage">
        {methodologySteps.map((step, index) => (
          <article className="method-card" key={step.label} style={{ '--stack-index': index }} aria-labelledby={`method-step-${index}`}>
            <div className="method-card__visual">
              <DitherVeil
                src={assetUrl(step.image)}
                alt={step.imageAlt}
                className="method-card__dither"
                fit={compact ? "contain" : "cover"}
                pattern="floyd"
                pixelSize={2}
                levels={3}
                inkColor="#120f17"
                paperColor="#f4f1ea"
                contrast={1.3}
                brightness={-0.02}
                revealRadius={120}
                softness={0.25}
                linger={2.2}
                clickBurst={false}
              />
            </div>
            <div className="method-card__copy">
              <h3 id={`method-step-${index}`}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon, featured = false }) {
  return (
    <article className={featured ? "service-card service-card--featured" : "service-card"}>
      <img src={assetUrl(icon)} alt="" className="service-card__icon" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function Services() {
  const [featuredService, ...otherServices] = services;
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="section-heading services__heading">
        <div className="section-heading__title">
          <p className="eyebrow">O que implementamos</p>
          <h2 id="services-title">Conheça o que podemos fazer pelo seu negócio</h2>
        </div>
        <p className="section-heading__description">
          Projetos para diminuir digitação repetida, organizar solicitações, conectar dados e ajudar a equipe a encontrar
          informações. O escopo é definido a partir do processo atual da empresa.
        </p>
      </div>
      <div className="services-grid">
        <ServiceCard {...featuredService} />
        <div className="services-grid__secondary">
          {otherServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const [selectedCard, setSelectedCard] = useState("yellow");

  function cardKeyboardHandler(id) {
    return (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setSelectedCard(id);
      }
    };
  }

  return (
    <section className="section proof" aria-labelledby="proof-title">
      <div className="proof__heading">
        <h2 id="proof-title">Quem conhece a Clava confia no que entregamos.</h2>
      </div>
      <div className="proof-grid" id="proof-cases" role="group" aria-label="Depoimento e marcas atendidas">
        {clientTiles.map(({ color, image }, index) => {
          const expanded = selectedCard === color;

          return (
            <article
              className={"proof-card case-card case-card--" + color + (expanded ? " is-expanded" : "")}
              key={color}
              role="button"
              tabIndex={0}
              aria-label={color === "yellow" ? "Depoimento de Rockfalls Tap House" : "Marca atendida " + index}
              aria-pressed={expanded}
              aria-expanded={expanded}
              onClick={() => setSelectedCard(color)}
              onKeyDown={cardKeyboardHandler(color)}
            >
              <div className="case-card__identity">
                <img className="case-card__brand" src={assetUrl(image)} alt="" />
                <div className="case-card__client" aria-hidden={!expanded}>
                  <span>Rockfalls Tap House</span>
                  <span>Hamburgueria em Foz do Iguaçu</span>
                </div>
              </div>
              <div className="case-card__details" aria-hidden={!expanded}>
                <div className="case-card__quote">
                  <blockquote>
                    A Clava foi importante para criar meios inovadores de capturar leads e integrá-los ao nosso sistema, sem dúvidas,
                    foi um divisor de águas para trazer novos clientes para meu estabelecimento.
                  </blockquote>
                  <div className="case-card__person">
                    <img src={assetUrl("proof-testimonial-avatar.jpg")} alt="" />
                    <p>Beto Cunha, CEO do Grupo Beto Carnes</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="contact-card">
        <img className="contact-card__background" src={assetUrl("contact-background.png")} alt="" />
        <div className="contact-card__inner">
          <div className="contact-card__title">
            <p className="eyebrow">Contate-nos</p>
            <h2>Vamos avaliar um processo da sua empresa?</h2>
          </div>
          <div className="contact-card__action">
            <p>
              Fale sobre uma tarefa repetitiva, um fluxo com retrabalho ou sistemas que não trocam dados. A CLAVA responde
              para entender o processo e avaliar uma solução possível.
            </p>
            <span className="button button--light">Entre em contato</span>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <div className="footer__signature">
          <img src={assetUrl("footer-logo-small.svg")} alt="Clava" />
          <span>Todos os direitos reservados ©</span>
        </div>
        <img className="footer__moon" src={assetUrl("icon-moon.svg")} alt="" />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Partners />
      <div className="page-content">
        <Methodology />
        <Services />
        <Results />
        <Proof />
        <Footer />
      </div>
    </main>
  );
}

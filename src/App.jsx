import { useState } from "react";
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
  { color: "navy", image: "proof-client-mark.png" },
  { color: "blue", image: "proof-client-mark-alt.png" },
  { color: "teal", image: "proof-client-mark.png" },
  { color: "gray", image: "proof-client-mark.png" },
  { color: "red", image: "proof-client-mark.png" },
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

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Clava Creative, início">
      <img className="brand__symbol" src={assetUrl("brand-symbol.svg")} alt="" />
      <span className="brand__word">
        <img className="brand__wordmark" src={assetUrl("brand-word.svg")} alt="Clava" />
        <img className="brand__dot" src={assetUrl("brand-dot.svg")} alt="" />
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__texture" src={assetUrl("hero-background.png")} alt="" />
      <div className="hero__inner">
        <header className="site-header">
          <Brand />
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
          <p className="hero__title" aria-label="Clava Creative">
            Clava Creative
          </p>
        </div>
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
  const [activeStep, setActiveStep] = useState(0);
  const step = methodologySteps[activeStep];

  return (
    <section className="section methodology" aria-labelledby="method-title">
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
      <div className="methodology__interactive">
        <div className="methodology__steps" role="group" aria-label="Etapas da metodologia">
          {methodologySteps.map((item, index) => (
            <button
              type="button"
              className={index === activeStep ? "step step--current" : "step"}
              key={item.label}
              aria-pressed={index === activeStep}
              aria-controls="methodology-panel"
              onClick={() => setActiveStep(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <article className="method-card" id="methodology-panel" aria-live="polite">
          <div className="method-card__copy">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <div className="method-card__visual">
            <DitherVeil
              key={step.image}
              src={assetUrl(step.image)}
              alt={step.imageAlt}
              className="method-card__dither"
              fit="contain"
              pattern="floyd"
              pixelSize={2}
              levels={3}
              inkColor="#120f17"
              paperColor="#f4f1ea"
              contrast={1.3}
              brightness={-0.02}
              revealRadius={90}
              softness={0.25}
              linger={2.2}
              clickBurst={false}
            />
          </div>
        </article>
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
        <h2 id="proof-title">Veja o que falam sobre as soluções da Clava Creative</h2>
        <a className="proof__link" href="#proof-cases">Conheça os cases</a>
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
              <img className="case-card__brand" src={assetUrl(image)} alt="" />
              <div className="case-card__details" aria-hidden={!expanded}>
                <div className="case-card__client">
                  <span>Rockfalls Tap House</span>
                  <span>Hamburgueria em Foz do Iguaçu</span>
                </div>
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
      <div className="footer__brand">
        <img className="footer__wordmark" src={assetUrl("footer-wordmark.svg")} alt="Clava" />
        <img className="footer__dot" src={assetUrl("footer-dot.svg")} alt="" />
      </div>
      <div className="footer__legal">
        <span>Clava Creative™</span>
        <span>Todos os direitos reservados, 2026.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <div className="page-content">
        <Methodology />
        <Services />
        <Proof />
        <Footer />
      </div>
    </main>
  );
}

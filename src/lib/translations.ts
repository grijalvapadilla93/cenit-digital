export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      process: "Process",
      pricing: "Pricing",
      consultation: "Free Call",
    },
    hero: {
      badge: "DIGITAL AGENCY · GUATEMALA",
      headlinePrefix: "Your business is losing",
      headlineGradient: "clients and time every day.",
      subtitle:
        "While you sleep, your competitors respond faster. We build websites and AI systems that work 24/7 so you stop losing money to manual processes.",
      ctaPrimary: "Get a free diagnostic →",
      ctaSecondary: "See our work",
      trust1: "Site ready in 7 days",
      trust2: "From Q2,500",
      trust3: "WhatsApp response in <1hr",
      trust4: "No technical knowledge needed",
    },
    problem: {
      badge: "THE PROBLEM",
      title: "This is what a business without automation looks like",
      cards: [
        {
          stat: "30+",
          label: "Daily unanswered messages",
          desc: "WhatsApp, Instagram, Facebook — all asking for a response and the owner can't keep up.",
        },
        {
          stat: "1-3h",
          label: "Average response delay",
          desc: "By the time you reply, the customer already chose your competitor.",
        },
        {
          stat: "40%",
          label: "Leads lost",
          desc: "Almost half of reservations and orders are lost due to lack of response.",
        },
      ],
    },
    services: {
      badge: "WHAT WE DO",
      title: "Three ways we make your business earn more",
      items: {
        web: {
          tag: "WEBSITES",
          title: "A website that sells while you sleep",
          description:
            "Not just a pretty page. A site designed to turn visitors into WhatsApp messages, calls, and reservations. Fast, mobile-first, and built for Guatemala.",
          features: ["WhatsApp button always visible", "Google-friendly from day one", "Loads in under 2 seconds"],
        },
        ai: {
          tag: "CHATBOTS & AI",
          title: "A 24/7 assistant that never gets tired",
          description:
            "Answers WhatsApp and Instagram instantly. Books appointments, answers FAQs, and qualifies leads — all without you touching your phone.",
          features: ["Responds in seconds, not hours", "Books into your calendar", "Speaks Spanish naturally"],
        },
        automation: {
          tag: "AUTOMATIONS",
          title: "Systems that run your business for you",
          description:
            "Orders, inventory, follow-ups, reminders — all on autopilot. You focus on growing; the system handles the repetitive work.",
          features: ["Auto-replies and follow-ups", "Connected to your existing tools", "Monthly performance reports"],
        },
        dashboards: {
          tag: "DASHBOARDS",
          title: "See your numbers without opening 5 apps",
          description:
            "Sales, reservations, new leads — all in one clean screen on your phone. Stop guessing and start deciding with real data.",
          features: ["Real-time metrics", "Mobile-friendly view", "Automatic daily/weekly summaries"],
        },
        agents: {
          tag: "DIGITAL WORKERS",
          title: "Hire an employee that never sleeps",
          description:
            "An AI agent trained specifically for your business. Answers WhatsApp, updates spreadsheets, sends reports, qualifies leads and executes complex tasks — all automatic and customized for you.",
          features: ["Works 24/7 without breaks", "Trained on your business data", "Does the work of 2-3 people"],
        },
        custom: {
          tag: "CUSTOM",
          title: "Need something that doesn't exist yet?",
          description:
            "Custom apps, internal tools, integrations, or anything weird your business needs. If it involves code, we can build it.",
          features: ["Built specifically for your workflow", "Integrates with your existing stack", "Scales as you grow"],
        },
      },
    },
    process: {
      badge: "HOW IT WORKS · 4 STEPS",
      title: "From zero to selling in under 2 weeks",
      steps: [
        {
          number: "01",
          title: "Free Diagnostic",
          description: "30-min call. We identify where you're losing money and what to fix first.",
        },
        {
          number: "02",
          title: "Proposal",
          description: "Exact scope, exact price, exact timeline. No surprises.",
        },
        {
          number: "03",
          title: "Build",
          description: "7-14 days. You see progress every 2-3 days. We adjust as we go.",
        },
        {
          number: "04",
          title: "Launch & Support",
          description: "We launch, train you, and stay available. 3 months support included.",
        },
      ],
    },
    portfolio: {
      badge: "PORTFOLIO",
      title: "Real projects for real businesses",
      tabs: {
        websites: "Websites",
        chatbots: "Chatbots & AI",
        automations: "Automations",
        dashboards: "Dashboards",
      },
      cta: "Want something like this? →",
    },
    pricing: {
      badge: "PRICING",
      title: "Transparent prices. No hidden fees.",
      subtitle: "Everything includes hosting, domain, and 3 months of support.",
      tiers: [
        {
          name: "Starter",
          price: "Q2,500",
          desc: "Perfect for new businesses needing a professional presence.",
          features: [
            "1-page landing site",
            "WhatsApp integration",
            "Mobile optimized",
            "Google indexing",
            "1 round of revisions",
          ],
          cta: "Start with this →",
          popular: false,
        },
        {
          name: "Business",
          price: "Q5,500",
          desc: "For businesses ready to convert visitors into customers.",
          features: [
            "Multi-page site (up to 5)",
            "WhatsApp + Instagram chatbot",
            "Reservations / orders system",
            "Admin dashboard",
            "3 rounds of revisions",
            "Priority support",
          ],
          cta: "Most popular →",
          popular: true,
        },
        {
          name: "Growth",
          price: "Q12,000+",
          desc: "Full automation stack for businesses scaling fast.",
          features: [
            "Everything in Business",
            "Custom AI agent",
            "Full workflow automation",
            "CRM + analytics dashboard",
            "Unlimited revisions",
            "Lifetime support",
          ],
          cta: "Let's talk →",
          popular: false,
        },
      ],
      note: "All prices one-time. Monthly maintenance available from Q350/month after the included 3 months.",
    },
    stats: {
      items: [
        { value: "7-14", label: "Days to launch" },
        { value: "100%", label: "Guatemalan businesses" },
        { value: "Q2,500", label: "Starting price" },
        { value: "24/7", label: "Support available" },
      ],
    },
    testimonials: {
      headline: "Businesses that stopped losing clients",
      subtitle: "We don't do one-off projects. We build systems that keep working.",
      trusted: "Real clients",
      items: [
        {
          company: "AL CARBÓN",
          quote: "\"Before, we lost reservations daily because nobody answered the phone. Now the chatbot handles it 24/7 and we just check the calendar in the morning.\"",
          name: "Owner",
          role: "Restaurant · Guatemala",
        },
        {
          company: "YEGUADA 10",
          quote: "\"Our website went from 'we should have one' to 'we get bookings through it every week.' The investment paid for itself in a month.\"",
          name: "Management",
          role: "Restaurant & Equestrian · Guatemala",
        },
        {
          company: "ARTE REQUENA",
          quote: "\"Students find the academy through Google now. Before, we relied entirely on word of mouth.\"",
          name: "Alejandro Requena",
          role: "Artist & Academy · Guatemala",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "What everyone asks",
      items: [
        {
          question: "How much does a website cost?",
          answer:
            "A professional landing page starts at Q2,500. A full site with reservations, menu, and WhatsApp integration runs Q5,000-15,000 depending on complexity. We give you an exact price after the free diagnostic call.",
        },
        {
          question: "How fast can you deliver?",
          answer:
            "A landing page: 7 days. A full business site: 14-21 days. You see a working demo in 72 hours so you can give feedback early.",
        },
        {
          question: "What if I need changes after launch?",
          answer:
            "First 3 months of changes and support are included. After that, we offer maintenance plans starting at Q350/month with unlimited small updates.",
        },
        {
          question: "Do I need to know technology?",
          answer:
            "Not at all. Everything is designed for you to manage from your phone. If you can use WhatsApp, you can use any system we build.",
        },
        {
          question: "Do you work with businesses outside the capital?",
          answer:
            "Yes. We work 100% remote with businesses anywhere in Guatemala. The diagnostic call is via video, and the process is just as fast regardless of location.",
        },
      ],
    },
    contact: {
      badge: "LET'S TALK",
      title: "Free 20-minute diagnostic",
      subtitle:
        "No commitment. We'll tell you if we can help and exactly what it would cost.",
      cta: "Message us on WhatsApp →",
      ctaNote: "We reply in under 1 hour during business hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        business: "Business",
        businessPlaceholder: "Restaurant, store, service...",
        phone: "WhatsApp",
        phonePlaceholder: "+502 1234 5678",
        submit: "Send message",
      },
    },
    footer: {
      copyright: "© 2025 Cenit Digital. Built in Guatemala for Guatemalan businesses.",
      privacy: "Privacy",
      terms: "Terms",
    },
    casos: {
      badge: "PORTFOLIO",
      headlinePrefix: "What we've",
      headlineGradient: "built",
      subtitle: "Real projects. Real businesses. Real results.",
      cta: {
        headlinePrefix: "Want something",
        headlineGradient: "like this?",
        subtitle: "We work with businesses that want to grow without getting buried in tech.",
        primary: "Let's talk →",
        secondary: "See how we work",
      },
    },
  },

  es: {
    nav: {
      home: "Inicio",
      portfolio: "Portafolio",
      process: "Proceso",
      pricing: "Precios",
      consultation: "Llamada gratis",
    },
    hero: {
      badge: "AGENCIA DIGITAL · GUATEMALA",
      headlinePrefix: "Tu negocio está perdiendo",
      headlineGradient: "clientes y tiempo todos los días.",
      subtitle:
        "Mientras dormís, tu competencia responde más rápido. Construimos páginas web y sistemas con IA que trabajan 24/7 para que dejés de perder plata con procesos manuales.",
      ctaPrimary: "Diagnóstico gratis →",
      ctaSecondary: "Ver nuestro trabajo",
      trust1: "Sitio listo en 7 días",
      trust2: "Desde Q2,500",
      trust3: "Respuesta por WhatsApp <1hr",
      trust4: "Sin saber de tecnología",
    },
    problem: {
      badge: "EL PROBLEMA",
      title: "Así se ve un negocio sin automatización",
      cards: [
        {
          stat: "30+",
          label: "Mensajes sin responder al día",
          desc: "WhatsApp, Instagram, Facebook — todos piden respuesta y el dueño no da abasto.",
        },
        {
          stat: "1-3h",
          label: "Demora promedio de respuesta",
          desc: "Para cuando contestás, el cliente ya eligió a tu competencia.",
        },
        {
          stat: "40%",
          label: "Leads perdidos",
          desc: "Casi la mitad de reservaciones y pedidos se pierden por falta de respuesta.",
        },
      ],
    },
    services: {
      badge: "QUÉ HACEMOS",
      title: "Formas de hacer que tu negocio gane más",
      items: {
        web: {
          tag: "PÁGINAS WEB",
          title: "Una web que vende mientras dormís",
          description:
            "No es solo una página bonita. Es un sitio diseñado para convertir visitantes en mensajes de WhatsApp, llamadas y reservaciones. Rápido, mobile-first y hecho para Guatemala.",
          features: ["Botón de WhatsApp siempre visible", "Amigable con Google desde el día 1", "Carga en menos de 2 segundos"],
        },
        ai: {
          tag: "CHATBOTS E IA",
          title: "Un asistente 24/7 que nunca se cansa",
          description:
            "Responde WhatsApp e Instagram al instante. Agenda citas, responde preguntas frecuentes y califica leads — todo sin que toques el celular.",
          features: ["Responde en segundos, no en horas", "Agenda en tu calendario", "Habla español natural"],
        },
        automation: {
          tag: "AUTOMATIZACIONES",
          title: "Sistemas que manejan tu negocio por vos",
          description:
            "Pedidos, inventario, seguimientos, recordatorios — todo en automático. Vos te enfocás en crecer; el sistema se encarga de lo repetitivo.",
          features: ["Respuestas y seguimientos automáticos", "Conectado con tus herramientas actuales", "Reportes mensuales de rendimiento"],
        },
        dashboards: {
          tag: "DASHBOARDS",
          title: "Tus números sin abrir 5 apps",
          description:
            "Ventas, reservas, clientes nuevos — todo en una pantalla limpia desde tu celular. Dejá de adivinar y empezá a decidir con datos reales.",
          features: ["Métricas en tiempo real", "Vista optimizada para celular", "Resúmenes diarios/semanales automáticos"],
        },
        agents: {
          tag: "EMPLEADOS DIGITALES",
          title: "Contratá a un empleado que no duerme",
          description:
            "Un agente de IA entrenado específicamente para tu negocio. Responde WhatsApp, actualiza hojas de cálculo, envía reportes, clasifica leads y ejecuta tareas complejas — todo automático y personalizado para vos.",
          features: ["Trabaja 24/7 sin descanso", "Se entrena con tu información", "Hace el trabajo de 2-3 personas"],
        },
        custom: {
          tag: "A MEDIDA",
          title: "¿Necesitás algo que no existe todavía?",
          description:
            "Apps personalizadas, herramientas internas, integraciones o cualquier cosa rara que tu negocio necesite. Si involucra código, lo construimos.",
          features: ["Diseñado específicamente para tu flujo", "Se integra con lo que ya usás", "Escala a medida que crecés"],
        },
      },
    },
    process: {
      badge: "CÓMO TRABAJAMOS · 4 PASOS",
      title: "De cero a vendiendo en menos de 2 semanas",
      steps: [
        {
          number: "01",
          title: "Diagnóstico gratis",
          description: "Llamada de 30 min. Identificamos dónde estás perdiendo plata y qué arreglar primero.",
        },
        {
          number: "02",
          title: "Propuesta",
          description: "Alcance exacto, precio exacto, tiempo exacto. Sin sorpresas.",
        },
        {
          number: "03",
          title: "Construcción",
          description: "7-14 días. Ves progreso cada 2-3 días. Ajustamos sobre la marcha.",
        },
        {
          number: "04",
          title: "Lanzamiento y soporte",
          description: "Lanzamos, te entrenamos y seguimos disponibles. 3 meses de soporte incluidos.",
        },
      ],
    },
    portfolio: {
      badge: "PORTAFOLIO",
      title: "Proyectos reales para negocios reales",
      tabs: {
        websites: "Páginas Web",
        chatbots: "Chatbots e IA",
        automations: "Automatizaciones",
        dashboards: "Dashboards",
      },
      cta: "¿Querés algo así? →",
    },
    pricing: {
      badge: "PRECIOS",
      title: "Precios transparentes. Sin letra chica.",
      subtitle: "Todo incluye hosting, dominio y 3 meses de soporte.",
      tiers: [
        {
          name: "Starter",
          price: "Q2,500",
          desc: "Perfecto para negocios nuevos que necesitan presencia profesional.",
          features: [
            "Sitio landing de 1 página",
            "Integración con WhatsApp",
            "Optimizado para celular",
            "Indexado en Google",
            "1 ronda de revisiones",
          ],
          cta: "Empezar con este →",
          popular: false,
        },
        {
          name: "Business",
          price: "Q5,500",
          desc: "Para negocios listos para convertir visitas en clientes.",
          features: [
            "Sitio multi-página (hasta 5)",
            "Chatbot WhatsApp + Instagram",
            "Sistema de reservas / pedidos",
            "Panel de administración",
            "3 rondas de revisiones",
            "Soporte prioritario",
          ],
          cta: "El más popular →",
          popular: true,
        },
        {
          name: "Growth",
          price: "Q12,000+",
          desc: "Stack completo de automatización para negocios que escalan rápido.",
          features: [
            "Todo lo de Business",
            "Agente de IA personalizado",
            "Automatización de flujos completa",
            "CRM + dashboard de analytics",
            "Revisiones ilimitadas",
            "Soporte de por vida",
          ],
          cta: "Hablemos →",
          popular: false,
        },
      ],
      note: "Todos los precios son únicos (one-time). Mantenimiento mensual disponible desde Q350/mes después de los 3 meses incluidos.",
    },
    stats: {
      items: [
        { value: "7-14", label: "Días para lanzar" },
        { value: "100%", label: "Negocios guatemaltecos" },
        { value: "Q2,500", label: "Precio de entrada" },
        { value: "24/7", label: "Soporte disponible" },
      ],
    },
    testimonials: {
      headline: "Negocios que dejaron de perder clientes",
      subtitle: "No hacemos proyectos de una vez. Construimos sistemas que siguen trabajando.",
      trusted: "Clientes reales",
      items: [
        {
          company: "AL CARBÓN",
          quote: "\"Antes perdíamos reservaciones todos los días porque nadie contestaba el teléfono. Ahora el chatbot las maneja 24/7 y solo revisamos el calendario en la mañana.\"",
          name: "Dueño",
          role: "Restaurante · Guatemala",
        },
        {
          company: "YEGUADA 10",
          quote: "\"Nuestra web pasó de 'deberíamos tener una' a 'recibimos reservas por ahí todas las semanas'. La inversión se pagó sola en un mes.\"",
          name: "Administración",
          role: "Restaurante & Ecuestre · Guatemala",
        },
        {
          company: "ARTE REQUENA",
          quote: "\"Los estudiantes encuentran la academia por Google ahora. Antes dependíamos 100% del boca a boca.\"",
          name: "Alejandro Requena",
          role: "Artista & Academia · Guatemala",
        },
      ],
    },
    faq: {
      badge: "PREGUNTAS FRECUENTES",
      title: "Lo que siempre preguntan",
      items: [
        {
          question: "¿Cuánto cuesta una página web?",
          answer:
            "Una landing page profesional empieza en Q2,500. Un sitio completo con reservas, menú y WhatsApp integrado ronda Q5,000-15,000 según complejidad. Te damos precio exacto después de la llamada de diagnóstico gratis.",
        },
        {
          question: "¿En cuánto tiempo me entregan?",
          answer:
            "Landing page: 7 días. Sitio completo: 14-21 días. Ves una demo funcional en 72 horas para que des feedback temprano.",
        },
        {
          question: "¿Qué pasa si quiero hacer cambios después?",
          answer:
            "Los primeros 3 meses de cambios y soporte están incluidos. Después ofrecemos planes de mantenimiento desde Q350/mes con actualizaciones ilimitadas chicas.",
        },
        {
          question: "¿Necesito saber de tecnología?",
          answer:
            "Para nada. Todo está diseñado para que lo manejés desde tu celular. Si sabés usar WhatsApp, podés usar cualquier sistema que construyamos.",
        },
        {
          question: "¿Trabajan con negocios en otras ciudades?",
          answer:
            "Sí. Trabajamos 100% remoto con negocios en toda Guatemala. La llamada de diagnóstico es por videollamada y el proceso es igual de ágil sin importar dónde estés.",
        },
      ],
    },
    contact: {
      badge: "HABLEMOS",
      title: "Diagnóstico gratis de 20 minutos",
      subtitle:
        "Sin compromiso. Te decimos si podemos ayudarte y exacto cuánto costaría.",
      cta: "Escribinos por WhatsApp →",
      ctaNote: "Respondemos en menos de 1 hora en horario laboral.",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        business: "Negocio",
        businessPlaceholder: "Restaurante, tienda, servicio...",
        phone: "WhatsApp",
        phonePlaceholder: "+502 1234 5678",
        submit: "Enviar mensaje",
      },
    },
    footer: {
      copyright: "© 2025 Cenit Digital. Hecho en Guatemala para negocios guatemaltecos.",
      privacy: "Privacidad",
      terms: "Términos",
    },
    casos: {
      badge: "PORTAFOLIO",
      headlinePrefix: "Lo que hemos",
      headlineGradient: "construido",
      subtitle: "Proyectos reales. Negocios reales. Resultados reales.",
      cta: {
        headlinePrefix: "¿Querés algo",
        headlineGradient: "así para tu negocio?",
        subtitle: "Trabajamos con negocios que quieren crecer sin complicarse con tecnología.",
        primary: "Hablemos →",
        secondary: "Ver cómo trabajamos",
      },
    },
  },
} as const;

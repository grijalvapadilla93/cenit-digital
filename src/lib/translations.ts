export type Lang = "en" | "es";

export const translations = {
  en: {
    // Navbar
    nav: {
      caseStudies: "Case Studies",
      consultation: "Consultation",
    },
    // Hero
    hero: {
      badge: "Bespoke Digital Engineering",
      headlinePrefix: "Digital Solutions",
      headlineGradient: "that Power",
      headlineSuffix: "Your Business",
      subtitle:
        "We automate, build, and optimize your company's technology so you can focus on what matters: growing your business.",
      ctaPrimary: "Request Custom Build",
      ctaSecondary: "View Case Studies",
      cards: {
        customLogic: "Custom Logic",
        uniqueFlows: "Unique Flows",
        nicheInsights: "Niche Insights",
        privateTech: "Private Tech",
      },
    },
    // Services
    services: {
      badge: "Tailored Capabilities",
      title: "Bespoke Architectural Services",
      items: {
        automations: {
          label: "Custom Engine",
          title: "Proprietary Automations",
          description:
            "We develop unique autonomous scripts that map perfectly to your specific internal protocols, rather than forcing your team into rigid third-party workflows.",
        },
        dashboards: {
          label: "Niche UI",
          title: "Exclusive Dashboards",
          description:
            "Intelligence interfaces designed around your exact KPIs, providing clarity that generic tools simply can't offer.",
        },
        crm: {
          label: "Private Hub",
          title: "Tailored CRM Systems",
          description:
            "Built from the ground up for your specific sales cycle, ensuring every data point captured is relevant to your bottom line.",
        },
        web: {
          title: "Custom Web Infrastructure",
          description:
            "High-performance architectures engineered for your specific security needs and traffic patterns.",
        },
        ai: {
          title: "Specialized AI Agents",
          description:
            "AI callers and chatbots trained on your unique industry knowledge and brand voice.",
        },
      },
    },
    // Process
    process: {
      badge: "Our Workflow",
      title: "Custom Execution Framework",
      steps: [
        {
          number: "01",
          title: "Assessment",
          description: "We analyze your business, identify manual processes, and pinpoint where technology can save you time and money.",
        },
        {
          number: "02",
          title: "Proposal",
          description: "We design a tailored technical plan: automation flows, wireframes, and a clear tech stack from day one.",
        },
        {
          number: "03",
          title: "Development",
          description: "We build your solution with constant check-ins. You see progress in real time and we adjust together.",
        },
        {
          number: "04",
          title: "Launch & Support",
          description: "We deploy everything to production, train your team, and handle ongoing maintenance.",
        },
      ],
    },
    // Stats
    stats: {
      items: [
        { value: "98%", label: "Client Satisfaction" },
        { value: "250+", label: "Projects Delivered" },
        { value: "15k", label: "Hours Saved for Clients" },
        { value: "12ms", label: "Avg. Response Time" },
      ],
    },
    // Testimonials
    testimonials: {
      headline: "Our customers have no margin for error.",
      subtitle:
        "In high-stakes industries, precision is not a preference—it's a requirement. We partner with leaders who demand absolute reliability and long-term ecosystem stability.",
      trusted: "Trusted by industry leaders",
      items: [
        {
          company: "BAE SYSTEMS",
          quote:
            '"Delivering cost effective and innovative solutions across our manufacturing operations is critical to maintaining a leading position in the UK combat air sector. Working alongside Cenit Digital helps us to ensure we\'re able to maintain that edge for our customers."',
          name: "PAUL",
          role: "HEAD OF AIRFRAME TECHNOLOGY @BAE SYSTEMS",
        },
        {
          company: "NIAR",
          quote:
            '"The specialized dashboards provided by Cenit Digital allowed us to synchronize complex research data across multiple departments with sub-millisecond accuracy. Their engineering standards are unparalleled."',
          name: "DR. SARAH CHEN",
          role: "DIRECTOR OF DIGITAL TWIN OPERATIONS @NIAR",
        },
        {
          company: "PALL CORPORATION",
          quote:
            '"We required a custom CRM system that could handle the intricate logic of global filtration supply chains. What Cenit Digital delivered wasn\'t just software; it was a competitive advantage."',
          name: "MARK R.",
          role: "SENIOR VP OF LOGISTICS @PALL CORPORATION",
        },
      ],
    },
    // FAQ
    faq: {
      badge: "Common Inquiries",
      title: "FAQ",
      items: [
        {
          question: "How long does a typical project take?",
          answer:
            "It depends on complexity. A landing page or simple automation can be ready in 2-3 weeks. A custom system with dashboards and chatbots takes 4-8 weeks. We always give you a clear timeline from the start.",
        },
        {
          question: "What happens after the project is done?",
          answer:
            "We don't disappear. We offer ongoing maintenance: updates, monitoring, and support whenever you need it. This is handled with a fixed monthly fee so your system always runs at 100%.",
        },
        {
          question: "Can you integrate with tools I already use?",
          answer:
            "Absolutely. We integrate with CRMs, payment gateways, Google Sheets, WhatsApp, email, and pretty much any tool that has an API. If you already use it, we connect it.",
        },
        {
          question: "Do I need to be tech-savvy to use what you build?",
          answer:
            "Not at all. We design everything to be easy to use. Automations run on their own, dashboards are visual and intuitive, and chatbots are configured so you don't have to touch anything technical.",
        },
      ],
    },
    // Contact
    contact: {
      title: "Start Your Custom Build",
      subtitle:
        "Share your vision with us. We specialize in engineering bespoke solutions and maintaining them for life through our comprehensive post-delivery support framework.",
      benefits: {
        roadmap: "Tailored Technical Roadmap",
        security: "Continuous Security & Updates",
        stability: "Monthly Performance Stability",
      },
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "John Doe",
        email: "Work Email",
        emailPlaceholder: "john@company.com",
        company: "Company Name",
        companyPlaceholder: "Enter company name",
        details: "Project Details",
        detailsPlaceholder: "Describe your unique infrastructure needs...",
        submit: "Submit Request",
        note: "Note: All builds include mandatory monthly maintenance for security and long-term stability.",
      },
    },
    // Footer
    footer: {
      copyright: "© 2025 Cenit Digital. Digital solutions that transform your business.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      status: "System Status: Optimal",
    },
    // Case Studies Page
    casos: {
      badge: "Digital Solutions Architecture",
      headlinePrefix: "Real Impact:",
      headlineGradient: "Our Case Studies",
      subtitle: "Digital solutions designed to scale your business and deliver measurable results.",
      filters: {
        all: "All Projects",
        automation: "Automation",
        dashboards: "Dashboards",
        ai: "AI & Chatbots",
        web: "Custom Web",
      },
      viewCaseStudy: "View Full Case Study",
      explore: "Explore Solution",
      cta: {
        headlinePrefix: "Ready to build your",
        headlineGradient: "next project?",
        subtitle: "Join the businesses already using custom digital solutions to dominate their markets.",
        primary: "Work With Us",
        secondary: "Our Methodology",
      },
      projects: [
        {
          tag: "Automation",
          title: "El Fogón Restaurant",
          metric: "-40% Errors",
          description: "Full order automation with n8n connecting the waiter app, kitchen, and billing. Real-time sales dashboard for the owner.",
          icons: ["restaurant", "auto_awesome", "dashboard"],
        },
        {
          tag: "AI & Chatbots",
          title: "Sonrisas Dental Clinic",
          metric: "80% Calls",
          description: "AI receptionist that schedules appointments, answers FAQs, and routes emergencies. Direct integration with the clinic's scheduling system.",
          icons: ["smart_toy", "calendar_month", "call"],
        },
        {
          tag: "Dashboards",
          title: "Rápida Distribution",
          metricLabel: "Decision Time Reduction",
          metricValue: "-60%",
          description: "Real-time dashboard for inventory, delivery routes, and order status. Managers now make decisions with fresh data, not last week's reports.",
          wide: true,
        },
        {
          tag: "Web & Chatbot",
          title: "ModaStyle Store",
          metric: "85% Automated",
          description: "WhatsApp chatbot that handles orders, stock queries, payments, and shipping tracking. The store stopped losing sales after hours.",
          icons: ["chat", "shopping_cart", "payments"],
        },
      ],
    },
  },

  es: {
    nav: {
      caseStudies: "Casos de Estudio",
      consultation: "Consultoría",
    },
    hero: {
      badge: "AGENCIA DIGITAL · GUATEMALA",
      headlinePrefix: "Más clientes.",
      headlineGradient: "Menos trabajo manual.",
      headlineSuffix: "",
      subtitle:
        "Construimos páginas web y sistemas con IA para negocios guatemaltecos que quieren crecer sin contratar más personal.",
      ctaPrimary: "Ver nuestro trabajo",
      ctaSecondary: "Agendar llamada gratis",
      cards: {},
    },
    services: {
      badge: "Lo que hacemos",
      title: "Servicios",
      items: {
        automations: {
          label: "Motor Propio",
          title: "Responde WhatsApp e Instagram automáticamente",
          description:
            "Tu negocio atiende clientes 24/7 sin que vos estés pegado al celular.",
        },
        dashboards: {
          label: "UI de Nicho",
          title: "Ve las métricas de tu negocio desde el celular",
          description:
            "Ventas, reservas y clientes nuevos — todo en una pantalla simple.",
        },
        crm: {
          label: "Hub Privado",
          title: "Nunca pierdas un cliente por no dar seguimiento",
          description:
            "Cada lead entra al sistema y recibe seguimiento automático hasta que compra.",
        },
        web: {
          title: "Tu página siempre activa, rápida y segura",
          description:
            "Hosting, dominio y mantenimiento incluido. Sin sorpresas.",
        },
        ai: {
          title: "Un asistente con IA que trabaja por vos 24/7",
          description:
            "Responde preguntas, agenda citas y filtra leads — todo sin intervención humana.",
        },
      },
    },
    process: {
      badge: "PROCESO · 4 PASOS",
      title: "Así trabajamos con vos",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          description: "Entendemos tu negocio en una llamada de 30 minutos",
        },
        {
          number: "02",
          title: "Propuesta",
          description: "Te presentamos exactamente qué vamos a construir y cuánto cuesta",
        },
        {
          number: "03",
          title: "Desarrollo",
          description: "Construimos en 7-21 días con actualizaciones constantes",
        },
        {
          number: "04",
          title: "Lanzamiento",
          description: "Lanzamos y te enseñamos a usarlo. Soporte incluido.",
        },
      ],
    },
    stats: {
      items: [
        { value: "3", label: "Negocios en Jalapa con sitio activo" },
        { value: "+85%", label: "Aumento en reservas · La Fuga" },
        { value: "72 hrs", label: "Tiempo promedio de entrega de demo" },
        { value: "Q2,500", label: "Precio de entrada" },
      ],
    },
    testimonials: {
      headline: "Trabajamos con negocios reales en Guatemala",
      subtitle:
        "Tres negocios en Jalapa ya tienen presencia digital profesional. ¿Querés ser el siguiente?",
      trusted: "Clientes actuales",
      items: [
        {
          company: "AL CARBÓN",
          quote:
            '"La demo que me entregaron convenció a todo el equipo antes de la primera reunión."',
          name: "Francisco Quijada",
          role: "Dueño de Al Carbón, Jalapa",
        },
      ],
    },
    faq: {
      badge: "Preguntas frecuentes",
      title: "Lo que siempre preguntan",
      items: [
        {
          question: "¿Cuánto cuesta una página web?",
          answer:
            "Depende de lo que necesites. Una landing page profesional empieza desde Q2,500. Un sitio completo con reservas, menú y WhatsApp integrado ronda Q5,000-15,000. Te damos precio exacto después de la llamada de diagnóstico.",
        },
        {
          question: "¿En cuánto tiempo me entregan el sitio?",
          answer:
            "Una demo funcional la entregamos en 72 horas. El sitio final toma entre 7 y 21 días dependiendo de la complejidad. Siempre con actualizaciones constantes durante el proceso.",
        },
        {
          question: "¿Qué pasa si quiero hacer cambios después?",
          answer:
            "Los primeros 3 meses de soporte están incluidos. Después ofrecemos mantenimiento mensual con actualizaciones ilimitadas. Sin contratos forzosos — si no te gusta, cancelás cuando quieras.",
        },
        {
          question: "¿Necesito saber de tecnología para usar lo que construyen?",
          answer:
            "Para nada. Todo está diseñado para que lo manejes desde tu celular. Si sabés usar WhatsApp, podés usar cualquier sistema que construyamos.",
        },
        {
          question: "¿Pueden hacer algo parecido a lo que le hicieron a Al Carbón?",
          answer:
            "Sí, y podemos adaptarlo a tu tipo de negocio. Cada proyecto es único — lo que hicimos para un restaurante es diferente a lo que haríamos para una tienda o un servicio.",
        },
        {
          question: "¿Trabajan con negocios fuera de Jalapa?",
          answer:
            "Sí. Trabajamos 100% remoto con negocios en toda Guatemala. La llamada de diagnóstico es por videollamada y el proceso es igual de ágil sin importar dónde estés.",
        },
      ],
    },
    contact: {
      title: "¿Hablamos 20 minutos?",
      subtitle:
        "Sin compromiso. Te decimos si podemos ayudarte y cuánto costaría.",
      benefits: {
        roadmap: "Hoja de Ruta Personalizada",
        security: "Seguridad y Actualizaciones",
        stability: "Estabilidad Mensual",
      },
      form: {
        fullName: "Nombre Completo",
        fullNamePlaceholder: "Juan Pérez",
        email: "WhatsApp",
        emailPlaceholder: "+502 1234 5678",
        company: "Tipo de Negocio",
        companyPlaceholder: "Ej: Restaurante, Tienda, Servicio",
        details: "Detalles del Proyecto",
        detailsPlaceholder: "Contanos qué necesitás...",
        submit: "Quiero una llamada gratis",
        note: "Respuesta en menos de 24 horas.",
      },
    },
    footer: {
      copyright: "© 2025 Cenit Digital. Soluciones digitales que transforman tu negocio.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      status: "Estado del Sistema: Óptimo",
    },
    // Case Studies Page
    casos: {
      badge: "PORTAFOLIO",
      headlinePrefix: "Lo que hemos",
      headlineGradient: "construido",
      subtitle: "Proyectos reales para negocios reales en Guatemala.",
      filters: {
        all: "Todos los Proyectos",
        automation: "Automatización",
        dashboards: "Dashboards",
        ai: "IA & Chatbots",
        web: "Web Personalizada",
      },
      viewCaseStudy: "Ver Caso Completo",
      explore: "Explorar Solución",
      cta: {
        headlinePrefix: "¿Querés algo",
        headlineGradient: "así para tu negocio?",
        subtitle: "Trabajamos con negocios que quieren crecer sin complicarse con tecnología.",
        primary: "Hablemos →",
        secondary: "Ver cómo trabajamos",
      },
      projects: [
        {
          tag: "Automatización",
          title: "Restaurante El Fogón",
          metric: "-40% Errores",
          description: "Automatización completa de pedidos con n8n conectando la app del mesero, cocina y facturación. Dashboard de ventas en tiempo real para el dueño.",
          icons: ["restaurant", "auto_awesome", "dashboard"],
        },
        {
          tag: "IA & Chatbots",
          title: "Clínica Dental Sonrisas",
          metric: "80% Llamadas",
          description: "Recepcionista de IA que agenda citas, responde preguntas frecuentes y deriva urgencias. Integración directa con el sistema de turnos de la clínica.",
          icons: ["smart_toy", "calendar_month", "call"],
        },
        {
          tag: "Dashboards",
          title: "Distribuidora Rápida",
          metricLabel: "Reducción en Tiempo de Decisión",
          metricValue: "-60%",
          description: "Dashboard en tiempo real de inventario, rutas de entrega y estado de pedidos. Los gerentes ahora toman decisiones con datos frescos, no reportes de la semana pasada.",
          wide: true,
        },
        {
          tag: "Web & Chatbot",
          title: "Tienda ModaStyle",
          metric: "85% Automatizado",
          description: "Chatbot de WhatsApp que gestiona pedidos, consultas de stock, pagos y seguimiento de envíos. La tienda dejó de perder ventas fuera de horario.",
          icons: ["chat", "shopping_cart", "payments"],
        },
      ],
    },
  },
} as const;

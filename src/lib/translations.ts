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
      badge: "Ingeniería Digital a Medida",
      headlinePrefix: "Soluciones Digitales",
      headlineGradient: "que Impulsan",
      headlineSuffix: "tu Negocio",
      subtitle:
        "Automatizamos, construimos y optimizamos la tecnología de tu empresa para que vos te enfoques en lo que importa: hacer crecer tu negocio.",
      ctaPrimary: "Solicitar Proyecto",
      ctaSecondary: "Ver Casos de Estudio",
      cards: {
        customLogic: "Lógica Propia",
        uniqueFlows: "Flujos Únicos",
        nicheInsights: "Insights de Nicho",
        privateTech: "Tech Privada",
      },
    },
    services: {
      badge: "Capacidades a Medida",
      title: "Servicios de Arquitectura Personalizada",
      items: {
        automations: {
          label: "Motor Propio",
          title: "Automatizaciones Propietarias",
          description:
            "Desarrollamos scripts autónomos únicos que se mapean perfectamente a tus protocolos internos, en lugar de forzar a tu equipo a workflows rígidos de terceros.",
        },
        dashboards: {
          label: "UI de Nicho",
          title: "Dashboards Exclusivos",
          description:
            "Interfaces de inteligencia diseñadas alrededor de tus KPIs exactos, brindando claridad que las herramientas genéricas simplemente no pueden ofrecer.",
        },
        crm: {
          label: "Hub Privado",
          title: "Sistemas CRM a Medida",
          description:
            "Construidos desde cero para tu ciclo de ventas específico, asegurando que cada dato capturado sea relevante para tu resultado final.",
        },
        web: {
          title: "Infraestructura Web Propia",
          description:
            "Arquitecturas de alto rendimiento diseñadas para tus necesidades de seguridad y patrones de tráfico específicos.",
        },
        ai: {
          title: "Agentes de IA Especializados",
          description:
            "Chatbots y agentes de voz entrenados con el conocimiento único de tu industria y tono de marca.",
        },
      },
    },
    process: {
      badge: "Nuestro Flujo de Trabajo",
      title: "Marco de Ejecución Personalizado",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          description: "Analizamos tu negocio, identificamos procesos manuales y puntos donde la tecnología puede ahorrarte tiempo y dinero.",
        },
        {
          number: "02",
          title: "Propuesta",
          description: "Diseñamos un plan técnico a tu medida: flujos de automatización, wireframes, y stack tecnológico claro desde el día uno.",
        },
        {
          number: "03",
          title: "Desarrollo",
          description: "Construimos tu solución con revisiones constantes. Vés el progreso en tiempo real y nos ajustamos juntos.",
        },
        {
          number: "04",
          title: "Lanzamiento",
          description: "Ponemos todo en producción, capacitamos a tu equipo, y nos encargamos del mantenimiento continuo.",
        },
      ],
    },
    stats: {
      items: [
        { value: "98%", label: "Satisfacción de Clientes" },
        { value: "250+", label: "Proyectos Entregados" },
        { value: "15k", label: "Horas Ahorradas a Clientes" },
        { value: "12ms", label: "Tiempo de Respuesta Promedio" },
      ],
    },
    testimonials: {
      headline: "Nuestros clientes no tienen margen de error.",
      subtitle:
        "En industrias de alto riesgo, la precisión no es una preferencia—es un requisito. Nos asociamos con líderes que exigen confiabilidad absoluta y estabilidad de ecosistema a largo plazo.",
      trusted: "Confiado por líderes de la industria",
      items: [
        {
          company: "BAE SYSTEMS",
          quote:
            '"Entregar soluciones rentables e innovadoras en nuestras operaciones de manufactura es crítico para mantener una posición líder en el sector de combate aéreo del Reino Unido. Trabajar con Cenit Digital nos ayuda a asegurar esa ventaja para nuestros clientes."',
          name: "PAUL",
          role: "JEFE DE TECNOLOGÍA DE FUSELAJE @BAE SYSTEMS",
        },
        {
          company: "NIAR",
          quote:
            '"Los dashboards especializados de Cenit Digital nos permitieron sincronizar datos de investigación complejos entre múltiples departamentos con precisión sub-milisegundo. Sus estándares de ingeniería no tienen comparación."',
          name: "DRA. SARAH CHEN",
          role: "DIRECTORA DE OPERACIONES DE GEMELO DIGITAL @NIAR",
        },
        {
          company: "PALL CORPORATION",
          quote:
            '"Necesitábamos un sistema CRM personalizado que pudiera manejar la lógica intrincada de las cadenas de suministro globales de filtración. Lo que Cenit Digital entregó no fue solo software; fue una ventaja competitiva."',
          name: "MARK R.",
          role: "VP SENIOR DE LOGÍSTICA @PALL CORPORATION",
        },
      ],
    },
    faq: {
      badge: "Preguntas Frecuentes",
      title: "FAQ",
      items: [
        {
          question: "¿Cuánto tiempo toma un proyecto típico?",
          answer:
            "Depende de la complejidad. Una landing o automatización simple puede estar lista en 2-3 semanas. Un sistema personalizado con dashboards y chatbots toma entre 4-8 semanas. Siempre te damos un cronograma claro desde el inicio.",
        },
        {
          question: "¿Qué pasa después de que terminan el proyecto?",
          answer:
            "No desaparecemos. Ofrecemos mantenimiento continuo: actualizaciones, monitoreo, y soporte cuando lo necesités. Esto se maneja con una tarifa mensual fija para que tu sistema siempre esté funcionando al 100%.",
        },
        {
          question: "¿Se pueden integrar con las herramientas que ya uso?",
          answer:
            "Sí, totalmente. Nos integramos con CRMs, pasarelas de pago, Google Sheets, WhatsApp, correos, y prácticamente cualquier herramienta que tenga API. Si ya lo usás, lo conectamos.",
        },
        {
          question: "¿Necesito saber de tecnología para usar lo que construyen?",
          answer:
            "Para nada. Diseñamos todo pensando en que sea fácil de usar. Las automatizaciones corren solas, los dashboards son visuales e intuitivos, y los chatbots se configuran para que no tengas que tocar nada técnico.",
        },
      ],
    },
    contact: {
      title: "Inicia Tu Proyecto a Medida",
      subtitle:
        "Comparte tu visión con nosotros. Nos especializamos en ingeniar soluciones personalizadas y mantenerlas de por vida a través de nuestro marco integral de soporte post-entrega.",
      benefits: {
        roadmap: "Hoja de Ruta Técnica Personalizada",
        security: "Seguridad y Actualizaciones Continuas",
        stability: "Estabilidad de Rendimiento Mensual",
      },
      form: {
        fullName: "Nombre Completo",
        fullNamePlaceholder: "Juan Pérez",
        email: "Correo de Trabajo",
        emailPlaceholder: "juan@empresa.com",
        company: "Nombre de la Empresa",
        companyPlaceholder: "Ingresa el nombre de tu empresa",
        details: "Detalles del Proyecto",
        detailsPlaceholder: "Describe tus necesidades de infraestructura únicas...",
        submit: "Enviar Solicitud",
        note: "Nota: Todos los proyectos incluyen mantenimiento mensual obligatorio por seguridad y estabilidad a largo plazo.",
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
      badge: "Arquitectura de Soluciones Digitales",
      headlinePrefix: "Impacto Real:",
      headlineGradient: "Nuestros Casos de Estudio",
      subtitle: "Soluciones digitales diseñadas para escalar tu negocio y generar resultados medibles.",
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
        headlinePrefix: "Listo para construir tu",
        headlineGradient: "próximo proyecto?",
        subtitle: "Unite a las empresas que ya usan soluciones digitales a medida para dominar sus mercados.",
        primary: "Trabajá Con Nosotros",
        secondary: "Nuestra Metodología",
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

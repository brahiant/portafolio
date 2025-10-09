// Datos de cursos
const cursos = [
    // 2025
    {
        title: "Microservicios Guía Completa de Docker & Kubernetes",
        platform: "Udemy",
        date: "Mayo 2025",
        year: "2025",
        description: "Aprendizaje completo de contenedores y orquestación de microservicios"
    },
    {
        title: "Guía Completa JUnit y Mockito Incluye Spring Boot Test",
        platform: "Udemy",
        date: "Febrero 2025",
        year: "2025",
        description: "Testing avanzado para aplicaciones Spring Boot con JUnit y Mockito"
    },
    {
        title: "Curso Práctico de Storage en AWS",
        platform: "Platzi",
        date: "Octubre 2025",
        year: "2025",
        description: "Servicios y prácticas de almacenamiento en AWS (S3, versiones y políticas)"
    },
    {
        title: "Curso de GitHub Actions",
        platform: "Platzi",
        date: "Octubre 2025",
        year: "2025",
        description: "Automatización CI/CD con GitHub Actions y Workflows"
    },
    {
        title: "Curso de Java Spring Boot",
        platform: "Platzi",
        date: "Octubre 2025",
        year: "2025",
        description: "Construcción de APIs y servicios con Spring Boot"
    },
    {
        title: "Curso Práctico de AWS: Roles y Seguridad con IAM",
        platform: "Platzi",
        date: "Septiembre 2025",
        year: "2025",
        description: "Gestión de identidades, permisos y roles con AWS IAM"
    },
    
    // 2024
    {
        title: "Fundamentos de Google Cloud Platform Prácticas",
        platform: "Udemy",
        date: "Julio 2024",
        year: "2024",
        description: "Fundamentos y prácticas de Google Cloud Platform"
    },
    {
        title: "Microservicios Spring Cloud Eureka & Angular Full Stack",
        platform: "Udemy",
        date: "Enero 2024",
        year: "2024",
        description: "Desarrollo de microservicios con Spring Cloud y Angular"
    },
    
    // 2023
    {
        title: "Curso de Angular - De cero a experto (Frontend Developer)",
        platform: "Udemy",
        date: "Diciembre 2023",
        year: "2023",
        description: "Desarrollo frontend completo con Angular"
    },
    {
        title: "Planificación del proyecto: reunir todos los elementos",
        platform: "Coursera",
        date: "Diciembre 2023",
        year: "2023",
        description: "Gestión y planificación de proyectos"
    },
    {
        title: "Iniciación del proyecto: Cómo iniciar un proyecto exitoso",
        platform: "Coursera",
        date: "Noviembre 2023",
        year: "2023",
        description: "Metodologías para el inicio exitoso de proyectos"
    },
    {
        title: "Fundamentos de la gestión de proyectos",
        platform: "Coursera",
        date: "Septiembre 2023",
        year: "2023",
        description: "Bases de la gestión profesional de proyectos"
    },
    {
        title: "Master en C#: Xamarin, Blazor, Bases de Datos",
        platform: "Platzi",
        date: "Julio 2023",
        year: "2023",
        description: "Desarrollo multiplataforma con C# y tecnologías Microsoft"
    },
    {
        title: "Curso Introducción a MongoDB",
        platform: "Platzi",
        date: "Mayo 2023",
        year: "2023",
        description: "Fundamentos de bases de datos NoSQL con MongoDB"
    },
    {
        title: "Curso Básico PHP - Arreglos, funciones y estructuras de control",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Programación en PHP con estructuras de datos y control"
    },
    {
        title: "Curso Básico PHP - Instalación, fundamentos y operadores",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Introducción completa al lenguaje PHP"
    },
    {
        title: "Curso Básico programación orientada a objetos JavaScript",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "POO en JavaScript moderno"
    },
    {
        title: "Curso Asincronismo en JavaScript",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Programación asíncrona con Promises, Async/Await"
    },
    {
        title: "Curso Front End Developer",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Desarrollo frontend completo"
    },
    {
        title: "Curso Integración PHP con HTML",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Desarrollo web dinámico con PHP y HTML"
    },
    {
        title: "Curso de Manejo de Datos PHP",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Gestión de datos con PHP"
    },
    {
        title: "Curso de PHP con Composer",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Gestión de dependencias en PHP con Composer"
    },
    {
        title: "Curso Programación orientada a objetos con PHP",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "POO avanzada en PHP"
    },
    {
        title: "Curso VUE.JS componentes y composition API",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Desarrollo con Vue.js 3 y Composition API"
    },
    {
        title: "Curso VUE.JS navegación con Vue router",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Routing y navegación en aplicaciones Vue.js"
    },
    {
        title: "Curso VUE.JS introducción y fundamentos",
        platform: "Platzi",
        date: "Marzo 2023",
        year: "2023",
        description: "Fundamentos de Vue.js"
    },
    {
        title: "Curso básico de JavaScript",
        platform: "LinkedIn",
        date: "Febrero 2023",
        year: "2023",
        description: "Fundamentos del lenguaje JavaScript"
    },
    {
        title: "Curso Closures y Scope en JavaScript",
        platform: "LinkedIn",
        date: "Febrero 2023",
        year: "2023",
        description: "Conceptos avanzados de JavaScript: closures y scope"
    },
    {
        title: "Curso principios SOLID en C# y .NET",
        platform: "LinkedIn",
        date: "Febrero 2023",
        year: "2023",
        description: "Principios de diseño de software en C#"
    },
    {
        title: "Curso Java Spring",
        platform: "Platzi",
        date: "Febrero 2023",
        year: "2023",
        description: "Framework Spring para desarrollo Java"
    },
    {
        title: "Present Simple and Common Vocabulary",
        platform: "Platzi",
        date: "Febrero 2023",
        year: "2023",
        description: "Inglés básico - Presente simple y vocabulario"
    },
    {
        title: "Work Elements and Expressions",
        platform: "Platzi",
        date: "Febrero 2023",
        year: "2023",
        description: "Expresiones y elementos del trabajo en inglés"
    },
    {
        title: "English A1 Your First Conversation",
        platform: "Platzi",
        date: "Febrero 2023",
        year: "2023",
        description: "Inglés A1 - Tu primera conversación"
    },
    {
        title: "English A1 Personal descriptions",
        platform: "Platzi",
        date: "Enero 2023",
        year: "2023",
        description: "Inglés A1 - Descripciones personales"
    },
    {
        title: "English A1 for beginners",
        platform: "Platzi",
        date: "Enero 2023",
        year: "2023",
        description: "Inglés A1 para principiantes"
    },
    {
        title: "Learn English Online",
        platform: "Platzi",
        date: "Enero 2023",
        year: "2023",
        description: "Aprendizaje de inglés en línea"
    },
    
    // 2022
    {
        title: "Java código robusto",
        platform: "LinkedIn",
        date: "Octubre 2022",
        year: "2022",
        description: "Desarrollo de código Java robusto y mantenible"
    },
    {
        title: "Java mapeo objeto-relacional esencial",
        platform: "LinkedIn",
        date: "Octubre 2022",
        year: "2022",
        description: "ORM y mapeo objeto-relacional en Java"
    },
    {
        title: "Java programación orientada a objetos esencial",
        platform: "LinkedIn",
        date: "Octubre 2022",
        year: "2022",
        description: "POO fundamental en Java"
    },
    {
        title: "Desarrollo ágil de software",
        platform: "LinkedIn",
        date: "Septiembre 2022",
        year: "2022",
        description: "Metodologías ágiles en desarrollo de software"
    },
    {
        title: "Java esencial",
        platform: "LinkedIn",
        date: "Septiembre 2022",
        year: "2022",
        description: "Fundamentos esenciales del lenguaje Java"
    },
    {
        title: "Java mejora tu desarrollo",
        platform: "LinkedIn",
        date: "Septiembre 2022",
        year: "2022",
        description: "Mejores prácticas en desarrollo Java"
    },
    
    // 2018
    {
        title: "Complementaria Virtual en English Dot Works 3",
        platform: "English Dot Works",
        date: "Septiembre 2018",
        year: "2018",
        description: "Nivel avanzado de inglés - English Dot Works 3"
    },
    {
        title: "Complementaria Virtual en English Dot Works Beginner - Inglés",
        platform: "English Dot Works",
        date: "Octubre 2018",
        year: "2018",
        description: "Inglés para principiantes - English Dot Works"
    },
    {
        title: "Complementaria Virtual en English Dot Works 2",
        platform: "English Dot Works",
        date: "Agosto 2018",
        year: "2018",
        description: "Nivel intermedio de inglés - English Dot Works 2"
    }
];

// Función para renderizar cursos
function renderCursos(filter = 'all') {
    const cursosGrid = document.getElementById('cursosGrid');
    const filteredCursos = filter === 'all' ? cursos : cursos.filter(curso => curso.year === filter);
    
    cursosGrid.innerHTML = filteredCursos.map(curso => `
        <div class="curso-card">
            <div class="curso-header">
                <div>
                    <h3 class="curso-title">${curso.title}</h3>
                    <p class="curso-date">${curso.date}</p>
                </div>
                <span class="curso-platform">${curso.platform}</span>
            </div>
            <p class="curso-description">${curso.description}</p>
        </div>
    `).join('');
}

// Función para manejar filtros
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            btn.classList.add('active');
            // Filtrar cursos
            const filter = btn.getAttribute('data-filter');
            renderCursos(filter);
        });
    });
}

// Función para scroll suave
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para menú hamburguesa
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// Función para animaciones al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.curso-card, .experience-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para actualizar año actual en footer
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.textContent = `© ${currentYear} Brahian Torres. Todos los derechos reservados.`;
    }
}


// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar cursos iniciales
    renderCursos();
    
    // Configurar funcionalidades
    setupFilters();
    setupSmoothScroll();
    setupMobileMenu();
    setupScrollAnimations();
    updateCurrentYear();
    
    // Agregar clase para animaciones CSS
    document.body.classList.add('loaded');
});

// Función para manejar el scroll del header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Función para mostrar/ocultar botón de scroll to top
function setupScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: var(--shadow-lg);
        transition: var(--transition);
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Inicializar scroll to top
setupScrollToTop();

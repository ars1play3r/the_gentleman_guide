// Barber lessons configuration
window.BARBER_LESSONS = [
  {
    title: "Herramientas básicas",
    icon: "✂️",
    content: [
      {
        title: "Tijeras de corte",
        description: "Utilizadas para cortar el cabello de forma limpia y precisa. Tienen hojas lisas y afiladas.",
        image: '<path d="M22 4.5c-1.1 0-2.2.5-3 1.4-1.5-1.8-4.2-2-6-.5L2.7 15.6c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0l3.7-3.7 2.3 2.3-3.8 3.8c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0l3.8-3.8 2.3 2.3-3.7 3.7c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0L21 13.2c1.5-1.8 1.3-4.5-.5-6 .9-.8 1.4-1.9 1.4-3C22 4.1 22 4.7 22 4.5zm-9.7 9.6L9.9 11.7l8.8-8.8c1-1 2.5-1 3.5 0 1 1 1 2.5 0 3.5l-8.9 8.7z"/>'
      },
      {
        title: "Tijeras de entresacar",
        description: "Tienen dientes en una de las hojas, y se utilizan para quitar volumen y texturizar el cabello sin reducir su longitud total.",
        image: '<path d="M19.06 5.5c-1.1 0-2 .9-2 2 0 .85.55 1.57 1.3 1.87L16 13.1c-.46-.26-1-.41-1.55-.41-.83 0-1.6.35-2.15.93L7.82 9.14c.11-.23.18-.49.18-.76 0-1.01-.82-1.83-1.83-1.83s-1.83.82-1.83 1.83c0 .93.7 1.7 1.6 1.81L10.5 18c-.57.6-.92 1.42-.92 2.32 0 .2.03.41.08.61h4.67c.05-.2.08-.41.08-.61 0-.85-.35-1.61-.9-2.17l4.4-8.30c.33.1.68.16 1.04.16 1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5c-.7 0-1.57.5-1.57.5l.29.29c.71.71 1.03 1.03 1.04 1.71z"/>'
      },
      {
        title: "Maquinilla de corte",
        description: "Utilizada para cortes muy cortos y para crear degradados precisos. Viene con diferentes peines guía numerados.",
        image: '<path d="M20 5V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2-1v1H6V4h12zm-1 5.5c0 .83-.67 1.5-1.5 1.5S14 10.33 14 9.5 14.67 8 15.5 8s1.5.67 1.5 1.5zm-8 0c0 .83-.67 1.5-1.5 1.5S6 10.33 6 9.5 6.67 8 7.5 8s1.5.67 1.5 1.5zm-2 5c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>'
      },
      {
        title: "Trimmer",
        description: "Más pequeña que la maquinilla, perfecta para detalles, acabados y desvanecidos precisos en zonas como patillas y nuca.",
        image: '<path d="M7 15h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-4h-4.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C8.96 7.55 8.05 7 7 7 5.34 7 4 8.34 4 10c0 .35.07.69.18 1H2c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1z"/>'
      },
      {
        title: "Navaja",
        description: "Para afeitados tradicionales y delineados precisos. Requiere habilidad y práctica para su uso seguro.",
        image: '<path d="M6 3h12l4 6-10 12.73L2 9l4-6zm5 12h2v-3h-2v3zm-1-5h4l-.67-2H10l.67 2z"/>'
      },
      {
        title: "Cepillo para cuello",
        description: "Elimina los cabellos sueltos del cuello del cliente después del corte.",
        image: '<path d="M12.5 3C8.92 3 6 5.92 6 9.5V12H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-2V9.5C14 5.92 16.92 3 20.5 3h.5v2h-.5C18.02 5 16 7.02 16 9.5V12h-2V9.5C14 7.02 11.98 5 9.5 5h-.5v2h.5C11.02 7 13 9.02 13 11.5V12h-1v-2.5C12 7.02 9.98 5 7.5 5H7v2h.5C9.02 7 11 9.02 11 11.5V12h-4.5v-2.5C6.5 6.67 9.17 4 12.5 4V3z"/>'
      },
      {
        title: "Capa de barbero",
        description: "Prenda que se coloca sobre los hombros del cliente para proteger su ropa de los cabellos cortados.",
        image: '<path d="M21 4H7V2H5v2H1v6h2v10h18V12h2V4zm-2 14H5V12h14v6zm0-8H3V6h16v4z"/>'
      },
      {
        title: "Brocha de afeitar",
        description: "Utilizada para aplicar espuma o jabón de afeitar sobre la barba, ayuda a levantar el vello facial para un afeitado más preciso.",
        image: '<path d="M18 4v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-2 0H8v16h8V4z"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>'
      },
      {
        title: "Pulverizador",
        description: "Envase que contiene agua para humedecer el cabello durante el corte. Es esencial para cortar con mayor precisión.",
        image: '<path d="M17 10h-1V8.5c0-.83-.67-1.5-1.5-1.5h-1V6c0-.55-.45-1-1-1H9.1c-.46 0-.57.32-.38.66L10 8v1H8.5c-.83 0-1.5.67-1.5 1.5V12h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V17h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z"/>'
      },
      {
        title: "Peine",
        description: "Herramienta fundamental para peinar, desenredar y guiar el corte. Existen diferentes tipos según su uso específico.",
        image: '<path d="M18 9v12h-6V9H8V7h6V2h4v5h6v2h-6z"/>'
      }
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "¿Cuál es la principal diferencia entre tijeras para cortar y tijeras para entresacar?",
        options: [
          "El color del mango",
          "El tamaño de las tijeras", 
          "Las tijeras para entresacar tienen dientes en una de las hojas",
          "Las tijeras para cortar son más afiladas"
        ],
        correctAnswer: "Las tijeras para entresacar tienen dientes en una de las hojas"
      },
      {
        type: "image-selection",
        question: "¿Qué herramienta se utiliza para desvanecidos precisos?",
        options: [
          { text: "Máquina de corte", icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25s-9-3.694-9-8.25S7.03 3.75 12 3.75s9 3.694 9 8.25z" },
          { text: "Navaja", icon: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
          { text: "Tijeras", icon: "M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" },
          { text: "Trimmer", icon: "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" }
        ],
        correctAnswer: "Trimmer"
      },
      {
        type: "multiple-choice",
        question: "¿Para qué se utiliza principalmente la navaja en barbería?",
        options: [
          "Para cortar el cabello en la parte superior",
          "Para realizar afeitados tradicionales y delineados precisos",
          "Para desenredar el cabello",
          "Para crear volumen en el cabello"
        ],
        correctAnswer: "Para realizar afeitados tradicionales y delineados precisos"
      },
      {
        type: "multiple-choice",
        question: "¿Cuál es la función principal del cepillo para cuello?",
        options: [
          "Dar forma al peinado",
          "Limpiar las herramientas",
          "Eliminar los cabellos sueltos del cuello del cliente",
          "Aplicar productos para el cabello"
        ],
        correctAnswer: "Eliminar los cabellos sueltos del cuello del cliente"
      },
      {
        type: "image-selection",
        question: "¿Qué herramienta se utiliza para aplicar espuma o jabón de afeitar?",
        options: [
          { text: "Peine", icon: "M18 9v12h-6V9H8V7h6V2h4v5h6v2h-6z" },
          { text: "Cepillo para cuello", icon: "M12.5 3C8.92 3 6 5.92 6 9.5V12H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-2V9.5C14 5.92 16.92 3 20.5 3h.5v2h-.5C18.02 5 16 7.02 16 9.5V12h-2V9.5C14 7.02 11.98 5 9.5 5h-.5v2h.5C11.02 7 13 9.02 13 11.5V12h-1v-2.5C12 7.02 9.98 5 7.5 5H7v2h.5C9.02 7 11 9.02 11 11.5V12h-4.5v-2.5C6.5 6.67 9.17 4 12.5 4V3z" },
          { text: "Brocha de afeitar", icon: "M18 4v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-2 0H8v16h8V4z" },
          { text: "Pulverizador", icon: "M17 10h-1V8.5c0-.83-.67-1.5-1.5-1.5h-1V6c0-.55-.45-1-1-1H9.1c-.46 0-.57.32-.38.66L10 8v1H8.5c-.83 0-1.5.67-1.5 1.5V12h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V17h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z" }
        ],
        correctAnswer: "Brocha de afeitar"
      },
      {
        type: "multiple-choice",
        question: "¿Cuál es el principal uso del pulverizador en barbería?",
        options: [
          "Aplicar tintes",
          "Humedecer el cabello durante el corte",
          "Limpiar las herramientas",
          "Añadir brillo al cabello"
        ],
        correctAnswer: "Humedecer el cabello durante el corte"
      },
      {
        type: "multiple-choice",
        question: "¿Qué peines guía de la maquinilla de corte producen un corte más corto?",
        options: [
          "Los de número alto (#7, #8)",
          "Los de número bajo (#0, #1)",
          "Todos cortan a la misma longitud",
          "Depende del tipo de cabello"
        ],
        correctAnswer: "Los de número bajo (#0, #1)"
      },
      {
        type: "image-selection",
        question: "¿Qué elemento protege la ropa del cliente durante el corte?",
        options: [
          { text: "Tijeras", icon: "M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" },
          { text: "Peine", icon: "M18 9v12h-6V9H8V7h6V2h4v5h6v2h-6z" },
          { text: "Capa de barbero", icon: "M21 4H7V2H5v2H1v6h2v10h18V12h2V4zm-2 14H5V12h14v6zm0-8H3V6h16v4z" },
          { text: "Brocha", icon: "M18 4v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-2 0H8v16h8V4z" }
        ],
        correctAnswer: "Capa de barbero"
      },
      {
        type: "multiple-choice",
        question: "¿Cuál de estas NO es una herramienta típica de barbería?",
        options: [
          "Navaja",
          "Tijeras de entresacar",
          "Taladro eléctrico",
          "Maquinilla de corte"
        ],
        correctAnswer: "Taladro eléctrico"
      },
      {
        type: "multiple-choice",
        question: "¿Por qué es importante mantener las tijeras afiladas?",
        options: [
          "Solo por estética profesional",
          "Para que corten con precisión y no dañen el cabello",
          "No es importante, todas cortan igual",
          "Para impresionar a los clientes"
        ],
        correctAnswer: "Para que corten con precisión y no dañen el cabello"
      }
    ]
  },
  {
    title: "Tipos de corte",
    icon: "💇‍♂️",
    content: [
      {
        title: "Fade / Degradado",
        description: "Un corte con transición gradual de longitud, desde muy corto en la parte inferior hasta más largo en la parte superior. Muy popular y versátil.",
        image: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 18.18 14.03 19 12 19z"/>'
      },
      {
        title: "Undercut",
        description: "Caracterizado por lados y nuca muy cortos o rapados, con una longitud mucho mayor en la parte superior que crea un contraste marcado.",
        image: '<path d="M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>'
      },
      {
        title: "Pompadour",
        description: "Estilo clásico con volumen en la parte frontal que se peina hacia atrás. La longitud superior es considerable mientras que los lados suelen ser más cortos.",
        image: '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>'
      },
      {
        title: "Crew Cut",
        description: "Corte militar corto con la parte superior ligeramente más larga que los lados, pero manteniendo una longitud reducida en toda la cabeza.",
        image: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 18.18 14.03 19 12 19z"/>'
      },
      {
        title: "Mohawk",
        description: "Característico por tener los lados completamente rapados y una franja de pelo en el centro del cráneo que va desde la frente hasta la nuca.",
        image: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>'
      },
      {
        title: "Taper Fade",
        description: "Similar al fade regular, pero con una transición más sutil y gradual. La longitud disminuye gradualmente desde arriba hacia abajo sin un contraste tan marcado.",
        image: '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>'
      },
      {
        title: "Buzz Cut",
        description: "Un corte muy corto y uniforme en toda la cabeza. Práctico y de bajo mantenimiento, suele realizarse con maquinilla con un número bajo (#1-#3).",
        image: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 18.18 14.03 19 12 19z"/>'
      },
      {
        title: "Comb Over",
        description: "El cabello se peina hacia un lado, generalmente con una raya lateral bien marcada. Versátil y elegante, funciona con diferentes longitudes.",
        image: '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>'
      },
      {
        title: "Quiff",
        description: "Similar al pompadour pero con el cabello frontal levantado y peinado ligeramente hacia atrás. Menos voluminoso y más casual que el pompadour.",
        image: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 18.18 14.03 19 12 19z"/>'
      },
      {
        title: "Flat Top",
        description: "El cabello se corta de forma que la parte superior queda plana, paralela al suelo. Popular en los años 90 y en contextos militares.",
        image: '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>'
      }
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "¿Qué significa 'fade' en un corte de cabello?",
        options: [
          "Un corte recto en la parte posterior",
          "Una transición gradual entre diferentes longitudes de cabello",
          "Rapar completamente los lados",
          "Añadir capas al cabello"
        ],
        correctAnswer: "Una transición gradual entre diferentes longitudes de cabello"
      },
      {
        type: "multiple-choice",
        question: "¿Qué número de maquinilla se usa normalmente para un corte muy corto?",
        options: ["#8", "#4", "#2", "#0"],
        correctAnswer: "#0"
      },
      {
        type: "multiple-choice",
        question: "¿Qué estilo se caracteriza por tener los lados rapados y la parte superior larga?",
        options: [
          "Crew Cut", 
          "Undercut", 
          "Pompadour", 
          "Taper Fade"
        ],
        correctAnswer: "Undercut"
      },
      {
        type: "image-selection",
        question: "¿Qué estilo tiene una franja de pelo en el centro y los lados rapados?",
        options: [
          { text: "Pompadour", icon: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z" },
          { text: "Mohawk", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" },
          { text: "Undercut", icon: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12h-2v-2h2v2zm0-4h-2V7h2v4z" },
          { text: "Fade", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-3v-1h3v1zm0-2.5h-3v-1h3v1zm0-2.5h-3v-1h3v1zm5 5h-3v-1h3v1zm0-2.5h-3v-1h3v1zm0-2.5h-3v-1h3v1z" }
        ],
        correctAnswer: "Mohawk"
      },
      {
        type: "multiple-choice",
        question: "¿Qué estilo se caracteriza por tener volumen en la parte frontal y peinarse hacia atrás?",
        options: [
          "Buzz Cut",
          "Crew Cut",
          "Pompadour",
          "Mohawk"
        ],
        correctAnswer: "Pompadour"
      },
      {
        type: "multiple-choice",
        question: "¿Cuál es la principal diferencia entre un Taper Fade y un Fade regular?",
        options: [
          "El Taper Fade solo se hace en la parte trasera",
          "El Taper Fade tiene una transición más sutil y gradual",
          "El Fade regular solo se hace en los lados",
          "No hay diferencia, son el mismo corte"
        ],
        correctAnswer: "El Taper Fade tiene una transición más sutil y gradual"
      },
      {
        type: "image-selection",
        question: "¿Qué estilo es un corte muy corto y uniforme en toda la cabeza?",
        options: [
          { text: "Buzz Cut", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 18.18 14.03 19 12 19z" },
          { text: "Comb Over", icon: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" },
          { text: "Quiff", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" },
          { text: "Flat Top", icon: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }
        ],
        correctAnswer: "Buzz Cut"
      },
      {
        type: "multiple-choice",
        question: "¿Qué corte se caracteriza por tener la parte superior completamente plana?",
        options: [
          "Comb Over",
          "Quiff",
          "Flat Top",
          "Pompadour"
        ],
        correctAnswer: "Flat Top"
      },
      {
        type: "multiple-choice",
        question: "¿Cuál de estos estilos se considera un corte militar clásico?",
        options: [
          "Mohawk",
          "Crew Cut",
          "Pompadour",
          "Quiff"
        ],
        correctAnswer: "Crew Cut"
      },
      {
        type: "multiple-choice",
        question: "¿Qué estilo se caracteriza por peinarse hacia un lado con una raya lateral?",
        options: [
          "Comb Over",
          "Undercut",
          "Buzz Cut",
          "Taper Fade"
        ],
        correctAnswer: "Comb Over"
      }
    ]
  },
  {
    title: "Cuidado de barba",
    icon: "🧔",
    exercises: [
      {
        type: "multiple-choice",
        question: "¿Cuál es el primer paso para un afeitado profesional?",
        options: [
          "Aplicar aftershave",
          "Pasar la navaja directamente",
          "Aplicar espuma o gel de afeitar",
          "Preparar la piel con una toalla caliente"
        ],
        correctAnswer: "Preparar la piel con una toalla caliente"
      },
      {
        type: "image-selection",
        question: "¿Qué producto se utiliza para suavizar la barba?",
        options: [
          { text: "Cera", icon: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" },
          { text: "Aceite", icon: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" },
          { text: "Gel", icon: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a.75.75 0 01-1.06 0L.22 14.28a.75.75 0 010-1.06l12.15-12.15-3.712-3.712L16.906 3.8a.75.75 0 01.53.22l5.545 5.545a.75.75 0 01.22.53L19.513 8.2z" },
          { text: "Bálsamo", icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" }
        ],
        correctAnswer: "Aceite"
      }
    ]
  },
  {
    title: "Técnicas avanzadas",
    icon: "🏆",
    exercises: [
      {
        type: "multiple-choice",
        question: "¿Qué técnica se utiliza para crear textura en cabello grueso?",
        options: [
          "Degradado", 
          "Entresacado",
          "Desvanecido", 
          "Recto"
        ],
        correctAnswer: "Entresacado"
      }
    ]
  },
  {
    title: "Higiene y desinfección",
    icon: "🧼",
    exercises: [
      {
        type: "multiple-choice",
        question: "¿Qué producto se utiliza para desinfectar herramientas metálicas?",
        options: [
          "Agua oxigenada",
          "Alcohol isopropílico",
          "Agua y jabón",
          "Cloro diluido"
        ],
        correctAnswer: "Alcohol isopropílico"
      }
    ]
  },
  {
    title: "Mantenimiento de equipos",
    icon: "🔧",
    exercises: [
      {
        type: "multiple-choice",
        question: "¿Con qué frecuencia se debe lubricar una máquina de cortar cabello?",
        options: [
          "Una vez al año",
          "Cada día de uso",
          "Una vez al mes",
          "Solo cuando hace ruido"
        ],
        correctAnswer: "Cada día de uso"
      },
      {
        type: "multiple-choice",
        question: "¿Cuál es la mejor manera de limpiar las cuchillas de las tijeras?",
        options: [
          "Con agua caliente y jabón",
          "Con un cepillo seco y aceite especial",
          "Con alcohol puro",
          "No es necesario limpiarlas"
        ],
        correctAnswer: "Con un cepillo seco y aceite especial"
      }
    ]
  }
];

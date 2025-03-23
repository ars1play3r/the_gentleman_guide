import config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const lessonsContainer = document.getElementById('lessons-container');

    config.lessons.forEach(lesson => {
        const lessonElement = document.createElement('div');
        lessonElement.classList.add('lesson-item');
        lessonElement.textContent = lesson.title;
        lessonElement.addEventListener('click', () => {
            alert(`Iniciando lección: ${lesson.title}`); // Temporal, para mostrar que funciona
            // Aquí iría la lógica para cargar la lección
        });
        lessonsContainer.appendChild(lessonElement);
    });
});


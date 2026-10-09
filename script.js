// ============================================
// 1. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
// ============================================

// Находим кнопку по id
const themeButton = document.querySelector('#theme-button');

// Когда по кнопке кликают — переключаем класс на body
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Меняем текст кнопки в зависимости от темы
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Светлая тема';
    } else {
        themeButton.textContent = 'Тёмная тема';
    }
});


// ============================================
// 2. ПОКАЗАТЬ / СКРЫТЬ БЛОК
// ============================================

const toggleButton = document.querySelector('#toggle-button');
const hiddenText = document.querySelector('#hidden-text');

toggleButton.addEventListener('click', () => {
    // Если блок скрыт — показываем, иначе — скрываем
    if (hiddenText.style.display === 'block') {
        hiddenText.style.display = 'none';
        toggleButton.textContent = 'Показать дополнительно';
    } else {
        hiddenText.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
    }
});


// ============================================
// 3. СЛУЧАЙНАЯ ЦИТАТА
// ============================================

// Массив с цитатами
const quotes = [
    'Собачье счастье не только в том, что тебя любят. Оно в том, что без тебя не могут обойтись.',
    'Собака есть единственное животное, верность которого непоколебима.',
    'Собака — это единственное существо на земле, которое любит тебя больше, чем себя.',
];

const quoteButton = document.querySelector('#quote-button');
const quoteBlock = document.querySelector('#quote-block');

quoteButton.addEventListener('click', () => {
    // Math.random() даёт число от 0 до 1, умножаем на длину массива и округляем вниз
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBlock.textContent = quotes[randomIndex];
});
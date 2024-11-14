const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            entry.target.classList.remove('not-in-view')
        } else {
            entry.target.classList.remove('in-view')
            entry.target.classList.add('not-in-view ')
        }
    })
}, 
{
    rootMargin: '0px',
    threshold: [0, 0.1, 1],
},
)

const tags = document.querySelectorAll('figure, p, ul')

tags.forEach((tag) => {
    observer.observe(tag) 
})



// script.js

// Текст, который будет "напечатан"
const text = "Академия тенниса";
// Скорость печати (в миллисекундах)
const typingSpeed = 100;

let index = 0; // Индекс текущего символа

function typeWriter() {
    if (index < text.length) {
        document.getElementById("animatedText").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed); // Задержка перед добавлением следующего символа
    }
}

// Запуск анимации
typeWriter();

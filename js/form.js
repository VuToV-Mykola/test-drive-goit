/* !!! Отримуємо посилання на основні елементи форми !!! */
const form = document.querySelector("#form");
const launchBtn = document.querySelector("#launch-btn");
const goToFormButton = document.querySelector("#go-to-form-btn");
const userEmailField = document.querySelector("#user-email");
const userNameField = document.querySelector("#user-name");

/* !!! Обробник кліку для кнопки переходу до форми !!! */
goToFormButton.addEventListener("click", function (e) {
  /* !!! Запобігаємо стандартній поведінці посилання !!! */
  e.preventDefault();
  /* !!! Прокручуємо сторінку до форми !!! */
  form.scrollIntoView();
});

/* !!! Функція для очищення полів форми !!! */
function clearFormFields() {
  /* !!! Знаходимо поля імені та email !!! */
  const fieldName = form.querySelector('input[type="text"]');
  const fieldEmail = form.querySelector('input[type="email"]');

  /* !!! Очищуємо значення полів !!! */
  fieldName.value = "";
  fieldEmail.value = "";
}

/* !!! Функція для додавання елемента гуся !!! */
function addGooseElement() {
  /* !!! Знаходимо контейнер форми !!! */
  const targetContainer = document.querySelector("#form");
  /* !!! Створюємо елемент зображення !!! */
  const gooseEl = document.createElement("img");
  /* !!! Додаємо клас для анімації !!! */
  gooseEl.classList.add("gus-anim");

  /* !!! Додаємо елемент до контейнера !!! */
  targetContainer.appendChild(gooseEl);
}

/* !!! Функція для показу анімації гуся !!! */
function showGooseAnim() {
  /* !!! Знаходимо елемент анімації гуся !!! */
  const gooseEl = document.querySelector(".gus-anim");

  /* !!! Встановлюємо джерело анімації !!! */
  gooseEl.setAttribute("src", "./img/gus-anim.gif");

  /* !!! Прибираємо анімацію через 4 секунди !!! */
  setTimeout(() => {
    gooseEl.removeAttribute("src");
  }, 4000);
}

/* !!! Додаємо елемент гуся при завантаженні сторінки !!! */
addGooseElement();

/* !!! Обробник відправки форми !!! */
form.addEventListener("submit", (e) => {
  /* !!! Запобігаємо стандартній відправці форми !!! */
  e.preventDefault();
  /* !!! Створюємо об'єкт FormData !!! */
  const formData = new FormData(form);

  /* !!! Виводимо дані користувача в консоль !!! */
  console.log("Імʼя користувача: ", userNameField.value);
  console.log("Email користувача: ", userEmailField.value);

  /* !!! Блокуємо кнопку та зменшуємо прозорість !!! */
  launchBtn.setAttribute("disabled", true);
  launchBtn.style.opacity = "0.7";

  /* !!! Показуємо анімацію гуся !!! */
  showGooseAnim();

  /* !!! Розблоковуємо кнопку та очищуємо поля !!! */
  launchBtn.removeAttribute("disabled");
  clearFormFields();

  /* !!! Відновлюємо прозорість кнопки через 4 секунди !!! */
  setTimeout(() => {
    launchBtn.style.opacity = "1";
  }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSection").querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвратить стандартное поведение формы

    // Собираем данные формы в FormData
    const formData = new FormData(form);

    // Отправляем запрос на сервер
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text(); // или response.json() если сервер возвращает JSON
      })
      .then((data) => {
        // Обработка ответа сервера
        console.log(data);
        // Можно отобразить сообщение об успешной отправке или очистить форму
        // form.reset();
        // Отображение сообщения пользователю, например, через alert или изменение DOM
        alert("Your call has been booked! We will contact you soon.");
      })
      .catch((error) => {
        // Отображение ошибки пользователю
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        alert("Oops! Something went wrong.");
      });
  });
});

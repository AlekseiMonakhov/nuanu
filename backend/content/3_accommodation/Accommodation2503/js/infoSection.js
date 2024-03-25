// infoSection.js

fetch("assets/json/infographics.json")
  .then((response) => response.json())
  .then((infographicsData) => {
    const infographicsContainer = document.getElementById("infographics");

    infographicsData.forEach((data) => {
      const infographicElement = document.createElement("div");
      infographicElement.classList.add("infographic");

      const type = document.createElement("h2");
      type.textContent = data.type;

      const amount = document.createElement("p");
      amount.classList.add("amount");
      amount.textContent = data.amount;

      const description = document.createElement("p");
      description.textContent = data.description;

      infographicElement.appendChild(type);
      infographicElement.appendChild(amount);
      infographicElement.appendChild(description);

      infographicsContainer.appendChild(infographicElement);
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных инфографики:", error);
  });

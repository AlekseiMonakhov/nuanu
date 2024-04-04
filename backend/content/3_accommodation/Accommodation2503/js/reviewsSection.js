// reviewsSection.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/json/reviews.json")
    .then((response) => response.json())
    .then((reviews) => {
      const reviewsSection = document.getElementById("reviews");
      if (!reviewsSection) return;

      reviews.forEach((review) => {
        const card = document.createElement("div");
        card.className = "review-card";

        const source = document.createElement("p");
        source.textContent = review.source;
        source.className = "source";

        const text = document.createElement("p");
        text.textContent = review.text;
        text.className = "text";

        const date = document.createElement("p");
        date.textContent = review.date;
        date.className = "date";

        const link = document.createElement("a");
        link.href = review.link;
        link.textContent = "Read more";
        link.className = "read-more";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.appendChild(source);
        card.appendChild(text);
        card.appendChild(date);
        card.appendChild(link);

        reviewsSection.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке отзывов:", error);
    });
});

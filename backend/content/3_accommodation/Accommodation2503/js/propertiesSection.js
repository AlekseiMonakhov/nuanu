// propertiesSection.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/json/properties.json")
    .then((response) => response.json())
    .then((properties) => {
      const realEstateSection = document.getElementById("real-estate");

      properties.forEach((property) => {
        const propertyDiv = document.createElement("div");
        propertyDiv.className = "property";

        const title = document.createElement("h3");
        title.className = "property-title";
        title.textContent = property.title;

        const type = document.createElement("p");
        type.className = "property-type";
        type.textContent = property.type;

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "property-image";

        const image = document.createElement("img");
        image.src = property.image;
        image.alt = `Property: ${property.title}`;

        const villasTag = document.createElement("span");
        villasTag.className = "property-tag villas";
        villasTag.textContent = `${property.villas} villas`;

        const apartmentsTag = document.createElement("span");
        apartmentsTag.className = "property-tag apartments";
        apartmentsTag.textContent = `${property.apartments} apartments`;

        const details = document.createElement("div");
        details.className = "property-details";

        const detailLeft = document.createElement("div");
        detailLeft.className = "property-detail";
        detailLeft.innerHTML = `
          <div><span class="detail-label">Starting Price:</span> <span class="detail-value">$${
            property.startingPrice
          }</span></div>
          <div><span class="detail-label">Total Area:</span> <span class="detail-value">${
            property.totalArea
          } m²</span></div>
          <div><span class="detail-label">Room Sizes:</span> <span class="detail-value">${property.roomSizes.join(
            ", "
          )} m²</span></div>
        `;

        const detailRight = document.createElement("div");
        detailRight.className = "property-detail";
        detailRight.innerHTML = `
          <div><span class="detail-label">ROI:</span> <span class="detail-value">${property.roi}</span></div>
          <div><span class="detail-label">Occupancy:</span> <span class="detail-value">${property.occupancy} years</span></div>
          <div><span class="detail-label">Delivery:</span> <span class="detail-value">${property.delivery}</span></div>
        `;

        details.appendChild(detailLeft);
        details.appendChild(detailRight);

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(villasTag);
        imageWrapper.appendChild(apartmentsTag);

        propertyDiv.appendChild(title);
        propertyDiv.appendChild(type);
        propertyDiv.appendChild(imageWrapper);
        propertyDiv.appendChild(details);

        realEstateSection.appendChild(propertyDiv);
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке данных недвижимости:", error);
    });
});

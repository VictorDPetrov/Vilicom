function toggleImages(sectionId) {
    const images = document.querySelectorAll(`#${sectionId} .hidden-image`);
    const showMoreButton = document.getElementById(`${sectionId}-show-more`);

    // Check the current button text
    if (showMoreButton.textContent === "Покажи повече") {
      images.forEach(img => {
        img.style.display = "block";
      });
      showMoreButton.textContent = "Покажи по-малко";
    } else {
      images.forEach(img => {
        img.style.display = "none";
      });
      showMoreButton.textContent = "Покажи повече";
    }
  }
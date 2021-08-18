const slider = ()=>{
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-item");
    const numberOfImages = carouselImages.length;
    
    // buttons
    const prevBtn = document.querySelector("#carousel-prevBtn");
    const nextBtn = document.querySelector("#carousel-nextBtn");
    
    // counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    
    // Button Listener
    nextBtn.addEventListener("click", () => {
      if (counter + 1 < numberOfImages) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    });
    
    prevBtn.addEventListener("click", () => {
      if (counter > 0) {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    });
}

const modalContainer = document.querySelector(".modal");
const services = document.querySelectorAll(".services-item");
const closeButtonModal = document.querySelector(".modal-container-close"); 

const modalOpenHandler = ()=>{
    modalContainer.style.display = "flex"
}

const modalCloseHandler = () => {
  const modalContainer = document.querySelector(".modal");
  modalContainer.style.display = "none";
};

Array.from(services).forEach((service) => {
  service.addEventListener("click", () => {
    modalOpenHandler();
  });
});

closeButtonModal.addEventListener("click",()=> modalCloseHandler())



slider()





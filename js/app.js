const slider = () => {
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
};

// services
const servicesData = [
  {
    order: 0,
    title: "قوة الاداء مافيش طرق صعبة على فورد",
    imgSrc: "assets/images/post-1.jpeg",
    description: "قوة الاداء مافيش طرق صعبة على فورد",
  },
  {
    order: 1,
    title: "الخامات خمات فورد في حتة تانية",
    imgSrc: "assets/images/post-2.jpeg",
    description: "الخامات خمات فورد في حتة تانية",
  },
  {
    order: 2,
    title: "الراحة مساحة فورد في حتة تانية",
    imgSrc: "assets/images/post-3.jpeg",
    description: "الراحة مساحة فورد في حتة تانية",
  },
];

const services = (servicesData) => {
  const createServiceItem = (title, imgSrc, order) => {
    // create elements
    const servicesItemContainer = document.createElement("div");
    const servicesItemImgContainer = document.createElement("div");
    const servicesItemImg = document.createElement("img");
    const servicesItemContent = document.createElement("div");
    const servicesItemText = document.createElement("p");

    // Add Child
    servicesItemContainer.appendChild(servicesItemImgContainer);
    servicesItemImgContainer.appendChild(servicesItemImg);
    servicesItemContainer.appendChild(servicesItemContent);
    servicesItemContent.appendChild(servicesItemText);

    // add Classes
    servicesItemContainer.classList.add("services-item");
    servicesItemImgContainer.classList.add("services-item-img");

    servicesItemContent.classList.add("services-item-content");
    servicesItemText.classList.add("services-item-text");

    // add Data
    servicesItemContainer.dataset.order = order;
    servicesItemText.innerHTML = title;
    servicesItemImg.src = imgSrc;

    return servicesItemContainer;
  };

  // container
  const servicesContainer = document.querySelector(".services-container");

  servicesData.forEach((serviceData) => {
    const title = serviceData.title;
    const imgSrc = serviceData.imgSrc;
    const order = serviceData.order;
    servicesContainer.appendChild(createServiceItem(title, imgSrc, order));
  });
};

services(servicesData);

// Modal
const modalContainer = document.querySelector(".modal");
const servicesItem = document.querySelectorAll(".services-item");
const closeButtonModal = document.querySelector(".modal-container-close");

const modalDataHandler = (order)=>{
    // Data
    const title = servicesData[order].title;
    const imgSrc = servicesData[order].imgSrc
    const description = servicesData[order].description

    // elements
    const modalContainerHeading = document.querySelector(".modal-container-heading")
    const modalContainerImg = document.querySelector(".modal-container-image img")
    const modalContainerContent = document.querySelector(".modal-container-content")
    
    // Content
    modalContainerHeading.innerHTML = title;
    modalContainerImg.src = imgSrc;
    modalContainerContent.innerHTML = description;
}

const modalOpenHandler = (order) => {
  modalContainer.style.display = "flex";
  modalDataHandler(order);
};

const modalCloseHandler = () => {
  const modalContainer = document.querySelector(".modal");
  modalContainer.style.display = "none";
};

Array.from(servicesItem).forEach((service) => {
  service.addEventListener("click", (e) => {
    const order = e.target.dataset.order;
    modalOpenHandler(order);
  });
});

closeButtonModal.addEventListener("click", () => modalCloseHandler());

slider();



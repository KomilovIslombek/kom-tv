const wrapper = document.querySelector(".wrapper-carousel");
const carousel = document.querySelector(".wrapper-carousel .carousel");
let firstCardWidth = carousel.querySelector(".card").offsetWidth + 16;
const arrowBtns = document.querySelectorAll(".wrapper-carousel i");
const carouselChildrens = [...carousel.children];

window.addEventListener("resize", () => {
    firstCardWidth = carousel.querySelector(".card").offsetWidth + 16;
})

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
carousel.scrollLeft = firstCardWidth / 1.40;
console.log(firstCardWidth / 1.40);
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(firstCardWidth / 1.5);
        carousel.scrollLeft += btn.id == "left" ? -(firstCardWidth * 1) : (firstCardWidth * 1);
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
        console.log("work start");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        // carousel.scrollLeft = carousel.offsetWidth;
        carousel.scrollLeft = firstCardWidth / 1.40;
        carousel.classList.remove("no-transition");
        console.log("work end");
        console.log(firstCardWidth / 1.40);
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
// autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);




// Start card video player
const videoCards = document.querySelectorAll('.card__inner');
videoCards.forEach(videoCard => {
    const thumbnailContainer = videoCard.querySelector('.card__picture');
    const thumbnailContainerImg = videoCard.querySelector('.card__picture img');
    const video = videoCard.querySelector('.card__video .video');
    const volumeToggle = videoCard.querySelector('.card__video .volume-toggle');

    // videoCard.style.height = thumbnailContainerImg.height + "px";

    // start
    let attrHref;
    volumeToggle.addEventListener('click', e => {
      e.preventDefault();
    
      if (video.muted) {
        video.muted = false;
        volumeToggle.classList.remove('volume-muted');
        volumeToggle.querySelector("i").classList.remove("fa-volume-xmark")
        volumeToggle.querySelector("i").classList.add("fa-volume-high")
      } else {
        video.muted = true;
        volumeToggle.classList.add('volume-muted');
        volumeToggle.querySelector("i").classList.add("fa-volume-xmark")
        volumeToggle.querySelector("i").classList.remove("fa-volume-high")
      }
    
    });

    videoCard.addEventListener('mouseenter', () => {
        videoCard.classList.add('playing');
        // thumbnailContainer.style.display = 'none';
        // video.style.display = 'block';
        video.play();
    });

    videoCard.addEventListener('mouseleave', () => {
        // videoCard.classList.remove('playing');
        // thumbnailContainer.style.display = 'block';
        // video.style.display = 'none';
        // video.currentTime = 0;
        video.pause();
    });
});
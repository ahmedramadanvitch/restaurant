// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})
// ******************************************************** //

// Start btn-up scroll to top

let btnUp = document.querySelector(".btn-up");

let btnUpScroll = () => {
  // btn-up scroll to top
  if (window.scrollY >= 250) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", btnUpScroll);

// End btn-up scroll to top //
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%^^^^^^^^^^^^^^^^&&&&&&&&& //

// Counter section // *********************************************//
let sectionCounter = document.querySelector(".counter");
let spanCounterNum = document.querySelectorAll(".number-span-js");
let started = false;

let counterScroll = () => {
    // scroll stats numbers increase number in section Counter stats
    if (window.scrollY >= sectionCounter.offsetTop - 300) {
      if (!started) {
          spanCounterNum.forEach((awe) => startCountNumber(awe));
      }
      started = true;
  };
}

// function increase number in section Counter
function startCountNumber(element) {
    let goal = element.dataset.goal;
    let CounterNumber = setInterval ( ()=> {
        element.textContent++
        if (element.textContent == goal) {
            clearInterval(CounterNumber)
        }
    }, 1000 / goal);
};

window.addEventListener("scroll", counterScroll);
// *****************************************************//

// start Menu

// ************** start ul li projects ****************************************//
let liMenu = document.querySelectorAll(".swicher-ul li");
let boxFeature = document.querySelectorAll(".menu .box"); 
// console.log(imgsProjects)

liMenu.forEach( (li)=> {
    li.addEventListener("click", manageBox);
    li.addEventListener("click", removeActive);
});
// remove active class from all li and add to the current element you clicked on it
function removeActive(){
    liMenu.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
};
// manage box
function manageBox() {
    boxFeature.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.work).forEach((ele) => {
        ele.style.display = "block";
    })
};
// ************** End ul li Menu ************************************//
// end Menu

// ********************************************************************//
// start rate stars

let allStars = document.querySelectorAll(".star-rating i");

allStars.forEach( (star, index1) => {
    // addEvenListener on all stars in click
    star.addEventListener("click", () =>{
        // console.log(index1) number of index
        // do loop through allStars again
        allStars.forEach( (star, index2) => {
            // console.log(index1) number of index

            // do if condition
            if (index1 >= index2) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
            
        })
    })
});


// *********************** gallery ******************************//

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}
// 00000##########$$$$$$$$$$$%%%%%%%%%%%%%^^^^^^^^^^^&&&&&&&&&&*********** //

// start nav links active on scrolling of sections //

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("nav a");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
      section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  navLinks.forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};
// end nav links active on scrolling of sections // $$$$$$$$$$$$$$$$$$$$$$$$
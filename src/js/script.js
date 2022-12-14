// const {
//   doc
// } = require("prettier");

const toggleMenu = () => {
  const burger = document.querySelector(".js-burger");
  const menu = document.querySelector(".js-header-nav");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  })
}

toggleMenu();

let testimonialsSlider = document.querySelector('.testimonials-slider');

if (testimonialsSlider) {
  testimonialsSlider = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".testimonials-slider_next",
      prevEl: ".testimonials-slider_prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      }
    },
  })
}

function openTab(evt, tabName) {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("board-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const tabBtns = document.querySelectorAll(".tab-btn");
const toggleTab = () => {
  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-href");
      openTab(e, target)
    })
  });
};
toggleTab()


let fansSubmitBtn = document.querySelector('#fansForm');
if (fansSubmitBtn) {
  var fansFormConfig = {
    container: '#fansForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function (container) {
      console.log('form submitted')
      fansSubmitBtn.submit();
    },
  };
  var validator = new VanillaValidator(fansFormConfig);
}


let mediaSubmitBtn = document.querySelector('#mediaForm');
if (mediaSubmitBtn) {
  var mediaFormConfig = {
    container: '#mediaForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function (container) {
      console.log('form submitted')
      mediaSubmitBtn.submit();
    },
  };
  var validator = new VanillaValidator(mediaFormConfig);
}


let teamSubmitBtn = document.querySelector('#teamForm');
if (teamSubmitBtn) {
  var teamFormConfig = {
    container: '#teamForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function (container) {
      console.log('form submitted')
      teamSubmitBtn.submit();
    },
  };
  var validator = new VanillaValidator(teamFormConfig);
}



const modal = document.querySelector('.modal');

// close on click on overlay
if (modal) {
  const modalClose = document.querySelector('.close');
  const overlay = document.querySelector('.overlay');

  const modalTrigger = document.querySelector('#subscribeBtn');

  modalTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
    document.body.style.cssText = `overflow: hidden;`;
    overlay.classList.add('show');
  });

  modalClose.addEventListener('click', (e) => {
    modal.classList.remove('show');
    document.body.style.cssText = '';
    overlay.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.cssText = '';
      overlay.classList.remove('show');
    }
  });
}



// // close on press of escape button

// document.addEventListener('keydown', (e) => {
//     if (e.code === "Escape" && modal.classList.contains('show')) {
//       modal.classList.remove('show');
//       document.body.style.cssText = '';
//     }
//   });

// get file name for download
var inputs = document.querySelectorAll('.input_file');
if (inputs) {
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      else
        fileName = e.target.value.split('\\').pop();

      if (fileName)
        label.querySelector('span').innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
  });
}


// coaches and scouts form validation and navigation


let coachesSubmit = document.querySelector('#coachesForm');
let stepForm = document.querySelectorAll('.step-form');
// stepForm[1].style.display = 'none';
// let currentForm = 0;


function nextForm() {
  console.log(stepForm[0]);
  stepForm[0].style.display = 'none';
  stepForm[1].style.display = 'block';
}


function prevForm() {
  stepForm[1].style.display = 'none';
  stepForm[0].style.display = 'block';
}

document.querySelector('#prevForm').addEventListener("click", function () {
  prevForm();
});

if (coachesSubmit) {

var configSteps = {
  container: '.form-container',
  button: '.next-step',
  validationBy: 'onclick',
  validateOnFieldChanges: false,

  selectors: {
    required: 'form-input'
  },
  onContainerSuccess: function (container) {
    console.log('container')
    nextForm();
    // container.classList.remove('active');
    // container.nextElementSibling.classList.add('active');
  }
};
var validatorSteps = new VanillaValidator(configSteps);

var configForm = {
  validateOnFieldChanges: false,

  selectors: {
    required: 'form-input'
  },

  onFormSubmit: function (container) {
    console.log('submit')
  }
};
var validatorForm = new VanillaValidator(configForm);
}







// run for sprite svg support 
svg4everybody();
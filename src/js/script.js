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

// const tabBtns = document.querySelectorAll(".tab-btn");
// const toggleTab = () => {
//   tabBtns.forEach(tabBtn => {
//     tabBtn.addEventListener("click", (e) => {
//       let target = e.target.getAttribute("data-href");
//       openTab(e, target)
//     })
//   });
// };
// toggleTab()


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

function nextForm() {
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



const formTemplate =
  `
<div class="form-template js-form-template">
<div class="form__row">
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="First Name">
      </label>
    </div>
  </div>
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="Last Name">
      </label>
    </div>
  </div>
</div>
<div class="form__row">
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="Height">
      </label>
    </div>
  </div>
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="Weight">
      </label>
    </div>
  </div>
</div>
<div class="form__row">
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="High School">
      </label>
    </div>
  </div>
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="City">
      </label>
    </div>
  </div>
</div>
<div class="form__row">
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="State">
      </label>
    </div>
  </div>
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="Position">
      </label>
    </div>
  </div>
</div>
<div class="form__row">
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="Year">
      </label>
    </div>
  </div>
  <div class="form__col">
    <div class="form__box">
      <label class="form-label">
        <input class="form-input" type="text" placeholder="Hudl Link">
      </label>
    </div>
  </div>
</div>
<div class="form__remove_btn">
  <button type="button" class="form-remove" title="Remove prospect"></button>
</div>
</div>
`;


const addTemplateBtn = document.getElementById("addFormTemplate");
// const formBtns = document.querySelector('.js-form-btns');
const formTemplateWrapper = document.querySelector('.js-form-template-wrapper');
const removeFormBtns = document.querySelectorAll('.form-remove');
let formCounter = 1;
const newForm = document.querySelectorAll('.form-template');


addTemplateBtn.addEventListener('click', function (e) {
  e.preventDefault();
  formTemplateWrapper.insertAdjacentHTML('beforeEnd', formTemplate);
  formCounter++;
  if (formCounter >= 5) {
    addTemplateBtn.classList.add('disable');
  } else {
    addTemplateBtn.classList.remove('disable');
  }
});

formTemplateWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("form-remove")) {
    e.target.parentNode.parentNode.remove();
    formCounter--;
    if (formCounter >= 5) {
      addTemplateBtn.classList.add('disable');
    } else {
      addTemplateBtn.classList.remove('disable');
    }
  };
})

// run for sprite svg support 
svg4everybody();
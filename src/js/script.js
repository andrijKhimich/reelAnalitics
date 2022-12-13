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
if(fansSubmitBtn) {
  var fansFormConfig = {
    container: '#fansForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function(container) {
      console.log('form submitted')
      fansSubmitBtn.submit();
    },
  };
  var validator = new VanillaValidator(fansFormConfig);
}


let mediaSubmitBtn = document.querySelector('#mediaForm');
if(mediaSubmitBtn) {
  var mediaFormConfig = {
    container: '#mediaForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function(container) {
      console.log('form submitted')
      mediaSubmitBtn.submit();
    },
  };
  var validator = new VanillaValidator(mediaFormConfig);
}


let teamSubmitBtn = document.querySelector('#teamForm');
if(teamSubmitBtn) {
  var teamFormConfig = {
    container: '#teamForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function(container) {
      console.log('form submitted')
      teamSubmitBtn.submit();
    },
  };
  var validator = new VanillaValidator(teamFormConfig);
}



const modal = document.querySelector('.modal');
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

// close on click on overlay

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.body.style.cssText = '';
    overlay.classList.remove('show');
  }
});

// // close on press of escape button

// document.addEventListener('keydown', (e) => {
//     if (e.code === "Escape" && modal.classList.contains('show')) {
//       modal.classList.remove('show');
//       document.body.style.cssText = '';
//     }
//   });


// run for sprite svg support 
svg4everybody();
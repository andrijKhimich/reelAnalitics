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


const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');
if (modalClose) {
  modalClose.addEventListener('click', () => {
    closeModal();
  });
}
// close on click on overlay
// if (modal) {
const overlay = document.querySelector('.overlay');


const openModal = () => {
  modal.classList.add('show');
  document.body.style.cssText = `overflow: hidden;`;
  overlay.classList.add('show');
}
const closeModal = () => {
  modal.classList.remove('show');
  document.body.style.cssText = '';
  overlay.classList.remove('show');
}

// modalClose.addEventListener('click', () => {
//   closeModal();
// });

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
// }

// close on press of escape button

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    modal.classList.remove('show');
    document.body.style.cssText = '';
  }
});

const clearForm = () => {
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => {
    input.value = '';
  });
}

const clearInputFile = () => {
  const inputs = document.querySelectorAll('.input_file');
  inputs.forEach(input => {
    input.value = '';
  });
}

let fansForm = document.querySelector('#fansForm');
if (fansForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php"
  var fansFormConfig = {
    container: '#fansForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function () {
      var name = document.getElementById('fansFirstName').value;
      var lastName = document.getElementById('fansLastName').value;
      var school = document.getElementById('fansHightSchool').value;
      var city = document.getElementById('fansCity').value;
      var state = document.getElementById('fansState').value;
      var email = document.getElementById('fansEmail').value;
      var phone = document.getElementById('fansCellPhone').value;

      var data = {
        'action': 'addFans',
        'name': name,
        'lastName': lastName,
        'school': school,
        'city': city,
        'state': state,
        'email': email,
        'phone': phone,
      };
      jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        data: data,
        success: function (res) {
          openModal();
          clearForm();
        },
      });

      // openModal();
      // clearForm();
    }
  };
  var validator = new VanillaValidator(fansFormConfig);
}


let mediaForm = document.querySelector('#mediaForm');
if (mediaForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php"
  var mediaFormConfig = {
    container: '#mediaForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function () {
      var name = document.getElementById('mediaFirstName').value;
      var lastName = document.getElementById('mediaLastName').value;
      var school = document.getElementById('mediaHightSchool').value;
      var city = document.getElementById('mediaCity').value;
      var state = document.getElementById('mediaState').value;
      var email = document.getElementById('mediaEmail').value;
      var phone = document.getElementById('mediaCellPhone').value;

      var data = {
        'action': 'addMedia',
        'name': name,
        'lastName': lastName,
        'school': school,
        'city': city,
        'state': state,
        'email': email,
        'phone': phone,
      };
      jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        data: data,
        beforeSend: function () {

        },
        success: function (res) {
          // console.log(res, data);
        },
        error: function (res) {
          // console.log(res)
        },
      });

      openModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(mediaFormConfig);
}




let athletesForm = document.querySelector('#athletesForm');
if (athletesForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php"
  var athletesFormConfig = {
    container: '#athletesForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function () {
      var name = document.getElementById('athletesFirstName').value;
      var lastName = document.getElementById('athletesLastName').value;
      var height = document.getElementById('athletesHeight').value;
      var weight = document.getElementById('athletesWeight').value;
      var school = document.getElementById('athletesHighSchool').value;
      var city = document.getElementById('athletesCity').value;
      var state = document.getElementById('athletesState').value;
      var position = document.getElementById('athletesPosition').value;
      var year = document.getElementById('athletesYear').value;
      var link = document.getElementById('athletesLink').value;
      var twitter = document.getElementById('athletesTwitter').value;
      var email = document.getElementById('athletesEmail').value;

      var data = {
        'action': 'addAthletes',
        'name': name,
        'lastName': lastName,
        'height': height,
        'weight': weight,
        'school': school,
        'city': city,
        'state': state,
        'position': position,
        'year': year,
        'link': link,
        'twitter': twitter,
        'email': email,
      };
      jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        data: data,
        beforeSend: function () {

        },
        success: function (res) {
          // console.log(res, data);
        },
        error: function (res) {
          // console.log(res)
        },
      });

      openModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(athletesFormConfig);
}

let teamForm = document.querySelector('#teamForm');
if (teamForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php"
  var teamFormConfig = {
    container: '#teamForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function () {
      var name = document.getElementById('teamFirstName').value;
      var lastName = document.getElementById('teamLastName').value;
      var school = document.getElementById('teamHightSchool').value;
      var city = document.getElementById('teamCity').value;
      var state = document.getElementById('teamState').value;
      var email = document.getElementById('teamEmail').value;
      var phone = document.getElementById('teamCellPhone').value;

      var data = {
        'action': 'addTeam',
        'name': name,
        'lastName': lastName,
        'school': school,
        'city': city,
        'state': state,
        'email': email,
        'phone': phone,
      };
      jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        data: data,
        beforeSend: function () {

        },
        success: function (res) {
          // console.log(res, data);
        },
        error: function (res) {
          // console.log(res)
        },
      });
      openModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(teamFormConfig);
}

let subscribeForm = document.querySelector('#subscribeForm');
if (subscribeForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php"
  var subscribeFormConfig = {
    container: '#subscribeForm',
    validationBy: 'onclick',
    button: '.btn_submit',
    validateOnFieldChanges: false,
    selectors: {
      required: 'form-input'
    },
    onFormSubmit: function () {
      var email = document.getElementById('subscriberEmail').value;

      var data = {
        'action': 'addSubscriber',
        'email': email,
      };
      jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        data: data,
        beforeSend: function () {

        },
        success: function (res) {
          // console.log(res, data);
        },
        error: function (res) {
          // console.log(res)
        },
      });

      openModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(subscribeFormConfig);
}

// coaches and scouts form validation and navigation
let coachesSubmit = document.querySelector('#coachesForm');

if (coachesSubmit) {
  let ajaxurl = "../wp-admin/admin-ajax.php"

  let stepForm = document.querySelectorAll('.step-form');
  let addTemplateBtn = document.getElementById("addFormTemplate");
  let formTemplateWrapper = document.querySelector('.js-form-template-wrapper');

  let formCounter = 1;

  // first step form validation////////////////////////////////////////////////////////////////////////////
  var configSteps = {
    container: '.form-container',
    button: '.next-step',
    validationBy: 'onclick',
    validateOnFieldChanges: true,
    selectors: {
      required: 'form-input'
    },
    onContainerSuccess: function () {
      nextForm();
    }
  };


  var validatorSteps = new VanillaValidator(configSteps);
  // let inputFiles = document.querySelectorAll('.input_file');
  // Array.prototype.forEach.call(inputFiles, function (input) {
  //   var label = input.nextElementSibling,
  //     labelVal = label.innerHTML;

  //   input.addEventListener('change', function (e) {

  //     var fileName = '';
  //     if (this.files && this.files.length > 1) {
  //       fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
  //     } else {
  //       fileName = e.target.value.split('\\').pop();
  //     }

  //     if (fileName) {
  //       label.querySelector('span').innerHTML = fileName;
  //       // addTemplateBtn.classList.remove('disable');

  //     } else {
  //       label.innerHTML = labelVal;
  //       console.log('else');
  //     }
  //   });
  // });


  var configStep1 = {
    validateOnFieldChanges: true,
    // selectors: {
    //   required: 'form-input'
    // },
    customValidates: {
      'coachProspectFile': {
        message: 'Select file or fill text fields...',
        fn: function (field, container) {
          const formCounter = field.getAttribute('data-counter');

          let button = container.querySelector('#addFormTemplate');
          let firstProspectName = container.querySelector(`#coachProspectName${formCounter}`).value;
          let firstProspectLastName = container.querySelector(`#coachProspectLastName${formCounter}`).value;
          if (field.value) {
            button.classList.remove('disable');
            return true;

          } else if (firstProspectName && firstProspectLastName) {
            button.classList.remove('disable');
            return true;
          } else {
            button.classList.add('disable');
            return false;
          }
        }
      },
      'coachData': {
        message: 'Text field requred... 123',

        fn: function (field, container) {
          const formCounter = field.getAttribute('data-counter');
          let firstProspectName = container.querySelector(`#coachProspectName${formCounter}`).value;
          let firstProspectLastName = container.querySelector(`#coachProspectLastName${formCounter}`).value;
          let button = container.querySelector('#addFormTemplate');

          // check validation of text fields
          if (firstProspectName && firstProspectLastName) {
            button.classList.remove('disable');
          } else {
            button.classList.add('disable');
          }
          let fileValue = container.querySelector(`#inputFile${formCounter}`).value;

          if (fileValue || field.value) {
            return true;
          } else {
            return false;
          }
        }
      }
    },

    onFormSubmit: function () {
      // this.config.selectors.required = 'form-input';
      addTemplateBtn.classList.add('disable');
      console.log('submit');
      const data = Object.fromEntries(new FormData(coachesSubmit));
      console.log(data);
      openModal();
      clearForm();
      clearInputFile();
      prevForm();
      $(".form-template:not(:first)").remove();
      formCounter = 1;
      // label.querySelector('span').innerHTML = 'add';
    },
  };
  var validator = new VanillaValidator(configStep1);

  addTemplateBtn.addEventListener('click', function () {
    formCounter++;
    console.log(formCounter);
    if (formCounter >= 5 || formCounter >= 1) {

      addTemplateBtn.classList.add('disable');
    } else {
      addTemplateBtn.classList.remove('disable');
    }
    formTemplateWrapper.insertAdjacentHTML('beforeEnd', `
        <div class="form-template js-form-template">
        <div class="form__row">
          <div class="form__col">
            <div class="form__box">
              <label class="form-label">
                <input class="form-input vv-control custom-validate" data-counter="${formCounter}" data-validate-key="coachData" name="coachProspectName${formCounter}" id="coachProspectName${formCounter}" type="text" placeholder="First Name">
              </label>
            </div>
          </div>
          <div class="form__col">
            <div class="form__box">
              <label class="form-label">
                <input class="form-input vv-control custom-validate" data-counter="${formCounter}" data-validate-key="coachData" name="coachProspectLastName${formCounter}" id="coachProspectLastName${formCounter}" type="text" placeholder="Last Name">
              </label>
            </div>
          </div>
        </div>
        <p>or</p>
        <div class="form-file">
          <input type="file" accept=".doc,.docx,.pdf" data-counter="${formCounter}" data-validate-key="coachProspectFile" id="inputFile${formCounter}" name="inputFile${formCounter}" class="input_file custom-validate">
          <label for="inputFile${formCounter}">
            <svg class="icon-paperclip">
              <use xlink:href="img/svg/sprite.svg#paperclip">
              </use>
            </svg>
            <span>UPLOAD PLAYER PROFILES</span>
          </label>
        </div>
        <div class="form__remove_btn">
          <button type="button" class="form-remove" title="Remove prospect"></button>
        </div>
        </div>
        `);

    // var configStep2 = {
    //   validateOnFieldChanges: true,
    //   customValidates: {
    //     'coachProspectFile': {
    //       message: 'Select file or fill text fields...',
    //       fn: function (field, container) {
    //         const formCounter = field.getAttribute('data-counter');
    //         console.log(formCounter);

    //         let button = container.querySelector('#addFormTemplate');
    //         let firstProspectName = container.querySelector(`#coachProspectName${formCounter}`).value;
    //         let firstProspectLastName = container.querySelector(`#coachProspectLastName${formCounter}`).value;
    //         if (field.value) {
    //           button.classList.remove('disable');
    //           return true;

    //         } else if (firstProspectName && firstProspectLastName) {
    //           button.classList.remove('disable');
    //           return true;
    //         } else {
    //           button.classList.add('disable');
    //           return false;
    //         }
    //       }
    //     },
    //     'coachData': {
    //       message: 'Text field requred... 123',

    //       fn: function (field, container) {
    //         const formCounter = field.getAttribute('data-counter');
    //         console.log(formCounter);

    //         let firstProspectName = container.querySelector(`#coachProspectName${formCounter}`).value;
    //         let firstProspectLastName = container.querySelector(`#coachProspectLastName${formCounter}`).value;
    //         let button = container.querySelector('#addFormTemplate');

    //         // check validation of text fields
    //         if (firstProspectName && firstProspectLastName) {
    //           button.classList.remove('disable');
    //         } else {
    //           button.classList.add('disable');
    //         }
    //         let fileValue = container.querySelector(`#inputFile${formCounter}`).value;

    //         if (fileValue || field.value) {
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       }
    //     }
    //   },

    //   // callbacks: {
    //   //   success: function (element) {
    //   //     console.log('success');
    //   //   },
    //   // },
    //   onFormSubmit: function () {
    //     // this.config.selectors.required = 'form-input';
    //     addTemplateBtn.classList.add('disable');
    //     console.log('submit');
    //     const data = Object.fromEntries(new FormData(coachesSubmit).entries());
    //     console.log(data);
    //     openModal();
    //     clearForm();
    //     clearInputFile();
    //     prevForm();
    //     $(".form-template:not(:first)").remove();
    //     formCounter = 1;
    //     // label.querySelector('span').innerHTML = 'add';
    //   },
    // };
    // var validator = new VanillaValidator(configStep2);

  });

  // var configStep1 = {
  //   // container: '.form-template',
  //   // button: '#submitBtn',
  //   // validationBy: 'onclick',
  //   validateOnFieldChanges: true,
  //   selectors: {
  //     required: 'form-input'
  //   },
  //   customValidates: {
  //     'coachProspect1File': {
  //       message: 'Select file or fill text fields...',
  //       fn: function (field, container) {
  //         console.log(field.value)
  //         if (field.value !== '') {
  //           console.log(' not empty');
  //           this.config.selectors.required = '';
  //           // addTemplateBtn.classList.remove('require');

  //           return true;
  //         }
  //         if (field.value === '') {
  //           cons
  //           this.config.selectors.required = 'form-input';
  //           // addTemplateBtn.classList.remove('require');
  //           return true;
  //         }
  //       }
  //     }
  //   },
  //   callbacks: {
  //     afterValidate: function(element){
  //       console.log('success');
  //     },
  //   },
  //   onContainerSuccess: function () {

  //     console.log('success 1');
  //     //   // formCounter++;
  //     //   // let inputFiles = document.querySelectorAll('.input_file');

  //     //   // Array.prototype.forEach.call(inputFiles, function (input) {
  //     //   //   var label = input.nextElementSibling,
  //     //   //     labelVal = label.innerHTML;

  //     //   //   input.addEventListener('change', function (e) {

  //     //   //     var fileName = '';
  //     //   //     if (this.files && this.files.length > 1) {
  //     //   //       fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
  //     //   //     } else {
  //     //   //       fileName = e.target.value.split('\\').pop();
  //     //   //     }

  //     //   //     if (fileName) {
  //     //   //       label.querySelector('span').innerHTML = fileName;
  //     //   //       addTemplateBtn.classList.remove('disable');

  //     //   //     } else {
  //     //   //       label.innerHTML = labelVal;
  //     //   //       console.log('else');
  //     //   //     }
  //     //   //   });
  //     //   // });
  //     //   // if (formCounter >= 5 || formCounter >= 1) {
  //     //   //   addTemplateBtn.classList.add('disable');
  //     //   // } else {
  //     //   //   addTemplateBtn.classList.remove('disable');
  //     //   // }
  //     //   formTemplateWrapper.insertAdjacentHTML('beforeEnd', `
  //     //   <div class="form-template js-form-template">
  //     //   <div class="form__row">
  //     //     <div class="form__col">
  //     //       <div class="form__box">
  //     //         <label class="form-label">
  //     //           <input class="form-input vv-control" name="coachProspect${formCounter}Name" id="coachProspect${formCounter}Name" type="text" placeholder="First Name">
  //     //         </label>
  //     //       </div>
  //     //     </div>
  //     //     <div class="form__col">
  //     //       <div class="form__box">
  //     //         <label class="form-label">
  //     //           <input class="form-input vv-control" name="coachProspect${formCounter}LastName" id="coachProspect${formCounter}LastName" type="text" placeholder="Last Name">
  //     //         </label>
  //     //       </div>
  //     //     </div>
  //     //   </div>
  //     //   <p>or</p>
  //     //   <div class="form-file">
  //     //     <input type="file" accept=".doc,.docx,.pdf" id="inputFile${formCounter}" class="input_file">
  //     //     <label for="inputFile${formCounter}">
  //     //       <svg class="icon-paperclip">
  //     //         <use xlink:href="img/svg/sprite.svg#paperclip">
  //     //         </use>
  //     //       </svg>
  //     //       <span>UPLOAD PLAYER PROFILES</span>
  //     //     </label>
  //     //   </div>
  //     //   <div class="form__remove_btn">
  //     //     <button type="button" class="form-remove" title="Remove prospect"></button>
  //     //   </div>
  //     //   </div>
  //     //   `);
  //     //   //  add template
  //   },
  //   onFormSubmit: function () {
  //     // e.preventDefault()
  //     this.config.selectors.required = 'form-input';
  //     console.log('submit');
  //     const data = Object.fromEntries(new FormData(coachesSubmit).entries());
  //     console.log(data);
  //     openModal();
  //     clearForm();
  //     clearInputFile();
  //     prevForm();
  //   },
  // };
  // var validator = new VanillaValidator(configStep1);
  // var configStep1 = {
  //   // container: '.form-template',
  //   // button: '#submitBtn',
  //   // validationBy: 'onclick',
  //   validateOnFieldChanges: true,
  //   selectors: {
  //     required: 'form-input'
  //   },
  //   // customValidates: {
  //   // 'block-word-java': {
  //   //   message: 'The word "java" is forbidden.',
  //   //   fn: function(field, container){
  //   //     if(field.value === 'java') return false;
  //   //     return true;
  //   //   }
  //   // }
  //   // },
  //   onFormSubmit: function () {
  //     console.log('submit');
  //     const data = Object.fromEntries(new FormData(coachesSubmit).entries());
  //     console.log(data);
  //     openModal();
  //     clearForm();
  //     clearInputFile();
  //     prevForm();
  //   },
  // };
  // var validator = new VanillaValidator(configStep1);
  // ......................................................................................
  // let inputFiles = document.querySelectorAll('.input_file');

  // Array.prototype.forEach.call(inputFiles, function (input) {
  //   var label = input.nextElementSibling,
  //     labelVal = label.innerHTML;

  //   input.addEventListener('change', function (e) {

  //     var fileName = '';
  //     if (this.files && this.files.length > 1)
  //       fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
  //     else
  //       fileName = e.target.value.split('\\').pop();

  //     if (fileName) {
  //       label.querySelector('span').innerHTML = fileName;
  //     } else {
  //       label.innerHTML = labelVal;
  //       console.log('else');

  //     }
  //   });
  // });




  // coachesSubmit.addEventListener('click', function (e) {
  //   // form validation after added new fields
  //   if (e.target.classList.contains("btn_secondary")) {
  //     e.preventDefault();
  //     // formCounter++;
  //     // let inputFiles = document.querySelectorAll('.input_file');

  //     // Array.prototype.forEach.call(inputFiles, function (input) {
  //     //   var label = input.nextElementSibling,
  //     //     labelVal = label.innerHTML;

  //     //   input.addEventListener('change', function (e) {

  //     //     var fileName = '';
  //     //     if (this.files && this.files.length > 1)
  //     //       fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
  //     //     else
  //     //       fileName = e.target.value.split('\\').pop();

  //     //     if (fileName) {
  //     //       label.querySelector('span').innerHTML = fileName;

  //     //       // var configForm = {

  //     //       //   validateOnFieldChanges: true,
  //     //       //   selectors: {
  //     //       //     required: 'input_file'
  //     //       //   },

  //     //       //   onFormSubmit: function () {
  //     //       //     console.log('submit');
  //     //       //     const data = Object.fromEntries(new FormData(coachesSubmit).entries());
  //     //       //     console.log(data);
  //     //       //     openModal();
  //     //       //     clearForm();
  //     //       //     clearInputFile();
  //     //       //     prevForm();
  //     //       //     label.querySelector('span').innerHTML = 'UPLOAD PLAYER PROFILES';
  //     //       //     $(".form-template").not(":first").remove();
  //     //       //   },
  //     //       // };
  //     //       // var validator = new VanillaValidator(configForm);
  //     //     } else {
  //     //       label.innerHTML = labelVal;
  //     //       console.log('else');
  //     //       // var configForm = {

  //     //       //   validateOnFieldChanges: true,
  //     //       //   selectors: {
  //     //       //     required: 'form-input'
  //     //       //   },

  //     //       //   onFormSubmit: function () {
  //     //       //     console.log('submit');
  //     //       //     const data = Object.fromEntries(new FormData(coachesSubmit).entries());
  //     //       //     console.log(data);
  //     //       //     openModal();
  //     //       //     clearForm();
  //     //       //     clearInputFile();
  //     //       //     prevForm();
  //     //       //     label.querySelector('span').innerHTML = 'UPLOAD PLAYER PROFILES';
  //     //       //   },
  //     //       // };
  //     //       // var validator = new VanillaValidator(configForm);
  //     //     }
  //     //   });
  //     // });
  //     // if (formCounter >= 5) {
  //     //   addTemplateBtn.classList.add('disable');
  //     // } else {
  //     //   addTemplateBtn.classList.remove('disable');
  //     // }
  //   }
  // });

  function nextForm() {
    stepForm[0].style.display = 'none';
    stepForm[1].style.display = 'block';
  }

  function prevForm() {
    stepForm[1].style.display = 'none';
    stepForm[0].style.display = 'block';
  }

  // step back to prev form
  document.querySelector('#prevForm').addEventListener("click", function () {
    prevForm();
  });

  // remove disable button and forms 
  formTemplateWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("form-remove")) {
      e.target.parentNode.parentNode.remove();
      formCounter--;
      console.log(formCounter);
      if (formCounter >= 5 || formCounter >= 1) {
        addTemplateBtn.classList.add('disable');
      } else {
        addTemplateBtn.classList.remove('disable');
      }
    };
  });
}



// Fix table head
function tableFixHead(e) {
  const el = e.target,
    sT = el.scrollTop;
  el.querySelectorAll("thead th").forEach(th =>
    th.style.transform = `translateY(${sT}px)`
  );
}
document.querySelectorAll(".board-scroll").forEach(el =>
  el.addEventListener("scroll", tableFixHead)
);

// run for sprite svg support
svg4everybody();
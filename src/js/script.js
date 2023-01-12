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


const successModal = document.querySelector('#successModal');
const formModal = document.querySelector('#formModal');

const modalCloseBtns = document.querySelectorAll('.close');
if (modalCloseBtns) {
  modalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      closeSuccessModal();
      closeFormModal();
    });
  })
}

const openFormModalBtn = document.querySelector('#subscribeModal');
if (openFormModalBtn) {
  openFormModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openFormModal();
  });
}


const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
  closeSuccessModal();
  closeFormModal();
});

const openSuccessModal = () => {
  successModal.classList.add('show');
  document.body.style.cssText = `overflow: hidden;`;
  overlay.classList.add('show');
}
const closeSuccessModal = () => {
  successModal.classList.remove('show');
  document.body.style.cssText = '';
  overlay.classList.remove('show');
}

const openFormModal = () => {
  formModal.classList.add('show');
  document.body.style.cssText = `overflow: hidden;`;
  overlay.classList.add('show');
}
const closeFormModal = () => {
  formModal.classList.remove('show');
  document.body.style.cssText = '';
  overlay.classList.remove('show');
}

successModal.addEventListener('click', (e) => {
  if (e.target === successModal) {
    closeSuccessModal();
  }
});

formModal.addEventListener('click', (e) => {
  if (e.target === formModal) {
    closeFormModal();
  }
});

// close on press of escape button


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
  let ajaxurl = "../wp-admin/admin-ajax.php";
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
          openSuccessModal();
          clearForm();
        },
      });
    }
  };
  var validator = new VanillaValidator(fansFormConfig);
}


let mediaForm = document.querySelector('#mediaForm');
if (mediaForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php";
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

      openSuccessModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(mediaFormConfig);
}




let athletesForm = document.querySelector('#athletesForm');
if (athletesForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php";
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
      console.log(data);
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

      openSuccessModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(athletesFormConfig);
}

let teamForm = document.querySelector('#teamForm');
if (teamForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php";
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
      openSuccessModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(teamFormConfig);
}

let subscribeForm = document.querySelector('#subscribeForm');
if (subscribeForm) {
  let ajaxurl = "../wp-admin/admin-ajax.php";
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

      openSuccessModal();
      clearForm();
    }
  };
  var validator = new VanillaValidator(subscribeFormConfig);
}

// coaches and scouts form validation and navigation
let coachesSubmit = document.querySelector('#coachesForm');

if (coachesSubmit) {
  let ajaxurl = "../wp-admin/admin-ajax.php";

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
  let inputFiles = document.querySelectorAll('.input_file');
  Array.prototype.forEach.call(inputFiles, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {

      var fileName = '';
      if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      } else {
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) {
        label.querySelector('span').innerHTML = fileName;

      } else {
        label.innerHTML = labelVal;
        console.log('else');
      }
    });
  });

  // let formDataCounter = 1;
  const shouldFormValidate = (formDataCounter) => {
    let currentCounter = +formDataCounter;
    if (currentCounter > formCounter) {
      return true;
    } else {
      return false;
    }
  };
  var configCoaches = {
    validateOnFieldChanges: true,
    callbacks: {
      error: function (a, b) {
        debugger;
      }
    },
    customValidates: {
      'coachProspectFile': {
        message: 'Select file or fill text fields...',
        fn: function (field, container) {
          let formDataCounter = field.getAttribute('data-counter');

          let checkForm = shouldFormValidate(formDataCounter);
          if (checkForm) {
            return true;
          }

          let button = container.querySelector('#addFormTemplate');
          let prospectName = container.querySelector(`#coachProspectName${formDataCounter}`).value;
          let prospectLastName = container.querySelector(`#coachProspectLastName${formDataCounter}`).value;
          let prospectHeight = container.querySelector(`#coachProspectHeight${formDataCounter}`).value;
          let prospectWeight = container.querySelector(`#coachProspectWeight${formDataCounter}`).value;
          let prospectSchool = container.querySelector(`#coachProspectSchool${formDataCounter}`).value;
          let prospectCity = container.querySelector(`#coachProspectCity${formDataCounter}`).value;
          let prospectState = container.querySelector(`#coachProspectState${formDataCounter}`).value;
          let prospectPosition = container.querySelector(`#coachProspectPosition${formDataCounter}`).value;
          let prospectYear = container.querySelector(`#coachProspectYear${formDataCounter}`).value;
          let prospectLink = container.querySelector(`#coachProspectLink${formDataCounter}`).value;

          if (field.value) {
            button.classList.remove('disable');
            return true;
          } else if (prospectName && prospectLastName && prospectHeight && prospectWeight && prospectSchool && prospectCity && prospectState && prospectPosition && prospectYear && prospectLink) {
            button.classList.remove('disable');
            return true;
          } else {
            button.classList.add('disable');
            return false;
          }
        }
      },
      'coachData': {
        message: 'Text field required...',

        fn: function (field, container) {
          let formDataCounter = field.getAttribute('data-counter');
          let checkForm = shouldFormValidate(formDataCounter);
          if (checkForm) {
            return true;
          }
          // debugger;
          let prospectName = container.querySelector(`#coachProspectName${formDataCounter}`).value;
          let prospectLastName = container.querySelector(`#coachProspectLastName${formDataCounter}`).value;
          let prospectHeight = container.querySelector(`#coachProspectHeight${formDataCounter}`).value;
          let prospectWeight = container.querySelector(`#coachProspectWeight${formDataCounter}`).value;
          let prospectSchool = container.querySelector(`#coachProspectSchool${formDataCounter}`).value;
          let prospectCity = container.querySelector(`#coachProspectCity${formDataCounter}`).value;
          let prospectState = container.querySelector(`#coachProspectState${formDataCounter}`).value;
          let prospectPosition = container.querySelector(`#coachProspectPosition${formDataCounter}`).value;
          let prospectYear = container.querySelector(`#coachProspectYear${formDataCounter}`).value;
          let prospectLink = container.querySelector(`#coachProspectLink${formDataCounter}`).value;

          let button = container.querySelector('#addFormTemplate');

          if (prospectName && prospectLastName && prospectHeight && prospectWeight && prospectSchool && prospectCity && prospectState && prospectPosition && prospectYear && prospectLink) {
            button.classList.remove('disable');
          } else {
            button.classList.add('disable');
          }
          // console.log(field)

          let fileValue = container.querySelector(`#inputFile${formDataCounter}`).value;

          if (fileValue || field.value) {
            return true;
          } else {
            return false;
          }

        }
      },
    },
    onFormSubmit: function () {
      console.log('submit');
      var name = document.getElementById('coachName').value;
      var lastName = document.getElementById('coachLastName').value;
      var title = document.getElementById('coachTitle').value;
      var email = document.getElementById('coachEmail').value;
      var phone = document.getElementById('coachPhone').value;
      var university = document.getElementById('coachUniversity').value;

      var playerName1 = document.getElementById('coachProspectName1').value;
      var playerLastName1 = document.getElementById('coachProspectLastName1').value;
      var playerHeight1 = document.getElementById('coachProspectHeight1').value;
      var playerWeight1 = document.getElementById('coachProspectWeight1').value;
      var playerSchool1 = document.getElementById('coachProspectSchool1').value;
      var playerCity1 = document.getElementById('coachProspectCity1').value;
      var playerState1 = document.getElementById('coachProspectState1').value;
      var playerPosition1 = document.getElementById('coachProspectPosition1').value;
      var playerYear1 = document.getElementById('coachProspectYear1').value;
      var playerLink1 = document.getElementById('coachProspectLink1').value;
      var playerFile1 = document.getElementById('inputFile1').value;


      var playerName2 = document.getElementById('coachProspectName2').value;
      var playerLastName2 = document.getElementById('coachProspectLastName2').value;
      var playerHeight2 = document.getElementById('coachProspectHeight2').value;
      var playerWeight2 = document.getElementById('coachProspectWeight2').value;
      var playerSchool2 = document.getElementById('coachProspectSchool2').value;
      var playerCity2 = document.getElementById('coachProspectCity2').value;
      var playerState2 = document.getElementById('coachProspectState2').value;
      var playerPosition2 = document.getElementById('coachProspectPosition2').value;
      var playerYear2 = document.getElementById('coachProspectYear2').value;
      var playerLink2 = document.getElementById('coachProspectLink2').value;
      var playerFile2 = document.getElementById('inputFile2').value;

      var playerName3 = document.getElementById('coachProspectName3').value;
      var playerLastName3 = document.getElementById('coachProspectLastName3').value;
      var playerHeight3 = document.getElementById('coachProspectHeight3').value;
      var playerWeight3 = document.getElementById('coachProspectWeight3').value;
      var playerSchool3 = document.getElementById('coachProspectSchool3').value;
      var playerCity3 = document.getElementById('coachProspectCity3').value;
      var playerState3 = document.getElementById('coachProspectState3').value;
      var playerPosition3 = document.getElementById('coachProspectPosition3').value;
      var playerYear3 = document.getElementById('coachProspectYear3').value;
      var playerLink3 = document.getElementById('coachProspectLink3').value;
      var playerFile3 = document.getElementById('inputFile3').value;

      var playerName4 = document.getElementById('coachProspectName4').value;
      var playerLastName4 = document.getElementById('coachProspectLastName4').value;
      var playerHeight4 = document.getElementById('coachProspectHeight4').value;
      var playerWeight4 = document.getElementById('coachProspectWeight4').value;
      var playerSchool4 = document.getElementById('coachProspectSchool4').value;
      var playerCity4 = document.getElementById('coachProspectCity4').value;
      var playerState4 = document.getElementById('coachProspectState4').value;
      var playerPosition4 = document.getElementById('coachProspectPosition4').value;
      var playerYear4 = document.getElementById('coachProspectYear4').value;
      var playerLink4 = document.getElementById('coachProspectLink4').value;
      var playerFile4 = document.getElementById('inputFile4').value;

      var playerName5 = document.getElementById('coachProspectName5').value;
      var playerLastName5 = document.getElementById('coachProspectLastName5').value;
      var playerHeight5 = document.getElementById('coachProspectHeight5').value;
      var playerWeight5 = document.getElementById('coachProspectWeight5').value;
      var playerSchool5 = document.getElementById('coachProspectSchool5').value;
      var playerCity5 = document.getElementById('coachProspectCity5').value;
      var playerState5 = document.getElementById('coachProspectState5').value;
      var playerPosition5 = document.getElementById('coachProspectPosition5').value;
      var playerYear5 = document.getElementById('coachProspectYear5').value;
      var playerLink5 = document.getElementById('coachProspectLink5').value;
      var playerFile5 = document.getElementById('inputFile5').value;

      var data = {
        'action': 'addProspect',
        'name': name,
        'lastName': lastName,
        'title': title,
        'email': email,
        'phone': phone,
        'university': university,

        'playerName1': playerName1,
        'playerLastName1': playerLastName1,
        'playerHeight1': playerHeight1,
        'playerWeight1': playerWeight1,
        'playerSchool1': playerSchool1,
        'playerCity1': playerCity1,
        'playerState1': playerState1,
        'playerPosition1': playerPosition1,
        'playerYear1': playerYear1,
        'playerLink1': playerLink1,
        'playerFile1': playerFile1,

        'playerName2': playerName2,
        'playerLastName2': playerLastName2,
        'playerHeight2': playerHeight2,
        'playerWeight2': playerWeight2,
        'playerSchool2': playerSchool2,
        'playerCity2': playerCity2,
        'playerState2': playerState2,
        'playerPosition2': playerPosition2,
        'playerYear2': playerYear2,
        'playerLink2': playerLink2,
        'playerFile2': playerFile2,

        'playerName3': playerName3,
        'playerLastName3': playerLastName3,
        'playerHeight3': playerHeight3,
        'playerWeight3': playerWeight3,
        'playerSchool3': playerSchool3,
        'playerCity3': playerCity3,
        'playerState3': playerState3,
        'playerPosition3': playerPosition3,
        'playerYear3': playerYear3,
        'playerLink3': playerLink3,
        'playerFile3': playerFile3,

        'playerName4': playerName4,
        'playerLastName4': playerLastName4,
        'playerHeight4': playerHeight4,
        'playerWeight4': playerWeight4,
        'playerSchool4': playerSchool4,
        'playerCity4': playerCity4,
        'playerState4': playerState4,
        'playerPosition4': playerPosition4,
        'playerYear4': playerYear4,
        'playerLink4': playerLink4,
        'playerFile4': playerFile4,

        'playerName5': playerName5,
        'playerLastName5': playerLastName5,
        'playerHeight5': playerHeight5,
        'playerWeight5': playerWeight5,
        'playerSchool5': playerSchool5,
        'playerCity5': playerCity5,
        'playerState5': playerState5,
        'playerPosition5': playerPosition5,
        'playerYear5': playerYear5,
        'playerLink5': playerLink5,
        'playerFile5': playerFile5,

      };

      console.log(data);
      jQuery.ajax({
        type: "POST",
        url: ajaxurl,
        data: data,
        // processData: false,
        // contentType: false,
        // cache: false,
        // enctype: 'multipart/form-data',
        beforeSend: function () {
          // data.action = 'addProspect';
        },
        success: function (data) {
          console.log(data);
        },
        error: function (res) {
          // console.log(res)
        },
      });
      formCounter = 1;

      addTemplateBtn.classList.add('disable');
      openSuccessModal();
      clearForm();
      clearInputFile();
      prevForm();
    },
  };
  var validator = new VanillaValidator(configCoaches);

  addTemplateBtn.addEventListener('click', function () {
    formCounter++;
    let nextForm = document.querySelector(`.js-form-template[data-counter="${formCounter}"]`);
    nextForm.classList.remove('hidden');


    if (formCounter >= 5) {
      addTemplateBtn.classList.add('disable');
    } else {
      addTemplateBtn.classList.remove('disable');
    }
  });

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

      let currentForm = document.querySelector(`.js-form-template[data-counter="${formCounter}"]`);
      currentForm.classList.add('hidden');
      formCounter--;
      if (formCounter >= 5) {
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
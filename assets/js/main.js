try {
  var certModal = document.querySelector('#certificate-modal');
  var closeButton = document.querySelector('#close-btn');
  var modalImage = document.querySelector('#modal-img');

  var imageButton = document.querySelectorAll('.image-btn');

  imageButton.forEach( function(imageBtn) {
    imageBtn.addEventListener('click', function(event) {
      event.preventDefault();

      var img = this.querySelector('img');

      certModal.showModal();
      modalImage.src = img.src;
      modalImage.alt = img.alt;
    })
  });

  closeButton.addEventListener('click', function() {
    certModal.close();
  });
}catch(error) {
  console.error('An error occured: ', error);
}

try {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach( function(navBtn) {
    navBtn.addEventListener('click', function() {
      navLinks.forEach(item => item.classList.remove('active'))
      this.classList.add("active");
    })
  })
}catch(error) {
  console.error('An error occured: ', error);
}

try {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to update the active class based on the visible section
  function setActiveLink(id) {
      navLinks.forEach(link => {
          link.classList.remove('active'); // Remove active from all links
          if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active'); // Add active class to the link of the visible section
          }
      });
  }

  // Create the IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setActiveLink(entry.target.id); // Set active class based on the section in view
          }
      });
  }, {
      threshold: 0.6 // Trigger when 60% of the section is visible
  });
    document.querySelectorAll('.page').forEach((pg) => observer.observe(pg));
}catch(error) {
  console.error('An error occured: ', error);
}

try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear
}catch(error) {
  console.error('An error occured: ', error);
}

try {
 var resumeModal = document.querySelector('#resume-modal');
 var resumeBtn = document.querySelector('#resume-btn');
 var resumeCloseBtn = document.querySelector('#resume-close-btn');
 var resumeModalImg = document.querySelector('#resume-img');

 resumeBtn.addEventListener('click', function(event) {
  event.preventDefault();

  var resumeImg = this.querySelector('img');

  resumeModal.showModal();
  resumeModalImg.src = resumeImg.src;
  resumeModalImg.alt = resumeImg.alt;
 });

 resumeCloseBtn.addEventListener('click', function() {
  resumeModal.close();
 });
}catch(error) {
  console.error('An error occured: ', error);
}

try {
  var captureModal = document.querySelector('#capture-modal');
  var captureCloseBtn = document.querySelector('#capture-close-btn');
  var captureImg = document.querySelector('#capture-img');

  var captureButton = document.querySelectorAll('.capture-btn');

  captureButton.forEach( function(captureBtn) {
    captureBtn.addEventListener('click', function(event) {
      event.preventDefault();

      var img = this.querySelector('img');

      captureModal.showModal();
      captureImg.src = img.src;
      captureImg.alt = img.alt;
    })
  });

  captureCloseBtn.addEventListener('click', function() {
    captureModal.close();
  });
}catch(error) {
  console.error('An error occured: ', error);
}
/**
* Template Name: Append
* Updated: Jun 20 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');

  function toggleScrolled() {
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);


  // function membersName() {
  //   var arr = ["Our Website","Jv Tech Solution","Service","Details"];
  //   for(let i = 0; i < arr.length; i++) {
  //     // console.log("Member = " + i + ". " + arr[i]);
  //     setInterval(function() {
  //       document.getElementById("SiteName").innerHTML = `${arr[i]}`;
  //       // membersName();
  //     }, 2500);
  //   }
  // }
  // membersName();

  const myArray = [ 
    `
    <h2 id="rotat1">Our Service In Developer</h2>
    <h2 id="rotat2">Jv Tech</h2>
    <h2 id="rotat3">Our Service In Freelancer</h2>
    `,`
    <h2 id="rotat1">Professional Marketing</h2>
    <h2 id="rotat2">Jv Tech</h2>
    <h2 id="rotat3">Professional Testers</h2>
    `,`
    <h2 id="rotat1">IOS Application Service</h2>
    <h2 id="rotat2">Jv Tech</h2>
    <h2 id="rotat3">Professional Flutter </h2>
    `,`
    <h2 id="rotat1">Android Application Developer</h2>
    <h2 id="rotat2">Our Service In Photographer</h2>
    <h2 id="rotat3">Professional UI / UX Developer</h2>
    `,`
    <h2 id="rotat1">Our Website</h2>
    <h2 id="rotat2">Jv Tech</h2>
    <h2 id="rotat3">Our Service Designer</h2>
    `];


  // Get the HTML element where you want to display the array
  const arrayDisplayElement = document.getElementById("SiteName");

  let currentIndex = 0;

  function displayNextElement() {
      if (currentIndex < myArray.length) {
          arrayDisplayElement.innerHTML = myArray[currentIndex];
          currentIndex++;
          var colors = ["#63b598",	"#ce7d78",	"#ea9e70",	"#a48a9e",	"#c6e1e8",	"#648177",	"#0d5ac1",
          "#f205e6",	"#1c0365",	"#14a9ad",	"#4ca2f9",	"#a4e43f",	"#d298e2",	"#6119d0",
          "#d2737d",	"#c0a43c",	"#f2510e",	"#651be6",	"#79806e",	"#61da5e",	"#cd2f00",
          "#9348af",	"#01ac53",	"#c5a4fb",	"#996635",	"#b11573",	"#4bb473",	"#75d89e",
          "#2f3f94",	"#2f7b99",	"#da967d",	"#34891f",	"#b0d87b",	"#ca4751",	"#7e50a8",
          "#c4d647",	"#e0eeb8",	"#11dec1",	"#289812",	"#566ca0",	"#ffdbe1",	"#2f1179",
          "#935b6d",	"#916988",	"#513d98",	"#aead3a",	"#9e6d71",	"#4b5bdc",	"#0cd36d",
          "#250662",	"#cb5bea",	"#228916",	"#ac3e1b",	"#df514a",	"#539397",	"#880977",
          "#f697c1",	"#ba96ce",	"#679c9d",	"#c6c42c",	"#5d2c52",	"#48b41b",	"#e1cf3b",
          "#5be4f0",	"#57c4d8",	"#a4d17a",	"#225b8",	"#be608b",	"#96b00c",	"#088baf",
          "#f158bf",	"#e145ba",	"#ee91e3",	"#05d371",	"#5426e0",	"#4834d0",	"#802234",
          "#6749e8",	"#0971f0",	"#8fb413",	"#b2b4f0",	"#c3c89d",	"#c9a941",	"#41d158",
          "#fb21a3",	"#51aed9",	"#5bb32d",	"#807fb",	"#21538e",	"#89d534",	"#d36647",
          "#7fb411",	"#0023b8",	"#3b8c2a",	"#986b53",	"#f50422",	"#983f7a",	"#ea24a3",
          "#79352c",	"#521250",	"#c79ed2",	"#d6dd92",	"#e33e52",	"#b2be57",	"#fa06ec",
          "#1bb699",	"#6b2e5f",	"#64820f",	"#1c271",	"#21538e",	"#89d534",	"#d36647",
          "#7fb411",	"#0023b8",	"#3b8c2a",	"#986b53",	"#f50422",	"#983f7a",	"#ea24a3",
          "#79352c",	"#521250",	"#c79ed2",	"#d6dd92",	"#e33e52",	"#b2be57",	"#fa06ec",
          "#1bb699",	"#6b2e5f",	"#64820f",	"#1c271",	"#9cb64a",	"#996c48",	"#9ab9b7",
          "#06e052",	"#e3a481",	"#0eb621",	"#fc458e",	"#b2db15",	"#aa226d",	"#792ed8",
          "#73872a",	"#520d3a",	"#cefcb8",	"#a5b3d9",	"#7d1d85",	"#c4fd57",	"#f1ae16",
          "#8fe22a",	"#ef6e3c",	"#243eeb",	"#1dc18",	"#dd93fd",	"#3f8473",	"#e7dbce",
          "#421f79",	"#7a3d93",	"#635f6d",	"#93f2d7",	"#9b5c2a",	"#15b9ee",	"#0f5997",
          "#409188",	"#911e20",	"#1350ce",	"#10e5b1",	"#fff4d7",	"#cb2582",	"#ce00be",
          "#32d5d6",	"#17232",	"#608572",	"#c79bc2",	"#00f87c",	"#77772a",	"#6995ba",
          "#fc6b57",	"#f07815",	"#8fd883",	"#060e27",	"#96e591",	"#21d52e",	"#d00043",
          "#b47162",	"#1ec227",	"#4f0f6f",	"#1d1d58",	"#947002",	"#bde052",	"#e08c56",
          "#28fcfd",	"#bb09b",	"#36486a",	"#d02e29",	"#1ae6db",	"#3e464c",	"#a84a8f",
          "#911e7e",	"#3f16d9",	"#0f525f",	"#ac7c0a",	"#b4c086",	"#c9d730",	"#30cc49",
          "#3d6751",	"#fb4c03",	"#640fc1",	"#62c03e",	"#d3493a",	"#88aa0b",	"#406df9",
          "#615af0",	"#4be47",	"#2a3434",	"#4a543f",	"#79bca0",	"#a8b8d4",	"#00efd4",
          "#7ad236",	"#7260d8",	"#1deaa7",	"#06f43a",	"#823c59",	"#e3d94c",	"#dc1c06",
          "#f53b2a",	"#b46238",	"#2dfff6",	"#a82b89",	"#1a8011",	"#436a9f",	"#1a806a",
          "#4cf09d",	"#c188a2",	"#67eb4b",	"#b308d3",	"#fc7e41",	"#af3101",	"#ff065",
          "#71b1f4",	"#a2f8a5",	"#e23dd0",	"#d3486d",	"#00f7f9",	"#474893",	"#3cec35",
          "#1c65cb",	"#5d1d0c",	"#2d7d2a",	"#ff3420",	"#5cdd87",	"#a259a4",	"#e4ac44",
          "#1bede6",	"#8798a4",	"#d7790f",	"#b2c24f",	"#de73c2",	"#d70a9c",	"#25b67",
          "#88e9b8",	"#c2b0e2",	"#86e98f",	"#ae90e2",	"#1a806b",	"#436a9e",	"#0ec0ff",
          "#f812b3",	"#b17fc9",	"#8d6c2f",	"#d3277a",	"#2ca1ae",	"#9685eb",	"#8a96c6",
          "#dba2e6",	"#76fc1b",	"#608fa4",	"#20f6ba",	"#07d7f6",	"#dce77a",	"#77ecca"];
          setTimeout(()=>{
            document.getElementById('rotat1').style.background = colors[Math.floor(Math.random() * colors.length)];
          },1);
          setTimeout(()=>{
            document.getElementById('rotat2').style.background = colors[Math.floor(Math.random() * colors.length)];
          },1);
          setTimeout(()=>{
            document.getElementById('rotat3').style.background = colors[Math.floor(Math.random() * colors.length)];
          },1);
      } else {
          clearInterval(intervalID); // Stop the interval when all elements have been displayed
      }
  }

  // Call the displayNextElement function every 2500 milliseconds
  const intervalID = setInterval(displayNextElement, 5000);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    if (!selectHeader.classList.contains('scroll-up-sticky')) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = `-${header.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = "0";
    } else {
      selectHeader.style.removeProperty('top');
      selectHeader.style.removeProperty('position');
    }
    lastScrollTop = scrollTop;
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
  window.addEventListener('load', initIsotopeLayout);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

});
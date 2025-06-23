/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) On click, find the nav dropdown trigger parent
 * 3) If the nav dropdown trigger parent already has active class, remove it.
 * 4) If the nav dropdown trigger parent does not have an active class, add it.
 */

(function () {
  var navLink = document.querySelectorAll(".js_nav-dropdown-trigger"); /* 1 */

  for (i = 0; i < navLink.length; i++) {
    /* 1 */

    navLink[i].addEventListener("click", function (event) {
      /* 2 */ event.preventDefault();
      var navLinkParent = this.parentNode; /* 2 */

      if (navLinkParent.classList.contains("is-active")) {
        /* 3 */
        navLinkParent.classList.remove("is-active");
      } else {
        /* 4 */
        navLinkParent.classList.add("is-active");
      }
    });
  }

  /**
   * Toggles active class on the primary nav panel
   * 1) Select all nav triggers and cycle through them
   * 2) On click, find the nav panel within the header
   * 3) If the navPanel already has active class, remove it on click.
   * 4) If the navPanel does not have an active class, add it on click.
   */
  var navToggle = document.querySelectorAll(".js-nav-trigger"); /* 1 */

  for (i = 0; i < navToggle.length; i++) {
    /* 1 */

    navToggle[i].addEventListener("click", function (event) {
      /* 2 */ event.preventDefault();
      var navToggleParent = this.parentNode; /* 2 */
      var navPanel = navToggleParent.querySelector(".js-nav-panel"); /* 2 */

      if (navPanel.classList.contains("is-active")) {
        /* 3 */
        navPanel.classList.remove("is-active");
      } else {
        /* 4 */
        navPanel.classList.add("is-active");
      }
    });
  }
})();

const mobileMenu = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".c-primary-nav");
const subMenu = document.querySelectorAll(".submenu__list");
const goBack = document.querySelectorAll(".go-back");
const closeMobileMenu = document.querySelector(".close-button");
const navigationList = document.querySelector(".c-primary-nav__list");
const sideBarNav = document.querySelectorAll(".sidebar-nav__item ");
const sideBarSubmenu = document.querySelectorAll(".sidebar-submenu__list");
const subMenuButton = document.querySelectorAll(".btn-submenu");

const listItem = document.querySelectorAll(".c-primary-nav__item");
const listSubItem = document.querySelectorAll(".submenu__list");
const subMenuListItem = document.querySelectorAll(".submenu__listItem");
const subMenuListItems = document.querySelectorAll(".submenu__listItem");

const navItemContainer = document.querySelectorAll(".navItem-container");

window.addEventListener("click", (e) => {
  e.target.classList.remove("showmobilemenu");
});

closeMobileMenu.addEventListener("click", (e) =>
  mobileNav.classList.remove("showmobilemenu")
);
mobileMenu.addEventListener("click", function (e) {
  mobileNav.classList.toggle("showmobilemenu");
});

mobileNav.addEventListener("blur", function (e) {
  console.log(e.target);
  e.target.classList.remove("showmobilemenu");
});
window.addEventListener("click", function (e) {
  mobileNav.classList.add("lostfocus");
});
let t = true;

subMenuButton.forEach((button, i) => {
  button.addEventListener("click", function (e) {
    subMenu[i].classList.add("showsubmenu");
  });
});
goBack.forEach((el, i) => {
  el.addEventListener("click", function (e) {
    subMenu[i].classList.remove("showsubmenu");
  });
});

window.addEventListener("load", (e) => {
  const pageCategory = document.querySelector(".page-content-container").dataset
    .pagecategory;
  const sidebarIndex = localStorage.getItem("menunumber");
  sideBarNav[Number(pageCategory)].classList.add("showsidebar");
});

// navItemContainer.forEach((ni, i) => {
//   ni.addEventListener("click", function (e) {
//     const menuNumber = Number(ni.dataset.sidebarmenu);

//     sideBarNav.forEach((el, i) => el.classList.remove("showsidebar"));

//     sideBarNav[menuNumber].classList.add("showsidebar");
//     localStorage.setItem("menunumber", `${menuNumber}`);
//   });
// });

navItemContainer.forEach((sm, i) => {
  if (subMenu[i].children.length <= 1) {
    subMenu[i].style.backgroundColor = "transparent";
    subMenuButton[i].style.visibility = "hidden";
    console.log(subMenuButton[i]);
  }
});
navItemContainer.forEach((ni, i) => {
  console.log(subMenu[i].children.length > 1);
});
console.log(navigationList.lastElementChild);

// -----------------------------------------------
// search bar section
// -----------------------------------------------

const searchList = document.querySelector(".search-list");
const searchTitle = document.querySelector(".search-title");
const searchForm = document.querySelectorAll(".search-form");

const searchListItems = [
  {
    title: "Wapor-SSA Webinar October 24, 2024",
    url: "https://us06web.zoom.us/webinar/register/WN_bt9j6EluSMmk_Mx4YHuG3w",
  },
  {
    title: "Wapor-SSA Annual conference",
    url: "http://127.0.0.1:3000/?p=pages-page-annual-conference",
  },
  {
    title: "Wapor-SSA webinars",
    url: "http://127.0.0.1:3000/?p=pages-page-Wapor-SSA-Webinars",
  },
  {
    title: "Regional conference 2024",
    url: "http://127.0.0.1:3000/?p=pages-page-regional-conference-2024",
  },
  {
    title: "about wapor-ssa",
    url: "http://127.0.0.1:3000/?p=pages-page-about",
  },
  {
    title: "wapor ssa Membership categories",
    url: "http://127.0.0.1:3000/?p=pages-page-membership-categories",
  },
  {
    title: "wapor ssa constitution",
    url: "http://127.0.0.1:3000/?p=pages-page-constitution",
  },
  {
    title: "code of ethics and professional practices",
    url: "http://127.0.0.1:3000/?p=pages-page-code-of-ethics",
  },
  {
    title: "wapor ssa eligible persons",
    url: "http://127.0.0.1:3000/?p=pages-page-eligible-persons",
  },
  {
    title: "flight reservations  for the regional conference 2024",
    url: "http://127.0.0.1:3000/?p=pages-page-flight-reservation",
  },
  {
    title: "hotel reservation for the regional conference 2024",
    url: "http://127.0.0.1:3000/?p=pages-page-hotel-reservation",
  },
  {
    title: "leadership",
    url: "http://127.0.0.1:3000/?p=pages-page-leadership",
  },
  {
    title: "Membership benefits",
    url: "http://127.0.0.1:3000/?p=pages-page-membership-benefits",
  },
  {
    title: "membership events",
    url: "http://127.0.0.1:3000/?p=pages-page-membership-events",
  },
  {
    title: "sponsorship packages for the regional conference 2024",
    url: "http://127.0.0.1:3000/?p=pages-page-sponsorship-packages",
  },
  {
    title: "wapor-ssa Webinar 28-04-2025",
    url: "http://127.0.0.1:3000/?p=pages-page-webinar-28-04-2025",
  },
  {
    title: "SECRETARIAT: Mailing Address",
    url: "http://127.0.0.1:3000/?p=pages-contact",
  },
  {
    title: "contact",
    url: "http://127.0.0.1:3000/?p=pages-contact",
  },
  {
    title: "wapor ssa constitution",
    url: "http://127.0.0.1:3000/?p=pages-page-constitution",
  },
  {
    title: "the sub saharan africa in brief ",
    url: "http://127.0.0.1:3000/?p=pages-page-about",
  },
];

searchForm.action = "primary - nav.js";

let searchValue, data;
searchForm.forEach((form, i) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    data = Object.fromEntries(formData);
    localStorage.setItem("data", data.searchtext);
    window.location.assign("http://127.0.0.1:3000/?p=pages-page-search");

    const u = localStorage.getItem("data");
    console.log(u);
    searchValue = u.toLowerCase();

    const bySpace = searchValue.split(" ").flatMap((el) => el.split("-"));

    const searchArr = Array.from(new Set(bySpace));
    console.log(searchArr);
    // searchArr.forEach((el)=>{

    // })
    // const result = searchListItems.filter((txt, i) =>
    //   txt.title
    //     .toLowerCase()
    //     .split(" ")
    //     .concat(txt.title.toLowerCase().split("-")).includes(searchArr.find((d) => d.indexOf(d.toLowerCase()) > -1))
    // );

    const res = searchArr.map((text) => {
      const y = searchListItems.filter((el, i) =>
        Array.from(
          new Set(
            el.title
              .toLowerCase()
              .split(" ")
              .flatMap((k) => k.split("-"))
          )
        ).includes(text)
      );
      return y;
    });
    const result = Array.from(new Set(res.flat()));
    console.log(result);

    searchTitle.innerHTML = `search`;
    searchTitle.insertAdjacentText(
      "beforeend",
      ` result for: ${searchValue.split(" ")[0]}`
    );
    searchList.innerHTML = "";
    result.length > 0
      ? result.forEach((el) => {
          searchList.insertAdjacentHTML(
            "beforeend",
            `<li class='search-list-item'><a href='${el.url}' class='search-list-link'>${el.title}</a></li>`
          );
          return;
        })
      : (searchList.innerHTML = `<div class='not-found'><p>No result found</p><a href='http://127.0.0.1:3000/?p=pages-home-page'>go back to the home page</a></div>`);
  });
  return;
});

window.addEventListener("load", (e) => {
  const u = localStorage.getItem("data");
  console.log(u);
  searchValue = u;

  const bySpace = searchValue.split(" ").flatMap((el) => el.split("-"));

  const searchArr = Array.from(new Set(bySpace));
  console.log(searchArr);
  // searchArr.forEach((el)=>{

  // })
  // const result = searchListItems.filter((txt, i) =>
  //   txt.title
  //     .toLowerCase()
  //     .split(" ")
  //     .concat(txt.title.toLowerCase().split("-")).includes(searchArr.find((d) => d.indexOf(d.toLowerCase()) > -1))
  // );

  const res = searchArr.map((text) => {
    const y = searchListItems.filter((el, i) =>
      Array.from(
        new Set(
          el.title
            .toLowerCase()
            .split(" ")
            .flatMap((k) => k.split("-"))
        )
      ).includes(text)
    );
    return y;
  });
  const result = Array.from(new Set(res.flat()));
  console.log(result);

  searchTitle.innerHTML = `search`;
  searchTitle.insertAdjacentText(
    "beforeend",
    ` result for: ${searchValue.split(" ")[0]}`
  );
  searchList.innerHTML = "";
  result.length > 0
    ? result.forEach((el) => {
        searchList.insertAdjacentHTML(
          "beforeend",
          `<li class='search-list-item'><a href='${el.url}' class='search-list-link'>${el.title}</a></li>`
        );
        return;
      })
    : (searchList.innerHTML = `<div class='not-found'><p>No result found</p><a href='http://127.0.0.1:3000/?p=pages-home-page'>go back to the home page</a></div>`);
});

const copyright = document.querySelector(".footer-nav-contact-copyright");
const dt = new Date();
const yr = dt.getFullYear();
copyright.innerHTML = "";
copyright.innerHTML = `Copyright © ${yr} WAPOR SSA. ALL RIGHTS RESERVED. | WEBSITE BY <a href="mailto: jensglobalmart@gmail.com" target='_blank'>JENS GLOBAL</a>`;

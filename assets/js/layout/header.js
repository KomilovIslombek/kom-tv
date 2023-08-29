const navSearchs = document.querySelectorAll(".nav-search[data-search]");
const navSign = document.querySelector(".nav__widjets .nav__sign")
const navSearchIcon = document.querySelector("#nav-search-icon");
const navXMark = document.querySelector("#nav-x-mark");
const header = document.querySelector("header.header");
const navList = document.querySelector(".nav__list");
const films = document.querySelectorAll(".films");
const filmsOverlays = document.querySelectorAll(".films-overlay");
const navSearchFilms = document.querySelector(".nav__search-films");
const navSearchFilmsMax = document.querySelector(".nav__search-films-max");
const body = document.body;

// Media max(960px) variables
const menuXMark = document.querySelector("#menu__x-mark");
const menuBurger = document.querySelector("#menu__burger");

// Events Start
navSearchIcon.addEventListener("click", () => {
    addClass(header, "header-active")
    addClass(body, "body-active")
    addClass([navSearchIcon, navList], "none")

    removeClass(navXMark, "none")
    removeClass([navSearchFilms, navSearchFilmsMax], "none")

    setTimeout(() => {
        removeClass(films, "hide")
        navSearchFilms.querySelectorAll("[data-animation-top=true]").forEach(el => {
            el.setAttribute("data-animation-top", "false");
        })
    }, 500)
})

// Media min(960px) Events on start
navXMark.addEventListener("click", defaultValHeader);
filmsOverlays.forEach(filmsOverlay => {
    filmsOverlay.addEventListener("click", defaultValHeader);
})

navSearchs.forEach(navSearch => {
    navSearch.addEventListener("input", () => {
        let filmsInner = document.querySelectorAll(".films__inner");
        const LOADER = document.querySelectorAll("div.loader")
        let films_max = document.querySelector(".nav__search-films-max .films")
        if(navSearch.value.length >= 2) {
            films_max.style.overflow = 'hidden';
            addClass(filmsInner, "none");
            removeClass(LOADER, "none");
            addClass(films, "films-active")
        } else {
            films_max.removeAttribute("style")
            removeClass(filmsInner, "none");
            removeClass(films, "films-active")
            addClass(LOADER, "none");
        }
    });
})

// Media max(960px) Events on start
menuXMark.addEventListener("click", () => {
    removeClass([navSearchIcon.parentNode, navSign, menuBurger], "none")
    addClass(menuXMark, "none");
    removeClass(header, "max-bg");
    header.style.transition = '';
    navList.style.opacity = "0";

    setTimeout(() => {
        // navList.style.display = "none !important;";
        navList.style.setProperty("display", "none", "important");
    }, 150)
})

menuBurger.addEventListener("click", () => {
    removeClass(menuXMark, "none");
    addClass([navSearchIcon.parentNode, navSign, menuBurger], "none")
    // navList.style.display = "block !important";
    navList.style.setProperty("display", "block", "important");
    setTimeout(() => {
        addClass(header, "max-bg");
        navList.style.opacity = "1";
    }, 150)
})

window.addEventListener("resize", () => {
    let windonInnerWidth = window.innerWidth;
    if(windonInnerWidth > 960) {
        films.forEach(films => {
            ! films.classList.contains("hide") && addClass(navList, "none");
        })
        removeClass([navSearchIcon.parentNode, navSign], "none")
        // addClass(menuXMark, "none");
        removeClass(header, "max-bg");
        navList.removeAttribute("style");
    } else if(!menuXMark.classList.contains("none")) {
        addClass([navSearchIcon.parentNode, navSign, menuBurger], "none")
        addClass(header, "max-bg");
        removeClass(navList, "none")
        navList.style.display = "block";
        setTimeout(() => {
            addClass(header, "max-bg");
            navList.style.opacity = "1";
        }, 150)
    }
})

// Events End

// Window scroling start
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.parentNode.classList.add("hide");
  } else {
    header.parentNode.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
});
// Window scroling end


// Functions
function searchFilms(data) {
    return `    <div class="nav__search-films">
                    <div>
                        <div class="search">
                            <form autocomplete="off">
                                <i class="search-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.96)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                                        <circle cx="10" cy="10" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </i>
                                <input type="search" placeholder="Название фильма, сериала или имя актёра, режиссёра">
                            </form>
                        </div>
                        <div class="films">
                            <div class="films__inner none1">
                                <div class="film__title" data-animation-top="true">Часто ищут</div>
                                <div class="film__wrap">
                                    <a class="film" href="/serial/otkrytyjj-brak" data-animation-top="true">
                                        <div class="film__row">
                                            <div class="film__img">
                                                <picture class="XAfHldBk">
                                                    <source type="image/webp" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/21386357?width=125&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/21386357?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/21386357?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/21386357?width=250&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/21386357?width=125&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/21386357?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/21386357?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/21386357?width=250&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><source type="image/webp" srcset="//static.okko.tv/images/v3/21386357?width=110&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/21386357?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/21386357?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/21386357?width=220&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" srcset="//static.okko.tv/images/v3/21386357?width=110&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/21386357?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/21386357?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/21386357?width=220&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x">
                                                    <img class="">
                                                </picture>
                                            </div>
                                            <div class="film__body">
                                                <h3 class="film__subtitle"><i class="fa-regular fa-clone"></i>  Открытый брак 
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="film" href="/serial/dukh-moejj-obshchagi" data-animation-top="true">
                                        <div class="film__row">
                                            <div class="film__img">
                                                <picture class="XAfHldBk"><source type="image/webp" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/21303716?width=125&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/21303716?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/21303716?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/21303716?width=250&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/21303716?width=125&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/21303716?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/21303716?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/21303716?width=250&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><source type="image/webp" srcset="//static.okko.tv/images/v3/21303716?width=110&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/21303716?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/21303716?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/21303716?width=220&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" srcset="//static.okko.tv/images/v3/21303716?width=110&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/21303716?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/21303716?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/21303716?width=220&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><img class="zDNWWLH3">
                                                </picture>
                                            </div>
                                            <div class="film__body">
                                                <h3 class="film__subtitle"><i class="fa-regular fa-clone"></i>  
                                                    Дух моей общаги
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="film" href="/serial/yali-capkini" data-animation-top="true">
                                        <div class="film__row">
                                            <div class="film__img">
                                                <picture class="XAfHldBk"><source type="image/webp" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/20642872?width=125&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/20642872?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/20642872?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/20642872?width=250&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/20642872?width=125&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/20642872?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/20642872?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/20642872?width=250&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><source type="image/webp" srcset="//static.okko.tv/images/v3/20642872?width=110&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/20642872?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/20642872?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/20642872?width=220&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" srcset="//static.okko.tv/images/v3/20642872?width=110&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/20642872?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/20642872?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/20642872?width=220&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><img class="zDNWWLH3">
                                                </picture>
                                            </div>
                                            <div class="film__body">
                                                <h3 class="film__subtitle"><i class="fa-regular fa-clone"></i>  
                                                    Зимородок
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="film" href="/movie/cheburashka-93168361" data-animation-top="true">
                                        <div class="film__row">
                                            <div class="film__img">
                                                <picture class="XAfHldBk"><source type="image/webp" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/20395867?width=125&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/20395867?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/20395867?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/20395867?width=250&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/20395867?width=125&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/20395867?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/20395867?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/20395867?width=250&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><source type="image/webp" srcset="//static.okko.tv/images/v3/20395867?width=110&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/20395867?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/20395867?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/20395867?width=220&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" srcset="//static.okko.tv/images/v3/20395867?width=110&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/20395867?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/20395867?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/20395867?width=220&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><img class="zDNWWLH3"></picture>
                                            </div>
                                            <div class="film__body">
                                                <h3 class="film__subtitle">
                                                    Чебурашка
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="film" href="/serial/manjunja" data-animation-top="true">
                                        <div class="film__row">
                                            <div class="film__img">
                                                <picture class="XAfHldBk"><source type="image/webp" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/19654474?width=125&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/19654474?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/19654474?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/19654474?width=250&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/19654474?width=125&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/19654474?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/19654474?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/19654474?width=250&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><source type="image/webp" srcset="//static.okko.tv/images/v3/19654474?width=110&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/19654474?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/19654474?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/19654474?width=220&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" srcset="//static.okko.tv/images/v3/19654474?width=110&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/19654474?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/19654474?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/19654474?width=220&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><img class="zDNWWLH3"></picture>
                                            </div>
                                            <div class="film__body">
                                                <h3 class="film__subtitle"><i class="fa-regular fa-clone"></i>  
                                                    Манюня
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="film" href="/serial/love-is-in-the-air" data-animation-top="true">
                                        <div class="film__row">
                                            <div class="film__img">
                                                <picture class="XAfHldBk"><source type="image/webp" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/18844168?width=125&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/18844168?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/18844168?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/18844168?width=250&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" media="(min-width: 960px)" srcset="//static.okko.tv/images/v3/18844168?width=125&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/18844168?width=150&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/18844168?width=175&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/18844168?width=250&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><source type="image/webp" srcset="//static.okko.tv/images/v3/18844168?width=110&amp;scale=1&amp;quality=80&amp;mediaType=webp 1x, //static.okko.tv/images/v3/18844168?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=webp 1.2x, //static.okko.tv/images/v3/18844168?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=webp 1.4x, //static.okko.tv/images/v3/18844168?width=220&amp;scale=2&amp;quality=80&amp;mediaType=webp 2x"><source type="image/jpeg" srcset="//static.okko.tv/images/v3/18844168?width=110&amp;scale=1&amp;quality=80&amp;mediaType=jpeg 1x, //static.okko.tv/images/v3/18844168?width=132&amp;scale=1.2&amp;quality=80&amp;mediaType=jpeg 1.2x, //static.okko.tv/images/v3/18844168?width=154&amp;scale=1.4&amp;quality=80&amp;mediaType=jpeg 1.4x, //static.okko.tv/images/v3/18844168?width=220&amp;scale=2&amp;quality=80&amp;mediaType=jpeg 2x"><img class="zDNWWLH3"></picture>
                                            </div>
                                            <div class="film__body">
                                                <h3 class="film__subtitle"><i class="fa-regular fa-clone"></i>  
                                                    Постучись в мою дверь
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="films__inner none1">
                                <div class="film__title film__title-acters" data-animation-top="true">Актеры</div>
                                <div class="film__wrap">
                                    <a class="film" href="pserson/jason-statham" data-animation-top="true">
                                        <div class="film__body">
                                            <h3 class="film__subtitle">Джейсон Стейтем</h3>
                                            <span class="acter_subtitle">Продюсер, актёр</span>
                                        </div>
                                    </a>
                                    <a class="film" href="/person/marina-aleksandrova" data-animation-top="true">
                                        <div class="film__body">
                                            <h3 class="film__subtitle">Марина Александрова</h3>
                                            <span class="acter_subtitle">Актёр</span>
                                        </div>
                                    </a>
                                    <a class="film" href="/person/johny-depp" data-animation-top="true">
                                        <div class="film__body">
                                            <h3 class="film__subtitle">Джонни Депп</h3>
                                            <span class="acter_subtitle">Продюсер, актёр</span>
                                        </div>
                                    </a>
                                    <a class="film" href="/person/gerard-butler" data-animation-top="true">
                                        <div class="film__body">
                                            <h3 class="film__subtitle">Джерард Батлер</h3>
                                            <span class="acter_subtitle">Продюсер, актёр</span>
                                        </div>
                                    </a>
                                    <a class="film" href="/person/dwayne-johnson" data-animation-top="true">
                                        <div class="film__body">
                                            <h3 class="film__subtitle">Дуэйн Джонсон</h3>
                                            <span class="acter_subtitle">Актёр</span>
                                        </div>
                                    </a>
                                    <a class="film" href="/person/ben-affleck" data-animation-top="true">
                                        <div class="film__body">
                                            <h3 class="film__subtitle">Бен Аффлек</h3>
                                            <span class="acter_subtitle">Режиссёр, актёр, сценарист</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="films__loader"></div>
                        </div>
                        <div class="films-overlay"></div>
                    </div>
                </div>`;
}

function defaultValHeader() {
    removeClass(header, "header-active")
    removeClass(body, "body-active")
    removeClass([navSearchIcon, navList], "none")

    addClass(navXMark, "none")
    addClass([navSearchFilms, navSearchFilmsMax], "none")
    addClass(films, "hide")

    navSearchFilms.querySelectorAll("[data-animation-top=false]").forEach(el => {
        el.setAttribute("data-animation-top", "true");
    })
}
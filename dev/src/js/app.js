import './classes/Modal.js'
import './classes/Select.js'
import './classes/Fancybox.js'
import './classes/Mask.js'
import './classes/Slider.js'
import './classes/Alert.js'
import './classes/Tabs.js'
import './classes/SetSizes.js'
import './classes/CookieAccept.js'
import './classes/ToTop.js'

import './classes/Hover3D.js'
import './classes/Inputer.js'

document.addEventListener('DOMContentLoaded', function() {
    //загрузка карты
    function init() {
        let map = new ymaps.Map('map', {
            center: [56.1989180173391,36.955446875153896],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',
        });

        let placemark = new ymaps.Placemark([56.1989180173391,36.955446875153896], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/images/map/locate.png',
            iconImageSize: [32, 32],
        });
        map.geoObjects.add(placemark);
    }
    //конец


   // ленивая загрузка карт

    var iObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting === true) {
            loadMap();
            iObserver.unobserve(entries[0].target); // перестаём отслеживать видимость
        }
    }, {threshold: [0]}); // от 0 до 1, % видимой части элемента на экране

    iObserver.observe(document.getElementById('map'));

    function loadMap () {
        let map = document.getElementById('map');
        if (!map.classList.contains("js--loaded")) {
            map.classList.add("'js--loaded");

            if (typeof ymaps === "undefined") {
                let js = document.createElement('script');
                js.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
                document.getElementsByTagName('head')[0].appendChild(js);
                js.onload = function() {
                    ymaps.ready(init);
                };
                js.onerror = function() {
                    console.log('error load ymaps');
                };
            } else {
                ymaps.ready(init);
            }
        }
    }
//конец ленивой загрузки карт
    ///hamb-mob
    const hamb = document.querySelector('.header__hamb');
    const header = document.querySelector('.header');
    const headerNav = document.querySelector('.header__wrap');
    const headerBtn = document.querySelector('.header__btn');
    const headerWrap = document.querySelector('.header__wrapper');

    hamb.addEventListener('click', () => {
        hamb.classList.toggle('header__hamb-open');
        if (hamb.classList.contains('header__hamb-open')) {
            header.classList.add('header__open')
            headerNav.classList.add('visible')
            headerBtn.classList.add('visible')
            headerWrap.classList.add('header__wrapper-open')
        } else {
            header.classList.remove('header__open')
            headerNav.classList.remove('visible')
            headerBtn.classList.remove('visible')
            headerWrap.classList.remove('header__wrapper-open')
        }
    })

    //end hamb

})
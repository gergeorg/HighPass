ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76953456898229, 37.63998549999998],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {

    balloonContent: `
    <div class="balloon1">
      <h3 class="balloon__title">Студия “High pass”</h3>

      <address class="balloon__address">107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис №
        82 </address>
      <a href="tel:+749542423532" class="balloon__tel">+7 (495) 42-423-532</a>
    </div>
    `

  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/placemark.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42],
  });

  myMap.geoObjects.add(myPlacemark);

  myPlacemark.balloon.open()

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил


}

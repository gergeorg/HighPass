ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.76892370723494, 37.63811868252562],
    zoom: 17
  });

  const myPlacemark = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/placemark.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42],
  });

  myMap.geoObjects.add(myPlacemark);


  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил

  const contactsInfo = document.querySelector('.contacts__info')
  const contactsBtnClose = document.querySelector('.contacts__btn-close')

  contactsBtnClose.addEventListener('click', () => {
    contactsInfo.classList.add('contacts__info--close')
  })

  myPlacemark.addEventListener('click', () => {
    contactsInfo.classList.add('contacts__info--close')
  })
}

ymaps.ready(init);

var placemarks = [
    {
        latitude: 60.05889203,
        longitude: 30.33013597,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/sh8.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbspСанкт-Петербург, Метро Пр. Просвещения, ул. Шостаковича д.8 к.1 МЦ "Гранд Каньон", 4-й этаж, секция №428 б.',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (910) 00-885-00',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspinter_home@mail.ru',
                '</li>',
                '</ul>',
                '</div>'   
        ]
    },
     {
        latitude: 60.00331199, 
        longitude: 30.38686636,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/gr20.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbspСанкт-Петербург, Гражданский проспект, 20. Ст. метро «Академическая»',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (911) 920 02 28',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspgeona-gr@mail.ru',
                '</li>',
                '</ul>',
                '</div>' 
        ] 
    },
    {
        latitude: 60.00222605, 
        longitude: 30.26615429,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/kom4.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                ' &#x1f3e0&nbspppСанкт-Петербург, Комендантский Пр. 4, ТК «Круиз», секция 00-12. Ст. метро «Комендатский пр.»',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsppp+7 (963) 311-00-17',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspppПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspppGeona-cruise@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ]
    },
    {
        latitude: 59.99929735,
        longitude: 30.25854259,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/bog18.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbsppСанкт-Петербург, Богатырский пр. 18/2, ТЦ «Богатырь» 1 этаж, секция 85. Ст. метро «Комендантский пр.» / Ст. метро «Пионерская»',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbspp+7 (812) 680 15 80',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbsppПН-ВС с 11:00 до 21:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbsppmajor-dom@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ] 
    },
    {
        latitude: 59.98754314, 
        longitude: 30.22858305,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/sav119.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbspСанкт-Петербург, Метро Беговая, ул. Савушкина, д.119, к. 5, ТЦ "Villa", 2 этаж',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (921) 908-31-41',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspgeona-skm@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ] 
    },
    {
        latitude: 59.91047461, 
        longitude: 30.44779768,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/d14.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbspСанкт-Петербург, Дальневосточный пр. 14, ТК «МЕБЕЛЬВУД», секция 1-г. Ст. метро «Пр. Большевиков»',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (965) 755-68-98',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 21:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspGeona-mw@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ] 
    },
    {
        latitude: 59.85356720, 
        longitude: 30.34976739,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/kos.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbspСанкт-Петербург, Ул. Типанова 27/39, литер А, ТК «Космос», 2 этаж, секция 256. Ст. метро «Международная»',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (981) 878-98-60',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspgeona-dv1@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ] 
    },
    {
        latitude: 59.88161506, 
        longitude: 30.31110794,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/var3.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                ' &#x1f3e0&nbspСанкт-Петербург, Ул. Варшавская 3, МЦ «Мебельный Континент» 1 этаж, 4 корпус, секция 112. Ст. метро «Электросила»',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (812) 640 95 25',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (812) 980 08 80',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspmajor-dom@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ] 
    },
    {
        latitude: 59.85275762,  
        longitude: 30.22685581,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/len104.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                ' &#x1f3e0&nbspСанкт-Петербург, Ленинский Пр. 104 ТЦ «Галерея Дизайна», секция 8. Ст метро «Проспект Ветеранов».',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (964) 342-73-10',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspGeona-gd@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ] 
    },
    {
        latitude: 59.84962376, 
        longitude: 30.14075917,
        balloonContent: [
                '<div id="describe">',
                '<h1 class="geona">',
                'Фирменный салон Geona',
                '</h1>',
                '<img src="img/pet53.jpg" alt="Галерея"/>',
                '<ul>',
                '<li class="contacts">',
                '&#x1f3e0&nbspСанкт-Петербург, Петергофское шоссе дом 53 лит. А, метро "пр. Ветеранов"',
                '</li>',
                '<li class="contacts">',
                '&#9742&nbsp+7 (812) 407 31 41',
                '</li>',
                '<li class="contacts">',
                '&#8986&nbspПН-ВС с 11:00 до 20:00',
                '</li>',
                '<li class="contacts">',
                '&#9998&nbspgeona-skm@mail.ru',
                '</li>',
                '</ul>',
                '</div>'
        ]
    }
];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 10,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
        
  placemarks.forEach(function(obj) {        
        var placemark = new ymaps.Placemark([ obj.latitude, obj.longitude],
            {
                balloonContent: obj.balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-marker.png',
                iconImageSize: [47, 75],
                iconImageOffset: [-23, -75]
            });
      
      map.geoObjects.add(placemark);
  });
  }
                     
      

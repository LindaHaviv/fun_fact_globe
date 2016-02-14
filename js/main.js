var earth;

function addMap() {
    var options = {
        sky: true,
        atmosphere: true,
        dragging: true,
        tilting: true,
        center: [46.8011, 8.2266],
        zoom: 2

    };
    earth = new WE.map('earth_div', options);
}

function addLayers() {
    var natural = WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        tms: true
    });
    natural.addTo(earth);

    var toner = WE.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.',
        opacity: 0.6
    });
    toner.addTo(earth);
}

function loadData() {
    $.ajax({
        dataType: "text",
        url: 'http://localhost:8001/capitals.json',
        data: '',
        success: function(data) {
            capitals = JSON.parse(data);
            // for (i = 0; i < capitals.length; i++) {
            //     var item = JSON.parse(capitals[i]);
            //     var marker = WE.marker(item.pos).addTo(earth);
            //     marker.bindPopup("<b>" + item.capital + "</b><br/>Population: " + commafy(item.pop), {
            //         maxWidth: 150,
            //         closeButton: true
            //     });
            // }

        },
        failure: function(err) {
            alert(err);
        }
    });
}

function addMarkers() {
    capitals.forEach(function(capital) {
        var popupText = "<b>" + capital.capital + ", " + capital.state + "</b><br/>Population: " + capital.pop.toLocaleString();
        var marker = WE.marker(capital.pos).addTo(earth);
        marker.bindPopup(popupText, {
            maxWidth: 150,
            closeButton: true
        })
        marker.on("click", function(){ 
            checkCapital(capital);
        });
        // Object {state: "Ohio", capital: "Columbus", pos: Array[2], pop: 787033}
    })
}

function startApp() {
    addMarkers();
    $(".page_loading").hide();
    $(".page_quiz").show();
    $(".next_question").on("click", function(){
        nextQuestion();
    })
    startGame();
}


function initialize() {

    addMap();
    addLayers();
    startApp();
}

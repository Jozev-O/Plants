
// Servise zone

var arrMap = new Map([
    ["garden", false],
    ["lawn", false],
    ["planting", false]
]);

function oneClickButton(el) {
    arrMap.set(el.id, !arrMap.get(el.id));

    console.log(el.id);
    console.log(arrMap.get(el.id));

    if (arrMap.get(el.id)) {
        changeStyle(el);
        blurToCard(el.id);
    }
    else {
        el.style.backgroundColor = "";
        el.style.color = "";
        var arr = document.getElementsByClassName('blur');
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.filter = "blur(0px)";
        }
    }
}
function changeStyle(el) {
    var defoltAllButtons = document.getElementsByClassName('v2');
    for (var i = 0; i < defoltAllButtons.length; i++) {
        defoltAllButtons[i].style.backgroundColor = "";
        defoltAllButtons[i].style.color = "";
        arrMap.set(defoltAllButtons[i].id, false);
    }
    el.style.backgroundColor = "#E06733";
    el.style.color = "#FFF";
    arrMap.set(el.id, true);
    console.log(arrMap.get(el.id));
}

function blurToCard(text) {
    var blurAllCards = document.getElementsByClassName('blur');
    for (var i = 0; i < blurAllCards.length; i++) {
        blurAllCards[i].style.filter = "blur(4px)";
    }

    var arr2 = document.getElementsByName(text);

    arr2.forEach(element => {
        element.style.filter = "blur(0px)"
    });

    console.log("Нажато");
}

// Servise zone end


// Prises zone

var allPricesMap = new Map([
    ["1butt", false],
    ["2butt", false],
    ["3butt", false]
]);
var first = 0;
function priseButtonTransform(clicked_id) {
    first++;
    var allBoxes = document.getElementsByClassName("price");

    allPricesMap.set(clicked_id, !allPricesMap.get(clicked_id));

    if (!((allPricesMap.get('1butt') && allPricesMap.get('2butt') && allPricesMap.get('3butt')) && false) && first > 1) {
        for (var j = 0; j < allBoxes.length; j++) {
            allBoxes[j].classList.remove("tet", "price-pressed");
            first = 0;
        }
    } else {
        console.log(first);
        console.log(clicked_id);
        console.log(allPricesMap.get(clicked_id));
        for (var i = 0; i < allBoxes.length; i++) {
            allBoxes[i].classList.remove("tet", "price-pressed");
            if (allBoxes[i].id != clicked_id + "Box") {
                allBoxes[i].classList.add('tet');
            }
            else {
                allBoxes[i].classList.add('price-pressed');
            }
        };
    }
}


// end Prises zone


// Contact zone
function cityChooseClick() {
    const dropowns = document.querySelectorAll('.dropdown');

    dropowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        // const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');
        select.classList.toggle('select-clicked');
        // caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                // caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                showCard();
                options.forEach(elem => {
                    elem.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
}


// card

var allCards = new Map([
    ["New York City", new Map([
        ["city", "New York City"],
        ["phone", "+1 212 456 0002"],
        ["adress", "9 East 91st Street"]
    ])],
    ["Canandaigua, NY", new Map([
        ["city", "Canandaigua, NY"],
        ["phone", "+1 585 393 0001"],
        ["adress", "151 Charlotte Street"]
    ])],
    ["Yonkers, NY", new Map([
        ["city", "Yonkers, NY"],
        ["phone", "+1 914 678 0003"],
        ["adress", "511 Warburton Ave"]
    ])],
    ["Sherrill, NY", new Map([
        ["city", "Sherrill, NY"],
        ["phone", "+1 315 908 0004"],
        ["adress", "14 WEST Noyes BLVD"]
    ])],
]);


function showCard() {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected.innerText == "City")
        console.log('da');
    else {
        console.log('net');
        const toShow = document.getElementsByClassName('city-card')[0];
        toShow.classList.add('card-active');
        const table = allCards.get(selected.innerText);
        const city = document.getElementById('city');
        const phone = document.getElementById('phone');
        const adress = document.getElementById('adress');
        city.innerText = table.get('city');
        phone.innerText = table.get('phone');
        adress.innerText = table.get('adress');
    }
}
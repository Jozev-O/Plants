
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
        }
    }
}

// end Prises zone


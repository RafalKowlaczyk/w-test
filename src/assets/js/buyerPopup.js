import * as buyers from '../json/buyers.json';
import * as $ from 'jquery';
export default class Popup {
    constructor() {
        this.buyers = buyers['default'];

    }


    createPopup(person) {

        let popupList = document.getElementById('popuplist');
        let popup = document.createElement('div');

        popup.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide position-relative" data-ride="carousel" data-interval="30000">
        <div class="carousel-inner">
            <div class="carousel-item ">
                <img src="img/popup_commenter_4.jpg" class="d-block w-100" alt="...">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                        Ten preparat naprawdę mi pomógł. Polecam!
                    </p>
                    <span class="d-block px-2">Urszula, Kraków</span>
                </div>
            </div>
            <div class="carousel-item ">
                <img src="img/popup_commenter_1.jpg" class="d-block w-100" alt="...">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                        Dzięki tej kuracji schudłam aż 15 kg, a wcześniej nic na mnie nie działało
                    </p>
                    <span class="d-block px-2">Bożena, Warszawa</span>
                </div>
            </div>
            <div class="carousel-item ">
                <img src="img/popup_commenter_2.jpg" class="d-block w-100" alt="...">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                        Specjalista straszył mnie, że od tej nadwagi będę miał problemy z wysokim cholesterolem. Musiałem zacząć działać. Znajoma poleciła mi ten preparat. Już udało mi się schudnąć 9 kg, a to dopiero początek.
                    </p>
                    <span class="d-block px-2">Zenon, Łomża</span>
                </div>
            </div>
            <div class="carousel-item active">
                <img src="img/1.jpg" class="d-block w-100" alt="...">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                        Z Weight Manager schudłam aż 10 kg. Dzięki!</p>
                    <span class="d-block px-2">Elżbieta, Słupsk</span>
                </div>
            </div>
            <div class="carousel-item ">
                <img src="img/popup_commenter_5.jpg" class="d-block w-100" alt="...">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                       Ile to ja wydałam na te badziewia, a nic nie dawało efektów. Byłam zła, gruba i czułam się jak wieloryb. Dzięki Weight Manager odzyskałam figurę sprzed ciąży i nareszcie z dumą patrzę w lustro.
                    </p>
                    <span class="d-block px-2">Natalia, Pabianice</span>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon control" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon control" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;

        $(popup).addClass('buyer-popup');
        $(popup).addClass('show');
        popupList.appendChild(popup);
        this.setupAnimations();
    }

    setupAnimations() {
        let animationFlag = 0;

        $('.triggerBtn').click(function() {
            switch(animationFlag) {
                case 0:
                    $('#popuplist').removeClass('hidePopup');
                    $('.triggerBtn').removeClass('rotateBackwords');
                    $('#popuplist').addClass('showPopup');
                    $('.triggerBtn').addClass('rotateBtn');
                    animationFlag = 1;
                break;
                case 1:
                    $('#popuplist').removeClass('showPopup');
                    $('.triggerBtn').removeClass('rotateBtn');
                    $('#popuplist').addClass('hidePopup');
                    $('.triggerBtn').addClass('rotateBackwords');
                    animationFlag = 0;
                break;
            }
        })
    }
}
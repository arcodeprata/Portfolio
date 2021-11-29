create_divNav();

function create_divNav() {

    // Logo
    let logoLink = document.createElement('a');
    logoLink.className = 'logoArcodeprata';
    logoLink.href = 'https://arcodeprata.github.io/Portfolio/';
    logoLink.id = 'logoLink';
    document.getElementById('menuSide').appendChild(logoLink);

    let logoArcoBig = document.createElement('img');
    logoArcoBig.src = 'images/logos/logoArcodeprata.png';
    logoArcoBig.alt = 'Arcodeprata logo';
    logoArcoBig.id = 'logoArcodeprata';
    document.getElementById('logoLink').appendChild(logoArcoBig);

    let logoArcoSmall = document.createElement('img');
    logoArcoSmall.src = 'images/logos/logoArcodeprata2.png';
    logoArcoSmall.alt = 'Arcodeprata logo';
    logoArcoSmall.id = 'logoArcodeprataSmall'
    document.getElementById('logoLink').appendChild(logoArcoSmall);

    // Links nav big
    let navLinksBig = document.createElement('nav');
    navLinksBig.id = 'linksMenu';
    document.getElementById('menuSide').appendChild(navLinksBig);

    let ulBig = document.createElement('ul');
    ulBig.id = 'ulBig';
    document.getElementById('linksMenu').appendChild(ulBig);

            // Index
    let indexList = document.createElement('li');
    indexList.id = 'liBigIndex';
    document.getElementById('ulBig').appendChild(indexList);

    let indexLink = document.createElement('a');
    indexLink.href = 'https://arcodeprata.github.io/Portfolio/';
    indexLink.innerHTML = 'Home';
    indexLink.classList = 'lang en';
    indexLink.lang = 'en';
    document.getElementById('liBigIndex').appendChild(indexLink);

    let indexLinkPT = document.createElement('a');
    indexLinkPT.href = 'https://arcodeprata.github.io/Portfolio/';
    indexLinkPT.innerHTML = 'Home';
    indexLinkPT.classList = 'lang pt';
    indexLink.lang = 'pt';
    document.getElementById('liBigIndex').appendChild(indexLinkPT);

            // Pixel art
    let pixelList = document.createElement('li');
    pixelList.id = 'liBigPixel';
    document.getElementById('ulBig').appendChild(pixelList);

    let pixelArtLink = document.createElement('a');
    pixelArtLink.href = 'pixelArt.html';
    pixelArtLink.innerHTML = 'Pixel art';
    pixelArtLink.classList = 'lang en';
    pixelArtLink.lang = 'en';
    document.getElementById('liBigPixel').appendChild(pixelArtLink);

    let pixelArtLinkPT = document.createElement('a');
    pixelArtLinkPT.href = 'pixelArt.html';
    pixelArtLinkPT.innerHTML = 'Pixel art';
    pixelArtLinkPT.classList = 'lang pt';
    pixelArtLinkPT.lang = 'pt';
    document.getElementById('liBigPixel').appendChild(pixelArtLinkPT);

            // Illustrations
    let illustrationList = document.createElement('li');
    illustrationList.id = 'liBigIllustrations';
    document.getElementById('ulBig').appendChild(illustrationList);

    let illustrationsLink = document.createElement('a');
    illustrationsLink.href = 'illustrations.html';
    illustrationsLink.innerHTML = 'Illustrations';
    illustrationsLink.classList = 'lang en';
    illustrationsLink.lang = 'en';
    document.getElementById('liBigIllustrations').appendChild(illustrationsLink);

    let illustrationsLinkPT = document.createElement('a');
    illustrationsLinkPT.href = 'illustrations.html';
    illustrationsLinkPT.innerHTML = 'Illustrations';
    illustrationsLinkPT.classList = 'lang pt';
    illustrationsLinkPT.lang = 'pt';
    document.getElementById('liBigIllustrations').appendChild(illustrationsLinkPT);

    // Links nav small
    let navLinksSmall = document.createElement('nav');
    navLinksSmall.id = 'linksMenuSmall';
    document.getElementById('menuSide').appendChild(navLinksSmall);

    let ulSmall = document.createElement('ul');
    ulSmall.id = 'ulSmall';
    document.getElementById('linksMenuSmall').appendChild(ulSmall);

            // Index
    let indexListSmall = document.createElement('li');
    indexListSmall.id = 'liSmallIndex';
    document.getElementById('ulSmall').appendChild(indexListSmall);

    let indexLinkSmall = document.createElement('a');
    indexLinkSmall.id = 'indexLinkSmall';
    indexLinkSmall.href = 'https://arcodeprata.github.io/Portfolio/';
    document.getElementById('liSmallIndex').appendChild(indexLinkSmall);

    let indexImgLink = document.createElement('img');
    indexImgLink.src = 'images/icons/indexIcon.png';
    document.getElementById('indexLinkSmall').appendChild(indexImgLink);

            // Pixel art
    let pixelListSmall = document.createElement('li');
    pixelListSmall.id = 'liSmallPixel';
    document.getElementById('ulSmall').appendChild(pixelListSmall);

    let pixelLinkSmall = document.createElement('a');
    pixelLinkSmall.id = 'pixelLinkSmall';
    pixelLinkSmall.href = 'pixelArt.html';
    document.getElementById('liSmallPixel').appendChild(pixelLinkSmall);

    let pixelImgLink = document.createElement('img');
    pixelImgLink.src = 'images/icons/pixelArtIcon.png';
    document.getElementById('pixelLinkSmall').appendChild(pixelImgLink);

            // Illustrations
    let illustrationsListSmall = document.createElement('li');
    illustrationsListSmall.id = 'liSmallIllustrations';
    document.getElementById('ulSmall').appendChild(illustrationsListSmall);

    let illustrationsLinkSmall = document.createElement('a');
    illustrationsLinkSmall.id = 'illustrationsLinkSmall';
    illustrationsLinkSmall.href = 'illustrations.html';
    document.getElementById('liSmallIllustrations').appendChild(illustrationsLinkSmall);

    let illustrationsImgLink = document.createElement('img');
    illustrationsImgLink.src = 'images/icons/illustrationsIcon.png';
    document.getElementById('illustrationsLinkSmall').appendChild(illustrationsImgLink);

    // Create Lang nav
    let selectLang = document.createElement('select');
    selectLang.id = "lang-switch";
    selectLang.addEventListener('change', function () {
        changeLanguage(this.value);
    });
    document.getElementById('menuSide').appendChild(selectLang);

    let englishOption = document.createElement('option');
    englishOption.value = "en";
    englishOption.innerHTML = "English";
    englishOption.classList = 'bigOption';
    document.getElementById('lang-switch').appendChild(englishOption);

    let smallEnglishOption = document.createElement('option');
    smallEnglishOption.value = "en";
    smallEnglishOption.innerHTML = "EN";
    smallEnglishOption.classList = "smallOption";
    document.getElementById('lang-switch').appendChild(smallEnglishOption);

    let portugueseOption = document.createElement('option');
    portugueseOption.value = "pt";
    portugueseOption.innerHTML = "Portugu\u00eas";
    portugueseOption.classList = 'bigOption';
    document.getElementById('lang-switch').appendChild(portugueseOption);

    let smallPortugueseOption = document.createElement('option');
    smallPortugueseOption.value = "pt";
    smallPortugueseOption.innerHTML = "PT";
    smallPortugueseOption.classList = "smallOption";
    document.getElementById('lang-switch').appendChild(smallPortugueseOption);
}
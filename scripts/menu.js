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
    document.getElementById('liBigIndex').appendChild(indexLink);

            // Pixel art
    let pixelList = document.createElement('li');
    pixelList.id = 'liBigPixel';
    document.getElementById('ulBig').appendChild(pixelList);

    let pixelArtLink = document.createElement('a');
    pixelArtLink.href = 'pixelArt.html';
    pixelArtLink.innerHTML = 'Pixel art';
    document.getElementById('liBigPixel').appendChild(pixelArtLink);

            // Illustrations
    let illustrationList = document.createElement('li');
    illustrationList.id = 'liBigIllustrations';
    document.getElementById('ulBig').appendChild(illustrationList);

    let illustrationsLink = document.createElement('a');
    illustrationsLink.href = 'illustrations.html';
    illustrationsLink.innerHTML = 'Illustrations';
    document.getElementById('liBigIllustrations').appendChild(illustrationsLink);

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
}
/** document.querySelector */
function qs(/** @type {string} */ qs) {
    return document.querySelector(qs);
}

/** document.querySelectorAll */
function qsa(/** @type {string} */ qs) {
    return Array.from(document.querySelectorAll(qs));
}

// When the user clicks on the button, scroll to the top of the document
function scrollBackToTheTopOfTheDocument() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Get the button
const scrollBackTopButton = qs('#scroll-back-top-button');
scrollBackTopButton.addEventListener('click', () =>
    scrollBackToTheTopOfTheDocument()
);

function hasUserScrolledDownEnough() {
    const SCROLL_BACK_BUTTON_THRESHOLD = 40;
    return (
        document.body.scrollTop > SCROLL_BACK_BUTTON_THRESHOLD ||
        document.documentElement.scrollTop > SCROLL_BACK_BUTTON_THRESHOLD
    );
}

function showScrollBackTopButton() {
    scrollBackTopButton.style.display = 'block';
}

function hideScrollBackTopButton() {
    scrollBackTopButton.style.display = 'none';
}

function hideOrShowScrollBackToTheTopButton() {
    if (hasUserScrolledDownEnough()) {
        showScrollBackTopButton();
    } else {
        hideScrollBackTopButton();
    }
}

window.addEventListener('scroll', () => {
    hideOrShowScrollBackToTheTopButton();
});

//menu burger
const openBurgerMenuButton = qs('button.burger');
const burgerMenu = qs('.burger-menu');
const closeBurgerMenuButton = qs('.close-menu');
function openBurgerMenu() {
    openBurgerMenuButton.style.display = 'none';
    burgerMenu.style.display = 'block';
    closeBurgerMenuButton.style.display = 'block';
}
function closeBurgerMenu() {
    openBurgerMenuButton.style.display = 'block';
    burgerMenu.style.display = 'none';
    closeBurgerMenuButton.style.display = 'none';
}
openBurgerMenuButton.addEventListener('click', () => openBurgerMenu());
[closeBurgerMenuButton, ...qsa('burger-menu a')].forEach(element =>
    element.addEventListener('click', () => closeBurgerMenu())
);

$(qsa('.competence-box ul')).animate({ height: 'hide' });

function showSkills() {
    const TWO_SECONDS_IN_MILLISECONDS = 2 * 1000;
    const ANIMATION_DURATION = TWO_SECONDS_IN_MILLISECONDS;
    $(qsa('.competence-box ul')).animate(
        {
            height: 'show',
        },
        ANIMATION_DURATION
    );
}

$(qsa('[data-tab="skills"]')).on('click', () => showSkills());
$('.competences').on('mouseenter', () => showSkills());
$(qsa('[data-tab="jobs"]')).on('click', () => {
    $('.parcours .parcours-formation .parcours-formation-title').css(
        'background-color',
        '#bfc3b5'
    );
    $('.timeline-container').css('animation-play-state', 'running');
    $('.parcours-formation-title-timeline').fadeIn('slow');
});
$('.parcours .parcours-formation .parcours-formation-title').on(
    'mouseenter',
    function () {
        $('.timeline-container').css('animation-play-state', 'running');
        $(this).css('background-color', '#bfc3b5');
    }
);
$('.parcours-formation').on('mouseenter', () => {
    $('.parcours-formation-title-timeline').fadeIn('slow');
});

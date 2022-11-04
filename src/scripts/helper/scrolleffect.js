import scrollSpy from 'simple-scrollspy'

// init:
// scrollSpy(document.getElementById(navbarId), options)

export default function initScrollspy(mainMenuId,menuItemClass) {
    const options = {
        sectionClass        : '.scrollspy',         // Query selector to your sections
        menuActiveTarget    : menuItemClass,                 // Query selector to your elements that will be added `active` class
        offset              : 100,                  // Menu item will active before scroll to a matched section 100px
        // scrollContainer     : '.scroll-container',  // Listen scroll behavior on `.scroll-container` instead of `window`
    }

    // or shorter:
    scrollSpy(mainMenuId, options)
}

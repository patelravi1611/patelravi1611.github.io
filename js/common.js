class homePage {
    constructor() {
        this.setup();
    }
    setup() {
        this.showBody();
        this.elementFromTop(document.querySelectorAll('.personal-info .title'),'show-title',100, 'percent'); // as top of element enters bottom of viewport 
        this.elementFromTop(document.querySelectorAll('.personal-info .sub-title'),'show-sub-title',100, 'percent'); // as top of element enters bottom of viewport 
        this.elementFromTop(document.querySelectorAll('.theme-popup'),'show-theme-popup',100, 'percent'); // as top of element enters bottom of viewport 
        window.addEventListener('scroll', this.allAnimateElement.bind(this));
    }
    allAnimateElement() {
        this.elementFromTop(document.querySelectorAll('.my-skills'),'show-my-skills',90, 'percent'); // as top of element enters bottom of viewport 
        this.elementFromTop(document.querySelectorAll('.my-skills-row'),'show-my-skills-row',95, 'percent'); // as top of element enters bottom of viewport 
        this.elementFromTop(document.querySelectorAll('.white-section .small-title'),'show-small-title',95, 'percent'); // as top of element enters bottom of viewport 
    }
    showBody() {
        setTimeout(function(){ 
            document.body.classList.add('show');
        }, 200);
    }
    hasClass(el, cls) {
        if (el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { return true; } 
        }
    addClass(el, cls) {
        if (!el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { el.className += ' '+cls; } 
        }
    delClass(el, cls) {
        el.className = el.className.replace(new RegExp('(?:^|\\s)'+cls+'(?!\\S)'),'');
        }
    
    // document.documentElement.className += ' js'; // adds class="js" to <html> element
    
    elementFromTop(elem, classToAdd, distanceFromTop, unit) {
        console.log('test');
        var winY = window.innerHeight || document.documentElement.clientHeight, 
        elemLength = elem.length, distTop, distPercent, distPixels, distUnit, i;
        for (i = 0; i < elemLength; ++i) {
            distTop = elem[i].getBoundingClientRect().top;
            distPercent = Math.round((distTop / winY) * 100);
            distPixels = Math.round(distTop);
            distUnit = unit == 'percent' ? distPercent : distPixels;
            if (distUnit <= distanceFromTop) {
                if (!this.hasClass(elem[i], classToAdd)) { this.addClass(elem[i], classToAdd); }
                } else {
                // this.delClass(elem[i], classToAdd);
                }
            }
        }
    
}

const HomePage = new homePage();


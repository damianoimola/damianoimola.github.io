/*
    --- TextTyper -----
 */
let TxtType = function(elem, sentence, period) {
    this.sentence = sentence;
    this.elem = elem;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.sentence.length;
    let fullTxt = this.sentence[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.elem.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

// loading the texttyper
window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let sentence = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (sentence) {
            new TxtType(elements[i], JSON.parse(sentence), period);
        }
    }
};
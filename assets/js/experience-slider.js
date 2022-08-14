function loadExperienceData() {
    var obj;
    fetch("assets/data/experience.json")
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("Oops, we haven't got JSON!");
            }
            return response.json();
        })
        .then(data => createSlider(data));
}




let slides = [];
let list_elements = []
let intervalId;
function createSlider(data) {
    if(data === "" || data === undefined){
        throw new TypeError("JSON not loaded!");
    }

    let slider = document.getElementById("experience-slider");
    if (slider) {
        data.Experience.forEach(item => {
            let id = item.id;
            let name = item.name;
            let title = item.title;
            let start = item.start;
            let end = item.end;
            let caption = item.caption;
            let visible = item.visible;

            //let str = "<h2>" + title + "<small>" + name + "</small></h2>"
            let str = `<div class="wrapper">
                            <h2 class="header">${title}</h2>
                            <div class="main">
                                <div class="info">
                                    <small>${name}</small>
                                    <small>${start}</small>
                                    <small>${end}</small>
                                </div>
                                <div class="description">${caption}</div>
                            </div>
                        </div>`
            slides.push(str);

            let list_elem = `<span onclick="setSlider(${id})">${Number(id)+1}</span>`;
            list_elements.push(list_elem);
        });

        startSlider(0);

        // creating item list below slider
        let items_container = document.createElement("div");
        items_container.className = "items-container";
        list_elements.forEach(item =>{
            let literal = document.createElement("span")
            literal.innerHTML = item;
            items_container.appendChild(literal);
        })
        slider.after(items_container)
    }
}

function startSlider(index){
    let slider_element = document.getElementById("experience-slider");

    let i = index;
    const slider = () => {
        slider_element.innerHTML = slides[i];
        slider_element.classList.add('fade-in');

        (i < slides.length - 1) ? i++ : i = 0;
    };

    if (intervalId !== undefined)
        clearTimeout(intervalId);

    slider(); // Start slider immediately
    intervalId = setInterval(slider, 10000); // Slide every 10 seconds

    /* restarting css animation*/
    if (intervalId !== undefined) {
        slider_element.classList.remove('fade-in');
        void slider_element.offsetWidth;
        slider_element.classList.add('fade-in');
    }

}

function setSlider(index){
    startSlider(index);
}
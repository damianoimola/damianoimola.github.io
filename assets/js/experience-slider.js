
// Loading JSon data
// import data from "assets/data/experience.json"


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
        //.then(data => loadExperiences(data));
        .then(data => createSlider(data));
}

function loadExperiences(data){
    if(data === "" || data === undefined){
        throw new TypeError("JSON not loaded!");
    }

    // let obj = JSON.parse(data);
    let parent = document.getElementById("slider-wrapper");

    data.Experience.forEach(x => {
        let experience = document.createElement("div");
        experience.className = "experience";

        let description = document.createElement("div");
        description.className = "description";

        let caption = document.createElement("div");
        caption.className = "caption";
        caption.appendChild(document.createTextNode(x.caption));


        let jobTitle = document.createElement("span");
        jobTitle.className = "job-title";

        let job = document.createElement("span");
        job.className = "job";
        job.innerText = x.title;
        jobTitle.appendChild(job);
        jobTitle.appendChild(document.createTextNode(" in "));
        jobTitle.appendChild(document.createTextNode(x.name));

        let date = document.createElement("span");
        date.className = "date";

        let dateStart = document.createElement("span");
        dateStart.appendChild(document.createTextNode(x.start));
        dateStart.className = "date-start";

        let dateEnd = document.createElement("span");
        dateEnd.appendChild(document.createTextNode(x.end));
        dateEnd.className = "date-end";

        let icon = document.createElement("i");
        icon.className = "bx bx-chevrons-right";


        date.appendChild(dateStart);
        date.appendChild(icon);
        date.appendChild(dateEnd);

        description.appendChild(jobTitle);
        description.appendChild(date);

        experience.appendChild(description);
        experience.appendChild(caption);

        parent.appendChild(experience);
    });
}



function createSlider(data) {
    if(data === "" || data === undefined){
        throw new TypeError("JSON not loaded!");
    }

    // let obj = JSON.parse(data);
    let experience_description_wrapper = document.getElementById("experience-description-wrapper");
    let experience_list_wrapper = document.getElementById("experience-list-wrapper");

    let counter = 0;

    data.Experience.forEach(item => {
        let id = item.id;
        let name = item.name;
        let title = item.title;
        let start = item.start;
        let end = item.end;
        let caption = item.caption_x;


        let experience_description_header = document.createElement("div");
        let experience_description = document.createElement("span");

        if (counter === 1) {
            experience_description_header.className = "experience-description-header visible";
            experience_description.className = "experience-description visible";
        } else {
            experience_description_header.className = "experience-description-header";
            experience_description.className = "experience-description";
        }

        experience_description.innerHTML = caption;




        let list_name = document.createElement("p");
        list_name.innerText = name;
        list_name.onclick = function() {
            makeExpVisible(id, item, data);
        }
        experience_list_wrapper.appendChild(list_name);


        let company_name = document.createElement("div");
        company_name.className = "company-name";
        company_name.innerText = name;

        let job_title = document.createElement("span");
        job_title.className = "job-title";
        job_title.innerText = title;

        let date_start = document.createElement("span");
        date_start.className = "date-start";
        date_start.innerText = start;

        let date_end = document.createElement("span");
        date_end.className = "date-end";
        date_end.innerText = end;


        let leading = document.createElement("div");
        leading.className = "leading";
        leading.appendChild(company_name);
        leading.appendChild(job_title);
        let trailing = document.createElement("div");
        trailing.className = "trailing";
        trailing.appendChild(date_start);
        trailing.appendChild(date_end);


        experience_description_header.appendChild(leading);
        experience_description_header.appendChild(trailing);



        experience_description_wrapper.appendChild(experience_description_header);
        experience_description_wrapper.appendChild(experience_description);

        counter++;
    });
}


function makeExpVisible(id, item, data) {
    let experience_description_wrapper = document.getElementById("experience-description-wrapper");
    let children = experience_description_wrapper.children;

    for(let i=0; i<children.length/2; i++){
        if(i === Number(id)) {
            children[i * 2].classList.add("visible");
            children[i * 2 + 1].classList.add("visible");
        } else {
            children[i * 2].classList.remove("visible");
            children[i * 2 + 1].classList.remove("visible");
        }
    }

}

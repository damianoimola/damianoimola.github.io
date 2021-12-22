
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
        .then(data => loadExperiences(data));
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
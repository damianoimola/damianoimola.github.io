
function loadAwardData() {
    let obj;
    fetch("assets/data/awards.json")
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("Oops, we haven't got JSON!");
            }
            return response.json();
        })
        .then(data => loadAwards(data));
}

function loadAwards(data){
    if(data === "" || data === undefined){
        throw new TypeError("JSON not loaded!");
    }

    // let obj = JSON.parse(data);
    let parent_spec = document.getElementById("table-body-spec");
    let parent_cert = document.getElementById("table-body-cert");
    let parent_scholar = document.getElementById("table-body-scholar");

    data.specializations.forEach(x => {
        if(x.front === true){
            let row = document.createElement("tr");

            let data1 = document.createElement("td");
            data1.appendChild(document.createTextNode(x.org))
            let data2 = document.createElement("td");
            data2.appendChild(document.createTextNode(x.name))


            row.appendChild(data1);
            row.appendChild(data2);
            parent_spec.appendChild(row);
        }
    });

    data.certifications.forEach(x => {
        if(x.front === true){
            let row = document.createElement("tr");

            let data1 = document.createElement("td");
            data1.appendChild(document.createTextNode(x.org))
            let data2 = document.createElement("td");
            data2.appendChild(document.createTextNode(x.name))


            row.appendChild(data1);
            row.appendChild(data2);
            parent_cert.appendChild(row);
        }
    });


    data.scholarships.forEach(x => {
        if(x.front === true){
            let row = document.createElement("tr");

            let data1 = document.createElement("td");
            data1.appendChild(document.createTextNode(x.org))
            let data2 = document.createElement("td");
            data2.appendChild(document.createTextNode(x.name))


            row.appendChild(data1);
            row.appendChild(data2);
            parent_scholar.appendChild(row);
        }
    });
}
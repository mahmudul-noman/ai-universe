// load all data, fetch all data
const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools.slice(0, 6));
}

// display all data function
const displayData = (posts) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    console.log(posts);

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('col');

        // date format
        const publishedDate = new Date(post.published_in);
        const day = publishedDate.getDate();
        const month = publishedDate.getMonth() + 1;
        const year = publishedDate.getFullYear();
        const formattedDate = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;

        // create innerHTML for card
        postDiv.innerHTML = `
            <div class="card">
                <img src="${post.image}" class="card-img-top img-fluid p-3 rounded-5" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <ol>
                    <li>${post.features[0]}</li>
                    <li>${post.features[1]}</li>
                    <li>${post.features[2] ? post.features[2] : 'No Data Found'}</li>
                    </ol>
                    <hr>
                    
                    <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>${post.name}</h4>
                        <p class="card-text"><i class="fa-solid fa-calendar-days"></i> ${formattedDate}</p>
                    </div>
                    <div>
                        <a onclick="loadSingleData('${post.id}')" style="background-color: #FEF7F7;" class="p-3 rounded-5 text-danger" data-bs-toggle="modal" data-bs-target="#postDetailsModal" href="#"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                </div>
            </div>
    `;
        postContainer.appendChild(postDiv);
    });
    toggleSpinner(false);
}

// loader or spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

// load single data details
const loadSingleData = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDataDetails(data.data);
}

// display all single data function
const displayDataDetails = post => {
    console.log(post);
    const postDetails = document.getElementById('modal-body');
    postDetails.innerHTML = `
    <div class="col d-flex gap-4 p-5">

        <div class="w-50 border border-danger p-3 rounded-3" style="background-color: #ddd;">
            <div>
                <h4>${post.description == null || post.description === undefined ? 'No Description in This Card' : post.description}</h4>
            </div>
            
            <div class="col d-flex justify-content-between align-items-center gap-2">
            <div class="card h-100 w-100">
            <div class="card-body">
            <h5 class="card-title text-success">${post.pricing == null || post.pricing[0] === undefined ? 'Free of cost/' : post.pricing[0].price}</h5>
            <h5 class="card-title text-success">${post.pricing == null || post.pricing[0] === undefined ? 'Basic' : post.pricing[0].plan}</h5>
            </div >
            </div >

            <div class="card h-100 w-100">
            <div class="card-body">
            <h5 class="card-title text-warning">${post.pricing == null || post.pricing[1] === undefined ? 'Free of cost/' : post.pricing[1].price}</h5>
            <h5 class="card-title text-warning">${post.pricing == null || post.pricing[1] === undefined ? 'Pro' : post.pricing[1].plan}</h5>
            </div>
            </div>

            <div class="card h-100 w-100">
            <div class="card-body">
            <h5 class="card-title text-danger">${post.pricing == null || post.pricing[2] === undefined ? 'Free of cost/' : post.pricing[2].price}</h5>
            <h5 class="card-title text-danger">${post.pricing == null || post.pricing[2] === undefined ? 'Enterprise' : post.pricing[2].plan}</h5>
            </div>
            </div>
        </div >

    <div class="pt-3 d-flex gap-2 justify-content-between">
        <div>
            <h4>Features</h4>
            <ul>
                <li>${post.features == null || post.features[1].feature_name === undefined ? 'No Features Data Found' : post.features[1].feature_name}</li>
                <li>${post.features == null || post.features[2].feature_name === undefined ? 'No Features Data Found' : post.features[2].feature_name}</li>
                <li>${post.features == null || post.features[3].feature_name === undefined ? 'No Features Data Found' : post.features[3].feature_name}</li>
            </ul>
        </div>

        <div>
            <h4>Integrations</h4>
            <ul>
                <li>${post.integrations == null || post.integrations[0] === undefined ? 'No Data Found' : post.integrations[0]}</li>
                <li>${post.integrations == null || post.integrations[1] === undefined ? 'No Data Found' : post.integrations[1]}</li>
                <li>${post.integrations == null || post.integrations[2] === undefined ? 'No Data Found' : post.integrations[2]}</li>
            </ul>
        </div >
    </div >
    </div >

    <div class="border border-1 p-4 rounded-3 w-50">
        <div>
            <p class="my-accuracy bg-danger end-0 p-2 position-absolute rounded-3 text-white" style="display: ${post.accuracy.score ? '' : 'none'};">
                ${post.accuracy.score ? post.accuracy.score * 100 + '% Accuracy' : ''} </p>

            <img src="${post.image_link[0]}" class="img-fluid rounded-2 w-100">
        </div>
        <h4 class="text-center pt-3">${post.input_output_examples == null ? 'Can you give any example?' : post.input_output_examples[0].input}</h4>
        <p class="text-center pt-2">${post.input_output_examples == null ? 'No! Not Yet! Take a break!!!' : post.input_output_examples[0].output}</p>
    </div>
   </div >
    `
}
loadAllData();

const showAllDataTogether = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
};


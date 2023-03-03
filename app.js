const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}


const displayData = (posts) => {
    const postContainer = document.getElementById('post-container');

    // postContainer.innerHTML = '';
    console.log(posts);
    // const ShowAll = document.getElementById('show-all');
    // if (posts.length > 6) {
    //     posts = posts.slice(0, 6);
    //     ShowAll.classList.remove('d-none');
    // }
    // else {
    //     ShowAll.classList.add('d-none');        
    // }


    // loop every single post
    posts.forEach(post => {

        const postDiv = document.createElement('div');
        postDiv.classList.add('col');

        // date format
        const publishedDate = new Date(post.published_in);
        const day = publishedDate.getDate();
        const month = publishedDate.getMonth() + 1;
        const year = publishedDate.getFullYear();
        const formattedDate = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;

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
}


// load show all data
// document.getElementById('show-all-btn').addEventListener('click', function () {
//     loadAllData();
// })


// // loader or spinner
// const toggleSpinner = isLoading => {
//     const loaderSection = document.getElementById('loader');
//     if (isLoading) {
//         loaderSection.classList.remove('d-none');
//     }
//     else {
//         loaderSection.classList.add('d-none');
//     }
// }


const loadSingleData = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDataDetails(data.data);
}

const displayDataDetails = post => {
    console.log(post);
    document.getElementById('postDetailsModalLabel').innerText = post.description;
    const postDetails = document.getElementById('modal-body');
    postDetails.innerHTML = `
        <div>
            <div class="col d-flex justify-content-between align-items-center gap-2">
            <div class="card h-100 w-100">
            <div class="card-body">
            <h5 class="card-title text-success">${post.pricing[0].price}</h5>
            <h5 class="card-title text-success">${post.pricing[0].plan}</h5>
            </div>
            </div>

            <div class="card h-100 w-100">
            <div class="card-body">
            <h5 class="card-title text-warning">${post.pricing[1].price}</h5>
            <h5 class="card-title text-warning">${post.pricing[1].plan}</h5>
            </div>
            </div>

            <div class="card h-100 w-100">
            <div class="card-body">
            <h5 class="card-title text-danger">${post.pricing[2].price}</h5>
            <h5 class="card-title text-danger">${post.pricing[2].plan}</h5>
            </div>
            </div>
        </div>



        <div class="pt-3 d-flex gap-2 justify-content-between">
        <div>
            <h4>Features</h4>
            <ul>
                <li>${post.features[1].feature_name}</li>
                <li>${post.features[2].feature_name}</li>
                <li>${post.features[3].feature_name}</li>
            </ul>
        </div>

        <div>
            <h4>Integrations</h4>
            <ul>
                <li>${post.integrations[0]}</li>
                <li>${post.integrations[1]}</li>
                <li>${post.integrations[2]}</li>
            </ul>
        </div>
    </div>
   </div>


    `


}


loadAllData();
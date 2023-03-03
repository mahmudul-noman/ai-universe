const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
<<<<<<< HEAD
    displayData(data.data.tools);
}


const displayData = (posts) => {
    const postContainer = document.getElementById('post-container');

    // postContainer.innerHTML = '';
    console.log(posts);
    const ShowAll = document.getElementById('show-all');
    if (posts.length > 6) {
        posts = posts.slice(0, 6);
        ShowAll.classList.remove('d-none');
    }
    else {
        ShowAll.classList.add('d-none');        
    }


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
                        <a style="background-color: #FEF7F7;" class="p-3 rounded-5 text-danger" href="#"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                </div>
            </div>
    `;
        postContainer.appendChild(postDiv);
    });
}


// load show all data
document.getElementById('show-all-btn').addEventListener('click', function () {
    loadAllData();
})


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
=======
    // console.log(data.data);
    displayData(data.data.tools);
    // displayPhones(data.data, dataLimit);
}


const displayData = posts => {
    const postContainer = document.getElementById('post-container');
    // postContainer.innerHTML = '';
    console.log(posts);

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('col');
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
                <h4>${post.name}</h4>
                <p class="card-text">${post.published_in}</p>
            </div>
        </div>
        `;
        postContainer.appendChild(postDiv);



    });

};

>>>>>>> 016223ba45490e3d3e737f2959c0692601169542



loadAllData();
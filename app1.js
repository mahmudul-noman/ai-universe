const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = (posts) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    // Sort posts by date
    posts.sort((a, b) => new Date(b.published_in) - new Date(a.published_in));

    // Loop through sorted posts
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('col');

        // Format date
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

// Load all data
loadAllData();

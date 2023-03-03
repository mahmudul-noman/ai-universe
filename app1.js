const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
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
                    <h4>${post.name}</h4>
                    <p class="card-text">${formattedDate}</p>
                </div >
            </div >
    `;
        postContainer.appendChild(postDiv);
        



    });

};




loadAllData();
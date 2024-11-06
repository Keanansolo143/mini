let rootPath;

function init(){
    rootPath = "http://mysite.itvarsity.org/api/mini-blog/";

    document.getElementById("getAll").addEventListener('click', getAllPosts);
    document.getElementById("getPopular").addEventListener('click', getPopularPosts);
    document.getElementById("getLatest").addEventListener('click', getLatestPosts);

    getAllPosts();
}

function getAllPosts(){
    let category = "getAll";
    fetchPosts(category);
    setActiveLink(category);
}

function getPopularPosts(){
    category = "getPopular";
    fetchPosts(category);
    setActiveLink(category);
}

function getLatestPosts(){
    category = "getLatest";
    fetchPosts(category);
    setActiveLink(category);
}

function fetchPosts(category){
    fetch (rootPath + 'get-posts/?category=' + category)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        displayPosts(data)
    })
}

function displayPosts(data){
    let output = "";

    for(let a = 0; a < data.length; a++){
        output +=`
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">${data[a][0]}</h4>
                </div>
                <div class="card-body">
                    <img src="${rootPath}/uploads/${data[a][3]} " class="card-img-top"/>
                    <p class="card-text">${data[a][1]}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-lg btn-kink"><i class="far fa-heart"></i></button>
                            <button type="button" class="btn btn-lg btn-kink"><i class="far fa-comment"></i></button>
                            <button type="button" class="btn btn-lg btn-kink"><i class="fa fa-retweet"></i></button>
                        </div>
                        <small class="text-muted">${data[a][2]}</small>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("posts").innerHTML = output;
}

function setActiveLink(id) {
    document.getElementById("getAll").classList.remove("active");
    document.getElementById("getPopular").classList.remove("active");
    document.getElementById("getLatest").classList.remove("active");

    document.getElementById(id).classList.add("active");
}










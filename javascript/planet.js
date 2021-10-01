const url = "https://sunnyday.one/community-science-museum/wp-json/wp/v2/posts/";

const id = JSON.parse(localStorage.getItem("post"));

const newURL = url + id + "?_embed";
const postContainer = document.querySelector(".planet-specification");

async function getPost(url) {
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);
    createPost(post);
}

function createPost(post){
    document.title = "Community Science Museum | " + post.title.rendered;

    postContainer.innerHTML += `
        <div class="planet-details">
        <img src="${post._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url}" class="planet-details__img">
            <h2>${post.title.rendered}</h2>
            <div class="planet-details__div">${post.content.rendered}</div>
        </div>`;
}

getPost(newURL);
const addressBarParameters = new URLSearchParams(window.location.search);
const imgId = addressBarParameters.get("imgId");
const research = addressBarParameters.get("search");
const detailsRow = document.getElementById("detailsRow");
const main = document.getElementsByTagName('body')[0]
console.log(imgId);
console.log(research);
const URL = "https://api.pexels.com/v1/photos/";

const searchImg = function () {
    fetch(`${URL}${imgId}`, {
        headers: {
            Authorization: "JK1YGcps9FynYqDeXAvHZFYhbEpY5CZKIk0mSXoFHeIbTJ7ATEOknuN4"
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("ERROR");
            }
        })
        .then((data) => {
            console.log(data);
            detailsRow.innerHTML = `
            <div class="col-12 col-md-8 text-center">   
                <div class="card">
                    <img src="${data.src.large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.alt}</h5>
                        <p class="card-text">Artista: <a href="${data.photographer_url}">${data.photographer}</a></p>                                   
                    </div>
                    
                </div>                
            </div>`;
            main.style.backgroundColor = data.avg_color
        })
        .catch((err) => {
            console.log(err);
        });
};

searchImg()
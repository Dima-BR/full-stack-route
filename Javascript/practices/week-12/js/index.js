// ? =============> Global ===============>

// ! =============> When Start ===============>


// * =============> Events ===============>


// ! =============> Functions ===============>

//  =============> Validation ===============>

function getNews() {
    // const api = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-05&sortBy=publishedAt&apiKey=a6af91a581f341ea992381a6df116ca3');
    // console.log("api", api);
    // const res = await api.json();
    // console.log('res', res);

    // const articles = res.articles;
    // console.log('articles', articles);
// #####################################################################################################################
// fetch without using async/ await

    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-05&sortBy=publishedAt&apiKey=a6af91a581f341ea992381a6df116ca3')
    .then(function (api) {
        api.json().then(function (res) {
            console.log('res', res);
            console.log('artic',res.articles );
        });
    });


}

getNews();
// nr@eLroFsweNt3G
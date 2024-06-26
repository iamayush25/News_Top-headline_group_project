const headlines = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2b3cfc5f297f4064b1be2e36609dede9")
  const data = await response.json()
  const article = data.articles;
  showNews(article)
}

const showNews = (articles) => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  articles.map((article) => {
    mainContainer.innerHTML += `
        <div class="getNews">
        <img class="articleImg" src="${article.urlToImage}" />
        <h2 class="add-style">${article.title}</h2>
            <p> ${article.description}</p>
            <h3> Read full artical <a target = "_blank" href = "${article.url}">&#8594;</a></h3>
        </div>`;
  });
};

const searchNews = async () => {
  const findNews = document.getElementById("findInput").value
  const res = await fetch(`https://newsapi.org/v2/everything?q=${findNews}&from=yyyy-mm-dd&sortBy=publishedAt&apiKey=2b3cfc5f297f4064b1be2e36609dede9`)
  const data = await res.json()
  const article = await data.articles;
  console.log(article);

  showNews(article)
}

headlines()
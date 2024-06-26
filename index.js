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

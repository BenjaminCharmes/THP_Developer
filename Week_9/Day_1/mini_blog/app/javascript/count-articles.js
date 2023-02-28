import "@hotwired/turbo-rails"
 
document.addEventListener("turbo:load", () => {
  const countArticlesBtn = document.getElementById("count-articles-btn")
  countArticlesBtn.addEventListener("click", () => {
    const numArticles = document.querySelectorAll("ul.articles-list > li.article").length
    alert(`Il y a ${numArticles} articles dans la liste.`)
  })
})

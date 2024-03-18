const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(function(item, index) {
  console.log(`Category: ${item.querySelector("h2").textContent}`)
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`)
})

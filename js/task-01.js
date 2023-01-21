const listCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategories.length}`);

const itemAll = () => {
  return [...listCategories]
    .map(
      categories => `Category: ${categories.firstElementChild.textContent} 
Elements: ${categories.lastElementChild.children.length}`
    )
    .join('\n');
};
console.log(itemAll());

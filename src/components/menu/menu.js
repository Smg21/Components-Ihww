//import { data } from 'msw/lib/types/context';
import './Menu.less'




// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
/*
data.forEach(article => {
  document.querySelector('div.articles').appendChild(articlemaker(article));
});



function menuMaker(linksArray){
  const menuWrapper = document.createElement('div');
  const menuList = document.createElement('ul');

  menuWrapper.appendChild(menuList);

  menuWrapper.classList.add('menu');

  linksArray.forEach(linkText => {
    const link= document.createElement('li');
    link.textContent = linkText;
    menuList.appendChild(link);
  })

  const hamMenu= document.querySelector('.menu-button');

  hamMenu.addEventListener('click', () => {
    menuWrapper.classList.toggle('menu--open');
  })

  return menuWrapper;
}

console.log(menuMaker(menuItems));

document.querySelector('.header').appendChild(menuMaker(menuItems));


function articleMaker(articleOb => {
const articleWrapper = document.createElement('div')
const articleTitle = document.createElement('h2')
const articleDate = document.createElement('p')
const articleParagraphOne = document.createElement('div')
const articleParagraphTwo = document.createElement('div')
const articleParagraphThree = document.createElement('div')
const expandButton = document.createElement('span')

articleWrapper.classList.add('article');
articleDate.classList.add('date')
expandButton.classList.add('expandButton');

articleWrapper.appendChild(articleTitle);
articleWrapper.appendChild(articleDate);
articleWrapper.appendChild(articleParagraphOne);
articleWrapper.appendChild(articleParagraphTwo);
articleWrapper.appendChild(articleParagraphThree);
articleWrapper.appendChild(expandButton);

articleTitle.textContent = articleObj.title;
articleDate.textContent = articleObj.date;
articleDate.paragraphOne = articleObj.firstParagraph;
articleDate.paragraphTwo = articleObj.secondParagraph;
articleDate.paragraphThree = articleObj.thirdParagraph;


expandButton.addEventListener('click', () => {
  articleWrapper.classList.toggle('article-open');
})

return articleWrapper;

}

*/

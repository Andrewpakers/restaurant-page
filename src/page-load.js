import backgroundImage from './assets/pad-thai.jpeg';
import menu from './pageMenu.js';
import home from './pageHome.js';
import contact from './pageContact.js';

const createHeader = function() {
    const header = document.createElement('div');
 //   header.style.backgroundImage = `url(${backgroundImage})`;
    header.classList.add('header');

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const title = document.createElement('h1');
    title.textContent = `Andrew's Awesome Thai Spot`;

    const address = document.createElement('div');
    address.textContent = "123 Boulevard Boulevard\r\nCity, State, 00000";
    address.classList.add('subtext');

    textContainer.appendChild(title);
    textContainer.appendChild(address);
    header.appendChild(textContainer);

    return header;
};

const createContent = function () {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    const para1 = document.createElement('p');
    para1.classList.add('para1');
    const para2 = document.createElement('p');
    para2.classList.add('para2');
    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus purus, tempus eu viverra eget, convallis tempus ligula. Vivamus auctor erat ante, id pellentesque mi vehicula nec. Maecenas eu elit sed augue faucibus fermentum. Phasellus libero libero, lobortis non arcu quis, suscipit porta leo. Maecenas eget nisi a quam molestie blandit elementum vel libero. Praesent vehicula nisl et tellus scelerisque congue. Morbi faucibus, sem a blandit egestas, urna est pulvinar arcu, ac tempus nulla magna non augue.';
    para2.textContent = 'Sed ullamcorper est in viverra ullamcorper. Praesent semper, elit non volutpat accumsan, mauris purus facilisis mauris, sed imperdiet tortor lorem vel mi. Pellentesque ac ornare nisl. Etiam vitae nisl at mauris consectetur condimentum. Quisque rhoncus iaculis dolor et feugiat. Morbi interdum sollicitudin lobortis. In eget finibus felis, quis vulputate nisl. Mauris suscipit, augue ut bibendum aliquet, nunc arcu pulvinar elit, sit amet consequat odio felis vitae nulla. Duis consequat nec tortor a fringilla. Nunc iaculis velit tellus, sit amet vehicula erat scelerisque ac. Ut suscipit, risus ac dapibus aliquam, urna orci semper ipsum, vel imperdiet enim purus a orci. Etiam non facilisis sem, eget maximus libero. Praesent turpis mauris, fermentum nec est vitae, iaculis dictum est. Vestibulum condimentum lacus non nunc efficitur, sed malesuada ligula placerat.';
    contentContainer.appendChild(para1);
    contentContainer.appendChild(para2);

    return contentContainer;
};

const createNavBar = function() {
    const navigationbar = document.createElement('div');
    navigationbar.classList.add('navbar');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        home();
    });
    navigationbar.appendChild(homeBtn); 

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        menu();
    });
    navigationbar.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        contact();
    });
    navigationbar.appendChild(contactBtn); 
    
    return navigationbar;
};

const init = function() {
    const pageBody = document.querySelector('body');
    const contentDiv = document.createElement('div');
    contentDiv.id = "content";

    pageBody.appendChild(createNavBar());
    pageBody.appendChild(contentDiv);
    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createContent());
  };

  export default init;
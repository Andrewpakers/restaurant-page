const init = function() {
    const subtext = document.querySelector('.subtext');
    const title = document.querySelector('h1');
    const para1 = document.querySelector('.para1');
    const para2 = document.querySelector('.para2');

    subtext.textContent = "123 Boulevard Boulevard\r\nCity, State, 00000";
    para1.textContent = 'Contact Me!';
    para2.textContent = 'Owner@email.example';    
};

export default init;
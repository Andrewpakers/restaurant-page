const init = function() {
    const subtext = document.querySelector('.subtext');
    const title = document.querySelector('h1');
    const para1 = document.querySelector('.para1');
    const para2 = document.querySelector('.para2');

    subtext.textContent = 'Menu';
    para2.textContent = '';
    para1.textContent = 'Filet Mignon, 8 ounce - $38\r\nFilet Mignon, 12 ounce - $49\r\nRibeye Steak, 18 ounce - $39\r\nPorterhouse Steak for Two - $40\r\nClassic New York Steak - $36';

};

export default init;
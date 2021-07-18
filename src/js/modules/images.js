
const images = (selector) => {
    const popup = document.createElement('div'),
          picture = document.createElement('img'),
          rowLinks = document.querySelector(selector),
          imageLinks = rowLinks.querySelectorAll('div > a');
          //.querySelectorAll('> div > a')
       
    document.body.append(popup);
    popup.append(picture);

    console.log(imageLinks);
    popup.classList.add('popup');
    popup.classList.add('popup-content');
    picture.classList.add('image-content');
    popup.addEventListener('click', ()=>{
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });    

    imageLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            picture.src = item.href;
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
          
    
    
};

export default images;
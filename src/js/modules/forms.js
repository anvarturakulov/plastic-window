import checkNumberInputs from "./checkNumberInputs";
import modals from "./modals";
 
const forms = (state,postPopupSelector) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumberInputs('input[name="user_phone"]');

    const message = {
        loading : 'Загрузка...',
        sucsecc : 'Спасибо ! Скоро с Вами свяжется',
        failure : 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method : "POST",
            body : data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e)=> {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.sucsecc;
                })
                .catch(()=> statusMessage.textContent = message.failure)
                .finally(()=> {
                    clearInputs();
                    setTimeout(()=> {
                        statusMessage.remove();
                    },5000);
                    
                    document.querySelector(postPopupSelector).style.display = 'none';
                    
                });
        });
    });

    
};

export default forms;
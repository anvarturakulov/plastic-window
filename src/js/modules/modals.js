import changeModalState from './changeModalState';

const modals = (state={}) => {
    function closeModal(modal) {
        let windows = document.querySelectorAll('[data-modal]');
        modal.style.display = 'none';
        document.body.style.overflow = '';
        windows.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }


    const message = {
        error : 'Пожалуйста выбирете все элементы ...'
    };

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal   = document.querySelector(modalSelector),
              close   = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

        function checkState() {
            if (modal.getAttribute('data-popup') == '2') {
                if (state.form ==undefined || state.width == undefined || state.height == undefined) {
                    return false;
                }
            }

            if (modal.getAttribute('data-popup') == '3') {
                if (state.type ==undefined || state.typeProfile == undefined) {
                    return false;
                }
            }

            return true;
        }

        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if (e.target) {
                    e.preventDefault();
                }
            
                if (checkState()) {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                    showModal(modal);
                } else {
                    alert(message.error);
                }
                
           });
        });

       close.addEventListener('click', ()=> {
            closeModal(modal);
       }); 

       modal.addEventListener('click', (e) => {
        if (e.target === modal && closeClickOverlay && checkState()) {
            closeModal(modal);
        }
       });
    }

    function showModalByTime(selector, time) {
        const popup = document.querySelector(selector);
        setTimeout(() => showModal(popup), time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalByTime('.popup', 60000);
    
};

export default modals;
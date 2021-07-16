const modals = () => {
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function showModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function bindModal(triggerSelector, modalSelector, closeSelector, prevPopup = '') {
        const trigger = document.querySelectorAll(triggerSelector),
              modal   = document.querySelector(modalSelector),
              close   = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if (e.target) {
                    e.preventDefault();
                }
            showModal(modal);
            if (prevPopup !='') {
                document.querySelector(prevPopup).style.display = 'none';
            }
           });
        });

       close.addEventListener('click', ()=> {
            closeModal(modal);
       }); 

       modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
       });

       
    }

    function showModalByTime(selector, time) {
        const popup = document.querySelector(selector);
        setTimeout(() => showModal(popup), time);
    }

    function bindCheckboxes(selectorWrapperCheckboxes) {
        const wrappers = document.querySelectorAll(selectorWrapperCheckboxes);
        const checkBoxes = document.querySelectorAll(`${selectorWrapperCheckboxes} input`);    
        function clearCheckBoxes() {
            checkBoxes.forEach(item => {
                item.checked = false;
            });
        }

        wrappers.forEach(item => {
            item.addEventListener('click', ()=> {
                clearCheckBoxes();
                item.querySelector('input').checked = true;
            });
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile .popup_calc_profile_close','.popup_calc');
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end .popup_calc_end_close','.popup_calc_profile');

    bindCheckboxes('.popup_calc_profile label');

    showModalByTime('.popup', 60000);
    
};

export default modals;
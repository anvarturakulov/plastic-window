
// const tabs = () => {

//     function bindTabs(selectorTabs, selectorTabContents, selectorLink, activeClass, tabList) {
//         const tabs     = document.querySelectorAll(selectorTabs);

//         function removeAllActiveClasses(selectorLink) {
//             const links = document.querySelectorAll(`${selectorTabs} ${selectorLink}`);
//             links.forEach(element => {
//                 element.classList.remove(activeClass);
//             });
//         }

//         function hideAllTabContents(selectorTabContents) {
//             const links = document.querySelectorAll(selectorTabContents);
//             links.forEach(element => {
//                 element.style.display = 'none';
//             });
//         }

//         function addActiveClass(element) {
//             element.classList.add(activeClass);
//         }

//         tabs.forEach(item => {
//             item.addEventListener('click', (e)=> {
//                 removeAllActiveClasses(selectorLink);
//                 const activeTabContentSelector = tabList[item.querySelector(selectorLink).classList[0]];

//                 item.querySelector(selectorLink).classList.add(activeClass);
//                 hideAllTabContents(selectorTabContents);
//                 console.log(activeTabContentSelector);
//                 const it = document.querySelector(`.${activeTabContentSelector}`);
//                 it.style.display = 'block';
//             });
//         });
//     }

//     function tabPopupCalc() {
//         const links = document.querySelectorAll('.balcon_icons_img'),
//               bigImgList = document.querySelectorAll('.big_img > img');
//               console.log(bigImgList);
        
//         function showBigImg(alt) {
//             bigImgList.forEach(item =>{ 
//                 if (item.alt == alt) {
//                     item.style.display = 'block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         }

//         function clearActiveClassFromLinks(){
//             links.forEach(item => {
//                 item.classList.remove('do_image_more');
//             });
//         }

//         links.forEach( link => {
//             link.addEventListener('click', () => {
//                 clearActiveClassFromLinks();
//                 link.classList.add('do_image_more');
//                 showBigImg(link.querySelector('img').alt);
//             });
//         });

//     }

//     const tabList = {
//         'tree_link' : 'tree', 
//         'aluminum_link' : 'aluminum',
//         'plastic_link' : 'plastic',
//         'french_link' : 'french',
//         'rise_link' : 'rise'
//     };

//     const decorList = {
//         'internal_link' : 'internal', 
//         'external_link' : 'external',
//         'rising_link' : 'rising',
//         'roof_link' : 'roof',
//     };

    
//     bindTabs('.glazing_block', '.glazing_content', 'a', 'active',tabList);
//     bindTabs('.decoration_item', '.decoration_content .row .decor_item', 'div', 'after_click',decorList);
//     tabPopupCalc();
// };

const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i=0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(1);

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
           (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;

let ContainerCreateBtn = document.querySelector('.header__left__creatContactContainer');
let oneContact = document.querySelector('.creatAction__oneContact');
let listContact = document.querySelector('.main__listContact');
let windowCreateContact = document.querySelector('.windowCreateContact');
let contactBtn = document.querySelector('.header__left__contacBtn');
let btnPlusLibelles = document.querySelector('.header__left__libelles__title__btnPlus');
let windowDark = document.querySelector('.windowDark');
let btnNothingLibelles = document.querySelectorAll('.modal__libelle__btnAction__nothing');
let saveLibelle = document.querySelector('.modal__createLibelle__btnAction__save');
const libelleName = document.querySelector('#newLibelle');
const modal__renameLibelle = document.querySelector('.modal__renameLibelle');
const modal__createLibelle = document.querySelector('.modal__createLibelle');
const modal__renameLibelle__btnAction = document.querySelector('.modal__renameLibelle__btnAction');
const modal__deleteLibelle = document.querySelector('.modal__deleteLibelle');
const modal__deleteLibelle__btnAction = document.querySelector('.modal__deleteLibelle__btnAction');
const btnSaveContact = document.querySelector('.btnSaveContact');
const header__top__logo__burger = document.querySelector('.header__top__logo__burger')
const windowCreateContactLibelle = document.querySelector('.windowCreateContact__libelle')
const tabContact = [] 


function visibilityBtnCreateAction() {
    const creatAction = document.querySelector('.creatAction');
    if (creatAction.style.display === "block") {
        creatAction.style.display= "none";
        return
    }
    creatAction.style.display = "block"
}

function visibilityManageLibelles() {
    const manageLibelles = document.querySelector('.manageLibelles')
    if (manageLibelles.style.display === "block") {
        manageLibelles.style.display= "none";
        return
    }
    manageLibelles.style.display = "block"
}


function OpenWindowsCreatContact() {
    listContact.style.display = 'none';
    windowCreateContact.style.display = 'block';
}


function OpenWindowsListContact() {
    listContact.style.display = 'block';
    windowCreateContact.style.display = 'none'; 
}

function showModalAddLibelles() {
    modal__createLibelle.style.display = 'flex'
    windowDark.style.display = "flex";
}

function showModalRenameLibelles(libelleId) {
    windowDark.style.display = "flex";
    modal__renameLibelle.style.display = "flex"
    modal__renameLibelle__btnAction.addEventListener('click', function () {
        renameLibellePart2(libelleId);
    });
}
function showModalDeleteLibelle(libelleId) {
    windowDark.style.display = "flex";
    modal__deleteLibelle.style.display = "flex"
    modal__deleteLibelle__btnAction.addEventListener('click', function () {
        deleteLibellePart2(libelleId);
    });
}

function hiddenModalLibelles() {
    windowDark.style.display = "none";
    modal__createLibelle.style.display = 'none'
    modal__renameLibelle.style.display = "none"
    modal__deleteLibelle.style.display = "none"
}

function createElement(type, properties = {}) {
    const element = document.createElement(type);
    Object.assign(element, properties);
    return element;
}

function createIcon(text, clickHandler) {
    return createElement('img', {
        src: text,
        onclick: clickHandler,
        alt : 'renommer icon'
    });
}


function createLibelle() {
    
    const libelleId = crypto.randomUUID();
    const libelles = document.querySelector('.header__left__libelles');

    const svg = document.createElement('img');
    svg.setAttribute('src','./assets/images/libelle.svg');
    svg.setAttribute('alt', "libellé icon");

    
    const span = document.createElement('span');
    span.textContent = libelleName.value

    const partie2 = document.createElement('div')
    partie2.classList.add("header__left__libelle__item__partie2", "flex", "spaceBetween", "alignItemCenter");

    const partie2__icon1 = createIcon('./assets/images/material-Icon/edit-icon.svg',function () {
        renameLibellePart1(libelleId);
    });
    partie2__icon1.classList.add('visibilityHidden','header__left__libelle__item__partie2__icon');

    const partie2__icon2 = createIcon('./assets/images/material-Icon/delete-icon.svg',function () {
        deleteLibellePart1(libelleId);
    });
    partie2__icon2.classList.add('visibilityHidden','header__left__libelle__item__partie2__icon')
    partie2__icon2.setAttribute('alt', "renommer icon");

    
    const libelleItem = document.createElement('div');
    libelleItem.classList.add('header__left__libelle__item','flex', 'alignItemCenter');
    libelleItem.setAttribute('id',libelleId);


    partie2.appendChild(span);
    libelleItem.append(svg, partie2, partie2__icon1, partie2__icon2);
    libelles.appendChild(libelleItem);
    hiddenModalLibelles()
}


function renameLibellePart1(libelleId) {
    const libelleItem = document.getElementById(libelleId);
    const libelleOldName = libelleItem.querySelector('span');
    const oldLibelle = document.getElementById('oldLibelle')
    oldLibelle.value = libelleOldName.textContent;
    showModalRenameLibelles(libelleId)
}

function renameLibellePart2(libelleId) {
    const libelleItem = document.getElementById(libelleId);
    const libelleOldName = libelleItem.querySelector('span');
    const newName = document.getElementById('oldLibelle')
    libelleOldName.textContent = newName.value
    hiddenModalLibelles()  
}

function deleteLibellePart1(libelleId) {
    const libelleItem = document.getElementById(libelleId);
    showModalDeleteLibelle(libelleId)
}

function deleteLibellePart2(libelleId) {
    const libelleItem = document.getElementById(libelleId);
    libelleItem.remove()
    hiddenModalLibelles()
}

function createContact() {

    const conctactId = crypto.randomUUID();
    const Contacts = document.querySelector('.main__content');
    const prenom = document.getElementById('prenom').value;
    const nom= document.getElementById('nom').value;
    const entreprise = document.getElementById('entreprise').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const contactItem = {conctactId, prenom, nom, entreprise, email, tel}
    tabContact.push(contactItem);



    const spanLibelle1 = document.createElement('span');
    spanLibelle1.textContent = "Bureau";
    spanLibelle1.className = 'main__content__libelles';

    // const spanLibelle2 = document.createElement('span');
    // spanLibelle2.textContent = "Bureau";
    // spanLibelle2.className = 'main__content__libelles';

    const divLibelles = document.createElement('div');
    divLibelles.className = 'main__content__libellesContainer';

    const spanItem1 = document.createElement('span');
    spanItem1.textContent = contactItem.email;
    spanItem1.className = 'main__content__item__i';

    const spanItem2 = document.createElement('span');
    spanItem2.textContent = contactItem.tel;
    spanItem2.className = 'main__content__item__i';

    const spanItem3 = document.createElement('span');
    spanItem3.textContent = contactItem.entreprise;
    spanItem3.className = 'main__content__item__i';


    const contactName = document.createElement('span');
    contactName.textContent = contactItem.prenom + contactItem.nom;


    const divPicture = document.createElement('div');
    divPicture.className = 'main__content__item__picture';
    divPicture.textContent = "B";


    const divPresentation = document.createElement('div');
    divPresentation.classList.add('main__content__item__i','main__content__item__image')


    const contact = document.createElement('div');
    contact.className = 'main__content__item';
    contact.id = contactItem.conctactId;

    
    // divLibelles.append(spanLibelle1,spanLibelle2);
    divLibelles.append(spanLibelle1);
    divPresentation.append(divPicture,contactName);
    contact.append(divPresentation,spanItem1,spanItem2,spanItem3,divLibelles);
    Contacts.appendChild(contact);

    OpenWindowsListContact()

}


// function openAndCloseMenu() {
//     for (let index = 0; index < tabContact.length; index++) {
//         console.log(tabContact[index]);
        
//     }
// }



ContainerCreateBtn.addEventListener('click',visibilityBtnCreateAction);
windowCreateContactLibelle.addEventListener('click',visibilityManageLibelles)
oneContact.addEventListener('click',OpenWindowsCreatContact);
contactBtn.addEventListener('click',OpenWindowsListContact);
btnPlusLibelles.addEventListener('click',showModalAddLibelles);
saveLibelle.addEventListener('click',createLibelle);
for (let index = 0; index < btnNothingLibelles.length; index++) {
    btnNothingLibelles[index].addEventListener('click',hiddenModalLibelles);
}
btnSaveContact.addEventListener('click',createContact);
header__top__logo__burger.addEventListener('click',openAndCloseMenu);




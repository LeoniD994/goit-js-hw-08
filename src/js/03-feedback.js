import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
let textForStorage ={message:"", email:""};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};


refs.form.addEventListener('submit', onSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput,500));
refs.input.addEventListener('input', throttle(onInput,500));

saveStorageText ()


function onSubmit(evt){

    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    textForStorage ={message:"", email:""};
};


function onTextareaInput(e) {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
        textForStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    };

    textForStorage.message = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textForStorage));

};

function onInput(evt) {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
        textForStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    };
    textForStorage.email = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(textForStorage));

};


function saveStorageText () {
if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    refs.textarea.value = savedMessage.message;
    refs.input.value = savedMessage.email;
}
};

'use strict';

//Находим блоки с классами .setup-open, .setup-close и .setup
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');

// Функция открытия окна
function openSetup() {
  setup.classList.remove('invisible');
};

// Функция закрытия окна
function closeSetup() {
  setup.classList.add('invisible');
};

//Вызов функций открытия и закрытия окна по клику на объекты .setup-open и .setup-close
setupOpen.addEventListener('click', openSetup);
setupClose.addEventListener('click', closeSetup);

//Валидация ввода имени персонажа
var userName = document.querySelector('.setup-user-name');
userName.setAttribute('required', 'required');
userName.setAttribute('maxlength', 50);

//Общая функция изменения выбранного элемента по клику
//Входящие: 1.селектор, 2.массив цветов, 3.атрибут, цвет которого нужно изменить
function changeElementByClick(selector, colors, attribute) {
  var myElement = document.querySelector(selector);
  var myColors = colors;
  var myChangeElement = function() {
    var colorNumber = Math.floor(Math.random() * myColors.length);
    if (attribute === 'background') {
        myElement.style.background = myColors[colorNumber];
    }
    if (attribute === 'fill') {
        myElement.style.fill = myColors[colorNumber];
    }
  };
  myElement.addEventListener('click', myChangeElement);
};

// Изменение цвета мантии персонажа по нажатию
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
changeElementByClick('#wizard-coat', coatColors, 'fill');

//Изменение цвета глаз персонажа по нажатию
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green  '
];
changeElementByClick('#wizard-eyes', eyesColors, 'fill');

//Изменение цвета фаерболов по нажатию
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
changeElementByClick('.setup-fireball-wrap', fireballColors, 'background');

// Добавить обработчики для альтернативного ввода с клавиатуры для кнопок открытия/закрытия диалога настройки персонажа

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var overlay = document.querySelector('.overlay');
var submitButton = document.querySelector('.setup-submit');

setupOpen.addEventListener('keydown', openByEnter);
document.addEventListener('keydown', closeByEsc);
setupClose.addEventListener('keydown', closeByEnter);
submitButton.addEventListener('keydown', closeByEnter);

function openByEnter(evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openSetup();
  }
};

function closeByEsc(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closeSetup();
  }
};

function closeByEnter(evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closeSetup();
  }
};

function handleBtnClick(event) {
  toggleButton(event.target);
}

function toggleButton(element) {
  var pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);
}

const obj = {
    Backquote: {
      1: '`', 2: '~', 3: 'ё', 4: 'Ё', 5: '`', 6: '~', 7: 'Ё', 8: 'ё',
    },
    Digit1: {
      1: '1', 2: '!', 3: '1', 4: '!', 5: '1', 6: '!', 7: '1', 8: '!',
    },
    Digit2: {
      1: '2', 2: '@', 3: '2', 4: '"', 5: '2', 6: '@', 7: '2', 8: '"',
    },
    Digit3: {
      1: '3', 2: '#', 3: '3', 4: '№', 5: '3', 6: '#', 7: '3', 8: '№',
    },
    Digit4: {
      1: '4', 2: '$', 3: '4', 4: ';', 5: '4', 6: '$', 7: '4', 8: ';',
    },
    Digit5: {
      1: '5', 2: '%', 3: '5', 4: '%', 5: '5', 6: '%', 7: '5', 8: '%',
    },
    Digit6: {
      1: '6', 2: '^', 3: '6', 4: ':',  5: '6', 6: '^', 7: '6', 8: ':',
    },
    Digit7: {
      1: '7', 2: '&', 3: '7', 4: '?', 5: '7', 6: '&', 7: '7', 8: '?',
    },
    Digit8: {
      1: '8', 2: '*', 3: '8', 4: '*',  5: '8', 6: '*', 7: '8', 8: '*',
    },
    Digit9: {
      1: '9', 2: '(', 3: '9', 4: '(', 5: '9', 6: '(', 7: '9', 8: '(',
    },
    Digit0: {
      1: '0', 2: ')', 3: '0', 4: ')',  5: '0', 6: ')', 7: '0', 8: ')',
    },
    Minus: {
      1: '-', 2: '_', 3: '-', 4: '_', 5: '-', 6: '_', 7: '-', 8: '_',
    },
    Equal: {
      1: '=', 2: '+', 3: '=', 4: '+', 5: '=', 6: '+', 7: '=', 8: '+',
    },
    Backspace: {
      1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
    },
    Tab: {
      1: '    ', 2: '    ', 3: '    ', 4: '    ', 5: '    ', 6: '    ', 7: '    ', 8: '    ',
    },
    KeyQ: {
      1: 'q', 2: 'Q', 3: 'й', 4: 'Й', 5: 'Q', 6: 'q', 7: 'Й', 8: 'й',
    },
    KeyW: {
      1: 'w', 2: 'W', 3: 'ц', 4: 'Ц', 5: 'W', 6: 'w', 7: 'Ц', 8: 'ц',
    },
    KeyE: {
      1: 'e', 2: 'E', 3: 'у', 4: 'У', 5: 'E', 6: 'e', 7: 'У', 8: 'у',
    },
    KeyR: {
      1: 'r', 2: 'R', 3: 'к', 4: 'К', 5: 'R', 6: 'r', 7: 'К', 8: 'к',
    },
    KeyT: {
      1: 't', 2: 'T', 3: 'е', 4: 'Е',  5: 'T', 6: 't', 7: 'Е', 8: 'е',
    },
    KeyY: {
      1: 'y', 2: 'Y', 3: 'н', 4: 'Н', 5: 'Y', 6: 'y', 7: 'Н', 8: 'н',
    },
    KeyU: {
      1: 'u', 2: 'U', 3: 'г', 4: 'Г', 5: 'U', 6: 'u', 7: 'Г', 8: 'г',
    },
    KeyI: {
      1: 'i', 2: 'I', 3: 'ш', 4: 'Ш', 5: 'I', 6: 'i', 7: 'Ш', 8: 'ш',
    },
    KeyO: {
      1: 'o', 2: 'O', 3: 'щ', 4: 'Щ', 5: 'O', 6: 'o', 7: 'Щ', 8: 'щ',
    },
    KeyP: {
      1: 'p', 2: 'P', 3: 'з', 4: 'З', 5: 'P', 6: 'p', 7: 'З', 8: 'з',
    },
    BracketLeft: {
      1: '[', 2: '{', 3: 'х', 4: 'Х', 5: '[', 6: '{', 7: 'Х', 8: 'х',
    },
    BracketRight: {
      1: ']', 2: '}', 3: 'ъ', 4: 'Ъ', 5: ']', 6: '}', 7: 'Ъ', 8: 'ъ',
    },
    Backslash: {
      1: '\\', 2: '|', 3: '\\', 4: '/', 5: '\\', 6: '|', 7: '\\', 8: '/',
    },
    CapsLock: {
      1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
    },
    KeyA: {
      1: 'a', 2: 'A', 3: 'ф', 4: 'Ф', 5: 'A', 6: 'a', 7: 'Ф', 8: 'ф',
    },
    KeyS: {
      1: 's', 2: 'S', 3: 'ы', 4: 'Ы', 5: 'S', 6: 's', 7: 'Ы', 8: 'ы',
    },
    KeyD: {
      1: 'd', 2: 'D', 3: 'в', 4: 'В',  5: 'D', 6: 'd', 7: 'В', 8: 'в',
    },
    KeyF: {
      1: 'f', 2: 'F', 3: 'а', 4: 'А', 5: 'F', 6: 'f', 7: 'А', 8: 'а',
    },
    KeyG: {
      1: 'g', 2: 'G', 3: 'п', 4: 'П', 5: 'G', 6: 'g', 7: 'П', 8: 'п',
    },
    KeyH: {
      1: 'h', 2: 'H', 3: 'р', 4: 'Р', 5: 'H', 6: 'h', 7: 'Р', 8: 'р',
    },
    KeyJ: {
      1: 'j', 2: 'J', 3: 'о', 4: 'О', 5: 'J', 6: 'j', 7: 'О', 8: 'о',
    },
    KeyK: {
      1: 'k', 2: 'K', 3: 'л', 4: 'Л', 5: 'K', 6: 'k', 7: 'Л', 8: 'л',
    },
    KeyL: {
      1: 'l', 2: 'L', 3: 'д', 4: 'Д', 5: 'L', 6: 'l', 7: 'Д', 8: 'д',
    },
    Semicolon: {
      1: ';', 2: ':', 3: 'ж', 4: 'Ж', 5: ';', 6: ':', 7: 'Ж', 8: 'ж',
    },
    Quote: {
      1: '\'', 2: '"', 3: 'э', 4: 'Э', 5: '\'', 6: '"', 7: 'Э', 8: 'э',
    },
    Enter: {
      1: '\n', 2: '\n', 3: '\n', 4: '\n', 5: '\n', 6: '\n', 7: '\n', 8: '\n',
    },
    ShiftLeft: {
      1: '', 2: '', 3: '', 4: '',  5: '', 6: '', 7: '', 8: '',
    },
   
    KeyZ: {
      1: 'z', 2: 'Z', 3: 'я', 4: 'Я', 5: 'Z', 6: 'z', 7: 'Я', 8: 'я',
    },
    KeyX: {
      1: 'x', 2: 'X', 3: 'ч', 4: 'Ч',  5: 'X', 6: 'x', 7: 'Ч', 8: 'ч',
    },
    KeyC: {
      1: 'c', 2: 'C', 3: 'с', 4: 'С', 5: 'C', 6: 'c', 7: 'C', 8: 'c',
    },
    KeyV: {
      1: 'v', 2: 'V', 3: 'м', 4: 'М', 5: 'V', 6: 'v', 7: 'М', 8: 'м',
    },
    KeyB: {
      1: 'b', 2: 'B', 3: 'и', 4: 'И', 5: 'B', 6: 'b', 7: 'И', 8: 'и',
    },
    KeyN: {
      1: 'n', 2: 'N', 3: 'т', 4: 'Т',  5: 'N', 6: 'n', 7: 'Т', 8: 'т',
    },
    KeyM: {
      1: 'm', 2: 'M', 3: 'ь', 4: 'Ь',  5: 'M', 6: 'm', 7: 'Ь', 8: 'ь',
    },
    Comma: {
      1: ',', 2: '<', 3: 'б', 4: 'Б', 5: ',', 6: '<', 7: 'Б', 8: 'б',
    },
    Period: {
      1: '.', 2: '>', 3: 'ю', 4: 'Ю', 5: '.', 6: '>', 7: 'Ю', 8: 'ю',
    },
    Slash: {
      1: '/', 2: '?', 3: '.', 4: ',', 5: '/', 6: '?', 7: '.', 8: ',',
    },
    ArrowUp: { 
      1: '^', 2: '^', 3: '^', 4: '^', 5: '^', 6: '^', 7: '^', 8: '^',
    },
    ShiftRight: {
      1: '', 2: '', 3: '', 4: '',  5: '', 6: '', 7: '', 8: '',
    },
    ControlLeft: {
      1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
    },
     AltLeft: {
      1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
    },
    Space: {
      1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' ', 7: ' ', 8: ' ',
    },
   
    
    AltRight: {
      1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
    },
   
    ArrowLeft: {
      1: '<', 2: '<', 3: '<', 4: '<', 5: '<', 6: '<', 7: '<', 8: '<',
    },
    ArrowDown: {
      1: 'v', 2: 'v', 3: 'v', 4: 'v', 5: 'v', 6: 'v', 7: 'v', 8: 'v',
    },
    ArrowRight: {
      1: '>', 2: '>', 3: '>', 4: '>', 5: '>', 6: '>', 7: '>', 8: '>',
    },
    ControlRight: {
      1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
    },
  };


const textarea = document.getElementById('textarea');
const keyboard=Object.keys(obj);
let CapsLockStatus = false;
let ShiftStatus = false;
let lenguageStatus;
lenguageStatus = localStorage["lenguageStatusKey"];
if(lenguageStatus==undefined){lenguageStatus='en'}

let keyStatus = '1';
let keyboardOut = [];

document.body.innerHTML = '<form><textarea id="textarea" class="textarea"></textarea></form><div class="text">Vertual keyboard for Windows.<br/> Changing "En" - "Ru" Shift+Ctrl.</div><div id="keyboard" class="keyboard"></div>';

function getValue(object, key) {
    let result;
    return Object.keys(object).some(function (k) {
        if (k === key) {
            result = { value: object[k] };
            return true;
        }
        if (object[k] && typeof object[k] === 'object' && (result = getValue(object[k], key))) {
            return true;
        }
    }) && result;    
}
if (ShiftStatus === false && CapsLockStatus === false && lenguageStatus === 'en' ){keyStatus = '1'};
if (ShiftStatus === true && CapsLockStatus === false && lenguageStatus === 'en' ){keyStatus = '2'};
if (ShiftStatus === false && CapsLockStatus === false && lenguageStatus === 'ru' ){keyStatus = '3'};
if (ShiftStatus === true && CapsLockStatus === false && lenguageStatus === 'ru' ){keyStatus = '4'};
if (ShiftStatus === false && CapsLockStatus === true && lenguageStatus === 'en' ){keyStatus = '5'};
if (ShiftStatus === true && CapsLockStatus === true && lenguageStatus === 'en' ){keyStatus = '6'};
if (ShiftStatus === false && CapsLockStatus === true && lenguageStatus === 'ru' ){keyStatus = '7'};
if (ShiftStatus === true && CapsLockStatus === true && lenguageStatus === 'ru' ){keyStatus = '8'};



function keyStatusRun (){
if (ShiftStatus === false && CapsLockStatus === false && lenguageStatus === 'en' ){keyStatus = '1'};
if (ShiftStatus === true && CapsLockStatus === false && lenguageStatus === 'en' ){keyStatus = '2'};
if (ShiftStatus === false && CapsLockStatus === false && lenguageStatus === 'ru' ){keyStatus = '3'};
if (ShiftStatus === true && CapsLockStatus === false && lenguageStatus === 'ru' ){keyStatus = '4'};
if (ShiftStatus === false && CapsLockStatus === true && lenguageStatus === 'en' ){keyStatus = '5'};
if (ShiftStatus === true && CapsLockStatus === true && lenguageStatus === 'en' ){keyStatus = '6'};
if (ShiftStatus === false && CapsLockStatus === true && lenguageStatus === 'ru' ){keyStatus = '7'};
if (ShiftStatus === true && CapsLockStatus === true && lenguageStatus === 'ru' ){keyStatus = '8'};
init();
}



function init() {
 
for (let i = 0; i < keyboard.length; i++){
  let outForOut;
  if (ShiftStatus === false){ shiftUp = 1;}else{shiftUp = 2;}
    outForOut = getValue(obj, keyboard[i]);
    outForOut = getValue(outForOut, keyStatus);
    let {value} = outForOut; // деструктуризация!!!!!
    outForOut = value;
   
    if (value==="\n"){outForOut="Enter"};
  if (outForOut===''){
    outForOut = keyboard[i];
    if (outForOut==="ControlRight"){outForOut="Ctrl"};
    if (outForOut==="ControlLeft"){outForOut="Ctrl"};
    if (outForOut==="AltLeft"){outForOut="Alt"};
    if (outForOut==="AltRight"){outForOut="Alt"};
    if (outForOut==="\n"){outForOut="Enter"};
   
  }
  keyboardOut[i] = outForOut;
}


    let outInit = '';
    
    for (let i = 0; i < keyboard.length; i++){
      if (i === 14 || i === 28 || i === 41 || i === 54){
        outInit += '<div class="clearfix"></div>';
      }
      if (keyboard[i]==='Tab'){outInit += '<div class="keyboard__key ' + keyboard[i] + '" data="' + keyboard[i] + '" >' + keyboard[i] + '</div>';
    } else {
      outInit += '<div class="keyboard__key ' + keyboard[i] + '" data="' + keyboard[i] + '" >' + keyboardOut[i] + '</div>';
    }
    }
    
    document.querySelector('#keyboard').innerHTML = outInit;

  }
init();





document.onkeydown = function (event) {
  document.querySelectorAll('#keyboard .keyboard__key').forEach(function (element){
      element.classList.remove('active');
  });
  try {
document.querySelector('.'+event.code).classList.add('active');
  }
  catch (err) {fgh()};
  if (event.code==='undefined'){event.code=''};
CapsLockInformation(event.code);
ShiftDownInformation(event.code);

};

document.onkeyup = function (event) {
  let data;
  let BackspaceKey = '';
  let DataBackspaceKey = '';
  try {
  document.querySelector('.'+event.code).classList.remove('active');
  }
  catch (err) {fgh()};
  data =  getValue(obj, event.code);

  data = getValue(data, keyStatus);
  DataBackspaceKey = event.code;
  let {value} =  data;
  data = value;

   if (data==undefined){data=''};
 
  document.getElementById('textarea').value += data;  
  BackspaceKey=document.getElementById('textarea').value;
 
  if (DataBackspaceKey==='Backspace'){
  document.getElementById('textarea').value = BackspaceRun (BackspaceKey);
  BackspaceKey = '';
  }
  ShiftUpInformation(event.code);

};

document.querySelectorAll('#keyboard .keyboard__key').forEach(function (element) {
  element.onmousedown = function (event) {
  
      document.querySelectorAll('#keyboard .keyboard__key').forEach( function (element){
          element.classList.remove('active');
      });
      this.classList.add('active');
      let data = this.getAttribute('data');
      CapsLockInformation(data);
      ShiftDownInformation(data);
  } 
});

document.querySelectorAll('#keyboard .keyboard__key').forEach(function (element) {
    let outForOut;
    element.onmouseup = function (event) {
  
        let BackspaceKey = '';
        let data = this.getAttribute('data');
        this.classList.remove('active');
        outForOut = getValue(obj, data);
        outForOut = getValue(outForOut, keyStatus);
        let {value} = outForOut; 
        outForOut = value;
        document.getElementById('textarea').value += outForOut;
        BackspaceKey=document.getElementById('textarea').value;
        if (data==='Backspace'){
        document.getElementById('textarea').value = BackspaceRun (BackspaceKey);
        BackspaceKey = '';
        console.log(data);
        }
        ShiftUpInformation(data);
    }
 
});

function BackspaceRun (BackspaceKey) {
    BackspaceKey=BackspaceKey.split('');
    BackspaceKey.pop();
    BackspaceKey=BackspaceKey.join('')
    return BackspaceKey;
} 

function CapsLockInformation(code){
  if (code === 'CapsLock'){
     if (CapsLockStatus === false) {
       CapsLockStatus = true;
      }else{CapsLockStatus = false};
      keyStatusRun ();
    }

}

function ShiftDownInformation(code){
  if (code === 'ShiftRight' || code === 'ShiftLeft'){
    ShiftStatus = true;
    keyStatusRun ();
  }

}

function ShiftUpInformation(code){
  if (code === 'ShiftRight' || code === 'ShiftLeft'){
    ShiftStatus = false;
     keyStatusRun ();
  }

}


function languegeSwitch(...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();//??????????????
    lenguageStatusChange()
  });
  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}

languegeSwitch("ControlRight", "ShiftRight");
languegeSwitch("ControlLeft", "ShiftLeft"); 

function lenguageStatusChange(){
if (lenguageStatus === 'en'){
  lenguageStatus = 'ru'
} else {lenguageStatus = 'en'};

localStorage["lenguageStatusKey"] = lenguageStatus;
console.log(localStorage["lenguageStatusKey"]);


keyStatusRun ();

}

function fgh(){};
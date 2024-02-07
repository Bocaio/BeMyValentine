const yesButton = document.querySelector('#yesButton')
const noButton = document.querySelector('#noButton')
const centerDiv = document.querySelector('#centerDiv')
const centerHeader = document.querySelector('#centerHeader')
const centerPic = document.querySelector('#centerPic')
const deleted = document.querySelector('#deleted')

const noBTNARR = [``,
    'Are you Sure?',
    `Don't do this to me`,
    `You're breaking my heart!`,
    `I'm crying...........`,
    `Please think again!`,
    `You don't wanna be mine?`,
    `Bigger button is better nw!`,
    `Noooo! You gotta press 'YES' button`,
]

const photoARR = [``,
    `https://i.pinimg.com/564x/ec/5f/33/ec5f331d8442883d0e5208ce260e9045.jpg`,
    `https://i.pinimg.com/564x/25/ea/40/25ea40402e16cd426011fc8ff1a87ce0.jpg`,
    `https://i.pinimg.com/564x/4c/62/79/4c6279a9462b9bdd203bc708f67e3925.jpg`,
    `https://i.pinimg.com/736x/18/71/aa/1871aa66b2d464a92353667ac139d34e.jpg`,
    `https://i.pinimg.com/564x/ec/5f/33/ec5f331d8442883d0e5208ce260e9045.jpg`,
    `https://i.pinimg.com/564x/25/ea/40/25ea40402e16cd426011fc8ff1a87ce0.jpg`,
    `https://i.pinimg.com/736x/18/71/aa/1871aa66b2d464a92353667ac139d34e.jpg`,
    `https://i.pinimg.com/564x/4c/62/79/4c6279a9462b9bdd203bc708f67e3925.jpg`,


]

let yesBTNsize = 20;
let noBTNsize = 20;
let count = 0;
const begin = () => {
    yesButton.style.fontSize = `${yesBTNsize}px`;
    noButton.style.fontSize = `${noBTNsize}px`;
    yesButton.className = `font-mont px-4 border border-black py-1 bg-[#65B741] text-white  rounded-lg`
    noButton.className = `font-mont px-4 border border-black py-1 bg-[#B80000] text-white  rounded-lg`
}

const noBTNhandler = () => {
    count++;
    if(count <= noBTNARR.length - 1){
    yesBTNsize += 20;
    noBTNsize -= 2;
    yesButton.style.fontSize = `${yesBTNsize}px`;
    noButton.style.fontSize = `${noBTNsize}px`;
    noButton.innerText = noBTNARR[count]
    centerPic.src = photoARR[count]
    
    }
    else{
        noButton.disabled = true;
        noButton.classList.add('cursor-none')
    }
    
    
}

const yesBTNhandler = () => {
    centerHeader.innerHTML = `Yayyy! You're mine now! <i class="fa-solid fa-heart"></i>`;
    centerHeader.classList.remove('text-white')
    centerHeader.classList.add('text-[#9A031E]')
    centerPic.src = 'https://i.pinimg.com/564x/3a/f2/67/3af267efc3d02bccbecfe21f4c9b9f13.jpg';
    centerPic.classList.remove('h-1/4')
    centerPic.classList.remove('w-2/6')
    centerPic.classList.add('w-3/6')
    centerDiv.removeChild(deleted)
}

noButton.addEventListener('click',noBTNhandler)
yesButton.addEventListener('click',yesBTNhandler)



begin();
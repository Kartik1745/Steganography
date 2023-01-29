import App from './App';
import encodeMessage from './steg';

function addEventListenerToButton() {
  const button = document.getElementById('encode');
  button.addEventListener('click', () => {
    
  });
}

function uploadimage(upbtn){
  console.log("uploading image")
  upbtn.current.style.color = "red";
}



export {addEventListenerToButton, uploadimage}
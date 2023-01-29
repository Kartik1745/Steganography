import { useRef } from 'react';
import './App.css';
import {uploadimage} from './io.js'

function App() {
  const upbtn = useRef(null)

// function uploadimage(){
//   console.log("uploading image")
//   upbtn.current.style.color = "red";
// }
  return (
    <div className="App">
      <div id="upper">
          <h1>Image Encoder and Decoder</h1>
          <h3>The method used to encode and decode the image is called Steganography
              and it is a method of hiding a message in an image. The message is hidden
              by changing the least significant bit of each pixel in the image.  

          </h3>
      </div>
      <div id="view">
          <div id="left">
            <div id="uploadbtn">
              <button ref={upbtn} onClick={uploadimage}>Upload Image</button>
            </div>
          </div>
          <div id="right">
              <h1>right view</h1>
          </div>
      </div>
      <div id="execute">
          <button id="encode">Encode Image</button>
          <button id="decode">Decode Image</button>
      </div>
    </div>
  );
}

export default App;

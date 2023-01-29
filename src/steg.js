// Function to encode a message into an image
function encodeMessage(img, message) {
    // Create an empty canvas to draw the image and message
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image on the canvas
    context.drawImage(img, 0, 0);

    // Get the image data as an array of pixels
    var imageData = context.getImageData(0, 0, img.width, img.height);
    var pixels = imageData.data;

    // Convert the message to a binary string
    var messageBinary = stringToBinary(message);

    // Iterate through the pixels and hide the message
    var messageIndex = 0;
    for (var i = 0; i < pixels.length; i += 4) {
        // Check if we have reached the end of the message
        if (messageIndex >= messageBinary.length) {
            break;
        }

        // Hide the next bit of the message in the least significant bit of the current pixel
        pixels[i] = (pixels[i] & 0xFE) | messageBinary.charAt(messageIndex);
        messageIndex++;
    }

    // Put the modified pixels back on the canvas
    context.putImageData(imageData, 0, 0);

    // Return the canvas as an image
    return canvas.toDataURL("image/png");
}

// Function to decode a message from an image
function decodeMessage(img) {
    // Create an empty canvas to draw the image
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image on the canvas
    context.drawImage(img, 0, 0);

    // Get the image data as an array of pixels
    var imageData = context.getImageData(0, 0, img.width, img.height);
    var pixels = imageData.data;

    // Iterate through the pixels and extract the message
    var message = "";
    for (var i = 0; i < pixels.length; i += 4) {
        // Extract the least significant bit of the current pixel
        var bit = pixels[i] & 0x01;
        message += bit;
    }

    // Convert the binary message to a string
    return binaryToString(message);
}

// Helper function to convert a string to a binary string
function stringToBinary(str) {
    var binary = "";
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        var charBinary = charCode.toString(2);
        while (charBinary.length < 8) {
            charBinary = "0" + charBinary;
        }
        binary += charBinary;
    }
    return binary;
}

// Helper function to convert a binary string to a string
function binaryToString(binary) {
    var str = "";
    for (var i = 0; i < binary.length; i += 8) {
        var charCode = parseInt(binary.substr(i, 8), 2);
        str += String.fromCharCode(charCode);
    }
    return str;
}

// Encode a message into an image
//var img = document.getElementById("image");
//var encodedImg = encodeMessage(img, "Hello World");

// Decode a message from an image
//var message = decodeMessage(encodedImg);
//console.log(message); // Outputs "Hello World"

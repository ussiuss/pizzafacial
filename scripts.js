//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Your new JavaScript code here

var images = ["Midjourney_guitar_1.png", "Midjourney_shirt_1.png", "Midjourney_shirt_2.png",
 "Midjourney_shirt_3.png", "Midjourney_randomsticker_1.png", "nisuhennu.png"]; // Replace with your image names

var descriptions = ["Lambi kitarr", "Kollane särk", "Sinine särk", "Punane särk", "Lambi kleepekas", "Nisu Henry"]; // Replace with your descriptions

var container = document.getElementById('merch-images');

for (var i = 0; i < images.length; i++) {
    var imgDiv = document.createElement('div');
    imgDiv.className = 'merch-image';

    var img = document.createElement('img');
    img.src = 'images/merch/' + images[i];
    img.alt = 'Merch ' + (i + 1);
    imgDiv.appendChild(img);

    var p = document.createElement('p');
    p.textContent = descriptions[i];
    p.className = 'image-description'; // Add this line
    imgDiv.appendChild(p);

    container.appendChild(imgDiv);
}
// Get the button
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

// Fetch the list of image file names from the server
fetch('/api/images')
  .then(response => response.json())
  .then(images => {
    const container = document.getElementById('merch-images');
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = `/images/merch/${image.fileName}`;
      img.classList.add('merch-image');

      const desc = document.createElement('p');
      desc.textContent = image.description; // Use the description from the server
      desc.classList.add('image-description');

      const imageContainer = document.createElement('div'); // Create a new div to hold the image and its description
      imageContainer.appendChild(img);
      imageContainer.appendChild(desc);

      container.appendChild(imageContainer); // Append the image container to the main container
    });
  })
  .catch(error => console.log(error));
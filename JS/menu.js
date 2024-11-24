// script for post-it note - do not edit
function showBrowserSize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("sizeInfo").innerHTML = "Width: " + w + "<br>Height: " + h;
}

// script for repsonsive menu - do not edit 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function to update the banner with the last updated timestamp
function updateBanner() {
    const lastUpdated = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
  
    // Format the date
    const formattedDate = lastUpdated.toLocaleDateString('en-US', options);
  
    // Update the banner timestamp
    const timestampElement = document.getElementById('update-timestamp');
    if (timestampElement) {
        timestampElement.innerText = `${formattedDate}`;
    } else {
        timestampElement.innerText = `Last xxx : ${formattedDate}`;
        console.error("Element with id 'update-timestamp' not found.");
    }
  }
  
  // Call the function to update on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateBanner();
  });


/*
function updateBanner() {
  const timestampElement = document.getElementById('update-timestamp');
  if (!timestampElement) {
      console.error("Element with id 'update-timestamp' not found.");
      return;
  }

  // Fetch the `Last-Modified` header for the current file
  fetch(window.location.href, { method: 'HEAD' })
      .then((response) => {
          const lastModified = response.headers.get('Last-Modified');
          if (lastModified) {
              // Format the `Last-Modified` date
              const formattedDate = new Date(lastModified).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
              });
              timestampElement.innerText = ` ${formattedDate}`;
          } else {
              // Fallback if `Last-Modified` is not available
              console.warn("`Last-Modified` header not found.");
              timestampElement.innerText = "Failed to fetch, please check back again in few hours!";
          }
      })
      .catch((error) => {
          // Handle fetch errors
          console.error("Error fetching Last-Modified header:", error);
          timestampElement.innerText = " Error fetching date";
      });
}

// Call the function to update the banner
document.addEventListener('DOMContentLoaded', updateBanner); */
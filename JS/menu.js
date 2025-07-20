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

async function fetchLastCommit() {
  const owner = "radhika-designs";
  const repo = "portfolio";
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const response = await fetch(apiUrl);
    const commits = await response.json();
    const lastCommitDate = new Date(commits[0].commit.committer.date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    document.getElementById("last-updated").textContent = `${lastCommitDate}`;
  } catch (error) {
    console.error("Error fetching commits:", error);
    document.getElementById("last-updated").textContent = "Failed to fetch last update.";
  }
}

document.addEventListener('DOMContentLoaded', fetchLastCommit);

// Click-based dropdown functionality for Work menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    
    dropdownSubmenus.forEach(submenu => {
        const dropdownButton = submenu.querySelector('.button2');
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        
        if (dropdownButton && dropdownMenu) {
            // Toggle dropdown on click
            dropdownButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdownSubmenus.forEach(other => {
                    if (other !== submenu) {
                        other.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                submenu.classList.toggle('active');
            });
            
            // Keep dropdown open when hovering over menu items
            dropdownMenu.addEventListener('mouseenter', function() {
                submenu.classList.add('active');
            });
            
            // Hide dropdown when mouse leaves the entire dropdown area
            dropdownMenu.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!submenu.matches(':hover')) {
                        submenu.classList.remove('active');
                    }
                }, 1000); // 1 second delay
            });
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-submenu')) {
            dropdownSubmenus.forEach(submenu => {
                submenu.classList.remove('active');
            });
        }
    });
});

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

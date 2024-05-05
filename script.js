function hideButton() {
    document.getElementById("popupButton").style.display = "none";
  }
  
  document.getElementById("popupButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
  document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("imageContainer").style.display = "block";
    document.getElementById("title").style.display = "none";
    document.getElementById("popupButton").style.display = "none";
    document.getElementById("popup").style.display = "none";
    playClickSound();
  });
  
  document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popupButton").style.display = "none";
    var h1 = document.getElementById("title");
    h1.innerHTML = 'congrats u pass'
  });
  
  function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
  }
  
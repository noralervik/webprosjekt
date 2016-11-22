  // Henter modalen fra hyttesidene
  var modal = document.getElementById('myModal');
  // Henter knappene fra hyttesidene som åpner modalen.
  var btn = document.getElementById("myBtn");
  // Henter <span> elementet som lukker modalen
  var span = document.getElementsByClassName("close")[0];
  // Når brukeren klikker på knappen, åpnes modalen
    btn.onclick = function() {
      modal.style.display = "block";
  }
  // Når brukren klikker på <span> (x), lukkes modalen
  span.onclick = function() {
      modal.style.display = "none";
  }
  // Når brukeren klikken uansett utenfor modalen, lukkes den. Dette gjelder for alle fire modaler til de fire hyttene
  //for hver av de tre hyttetypene.
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
      if (event.target == modal2) {
          modal2.style.display = "none";
      }
      if (event.target == modal3) {
          modal3.style.display = "none";
        }
      if (event.target == modal4) {
          modal4.style.display = "none";
        }
      }

    //Her gjentas koden for modal 2, 3 og 4, bare med andre id-er og class-er.
    var modal2 = document.getElementById('myModal2');
    var btn2 = document.getElementById('myBtn2');
    var span2 = document.getElementsByClassName("close")[1];
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
   span2.onclick = function() {
        modal2.style.display = "none";
    }

      var modal3 = document.getElementById('myModal3');
      var btn3 = document.getElementById('myBtn3');
      var span = document.getElementsByClassName("close")[2];
    btn3.onclick = function() {
        modal3.style.display = "block";
    }
    span.onclick = function() {
        modal3.style.display = "none";
    }

      var modal4 = document.getElementById('myModal4');
      var btn4 = document.getElementById('myBtn4');
      var span = document.getElementsByClassName("close")[3];
    btn4.onclick = function() {
        modal4.style.display = "block";
    }
    span.onclick = function() {
        modal4.style.display = "none";
    }

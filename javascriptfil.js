  var modal = document.getElementById('myModal'); // Get the modal
  var btn = document.getElementById("myBtn"); // Get the button that opens the modal
  var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
  btn.onclick = function() {        // When the user clicks the button, open the modal
      modal.style.display = "block";
  }
  span.onclick = function() {      // When the user clicks on <span> (x), close the modal
      modal.style.display = "none";
  }
  window.onclick = function(event) {     // When the user clicks anywhere outside of the modal, close it
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


    var modal2 = document.getElementById('myModal2');
    var btn2 = document.getElementById('myBtn2');
    var span2 = document.getElementsByClassName("close")[1]; // Get the <span> element that closes the modal
    btn2.onclick = function() {        // When the user clicks the button, open the modal
        modal2.style.display = "block";
    }
   span2.onclick = function() {      // When the user clicks on <span> (x), close the modal
        modal2.style.display = "none";
    }

      var modal3 = document.getElementById('myModal3');
      var btn3 = document.getElementById('myBtn3');
      var span = document.getElementsByClassName("close")[2]; // Get the <span> element that closes the modal
    btn3.onclick = function() {        // When the user clicks the button, open the modal
        modal3.style.display = "block";
    }
    span.onclick = function() {      // When the user clicks on <span> (x), close the modal
        modal3.style.display = "none";
    }

      var modal4 = document.getElementById('myModal4');
      var btn4 = document.getElementById('myBtn4');
      var span = document.getElementsByClassName("close")[3]; // Get the <span> element that closes the modal
    btn4.onclick = function() {        // When the user clicks the button, open the modal
        modal4.style.display = "block";
    }
    span.onclick = function() {      // When the user clicks on <span> (x), close the modal
        modal4.style.display = "none";
    }

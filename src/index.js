import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function handleJournal(event) {
  event.preventDefault();

  let title = document.querySelector("input#title").value;
  let heading = document.getElementById('heading');
  heading.innerHTML = title;
  //document.getElementById("heading").innerHTML = title;

  let entry = document.querySelector("input#entry").value;
  let body = document.getElementById('body');
  body.innerHTML = entry;

}


window.addEventListener("load", function () {
  const form = document.getElementById('journal');
  form.addEventListener("submit", handleJournal);
  //document.querySelector("input#title").addEventListener("submit", handlejournal);

});


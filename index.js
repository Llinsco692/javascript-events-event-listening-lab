const input = document.getElementById('button');  // Get the button by its ID

function addingEventListener() {
  input.addEventListener('click', function() {
    alert('I was clicked!');  // Show an alert when the button is clicked
  });
}

addingEventListener();  // Call the function to bind the event listener

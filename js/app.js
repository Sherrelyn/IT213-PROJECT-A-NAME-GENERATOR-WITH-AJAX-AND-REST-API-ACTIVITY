document.querySelector('#generate-names').addEventListener('submit', loadNames);



// Execute a function to query API
function loadNames(e) {
     e.preventDefault();


     //Read the values from the form and create the variables
     const origin = document.getElementById('country').values;
     const genre = document.getElementById('genre').value;
     const amount = document.getElementById('quantity').value;

     //Build a url
     let url = 'https://uinames.com/api/?';
     // Read the orgin  and append the url
     if(origin !== '') {
         url += 'region=${origin}&';
     }
 }






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
          // Read the genre and append the url
          if(genre !== '') {
            url += 'gender=${genre}&';
        }
             // Read the amount  and append the url
     if(amount !== '') {
        url += 'amount=${amount}&';
    }

    // Ajax call
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET', url, true);

    //Execute the function
    xhr.onload = function() {
        if(this.status === 200) {
            const names = JSON.parse(this.responseText);
        }
    }


    //Send the request
    xhr.send();
 }






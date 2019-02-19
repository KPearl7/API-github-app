
'use strict'

function userHandleSearch(userHandle) {
 const searchURL = `https://api.github.com/users/${userHandle}/repos`;
 fetch(searchURL)
   .then(response => response.json())
   .then(responseJson => showResults(responseJson));
}

function showResults(responseJson) {
   console.log(responseJson);

   $('#results-listing').empty();
  for(let i=0; i < responseJson.length; i++) {
  var repoList = responseJson[i];
  $('#results-listing').append(`<li><a href="${repoList.html_url}">${repoList.name}</a></li>`)
  }
  $('.hidden').show();
};

function formListener() {
  $('#search').submit(event => {
   event.preventDefault();
   
   const user = $('#userHandle').val();
   
   userHandleSearch(user);
   console.log('heard you');
});

}
$(formListener);


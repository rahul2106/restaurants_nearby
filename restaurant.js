const url="https://developers.zomato.com/api/v2.1";
const key="8301f7dd6d22fc3f75399fa849e9d123";
var search = document.getElementById('inputLocation');

async function getCategories(){
  const response = await fetch(url+"/categories", {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'user-key': '8301f7dd6d22fc3f75399fa849e9d123'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

getCategories()
.then(data=>{
  console.log(data);
});


async function getLocation(q){
  const response = await fetch(url+"/locations?query="+q,{
    method:'GET',
    mode:'cors',
    cache:'no-cache',
    credentials:'same-origin',
    headers:{
      'Content-Type':'application/json',
      'user-key':key
    },

    referrerPolicy:'no-referrer',
  });
  return response.json();
}


function getLocationInput(){
  var x=document.getElementById('inputLocation').value;
  console.log(x);
  getLocation(x)
  .then(data=>{
    console.log(data);
  });
}

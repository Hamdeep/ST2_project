
const imgSrc = (id)=>{
                      var uUrl = '';
                      var ID = `${id}`
                      axios.get("https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09.asp").then(
                        (data)=>{
                          
                          console.log(data.data);
                          var rand = Math.floor(Math.random() * 100)%40;
                          
                          uUrl = `${data.data[rand].url}`;

                          if(uUrl != ''){
                            console.log(uUrl);
                            console.log(ID)
                            $(`#${ID}`).attr('src',uUrl);
                          }
                        }
                      ).catch(function (error) {
                        // handle error
                        console.log(error);
                      })




//     var xhttp =   xhttp = new XMLHttpRequest();
//     var URL ;
//     xhttp.onreadystatechange = function() {
//         var responseQuery;
//         var rand = Math.floor(Math.random() * 100)%20;
//         if (this.readyState == 4 && this.status == 200) {
//         //   console.log(this.response);
//         console.log(rand);
//         var parsed = JSON.parse(this.response)
//         console.log(parsed[rand].url);

//         // console.log(responseQuery);
//          URL = parsed[rand].url;
//         }
        

//       };
//       document.getElementsByClassName(this).src = URL;

//     xhttp.open("GET", "z", true);
// xhttp.send();
}


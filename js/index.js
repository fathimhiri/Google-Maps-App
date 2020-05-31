
  var map;

            function initMap() {
              
              var losAngelos = {
                lat: 34.063380 ,
                lng :-118.358080
              }
              map = new google.maps.Map(document.getElementById('map'), {
                center: losAngelos,
                zoom: 8
              });
              displayStores();
            }
      
       function displayStores(){
         var storesHtml = "";
           stores.forEach(function(store, index){
             var adress = store.addressLines; 
             var phone = store.phoneNumber;
             storesHtml +=`<div class="store-container">
              
             <div class= "store-info-container" >
                  <div class="store-adress">
                     <span>${adress[0]}</span> 
                     <span>${adress[1]}</span></div>
                 <div class="store-phone-number">${phone}</div>
             </div>

             <div class= "store-number-container">
               <div class="store-number">${index +1}</div>
             </div>

       </div>`

           });
           document.querySelector('.stores-list').innerHTML=storesHtml;
       }
            
            
            
            
            
  //           function addMarker(location, map) {
  //             var marker = new google.maps.Marker({
  //   position: location,
  //   map: map,
  //   label: labels
  // });
  //           }
            
          
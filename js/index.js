
  var map;
  var markers = [];
  var infoWindow;
            function initMap() {
              
              var losAngelos = {
                lat: 34.063380 ,
                lng :-118.358080
              }
              map = new google.maps.Map(document.getElementById('map'), {
                center: losAngelos,
                zoom: 8
              });
              infoWindow = new google.maps.InfoWindow();
              //displayStores(stores); we can just call it here all just call searchstores
              searchStores();
              shwStoreMarkers();
              setOnClickListener();
            }

            function searchStores(){
              var foundstores = [];
               var zipCode = document.getElementById("zipcode").value;
                if (zipCode){
               stores.forEach(function(store){
                var postal = store.address.postalCode.substring(0,5);
                if (postal == zipCode){
                  foundstores.push(store);
                }
               });
              } else {
                foundstores = stores; 
              }
                displayStores(foundstores);
            }
      
       function setOnClickListener(){
         var storeElements = document.querySelectorAll('.store-container');
         storeElements.forEach(function(elem, index){
          elem.addEventListener('click', function(){
            google.maps.event.trigger(markers[index], 'click');
          })

         });
       }
       
       
       
            function displayStores(stores){
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
               <div class="store-number">${index +1} </div>
             </div>

       </div>`

           });
           document.querySelector('.stores-list').innerHTML=storesHtml;
  }
            
function shwStoreMarkers(){
  var bounds = new google.maps.LatLngBounds();
  stores.forEach(function(store, index){

    var latlng = new google.maps.LatLng(
      store.coordinates.latitude,
      store.coordinates.longitude);

    var name = store.name;
    var address = store.addressLines[0];
    var statusText = store.openStatusText;
    var phone= store.phoneNumber;
    
    bounds.extend(latlng);
    
    createMarker(latlng, name, address, phone, statusText, index);
  });
  map.fitBounds(bounds);

  
}




       function createMarker(latlng, name, address, phone, statusText, index) {
         var html = `
          <div class= "store-info-window">
            <div class= "store-info-name"> ${name}  </div>       
            <div  class="store-info-status">${statusText}</div>
            <div  class="store-info-adress"><div class = "cercle"><i class="fas fa-location-arrow"></i></div>${address}</div>
            <div class="store-info-phone"><div class = "cercle"><i class="fas fa-phone-volume"></i></div>${phone}</div>
          </div>`

         
        //var html = "<b>" + name + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
          map: map,
          position: latlng,
          label: `${index +1}` 
        });
         
          google.maps.event.addListener(marker, 'click', function() {
          infoWindow.setContent(html);
          infoWindow.open(map, marker);
        });
      
         markers.push(marker);
       }
            
            
            
  //           function addMarker(location, map) {
  //             var marker = new google.maps.Marker({
  //   position: location,
  //   map: map,
  //   label: labels
  // });
  //           }
            
          
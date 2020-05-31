
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
              displayStores();
              shwStoreMarkers();
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
    bounds.extend(latlng);
    
    createMarker(latlng, name, address);
  });
  map.fitBounds(bounds);

  
}




       function createMarker(latlng, name, address) {
        var html = "<b>" + name + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
          map: map,
          position: latlng
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
            
          
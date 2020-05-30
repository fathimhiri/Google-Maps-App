
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
            }
      
       function displayStores(){
           
       }
            
            
            
            
            
            function addMarker(location, map) {
              var marker = new google.maps.Marker({
    position: location,
    map: map,
    label: labels
  });
            }
            
          
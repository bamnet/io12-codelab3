//Globals for the map and the layer to show on it.
var map;
var gebImageryLayer;

function initialize() {
  var myLatlng = new google.maps.LatLng(37.775, -122.42);

  var myOptions = {
    zoom: 11,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  // Paste your client id for step 1 below.

  var hash_value = window.location.hash;
  if (!hash_value) {
    var redirect_url = "https://accounts.google.com/o/oauth2/auth";
    redirect_url += "?client_id=";
    redirect_url += "&redirect_uri="+window.location.href;
    redirect_url += "&scope=https://www.googleapis.com/auth/earthbuilder.readonly";
    redirect_url += "&response_type=token";
    window.location = redirect_url;
    return;
  }
  
  var hash_parts = hash_value.split("&");
  var name_value = hash_parts[0].split("=");
  var g_oauth_token_value = name_value[1];

  //Altostrat private map
  gebImageryLayer = new google.maps.visualization.MapDataLayer({
    mapId: '04996796288385000359-13684708322995096805-4',
    layerId:'layer_00002',
    suppressInfoWindows: false,
    oAuthToken: g_oauth_token_value
  });
}

function toggleImage() {
  var checkLayer = document.myform["Image"];
  if (checkLayer.checked == true) {
    gebImageryLayer.setMap(map);
  } else {
    gebImageryLayer.setMap(null);
  }
}


// This is a util function to convert decimal lat/lng
function convertLatLng(lat, lng) {
    var MIN_DIVISOR = 60;
    var SEC_DIVISOR = 3600;

    var latLng = lat + " " + lng;
    var parts   = latLng.split(/[^\d\w]+/);
    
    // lat
    var latDeg  = parseInt(parts[0]);
    var latMin  = parseInt(parts[1]);
    var latSec  = parseInt(parts[2]);
    var latHem  = parts[3];
    
    // long
    var longDeg = parseInt(parts[4]);
    var longMin = parseInt(parts[5]);
    var longSec = parseInt(parts[6]);
    var longHem = parts[7];

    // decimal latitude
    decLat = latDeg * 1 + latMin / MIN_DIVISOR + latSec / SEC_DIVISOR;
    if (latHem == "S") {
        decLat = decLat * -1;
    }
    
    // decimal longitude
    decLong = longDeg * 1 + longMin / MIN_DIVISOR + longSec / SEC_DIVISOR;
    if (longHem == "W") {
        decLong = decLong * -1;
    }
    
    return([decLat, decLong]);
}

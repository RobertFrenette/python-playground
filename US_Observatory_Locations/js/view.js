// Scripts for building View

function getMap(lat, lng) {
    if (isNaN(lat)) {
        latLng = convertLatLng(lat, lng);
        lat = latLng[0];
        lng = latLng[1];
    }
    
    var myLatLng = {lat: lat, lng: lng};
    
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14
    });
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: $('#observatories').find(":selected").text()
    });
}

function processObservatory(json) {
    var obj = json.observatory[0];
    var lat = obj.observatoryLatitude;
    var lng = obj.observatoryLongitude;
    
    if (lat == '' || lng == '') {
        alert('Lat and Lng coordinates not available for ' + $('#observatories').find(":selected").text() + '.');
    } else {
        getMap(lat, lng);
    }
}

function processObservatories(json) {
    var observatories = $('#observatories');
    observatories.empty();
    observatories.append($('<option>', {
        value: '',
        text: 'Select an Observatory'
    }));  

    $.each(json.observatories, function(index, element) {
        observatories.append($('<option>', {
            value: element.observatoryHref,
            text: element.observatoryName
        }));   
    });

    observatories.attr('class', 'visible');
    observatories.focus();
}

function processStates(json){
    var states = $('#states');
    states.empty();
    states.append($('<option>', {
        value: '',
        text: 'Select a State'
    }));  
    
    $.each(json.states, function(index, element) {
        states.append($('<option>', {
            value: element.observatoryHref,
            text: element.observatoryState
        }));   
    });

    states.change(function(){
        var href = $(this).find(":selected").val();
        $('#observatories').attr('class', 'hidden');
        $('#map').attr('class', 'hidden');
        if (href != '') {
            getData('observatories', href);
        }
    });
    
    $('#observatories').change(function(){
        var href = $(this).find(":selected").val();
        if (href != '') {
            getData('observatory', href);
            $('#map').attr('class', 'visible');
        } else {
            $('#map').attr('class', 'hidden');
        }
    });

    states.attr('class', 'visible');
    states.focus();
}

function processRegions(json){
    var regions = $('#regions');
    var states = $('#states');
    regions.empty();
    regions.append($('<option>', {
        value: '',
        text: 'Select a Region'
    }));  
    
    $.each(json.regions, function(index, element) {
        regions.append($('<option>', {
            value: element.observatoryHref,
            text: element.observatoryRegion
        }));   
    });

    regions.change(function(){
        var href = $(this).find(":selected").val();
        $('#states').attr('class', 'hidden');
        $('#map').attr('class', 'hidden');
        if (href != '') {
            getData('states', href);
        }
    });

    regions.attr('class', 'visible');
    regions.focus();
}

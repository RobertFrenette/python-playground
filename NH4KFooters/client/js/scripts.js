'use strict';

// This script is written in Native JS as an example for Students in JavaScript course prior to jQuery intro

window.onload = function() {
    var loading = document.getElementById('loading');
    var disp = document.getElementById('disp');
    
    var mtnSelect = document.getElementById('mtnSelect');
    var resultSpans = document.getElementsByClassName('res');
    var elevation = document.getElementById('elevation');
    var latlng = document.getElementById('latlng');
    var pic = document.getElementById('pic');
    var desc = document.getElementById('desc');
    
    var mountains = [];
    
    function Mountain(name, lat, lng, elevation, difficulty, img, url) {
        var name = name;
        var lat = lat;
        var lng = lng;
        var elevation = elevation;
        var difficulty = difficulty;
        var img = img;
        var url = url;
        var desc = '';
        
        this.getName = function() {
            return name;
        };
        this.getLatLng = function() {
            return [lat, lng];
        };
        this.getElevation = function() {
            return elevation;
        };
        this.getDifficulty = function() {
            return difficulty;
        };
        this.getImg = function() {
            return img;
        };
        this.getURL = function() {
            return url;
        };
        this.setDesc = function(theDesc) {
            desc = theDesc;
        };
        this.getDesc = function() {
            return desc;
        };
    }
    
    Mountain.prototype.persist = function(mountains) {
        mountains.push(this);
    };
    
    function displayMountainData(mountain) {
        var elev = mountain.getElevation().toString(); // need to convert toString() for replace()
        elevation.innerHTML = elev.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        latlng.innerHTML = mountain.getLatLng();
        pic.setAttribute('alt', mountain.getName());  
        pic.setAttribute('src', mountain.getImg());
        pic.setAttribute('class', 'visible');
        desc.innerHTML = mountain.getDesc();
    }
    
    function resetResults() {
        var len = resultSpans.length;
        for (var i = 0; i < len; i++) {
            resultSpans[i].innerHTML = '';
        }
        pic.setAttribute('class', 'hidden');
    }
    
    mtnSelect.addEventListener('change', function() {
        var val = this.options[this.selectedIndex].value;
        if (val >= 0) {
            var mtn = mountains[val];
            if (mtn.getDesc() == '') {
                getMountainDesc(mtn);
            } else {
                displayMountainData(mtn);
            }
        } else {
         resetResults();
        }
    }, false);
    
    function populateSelectElement(mountains) {
        mountains.forEach((mountain, index) => {
            var name = mountain.getName();
            var option = document.createElement('option');
            
            option.value = index;
            option.appendChild(document.createTextNode(name));
            
            mtnSelect.appendChild(option);
        });
    }
    
    function displayPage() {
        loading.setAttribute('class', 'hidden');
        disp.setAttribute('class', 'visible');
    }
    
    function prepMountainDataForDsiplay(mountain, data) {
        data = JSON.parse(data);
        var desc = data.mountain[0].mountainDesc;
        mountain.setDesc(desc);
        displayMountainData(mountain);
    }
    
    function processData(data) {
        data = JSON.parse(data).mountains;
        var len = data.length;
        
        for (var i = 0; i < len; i++) {
            var mountain = data[i];
            var name = mountain.mountainName;
            var lat = lat_lng[i].lat;
            var lng = lat_lng[i].lng;
            var elevation = mountain.mountainElevation;
            var difficulty = mountain.mountainEffort;
            var img = mountain.mountainPic;
            var url = mountain.mountainURL;
            var newMountain = new Mountain(name, lat, lng, elevation, difficulty, img, url);
            newMountain.persist(mountains);
        }
        populateSelectElement(mountains);
        
        displayPage();
    }

    function getMountainDesc(mountain) {
        var url = mountain.getURL();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:3000?action=mountain&dataURL=' + url, true);
        xhr.send();
    
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resp = this.response;
                prepMountainDataForDsiplay(mountain, JSON.parse(resp));
            }
        };
    }
    
    function getMountainsData() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:3000?action=mountains&dataURL=/', true);
        xhr.send();
    
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resp = this.response;
                processData(JSON.parse(resp));
            }
        };
    }
        
    getMountainsData();
}
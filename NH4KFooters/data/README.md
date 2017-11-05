# Description of .json files

The following files / descriptions are provided to explain the JSON data structs used in the NH4kFooters Web App.

These files are not read by the App, as data is obtained via AJAX calls from client to Node Server which utilizes Python scripts.

## data_mountains.json

Contains data response from scrape_mountains.py for all Mountains, in order of elevation (high to low).

To Test
 * Node.js: `http://127.0.0.1:3000?action=mountains&dataURL=/`
 * Python: `python3 scrape.py mountains /`


### Sample JSON

```json
{
	"mountains": [{
		"mountainName": "Mt. Washington",
		"mountainElevation": "6,288'",
		"mountainEffort": "Strenuous",
		"mountainURL": "/hiking-mount-washington.cfm",
		"mountainPic": "http://www.outdoors.org/trip-ideas-tips-resources/plan-your-trip/nh-4000-footers/story-images/images/Washington-StoryImage_2.jpg"
	}]
}
```


## data_mountain

Contains data response from scrape_mountain.py for Mt. Washington.

To Test
 * Node.js: `http://127.0.0.1:3000?action=mountain&dataURL=/hiking-mount-washington.cfm`
 * Python: `python3 scrape.py mountain /hiking-mount-washington.cfm`


### Sample JSON

```json
{
	"mountain": [{
		"mountainDesc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna."
	}]
}
```


## data_lat_lng.json

Contains lat / lgn coords for all Mountains.

Names match those in data_mountains.json, and have same index.


### Sample JSON

```json
[
        {
		"name": "Mt. Washington",
		"lat": 44.270403,
		"lng": -71.303501
	}
]
```

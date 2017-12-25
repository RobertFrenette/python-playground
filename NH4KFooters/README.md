# New Hampshire 4,000'ers

This Python app obtains data for the 48 4,000'ers in New Hampshire. (Data is scraped from the AMC website.)


## scrape.py

This script calls other scripts (see below) which scrape web pages from the AMC website, then sends the data back in a JSON paylod by printing to stdout.

To Test in Terminal
 * Get data for all Mountains: `python3 scrape.py mountains /`
 * Get details for specific Mountain: `python3 scrape.py mountain /hiking-mount-washington`



## scrape_mountains.py

This script is called from scrape.py to scrape AMC's 4,000-Footer-Guide web page, then returns a JSON payload containing data for all Mountains.


### Sample JSON

```json
{
	"mountain": [{
		"mountainName": "Mt. Washington",
		"mountainElevation": "6,288'",
		"mountainEffort": "Strenuous",
		"mountainURL": "/hiking-mount-washington",
		"mountainPic": "https://www.outdoors.org/wp-content/uploads/2017/10/Washington-StoryImage_2.jpg"
	}]
} 
```


## scrape_mountain.py

 This script is called from scrape.py to scrape AMC's 4,000-Footer-Guide web page for a specific Mountain, then returns a JSON payload containing data for the Mountain.


### Sample JSON

```json
{
	"mountain": [{
		"mountainDesc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna."
	}]
}   
```

# Python scripts

## scrape.py

This script calls other scripts (see below) which scrape web pages from the Wiki website, then sends the data back in a JSON paylod by printing to stdout.


## scrape_regions.py

This script is called from scrape.py to scrape the Wiki Observatories page, then returns a JSON payload containing data used to popualte the Observatory Regions listing (multiple States).

To Test in Terminal
`python3 scrape.py regions /wiki/Category:Astronomical_observatories_in_the_United_States`

### Sample JSON

```json
{
	"regions": [{
                    "observatoryRegion": "the United States by state",
                    "observatoryHref": "/wiki/Category:Astronomical_observatories_in_the_United_States_by_state"
                }]
}
```


## scrape_states.py

This script is called from scrape.py to scrape the Wiki Observatories page, then returns a JSON payload containing data used to popualte the Observatory States listing (multiple States).

To Test in Terminal
`python3 scrape.py states /wiki/Category:Astronomical_observatories_in_the_United_States_by_state`

### Sample JSON

```json
{
	"states": [{
                "observatoryState": "Connecticut",
                "observatoryHref": "/wiki/Category:Astronomical_observatories_in_Connecticut"
            }]
}
```


## scrape_observatories.py

This script is called from scrape.py to scrape the Wiki State Observatories page, then returns a JSON payload containing data used to popualte the Observatory listing pages (multiple Observatories for single State).

To Test in Terminal
`python3 scrape.py observatories /wiki/Category:Astronomical_observatories_in_Connecticut`

### Sample JSON

```json
{
	"observatories": [{
                            "observatoryName": "Olin Observatory",
                            "observatoryHref": "/wiki/Olin_Observatory"
                        },
                        {
                            "observatoryName": "Van Vleck Observatory",
                            "observatoryHref": "/wiki/Van_Vleck_Observatory"
                        }
                    ]}
```


## scrape_observatory.py

This script is called from scrape.py to scrape the Wiki State Observatory page, then returns a JSON payload containing data used to popualte the Observatory page (single Observatory).

To Test in Terminal
`python3 scrape.py observatory /wiki/Van_Vleck_Observatory`

### Sample JSON

```json
{
	"observatory": [{
                        "observatoryLatitude": "41.33.18.N",
                        "observatoryLongitude": "72.39.33.W"
                    }]
}
```

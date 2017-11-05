# This python script is called by scrape.py to scrape Wiki's'
# State Observatory page, then returns a JSON payload containing data # used to popualte the Observatory data on the Observatories web app's # index.html page.

# Note: This script requires the BeautifulSoup4 Library
# https://www.crummy.com/software/BeautifulSoup/

# python3 scrape.py observatory /wiki/Old_University_of_Alabama_Observatory

from urllib.request import urlopen
import re
import json
import collections
from bs4 import BeautifulSoup

data = {}

def getDataFromWeb(dataURL) :
    prefix = 'https://en.wikipedia.org'
    response = []
    
    page = urlopen(prefix + dataURL)
    pageData = page.read()
    soup = BeautifulSoup(pageData, "html.parser")
    
    infobox   = soup.find('table', class_='infobox vcard')

    d = collections.OrderedDict()
    try:
        latitude  = infobox.find('span', class_='latitude')
        longitude = infobox.find('span', class_='longitude')

        latTxt = latitude.text
        lngTxt = longitude.text

        # Need to strip URL encoding
        # ex: {"observatory": [{"observatoryLatitude": "33\u00b012\u203240\u2033N", "observatoryLongitude": "87\u00b033\u203201\u2033W"}]}
        latTxt = latTxt.replace("\u00b0",'.')
        latTxt = latTxt.replace("\u2032",'.')
        latTxt = latTxt.replace("\u2033",'.')
        
        lngTxt = lngTxt.replace("\u00b0",'.')
        lngTxt = lngTxt.replace("\u2032",'.')
        lngTxt = lngTxt.replace("\u2033",'.')

        d['observatoryLatitude']  = latTxt
        d['observatoryLongitude'] = lngTxt
    except Exception :
        d['observatoryLatitude']  = ''
        d['observatoryLongitude'] = ''
    
    response.append(d)

    global data
    data = {'observatory' : response}

def process(dataURL) :
    getDataFromWeb(dataURL)
    return(json.dumps(data))

# This python script is called by scrape.py to scrape Wiki's'
# observatories page, then returns a JSON payload containing data 
# used to popualte the Observatory Regions listing on the Observatories web app's 
# index.html page.

# Note: This script requires the BeautifulSoup4 Library
# https://www.crummy.com/software/BeautifulSoup/

# To Test via cmd line:
# python3 scrape.py regions /wiki/Category:Astronomical_observatories_in_the_United_States

from urllib.request import urlopen
import re
import json
import collections
from bs4 import BeautifulSoup

data = {}

def getDataFromWeb(dataURL) :
    prefix = 'https://en.wikipedia.org'
    substr = 'Astronomical observatories in '
    subStrLen = len(substr)
    response = []
    
    page = urlopen(prefix + dataURL)
    pageData = page.read()
    soup = BeautifulSoup(pageData, "html.parser")
    
    anchors = soup.find_all('a', 'CategoryTreeLabel CategoryTreeLabelNs14 CategoryTreeLabelCategory')
    for anchor in anchors :
        href = anchor['href']
        text = anchor.text
        textLen = len(text)
        text = text[subStrLen:textLen]
        
        d = collections.OrderedDict()
        d['observatoryRegion'] = text
        d['observatoryHref']  = href
        response.append(d)

    global data
    data = {'regions' : response}

def process(dataURL) :
    getDataFromWeb(dataURL)
    return(json.dumps(data))

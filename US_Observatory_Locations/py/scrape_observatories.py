# This python script is called by scrape.py to scrape Wiki's'
# State Observatories page, then returns a JSON payload containing data # used to popualte the Observatory listing on the Observatories web app's # index.html page.

# Note: This script requires the BeautifulSoup4 Library
# https://www.crummy.com/software/BeautifulSoup/

# python3 scrape.py observatories /wiki/Category:Astronomical_observatories_in_Alabama

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
  
    contentLists = soup.find_all('div', class_='mw-content-ltr')
    for contentList in contentLists:
        lists = contentList.find_all('li')
        count = len(lists)
        
        if count > 0:
            for list in lists:
                d = collections.OrderedDict()
                anchor = list.find('a')
                href = anchor['href']
                text = anchor.text
                d['observatoryName'] = text
                d['observatoryHref'] = href
                response.append(d)
            break

    global data
    data = {'observatories' : response}

def process(dataURL) :
    getDataFromWeb(dataURL)
    return(json.dumps(data))

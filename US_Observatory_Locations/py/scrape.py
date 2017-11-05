# This python script is called from the Node.js server script.
# It calls other scripts which scrape web pages from specified URL, 
# then sends the data back in a JSON paylod by printing to stdout.

import sys
import scrape_regions
import scrape_states
import scrape_observatories
import scrape_observatory

def processRegions(dataURL) :
    print(scrape_regions.process(dataURL))

def processStates(dataURL) :
    print(scrape_states.process(dataURL))

def processObservatories(dataURL) :
    print(scrape_observatories.process(dataURL))

def processObservatory(dataURL) :
    print(scrape_observatory.process(dataURL))

def process(action, dataURL) :
    functions = {'regions' : processRegions,
                 'states' : processStates,
                 'observatories' : processObservatories,
                 'observatory' : processObservatory,
    }

    functions[action](dataURL)

if __name__ == '__main__' :
    try :
        process(sys.argv[1], sys.argv[2])
    except Exception :
        print('There was an error executing the scrape.py script.')

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

config = {
    'description': 'Your Project',
    'author': 'Your Name',
    'url': 'Your URL',
    'download_url': 'Your URL',
    'author_email' : 'Your email',
    'version': '0.1',
    'install_requires': ['nose'],
    'packages': ['USER'],
    'scripts': [],
    'name': 'projectname'
}

setup(**config)

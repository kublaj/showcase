
var data = require('./package.json');
var header = require('page-header');
var footer = require('page-footer');

data.title = 'Showcase';
data.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.3.6/bassdock.min.css';

data.include = function(name) {
  return data[name];
};
data.header = header(data);
data.footer = footer(data);

data.asset_path = 'http://d2v52k3cl9vedd.cloudfront.net/basscss/assets/';
data.sites = [
  {
    title: 'Nodeconf',
    url: 'http://nodeconf.com/',
    description: 'The longest running community driven conference for the Node community.',
    image: 'screenshot-nodeconf-2015-03-03-09-23-07-640.jpg '
  },
  {
    title: 'Assembly',
    url: 'http://assembly.com/',
    description: 'Turn ideas into great products with people around the world.',
    image: 'screenshot-assembly-discover-2015-03-03-09-24-09-640.jpg'
  },
  {
    title: 'Monodraw for Mac',
    url: 'http://monodraw.helftone.com/',
    description: 'Powerful ASCII art editor designed for the Mac.',
    image: 'monodraw-640.jpg'
  },
  {
    title: 'Singles Club',
    url: 'http://singlesclub.fm/',
    description: 'Part record club. Part music journal.',
    image: 'singlesclub-640.jpg'
  },
  {
    title: 'Lachlan Campbell',
    url: 'http://lachlanjc.me',
    description: 'Personal site of Lachlan Campbell',
    image: 'screenshot-lachlanjc--2015-02-24-12-07-33-640.jpg'
  },
  {
    title: 'Pixyll',
    url: 'http://pixyll.com/',
    description: 'A simple, beautiful theme for Jekyll that emphasizes content rather than aesthetic fluff.',
    image: 'pixyll-640.jpg'
  },
  {
    title: 'Nurturing Ability',
    url: 'http://www.nurturingability.com.au/',
    description: 'Helping our Most Helpless One Family at a Time',
    image: 'nurturingability-640.jpg'
  },
  {
    title: 'Linknest',
    url: 'https://linknest.cc/',
    description: 'Bookmarks made simple',
    image: 'screenshot-linknest.cc-2015-03-03-09-26-47-640.jpg'
  },
  {
    title: 'CSS Stats',
    url: 'http://cssstats.com/',
    description: 'Potentially interesting stats on stylesheets',
    image: 'cssstats-640.jpg'
  },
];


module.exports = data;


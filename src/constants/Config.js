const Config = {
   menu : [
     { id:1, name: 'about', url: '/'},
     { id:3, name: 'projects', url: '/projects'},
     { id:4, name: 'contact', url: '/contact-us'},
     { id:5, name: 'download cv', url: '/download-cv'},
   ],
   social: [
     { id:1, name: 'facebook', url: 'http://facebook.com/anil6080'},
     { id:2, name: 'github', url: 'https://github.com/anilGupta'},
     { id:3, name: 'stack-overflow', url: 'https://stackoverflow.com/users/1353052/anil-gupta'},
     { id:4, name: 'twitter', url: 'https://twitter.com/__anilGupta'},
   ],
   googleMapKey: 'AIzaSyBkc9o7kDYAR6GNiHBWghrhE-2OfVeXVKs',
   //apiURL: 'http://localhost:3000/api'
   apiURL: 'https://anil-portfolio-api.herokuapp.com/api',
   MOBILE_WIDTH : 320,
   TABLET_WIDTH : 736
};

export default Config;
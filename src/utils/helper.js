const helper = {
  formatDate: (data, short = false) => {
    const options = short ? {day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',} : {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    };
    return new Date(data).toLocaleDateString('en', options);
  },
   getRandomInt : (min, max, relative=0.1) =>{
     return (Math.floor(Math.random() * (max - min + 1)) + min) * relative;
  },
  nameToHex: (color) => {
    const ctx = document.createElement('canvas').getContext('2d');
          ctx.fillStyle = color;
    return ctx.fillStyle;
  },
  hexToRgb : (color, alpha= 1) =>{
    color = color.includes("#") ? color: helper.nameToHex(color);
    if (color.length === 4) {
      let extendedColor = '#';
      for (let i = 1; i < color.length; i++) {
          extendedColor += color.charAt(i) + color.charAt(i);
      }
      color = extendedColor;
    }
    return  `rgba(${parseInt(color.substr(1, 2), 16)}, ${parseInt(color.substr(3, 2), 16)}, ${parseInt(color.substr(5, 2), 16)}, ${alpha})`;
  },
  getViewPort: () => {
    let viewPortWidth,
        viewPortHeight;

        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
          viewPortWidth = window.innerWidth,
            viewPortHeight = window.innerHeight
        }

        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        else if (typeof document.documentElement != 'undefined'
          && typeof document.documentElement.clientWidth !=
          'undefined' && document.documentElement.clientWidth != 0) {
          viewPortWidth = document.documentElement.clientWidth,
            viewPortHeight = document.documentElement.clientHeight
        }

        // older versions of IE
        else {
          viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
        }
    return [viewPortWidth, viewPortHeight];
  }
};

export default helper;
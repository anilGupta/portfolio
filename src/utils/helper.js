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
  }
};

export default helper;
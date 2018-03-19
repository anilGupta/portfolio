const helper = {
  formatDate: (data, short = false) => {
    const options = short ? {day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',} : {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    };
    return new Date(data).toLocaleDateString('en', options);
  }
};

export default helper;
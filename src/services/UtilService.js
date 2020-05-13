export default {
    makeId,
    getFormatDate
}

function makeId(length = 10) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getFormatDate(date) {
  date = new Date(date || '')  
  const todayDate = new Date(); 

  return `${ date.getDate() }/${ date.getMonth()+1 }${ todayDate.getFullYear() === date.getFullYear() ? '' : `/${ date.getFullYear()} `}`;
};
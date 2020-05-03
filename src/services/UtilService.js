export default {
    makeId,
    dateConvertor
}

function makeId(length = 10) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function dateConvertor(date) {
  date = new Date( date )
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return date.getUTCDate() + ' ' + months[date.getUTCMonth()] + ', ' + date.getUTCFullYear();
}
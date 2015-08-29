
// AMI for browser

var AMI = function (params) {

  var login = function (url, username, secret) {
    //url like http://localhost:8088/manager
    var r = [
      url,
      'action=login',
      '&',
      'username=' + username,
      '&',
      'secret=' + secret
    ].join('');
    return fetch(r);
  }

  return {
    login: login
  };
};
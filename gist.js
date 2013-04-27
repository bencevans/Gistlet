
var gist = false;
var match = window.location.pathname.match(/^\/([0-9]+)/);

if(match) {
  gist = match[1];
} else {
  var match = window.location.pathname.match(/^\/(?:.+\/)?([a-z0-9]+)/);
  if(match)
    gist = match[1];
}

if(gist)
  document.querySelector('.pagehead-actions').innerHTML = document.querySelector('.pagehead-actions').innerHTML + '<li><a href="http://dabblet.com/gist/' + gist + '" class="minibutton" rel="nofollow">View Dabblet</a></li>'

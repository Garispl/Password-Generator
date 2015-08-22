function generatePassword() {
  var length = document.getElementById('length').value;
  var charset = document.getElementById('charset').value;
  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  var elem = document.getElementById('output');
  elem.innerHTML = password;
}

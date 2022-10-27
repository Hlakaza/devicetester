var userAgent = navigator.userAgent || navigator.vendor || window.getMobileOperatingSystem;
function getMobileOperatingSystem() {
  if (/huawei/i.test(userAgent)) {
    return 'harmony'
  }
  if (/android/i.test(userAgent)) {
    return 'android'
  }
  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return 'android'
  }
}


var device = 'I AM A:' + '<b>' + getMobileOperatingSystem(); + '</b>'

document.getElementById('renderDevice').innerHTML = device;
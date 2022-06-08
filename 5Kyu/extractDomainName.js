function domainName(url){
  url = url.replace('www.', '');
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  return url.split('.')[0];
}
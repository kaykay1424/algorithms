/** Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. */
function domainName(url) {
  let domain = url
    .replace("http://", "")
    .replace("http://www.", "")
    .replace("https://www.", "")
    .replace("https://", "")
    .replace("www.", "");
  const domainEnd = domain.indexOf(".");
  return domain.slice(0, domainEnd);
}

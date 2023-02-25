/** In this kata, we want to convert a URL query string into a nested object.
 * The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object. */
function convertQueryToMap(query) {
  if (query === "") return {};
  const queryParams = query.split("&");
  const queryObj = {};
  function getNestedValues(object, keys, currKey, value, i) {
    if (i === 0) {
      i++;
      if (!object[currKey]) {
        if (keys.length > 1) object[currKey] = {};
        else object[currKey] = value;
      }
      getNestedValues(object, keys, object[currKey], value, i);
    } else if (i < keys.length - 1) {
      const nestedKey = keys[i];
      if (!currKey[nestedKey]) {
        currKey = currKey[nestedKey] = {};
      } else {
        currKey = currKey[nestedKey];
      }
      i++;
      getNestedValues(object, keys, currKey, value, i);
    } else {
      const nestedKey = keys[i];
      currKey[nestedKey] = value;
    }
  }
  queryParams.forEach((query) => {
    const keyValuePair = query.split("=");
    const value = decodeURIComponent(keyValuePair[1]);
    const keys = keyValuePair[0].split(".");

    keys.forEach(() => {
      getNestedValues(queryObj, keys, keys[0], value, 0);
    });
  });
  return queryObj;
}

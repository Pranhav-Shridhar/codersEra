// In what way can you decode or encode a URL in JavaScript?


// encodeURL() function is mainly used to encode an URL in JavaScript. It requires a URL string as a parameter and return that encoded string. Point to note: encodeURL() did not encode characters such as / ? : @ & = + $ #, if you need to encode these characters too, then use encodeURLComponent().

// Usage:

var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);

// decodeURI() function is basically used to deocde an URL in JavaScript. It requires an encoded URL string as parameter and return that decoded string.

// Usage:

var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
decodeURI(encoded_uri);
 var showHash = $(location).attr('hash');   
 var hid = decodeURI(showHash);
 var dLink = hid.substring(1, hid.length);
 document.getElementById('formDl').action = dLink;

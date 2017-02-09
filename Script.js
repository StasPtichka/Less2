/**
 * Created by stas on 09.02.17.
 */
function renameFunction(){
    var sign = document.getElementById('signFont');
    var name = document.getElementById('otherThing');
    var message = document.getElementById('message');

    if (name.value == '') {
        message.innerHTML = "Do not you remember?  I believe in you"


    } else {
        sign.innerHTML = name.value;
        message.innerHTML = "Welcome to Miami... baby";

    }


}


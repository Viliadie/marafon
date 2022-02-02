function showVerticalMessage(text) {
    let maxLength = 10;
   
   if (text[0]==='м') {
    text = text[0].toUpperCase() + text.slice(1, maxLength);
    } else {
    text = text.slice(0, maxLength);
    }
    
    for (let key of text) {
    console.log(key + '\n');
    }
    }
    
    showVerticalMessage('марафон');
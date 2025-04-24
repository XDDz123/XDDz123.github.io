function encodeJSON(jsonObject) {
    const jsonString = JSON.stringify(jsonObject);
    const encodedString = btoa(jsonString);
    return encodedString;
}

function decodeJSON(string) {
    const jsonString = atob(string);
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
}

// simple encoding
function rot(input) {
    return input.split('').map(char => {
        const charCode = char.charCodeAt(0);
        
        // uppercase letters
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        }
        // lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        }
        // Return the character unchanged if it's not a letter
        return char;
    }).join('');
}

// dev only. saving strings to file
async function writeToFile(content, type) {
    fetch('http://127.0.0.1:5000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'message': content, 'type': type})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

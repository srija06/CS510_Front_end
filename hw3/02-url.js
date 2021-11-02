
console.log('Enter your code here');
buttonObject = document.getElementsByClassName("btn-info")[0];
buttonObject.onclick = function() {
    var url = document.getElementById("comments").value;
    parseURL(url);
}

function parseURL(url) {
    domain = '';
    var result = validateAndReturnQueryParams(url);
    displayResults(result);
}

function displayResults(result) {
    //remove result object if it already exists
    var resultObj = document.getElementById('result');
    if(resultObj) {
        resultObj.remove();
    }
    var formElement = document.forms[0];
    var resultHTML = getResultHTML(result);
    formElement.insertAdjacentHTML('afterend', resultHTML);
}

function getResultHTML(result) {
    if(result === false) {
        return getErrorHTML();
    }
    else {
        return getSuccessHTML(result);
    }
}

function getSuccessHTML(result) {
    var paramHTML = ''; 
    for(i=0; i<result.length; i++) {
        var queryParam = result[i];
        paramHTML += '<p>' + queryParam[0] + ': ' + queryParam[1] + '</p>';
    }

    var resultHTML = '<div id=result class="bg-light border rounded w-50 mx-auto mt-5 p-3">' +
    '<h1 class="mt-2 mb-4">Results</h1>' +
    '<div class="url">' +
        '<h4>URL</h4>' +
      '<p>' + domain + '</p>' +
    '</div>';

    if(result.length > 0) {
        resultHTML += 
    '<div class="queryparams">' +
    '<h4>Query Parameters</h4>' +
        paramHTML +
    '</div>'
    '</div>';
    }
    
    return resultHTML;
}

function getErrorHTML() {
    errorHTML = 
        '<div id=result class="bg-light border rounded w-50 mx-auto mt-5 p-3">' +
            '<h1 class="mt-2 mb-4">Results</h1>' +
            '<p>Invalid URL</p>'
        '</div>';
        return errorHTML;
}

//validations

//every param should have an =, otherwise it is invalid 
//There should only be one '?' in the URL
//Both key and value of query param should be decodable and should not throw any errors
//Each query param when split by '=' should only have a key and value , there can't be multiple values
function validateAndReturnQueryParams(url) {
    var queryParamArr = [];
    var splitURL = url.split("?");
    domain = splitURL[0];
    if(splitURL.length == 1) {
        return [];
    }
    var queryParamList = splitURL[1];//query params list 
    //length of the query params list should be only 2
    if(splitURL.length > 2) {
        return false; 
    }
    var queryParams = queryParamList.split('&'); 
    for (i=0; i<queryParams.length; i++) {
        var queryParam  = queryParams[i];
        var queryParamValues = queryParam.split("=");
        //Length of queryParamValues should only be 2 key=value
        if(queryParamValues.length !=2) {
            return false;
        }
        try {
            var key =   decodeURIComponent(queryParamValues[0]);    
            var value = decodeURIComponent(queryParamValues[1]);
        } 
        catch(e) {
            return false; 
        }
        var keyValueArr = [key, value];
        queryParamArr.push(keyValueArr);
    }
    return queryParamArr;
}




// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no

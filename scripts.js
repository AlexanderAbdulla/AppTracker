//Holds our list of signatures
var signatures  = []

/*
1) Loads full list of apps for the index
2) Populates index html
*/
function loadIndex(){
    fetch('https://site.fortinet.com/files/test.json')
    .then(
    function(response) {
        //Checks if there is an error via the response code and console logs it        
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }
    
        //Renders the json as objects and pushes them to signatures
        response.json().then(function(data) {
            for(var i = 0; i < data.length; i++){
                var app = data[i]
                console.log("NEW OBJECT")
                signatures.push(app)

                }
            loadIndexHtml()
            });
        })
        //Shows if there was an error fetching and logs the error object 
        .catch(function(err) {
            console.log('Fetch Error', err);
    });  
}

/*
1) Loads a full list of apps for details 
2) Populates details html
*/
function loadDetails(name){
    fetch('test.json')
    .then(
    function(response) {
        //Checks if there is an error via the response code and console logs it        
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }
    
        //Renders the json as objects and pushes them to signatures
        response.json().then(function(data) {
            for(var i = 0; i < data.length; i++){
                var app = data[i]
                console.log("NEW OBJECT")
                signatures.push(app)

                }
            loadDetailsHtml(name)
            });
        })
        //Shows if there was an error fetching and logs the error object 
        .catch(function(err) {
            console.log('Fetch Error', err);
    });  
}

// Loads the HTML list of apps in our index.html page
function loadIndexHtml(){
    var parent = document.getElementById('sigList')
    parent.innerHTML = ""
    for(var i = 0; i < signatures.length; i++){
        var newListItem = document.createElement('A')
        newListItem.innerHTML = signatures[i][0]
        newListItem.href = "details.php?name=" + signatures[i][0]
        parent.appendChild(newListItem)
        parent.appendChild(document.createElement('br'))
    }
}

//Loads and parses the details of an app that has been clicked 
function loadDetailsHtml(name){
   var appDetails = []; 
    var appDetailDiv = document.getElementById('detailsDiv')
    for (var i = 0; i < signatures.length; i++){
        if(signatures[i][0] == name){
            appDetails = signatures[i]
            break
        }
    }
    for( var x = 0; x < appDetails.length; x++){
        var detail = document.createElement('p')
        detail.innerHTML = "Detail #" + x + " is: " + appDetails[x]
        appDetailDiv.appendChild(detail)
    }
}

//Reloads the index.html list according to search parameters
function reloadHtml(){
    
    var searchVal = document.getElementById('searchInput').value;
    var searchVal = searchVal.toLowerCase();

    if(searchVal == ''){
        loadIndexHtml()
        return 
    }

    var appsDiv = document.getElementById('sigList');
    appsDiv.innerHTML = ""

    for(var i = 0; i < signatures.length; i++){
        if(signatures[i][0].toLowerCase().includes(searchVal)){
            var newListItem = document.createElement('A')
            newListItem.innerHTML = signatures[i][0]
            newListItem.href = "details.php?name=" + signatures[i][0]
            appsDiv.appendChild(newListItem)
            appsDiv.appendChild(document.createElement('br'))

        }
    }
}
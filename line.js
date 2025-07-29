function greetUser(name, callback) {
    console.log("Hi, " + name + "!");
    callback();
}

function askQuestion() {
    console.log("How are you today?");
}

greetUser("Preethi", askQuestion);




function downloadFile(url, callback) {
    console.log("Downloading from", url);
    setTimeout(() => {
        console.log("Download complete!");
        callback();
    }, 2000); 
}

function processFile() {
    console.log("Processing downloaded file...");
}

downloadFile("https://example.com/file.pdf", processFile

var globalVar = "I am global"; 

function showScope() {
    var functionScoped = "I am function scoped"; 
    let blockScoped = "I am block scoped";       
    const constantValue = "I can't be changed";  

    console.log(globalVar);      
    console.log(functionScoped); 
    console.log(blockScoped);    
    console.log(constantValue); 

    if (true) {
        var functionScoped = "Changed inside block";  
        let blockOnly = "Only in this block";         
        console.log(blockOnly);                    
    }

    console.log(functionScoped); 

showScope();



if (true) {
    var a = 10; 
    let b = 20; 
    const c = 30; 
}

console.log(a);
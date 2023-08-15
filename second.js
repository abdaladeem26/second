
function changeCursor(element) {
    element.style.cursor = "pointer";
}


function restoreCursor(element) {
    element.style.cursor = "auto";
}







document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".item").addEventListener("click", function() {
        var sa = new XMLHttpRequest();

        sa.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var saContent = this.responseText;
                var saJson = new XMLHttpRequest();

                
                saJson.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var entry = JSON.parse(this.responseText);
                        var renderAbd = renderHtml(saContent, entry.datas);

                       
                        document.querySelector("#coo").innerHTML = renderAbd;
                        
                    }
                };

                saJson.open('GET', 'data/chicken.json', true);
                saJson.send(null);
            }
        };

        sa.open('GET', 'templates/item1.html', true);
        sa.send(null);
    });
});

function renderHtml(template, datas){
    var htmlText = "";

    for (var i = 0; i < datas.length; i++){
        htmlText += template.replace("{{name}}", datas[i].name)
                            .replace("{{description}}", datas[i].description);
    }
    return htmlText;
}












document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".item1").addEventListener("click", function() {
        var sa = new XMLHttpRequest();

        
        sa.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var saContent = this.responseText;
                var saJson = new XMLHttpRequest();

                
                saJson.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var entry = JSON.parse(this.responseText);
                        var renderAbd = renderHtml(saContent, entry.data);

                        
                        document.querySelector("#coo").innerHTML = renderAbd;
                    }
                };

                saJson.open('GET', 'data/beef.json', true);
                saJson.send(null);
            }
        };

        sa.open('GET', 'templates/item1.html', true);
        sa.send(null);
    });
});

function renderHtml(template, data){
    var htmlText = "";

    for (var i = 0; i < data.length; i++){
        htmlText += template.replace("{{name}}", data[i].name)
                            .replace("{{description}}", data[i].description);
    }
    return htmlText;
}








document.addEventListener("DOMContentLoaded", function(event) {
    
    document.querySelector(".item2").addEventListener("click", function() {
        var sa = new XMLHttpRequest();

        
        sa.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var saContent = this.responseText;
                var saJson = new XMLHttpRequest();

                
                saJson.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var entry = JSON.parse(this.responseText);
                        var renderAbd = renderHtml(saContent, entry.datas1);

                        
                        document.querySelector("#coo").innerHTML = renderAbd;
                    }
                };

                saJson.open('GET', 'data/sushi.json', true);
                saJson.send(null);
            }
        };

        sa.open('GET', 'templates/item1.html', true);
        sa.send(null);
    });
});

function renderHtml(template, datas1){
    var htmlText = "";

    for (var i = 0; i < datas1.length; i++){
        htmlText += template.replace("{{name}}", datas1[i].name)
                            .replace("{{description}}", datas1[i].description);
    }
    return htmlText;
}

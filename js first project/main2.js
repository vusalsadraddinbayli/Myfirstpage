function mainData() {
    const data = {
        userId: 1,
        title: "new title",
        body: "new body"
    }
    var json = JSON.stringify(data);
    var url = 'https://jsonplaceholder.typicode.com/comments';
    var xml = new XMLHttpRequest;
    xml.open("POST", url, true);
    xml.setRequestHeader("Content-type", "application/json", "charset=utf-8");
    xml.onload = function() {
        if (xml.status === 201 && xml.readyState === 4) {
            var post = xml.responseText;
            console.log(post);
        }
    }
    xml.send(json)
}
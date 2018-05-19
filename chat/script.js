function hideIcon(){
	let element = document.getElementById("chat-icon");
	element.style.display = "none";
	let show = document.getElementById("chat-box");
	show.style.display = "inherit";
}


function hideBox(){
	let element = document.getElementById("chat-box");
	element.style.display = "none";
	let show = document.getElementById("chat-icon");
	show.style.display = "inherit";
}

function createJson(){
	let element = {
			message : document.getElementById("area-box").value
	};
	return JSON.stringify(element);
}

$("#area-box").keypress(function(e){
		if(e.which == 13 || e.keyCode == 13){
			$.ajax({ 
					url: "https://api.mlab.com/api/1/databases/demofer/collections/chat?apiKey=WfkQziF9geAVqeiUGnu15k8upTw8mMfR", 
					data: createJson(), 
					type: "POST", 
					contentType: "application/json"
			});
			if(e.preventDefault) e.preventDefault();
			document.getElementById("area-box").value = "";

		}
});

$.get("https://api.mlab.com/api/1/databases/demofer/collections/chat?apiKey=WfkQziF9geAVqeiUGnu15k8upTw8mMfR", function(data){
		$(".messageBox").text("");
		$(".messageBox").append("<ul>");
		for(let item in data)
		{
			$(".messageBox").append("<li>" + data[item].message +"</li>");
		}
		$(".messageBox").append("</ul>");

		setTimeout($.get(this), 4000);
});


function loadbar(time)
{
	let elemento = document.getElementById("loading-bar");
	elemento.style.width = "100%";
	elemento.style.transition = "all"+" "+time;
}

function resetbar()
{
	let elemento = document.getElementById("loading-bar");
	elemento.style.width = "0%";
}

function createJson()
{
    let formData =	document.getElementById("form-info").elements;

	let data = {
		nombre : formData[0].value,
		apellido : formData[1].value,
		telefono : formData[2].value
	}
	
	return JSON.stringify(data);
}

$(document).ready(function () {
		$("#btnJ").click(function(){
				$.ajax( { 
						url: "https://api.mlab.com/api/1/databases/demofer/collections/info?apiKey=WfkQziF9geAVqeiUGnu15k8upTw8mMfR", 
						data: createJson(), 
						type: "POST", 
						contentType: "application/json",
						success: loadbar("1s")
				});
		});
});



var ImageUploader = {
	// from an input element
	filesToUpload: function() {
		var input = document.getElementById('_1').value;
		alert(input.files);
	},
	// from drag-and-drop
	onDrop: function(e) {
		filesToUpload = e.dataTransfer.files;
	},
	hello: function() {
		alert('Hello!');
	}
	// init: function() {
	// 	hello: hello
	// 	// filesToUpload: filesToUpload
	// }
};

var iu = Object.create(ImageUploader);
//f.dofill(links);


window.onload = function () {
	// iu.init();
	// iu.hello();
	iu.filesToUpload();
}
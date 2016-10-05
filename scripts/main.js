console.log(document.getElementById('code-editor'));

var editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
	lineNumbers: true,
	matchBrackets: true,
	lineWrapping: true,
	scrollbarStyle: 'native',
	lineWrapping: true,
	theme: 'icecoder',
	extraKeys: {'Enter': 'newlineAndIndentContinueMarkdownList'},
	mode: 'text/x-c++src'
}, { showToolbar: true });

function changeLanguage(language) {
	editor.setOption("mode", language);
}

$('#languageSelector').on('change', function (e) {
	changeLanguage($(this ).val());
})
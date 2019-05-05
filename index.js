get_url = (bc_link) => {
	$.get(bc_link, (data) => {
		let pattern = /"is_downloadable":false,"file":{"mp3-128":".+"},"video_mobile_url"/ig;
		
		let result = data.match(pattern);
		let url = result.toString().replace('"is_downloadable":false,"file":{"mp3-128":"', '').replace('"},"video_mobile_url"', '');
		console.log(url);
		$('#download_container').append('<a href="' + url + '" target="_blank">Download</a>');	
	});
}

$('#bc_submit').click(() => {
	console.log('start')
	get_url($('#bc_url').val())
})
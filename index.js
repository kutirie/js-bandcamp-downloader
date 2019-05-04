function get_url(bc_link) {
	$.get(bc_link, (data) => {
		let pattern = /"is_downloadable":false,"file":{"mp3-128":".+"},"video_mobile_url"/ig;
		
		setTimeout(() => {
			let result = data.match(pattern);
			let url = result.toString().replace('"is_downloadable":false,"file":{"mp3-128":"', '').replace('"},"video_mobile_url"', '');
			console.log(url);	
		}, 3000)
	});
}
import $ from 'jquery';

export const extractFlickrUserName = (str) => { 
	let parts = str.replace(/["()]/g,"").split(' ');
	parts[0] = '';
	return parts.join(' ');
};

export const isEmpty = (str) => str.replace(/^\s+|\s+$/gm,'').length == 0;

export const jsonFetch = (query) => {
	let apiKey = '10742bf3f145558997b8001765ea41b5';   
	$.getJSON(query)
		.then(function (data) {
			const items = data.items;
			return items;
		});
};





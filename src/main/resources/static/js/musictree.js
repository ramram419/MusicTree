/**
 * 
 */
 
var key = "4a087d5105532fe7e7a6027131502b6a";
 
function getArtist(){
	$.ajax({
		type: "get",
		url: "https://ws.audioscrobbler.com/2.0/",
		data: {method: "chart.gettopartists", api_key: key, format: "json", limit: "10"},
		dataType: "JSON",
		async: false,
		success: function(res){
			
			res.artists.artist.forEach(function(item, index){
				
				html = '';
				
				html += '<div class="Music_item" onclick="location.href=\''+ item.url +'\'">';
				html += '<img src="../static/img/MusicCover'+ (index%4 + 1) +'@2x.png"/><div class="MusicInfo">';
				html += '<div class="M_title">'+ item.name +'</div><div class="Name">'+ item.listeners +'</div>';
				html += '<img src="../static/img/ic_play_white@2x.png" class="playBtn"/></div></div>';
					
				$(".SlideBox").append(html);
						
			})
			
		},
		error: function(err){
			console.log(err);
		}
	})
}

function getTrack(){
	$.ajax({
		type: "get",
		url: "https://ws.audioscrobbler.com/2.0/",
		data: {method: "chart.gettoptracks", api_key: key, format: "json", limit: "10"},
		dataType: "JSON",
		success: function(res){
			
			res.tracks.track.forEach(function(item, index){
				
				var html = '';
				
				html += '<div class="listItem">';
				html += '<div class="rank">'+ (index + 1) + '</div>';
				html += '<div class="musicTitle">'+ item.name +'</div>'; 
				html += '<div class="singer">'+ item.artist.name +'</div>';
				html += '<img src="../static/img/ic_play_green@2x.png" class="playBtn" onclick="location.href = \''+ item.url+'\'"/></div>';
				
				$(".musicChart .chartList").append(html);
			})
			
		},
		error: function(err){
			console.log(err);
		}
	})
}


function getAlbum(limit){
	$.ajax({
		type: "get",
		url: "https://ws.audioscrobbler.com/2.0/",
		data: {method: "geo.gettoptracks", country:'United States', api_key: key, format: "json", limit: limit},
		dataType: "JSON",
		success: function(res){
			
			res.tracks.track.forEach(function(item, index){
				
				$(".loading").hide();
				
				var html = '';
				
				html += '<div class="listItem">';
				html += '<div class="albumImg"><img src="../static/img/MusicCover'+ (index%4 + 1) +'@2x.png"/></div>';
				html += '<div class="albumInfo">';
				html += '<div class="musicTitle">'+ item.name +'</div>'; 
				html += '<div class="singer">'+ item.artist.name +'</div>';
				html += '<img src="../static/img/ic_play_green@2x.png" class="playBtn" onclick="location.href = \''+ item.url+'\'"/></div></div>';
				
				$(".albumChart .chartList").append(html);
			})
			
		},
		error: function(err){
			console.log(err);
		}
	})
}

function getChart(){
	$.ajax({
		type: "get",
		url: "https://ws.audioscrobbler.com/2.0/",
		data: {method: "chart.gettoptracks", api_key: key, format: "json", limit: "100", page: '2'},
		dataType: "JSON",
		success: function(res){
			
			$(".loading").hide();
			
			res.tracks.track.forEach(function(item, index){
				
				var html = '';
				
				html += '<div class="listItem">';
				html += '<div><input type="checkbox" class="listcheck"/></div>';
				html += '<div class="rank">'+ (index + 1) + '</div>';
				html += '<div style="width: 150px;"><img src="../static/img/MusicCover'+ (index%4 + 1) +'@2x.png" class="musicCover"/></div>';	
				html += '<div class="title">'+ item.name +'</div>'; 
				html += '<div class="singer">'+ item.artist.name +'</div>';
				html += '<div><img src="../static/img/ic_play_green@2x.png" class="playBtn" onclick="location.href = \''+ item.url+'\'"/></div>';
				html += '<div><img src="../static/img/ic_plus@2x.png" class="addBtn"/></div></div>';
				
				$(".musicChart .chartList").append(html);
			})
			
		},
		error: function(err){
			console.log(err);
		}
	})
}

function getVideo(){
	
	$(".loading").hide();
	
	for(var i = 0; i < 12; i++){
		var html = '';
		
		html += '<div class="listItem">';
		
		if(i%3 == 0){
			html += '<iframe src="https://www.youtube.com/embed/1YePPvBW96s"></iframe></div>';
		}else if(i%3 == 1){
			html += '<iframe src="https://www.youtube.com/embed/r8ItKGv21VY"></iframe></div>';
		}else{
			html += '<iframe src="https://www.youtube.com/embed/r8ItKGv21VY"></iframe></div>';
		}
		
		
		$(".videoChart .chartList").append(html);
	}
	
}
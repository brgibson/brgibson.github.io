var db = new PouchDB('music-library');
var remoteCouch = false;

function addAlbum(_artist, _title) {
    var album = {
	_id: _artist.replace(/%/g,'') + _title.replace(/\%/g,''), //the id can't handle percent signs
	artist: _artist,
	title: _title
    };
    db.put(album, function callback(err, result) {
	if (!err) {
	    console.log('Successfully added ' + album.artist + ' - ' + album.title + '!');
        } else {
	    console.log('Did not add  ' + album.artist + ' - ' + album.title + '!');
	}
    });
}
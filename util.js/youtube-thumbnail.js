module.exports = (function () {
        let video, results;
    
        const getThumbnail = function (url, size) {
                if (url == null) {
                        return '';
                }
        
                size = (size == null) ? 'big' : size;
                results = url.match('[\\?&]v=([^&#]*)');
                video = (results == null) ? url : results[1];
        
                if (size == 'small') {
                        return `http://img.youtube.com/vi/${video}/2.jpg`;
                }
        
                return `http://img.youtube.com/vi/${video}/0.jpg`;
        };
    
        return {
                thumbnail: getThumbnail
        };
}());
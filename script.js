function extractDomain(url) {
    var parser = new URL(url);
    return parser.origin;
}

function process_bookmark(bookmarks) {

    for (var i = 0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        var el_body = document.body;
        if (bookmark.children) {
            el_body.insertAdjacentHTML('beforeend', '<h2>' + bookmark.title + '</h2>');
            process_bookmark(bookmark.children);
        }

        if (bookmark.url) {
            el_body.insertAdjacentHTML('beforeend',
                '<p><img src="https://www.google.com/s2/favicons?domain=' +
                extractDomain(bookmark.url) + '">' +
                bookmark.title +
                " ~  " +
                bookmark.url +
                '</p>'
            );
        }
    }
}

chrome.bookmarks.getTree(process_bookmark);

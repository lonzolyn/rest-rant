const React = require('react')

function DEF (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
             </body>
        </html>
    )
}

module.exports = DEF
function teamHtml(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === "Engineer") {

        } else if (data[i].getRole() === "Manager") {

        } else if (data[i].getRole() === "Intern") {

        } else (done())
    }
}


function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${teamHtml(data)}
    </body>
    </html>`
}

module.exports = generateHtml;
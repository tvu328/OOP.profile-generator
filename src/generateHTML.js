function teamHtml(data) {
    var array = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === "Engineer") {
            array.push(engineerCard(data[i]))
        } else if (data[i].getRole() === "Manager") {
            array.push(managerCard(data[i]))
        } else if (data[i].getRole() === "Intern") {
            array.push(internCard(data[i]))
            // } else (done())
        }
    }
    return array.join("")
}

// function that returns html for a Engineer card
const engineerCard = (data) => {
    return `<section>
    <h1>${data.name}
        ${data.id}
        [${data.email}](https://mail.google.com/mail/u/0/#inbox/${data.email}/)
        [${data.github}](https://github.com/${data.github}/)</h1>
    </section>`
}

// function that returns html for a Manager card
const managerCard = (data) => {
    return `<section>
    <h1>${data.name}
        ${data.id}
        ${data.email}
        ${data.officeNumber}</h1>
    </section>`
}

// function that returns html for a Intern card
const internCard = (data) => {
    return `<section>
    <h1>${data.name}
        ${data.id}
        ${data.email}
        ${data.school}</h1>
    </section>`
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHtml;
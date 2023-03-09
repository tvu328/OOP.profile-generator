function teamHtml(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === "Engineer") {
            engineerCard(data[i])
        } else if (data[i].getRole() === "Manager") {
            managerCard(data[i])
        } else if (data[i].getRole() === "Intern") {
            internCard(data[i])
        } else (done())
    }
}

// function that returns html for a Engineer card
const engineerCard = (data) => {
    return `<section>
    <h1>${data.name}</h1>
    </section>`
}

// function that returns html for a Manager card
const managerCard = (data) => {
    return `<section>
    <h1>${data.name}</h1>
    </section>`
}

// function that returns html for a Intern card
const internCard = (data) => {
    return `<section>
    <h1>${data.name}</h1>
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
    </body>
    </html>`
}

module.exports = generateHtml;
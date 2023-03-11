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
    return `<section class="engineer">
    <h1 class="card-title">Engineer</h1>
    <h3>Name: ${data.name}</h3>
    <h4>ID: ${data.id}</h4>
    <h4>Email: [${data.email}](https://mail.google.com/mail/u/0/#inbox/${data.email}/</h4>
    <h4>GitHub: [${data.github}](https://github.com/${data.github}/)</h4>
    </section>`
}

// function that returns html for a Manager card
const managerCard = (data) => {
    return `<section class="manager">
    <h1 class="card-title">Manager</h1>
    <h3>Name: ${data.name}</h3>
    <h4>ID: ${data.id}</h4>
    <h4>Email: ${data.email}</h4>
    <h4>Office Number: ${data.officeNumber}</h1></h4>
    </section>`
}

// function that returns html for a Intern card
const internCard = (data) => {
    return `<section class="intern">
    <h1 class="card-title">Intern</h1>
    <h3>Name: ${data.name}</h3>
    <h4>ID: ${data.id}</h4>
    <h4>Email: ${data.email}</h4>
    <h4>School: ${data.school}</h4>
    </section>`
}

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
        <title>Team</title>
        <title>Document</title>
    </head>
    <body>
        ${teamHtml(data)}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHtml;
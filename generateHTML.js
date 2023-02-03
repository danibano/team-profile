const generateManager = function (manager) {
    return `
    <section class="card">
    <div class="title">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
    </div>
    <div>
        <ul>
            <li>ID: ${manager.id} </li>
            <li>Email: <a href="mailto:${manager.email}">${manager.email}</a> </li>
            <li>Office Number: ${manager.officeNum} </li>
        </ul>
    </div>
</section>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <section class="card">
    <div class="title">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
    </div>
    <div>
        <ul>
            <li>ID: ${engineer.id} </li>
            <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
            <li>GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
        </ul>
    </div>
</section>
    `
}

const generateIntern = function (intern) {
    return `

        <section class="card">
            <div class="title">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <div>
                <ul>
                    <li>ID: ${intern.id} </li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School: ${intern.school} </li>
                </ul>
            </div>
        </section>
    `
};

generateHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css">
      <title>Team</title>
  </head>
  <body>
      <header>
          <h1> My Team </h1>
      </header>
  
      <main>
  
        ${employeeCards}
  
      </main>
      
  </body>
  </html>
`;
}

module.exports = generateHTML; 
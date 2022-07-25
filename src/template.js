const templateGenerator = (manager,engineer,intern)=>{
   
    const generateManager = (manager,engineer,intern)=>{
        let managerArrays = manager;
        let engineerArrays = engineer;
        let internArrays = intern;
        
        return managerArrays, engineerArrays, internArrays;
    }

    return generateManager();
}
// <div>${templateGenerator(manager, eng, intern)}</div>
module.exports = (manager, engineer, intern) => {

    let HTMLString = "";
    
    manager.forEach(element => {
        HTMLString += `
      <div class="card text-bg-light mb-3" style="max-width: 18rem;margin: 0 auto;float: none;margin-bottom: 10px;">
            <div class="card-header bg-primary mb-3">Manager</div>
                <ul class="list-group list-group-flush">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"Email: ${element.id}</li>
                        <li class="list-group-item">Name: ${element.name}</li>
                        <li class="list-group-item">Email: ${element.email}</li>
                        <li class="list-group-item">Office Number: ${element.officeNumber}</li>
                    </ul>
                </ul>        
        </div>`
    });
    engineer.forEach(element => {
        HTMLString += `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;margin: 0 auto;float: none;margin-bottom: 10px;">
            <div class="card-header bg-primary mb-3">Enginner</div>
                <ul class="list-group list-group-flush">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"Email: ${element.id}</li>
                        <li class="list-group-item">Name: ${element.name}</li>
                        <li class="list-group-item">Email: ${element.email}</li>
                        <li class="list-group-item">Office Number: ${element.github}</li>
                    </ul>
                </ul>        
        </div>`
    });
    intern.forEach(element => {
        HTMLString += `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;margin: 0 auto;float: none;margin-bottom: 10px;">
            <div class="card-header bg-primary mb-3">Intern</div>
                <ul class="list-group list-group-flush">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"Email: ${element.id}</li>
                        <li class="list-group-item">Name: ${element.name}</li>
                        <li class="list-group-item">Email: ${element.email}</li>
                        <li class="list-group-item">Office Number: ${element.school}</li>
                    </ul>
                </ul>        
        </div>`
    });

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
    <h1 style="
    border: 1px;
    text-align: center;
    background: lightcoral;
    padding: 20px;
    ">My Team</h1>
    <div class="container" style="
        margin-top: 30px;">
        <div class="row"> 
        ${HTMLString}  
        </div>
    </div>
    

    </body>
    </html>
    `;
}
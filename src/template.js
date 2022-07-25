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

    function createString(){

    }
    console.log(engineer[0].id);

    let HTMLString = "";
    
    manager.forEach(element => {
        HTMLString += `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;margin: 0 auto;float: none;margin-bottom: 10px;">
            <div class="card-header">Manager</div>
            <div class="card-body">
                <div>ID:${element.id}</div>
                <div>Name:${element.name}</div>
                <div>Email:${element.email}</div>
                <div>Office Number:${element.officeNumber}</div>
            </div>
      </div>`
    });
    engineer.forEach(element => {
        HTMLString += `
        <div class="card text-bg-light mb-3"style="max-width: 18rem;margin: 0 auto;float: none;margin-bottom: 10px;">
            <div class="card-header">Enginner</div>
            <div class="card-body">
                <div>ID:${element.id}</div>
                <div>Name:${element.name}</div>
                <div>Email:${element.email}</div>
                <div>GitHub:${element.github}</div>
            </div>
      </div>`
    });
    intern.forEach(element => {
        HTMLString += `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;margin: 0 auto;float: none;margin-bottom: 10px;">
            <div class="card-header">Intern</div>
            <div class="card-body">
                <div>ID:${element.id}</div>
                <div>Name:${element.name}</div>
                <div>Email:${element.email}</div>
                <div>School:${element.school}</div>
            </div>
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
    text-align: center;
    ">My Team</h1>

    ${HTMLString}

    </body>
    </html>
    `;
}
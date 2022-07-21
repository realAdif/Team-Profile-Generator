const templateGenerator = (team)=>{
    console.log(team);



    let html = [];
    const generateManager = (manager)=>{
        console.log("hellp",manager, typeof(manager),manager.name,manager.id)
        return `<p>${manager[0].name}</p>`
    }

    html.push(generateManager(team))
    html.push()

    return html.join("");

   
}

module.exports = (manager, eng, intern) => {
    return `
    <HTML>
    <div>${templateGenerator(manager, eng, intern)}</div>
    
    <div>
    <
    >`
}
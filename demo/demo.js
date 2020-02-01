const jsDiv = document.getElementById("dateJs");
const rectDiv = document.getElementById("dateReactJs");

const render = () =>{
    jsDiv.innerHTML = `
        <div class="split">
            Js Template 
            <input/>
            <p>${new Date()}</p>
        </div>
    `

    var divToRender = React.createElement(
        "div",
        {className: "split"},
        "React Template",
        React.createElement("input"),
        React.createElement(
            "p",
            "null", 
            new Date().toString()
        )
    );
    ReactDOM.render(divToRender,rectDiv);

}

setInterval(render ,1000);

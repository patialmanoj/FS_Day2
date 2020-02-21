const jsDiv = document.getElementById("dateJs");
const rectDiv = document.getElementById("dateReactJs");
const rectDivWithJsx = document.getElementById("dateReactWithJsx");



const render = () => {
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

    var divToRenderWithJSX = <div className="split">
                            React Template With Jsx 
                            <input/>
                            <p>{new Date().toString()}</p>
                        </div>

    ReactDOM.render(divToRender,rectDiv);
    ReactDOM.render(divToRenderWithJSX,rectDivWithJsx);
}

setInterval(render ,1000);

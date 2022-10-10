import React from 'react'
import ReactDOM from 'react-dom'

function project_1 (){
    return(
        <div>
            <img src={"logo192.png"} width={40} alt={"Missing image"} />

              <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Wake</li>
                    <li>Has Well over 100k stars on github</li>
                    <li>Is maintained by facebook</li>
                    <li>Powers thousands of enterprise aps,including mobile apps</li>
                </ul>
        </div>
    )
}
        ReactDOM.render(project_1(),document.getElementById("root"))

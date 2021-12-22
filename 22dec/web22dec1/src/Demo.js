import React from 'react'

export default class Demo extends React.Component
{
    constructor(props)
    {
        super(props)
        //this.props.data = "Vikas"
    }
    render()
    {
        return <div>
            <h2>Demo Component</h2>
            <b>{this.props.data}</b>
            <br/>
            <button onClick={()=>this.props.fun('Vikas Parmar')}>Change</button>
        </div>
    }
}
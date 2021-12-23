import React from 'react'
import MyContext from './MyContext'

export class Third extends React.Component
{
    static contextType = MyContext
    render()
    {
        return <div>
            <h2>Third Component : {this.context.title} , {this.context.num}</h2>
        </div>
    }
}

export class Second extends React.Component
{
    render()
    {
        return <div>
            <h2>Second Component</h2>
            <Third/>
        </div>
    }
}

export class First extends React.Component
{
    render()
    {
        return <div>
            <h2>First Component</h2>
            <Second/>
        </div>
    }
}
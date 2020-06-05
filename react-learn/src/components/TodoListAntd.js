import React from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'

class TodoListAntd extends React.Component {
    state = {
        inputValue: '',
        liList: []
    }
    handleInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            liList: [...this.state.liList, this.state.inputValue]
        })
    }
    render() {
        return <div>
            <Input value={this.state.inputValue} onChange={this.handleInput}></Input>
            <Button type='primary' onClick={this.handleClick}>提交</Button>
            <ul>{
                this.state.liList.map((item, key) => {
                    return <li key={key}>{item}</li>
                })
            }</ul>
        </div>
    }
}
export default TodoListAntd;
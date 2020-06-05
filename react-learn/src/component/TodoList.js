import React from 'react'

class TodoList extends React.Component {
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
            <input value={this.state.inputValue} onChange={this.handleInput}></input>
            <button onClick={this.handleClick}>提交</button>
            <ul>{
                this.state.liList.map((item, key) => {
                    return <li key={key}>{item}</li>
                })
            }</ul>
        </div>
    }
}
export default TodoList;
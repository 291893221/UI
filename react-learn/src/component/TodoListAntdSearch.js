import React from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'

class TodoListAntdSearch extends React.Component {
    state = {
        liList: []
    }
    handleSearch = (v) => {
        this.setState({
            liList: [...this.state.liList, v]
        })
    }
    render() {
        const Search = Input.Search;
        return <div>
            <Search enterButton='提交' onSearch={this.handleSearch}></Search>
            <ul>{
                this.state.liList.map((item, key) => {
                    return <li key={key}>{item}</li>
                })
            }</ul>
        </div>
    }
}
export default TodoListAntdSearch;
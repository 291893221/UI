import React from 'react'
import { Input, Button, Select } from 'antd'
import 'antd/dist/antd.css'

class TodoListAntdSearchSelect extends React.Component {
    state = {
        liList: []
    }
    handleSearch = (v) => {
        this.setState({
            liList: [...this.state.liList, v]
        })
    }
    render() {
        const { Search } = Input;
        const { Option } = Select;
        return <div>
            <Search enterButton='提交' onSearch={this.handleSearch}></Search>
            <Select style={{ width: 900 }}>{
                this.state.liList.map((item, key) => {
                    return <Option key={key}>{item}</Option>
                })
            }</Select>
        </div>
    }
}
export default TodoListAntdSearchSelect;
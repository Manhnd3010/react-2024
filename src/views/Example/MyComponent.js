import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'React',
        channel: 'Học'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            <>
                <div>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div>
                    Mục tiêu: {this.state.channel} thành thạo {this.state.name}
                </div>
            </>
        )
    }

}

export default MyComponent;
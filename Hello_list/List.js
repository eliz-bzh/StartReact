import React from 'react';

class List extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div class = "list">
                <h1>Shopping list</h1>
                <ul>
                    <li>Lemon</li>
                    <li>Milk</li>
                    <li>Bread</li>
                </ul>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default List;
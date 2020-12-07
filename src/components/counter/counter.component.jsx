import React from 'react';

export class Counter extends React.Component {
    constructor() {
        console.log( 'Counter.constructor()' );

        super();
        
        // bind methods
        this.increment = this.increment.bind( this );

        // component state
        this.state = {
            count: 0,
        };
    }

    // increment the `state.count` value
    increment() {
        console.log( 'Counter.increment()' );

        this.setState( {
            count: this.state.count + 1,
        } );
    }

    render() {
        console.log( 'Counter.render()' );

        return (
            <div className='ui-counter'>
                <p className='ui-counter__title'>Counter Widget</p>

                <div className='ui-counter__body'>
                    <p className='ui-counter__body__name'>{ this.props.name }</p>
                    <p className='ui-counter__body__count'>{ this.state.count }</p>
                    <button
                        className='ui-counter__body__button'
                        onClick={ () => this.increment() }
                        disabled={ this.state.count === 3 }
                    >Increment</button>
                </div>
            </div>
        );
    }
}
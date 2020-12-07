import React from 'react';
import axios from 'axios';

export class Post extends React.Component {
    constructor( props ) {
        console.log( 'Post.constructor()' );

        super();

        // component state
        if( props.staticContext ) {
            this.state = {
                isLoading: false,
                title: props.staticContext.title,
                description: props.staticContext.body,
            };
        } else if( window.initial_state ) {
            this.state = {
                isLoading: false,
                title: window.initial_state.title,
                description: window.initial_state.body,
            };
        } else {
            this.state = {
                isLoading: true,
                title: '',
                description: '',
            };
        }
    }

    // fetch data
    static fetchData() {
        console.log( 'Post.fetchData()' );

       return axios.get( 'https://jsonplaceholder.typicode.com/posts/3' ).then( response => {
            return {
                title: response.data.title,
                body: response.data.body,
            };
        } );
    }

    // when component mounts, fetch data
    componentDidMount() {
        if( this.state.isLoading ) {
            console.log( 'Post.componentDidMount()' );

            Post.fetchData().then( data => {
                this.setState( {
                    isLoading: false,
                    title: data.title,
                    description: data.body,
                } );
            } );
        }
    }

    render() {
        console.log( 'Post.render()' );

        return (
            <div className='ui-post'>
                <p className='ui-post__title'>Post Widget</p>

                {
                    this.state.isLoading ? 'loading...' : (
                        <div className='ui-post__body'>
                            <p className='ui-post__body__title'>{ this.state.title }</p>
                            <p className='ui-post__body__description'>{ this.state.description }</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
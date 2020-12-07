const { Counter } = require( '../src/components/counter' );
const { Post } = require( '../src/components/post' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Counter,
    },
    {
        path: '/post',
        exact: true,
        component: Post,
    }
];
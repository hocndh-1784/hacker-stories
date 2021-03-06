import './App.css';
import React from "react";


const App = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];
    const handleSearch = event => {
        console.log(event.target.value)
    }
    return (
        <div>
            <Greeting/>

            <hr/>
            <Search onSearch={handleSearch}/>
            <List list={stories}/>
        </div>
    )
}

const Greeting = () => <h1>My hacker stories</h1>;

const Search = props => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const handleChange = event => {
        setSearchTerm(event.target.value)
        props.onSearch(event)
    }

    return (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange}/>
        <p>Searching for <strong>{searchTerm.toUpperCase()}</strong></p>
    </div>)
}

const List = props =>
    props.list.map(item => (
        <div key={item.objectID}>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </div>
    ));


export default App;

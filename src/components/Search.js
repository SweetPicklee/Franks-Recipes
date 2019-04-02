import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'


const Search = props => (
    <Form className="justify-content-center mt-3" inline onSubmit={props.getRecipe}>
        <FormControl className="mr-1" placeholder="Search..." type="text" name="recipeName" style={{ width: '19em' }}/>
        <Button type="submit">Search</Button>
    </Form>     
);

export default Search;

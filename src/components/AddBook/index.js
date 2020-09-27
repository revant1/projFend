import React,{useState,useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import useForm from './useForm';

const AddBook = () => {
const submit = () => {
        console.log('succesfully...');
}

const {onChangeHandler,onSubmitHandler,formData,errors} = useForm(submit);

    
    return(
    <Form onChange={onChangeHandler} onSubmit={onSubmitHandler} noValidate>
     <FormGroup>
        <Label htmlFor="title" value="Title" name="title">Title: </Label>
         <Input id="title" type="text" name="title" placeholder="Book Title" value={formData.title || ''}/>
            {errors.title && <p style={{color:"red"}}>{errors.title}</p>} 
         <Label htmlFor="author" value="author" name="author">author: </Label>
         <Input id="author" type="text" name="author" placeholder="author... " value={formData.author || ''}/>
         {errors.author && <p style={{color:"red"}}>{errors.author}</p>} 
         <Label htmlFor="pages" value="pages" name="pages">pages: </Label>
         <Input id="pages" type="number" name="pages" placeholder="no of pages... " value={formData.pages || ''}/>
         {errors.pages && <p style={{color:"red"}}>{errors.pages}</p>} 
         <Label htmlFor="available" value="available" name="available">available copies: </Label>
         <Input id="available" type="number" name="available" placeholder="available... " value={formData.available || ''}/>
         {errors.available && <p style={{color:"red"}}>{errors.available}</p>} 
         <Label htmlFor="publisherName" value="publisherName" name="publisherName">publisherName: </Label>
         <Input id="publisherName" type="text" name="publisherName" placeholder="publisherName... " value={formData.publisherName || ''}/>
         {errors.publisherName && <p style={{color:"red"}}>{errors.publisherName}</p>} 
         <Label htmlFor="author" value="publishDate" name="publishDate">author: </Label>
         <Input id="publishDate" type="date" name="publishDate" placeholder="publishDate... " value={formData.publishDate || ''}/>
         {errors.publishDate && <p style={{color:"red"}}>{errors.publishDate}</p>} 
    </FormGroup>

    <Button>Submit</Button>
    {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
    </Form>
)};

export default AddBook;

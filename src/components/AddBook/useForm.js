import {useEffect, useState} from 'react';
import validate from './formValidate';
import axios from 'axios';

const useForm = (cb) => {
    const [formData,setFormData] = useState({});
    const [errors,setErrors] = useState({});
    
    useEffect(() => {
            console.log(errors)
            
        const url = "http://localhost:3333/api/v1/addBook"
        if(Object.keys(errors).length === 0) {

            const headers = {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": '*'
            };
            axios.post(url,formData,headers).then((res) => {
                console.log(res);
                cb();
            }).catch((error) => {
                     console.log(error ,' ERRR....axios')   
            })
          
        }
        
    },[errors,formData])

    const onChangeHandler = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setErrors(validate(formData));
    }

    return {
        onChangeHandler,
        onSubmitHandler,
        formData,
        errors,
    }
};

export default useForm;
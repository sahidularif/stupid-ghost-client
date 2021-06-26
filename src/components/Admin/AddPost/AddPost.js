import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const AddPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({});

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newService = { ...info };
        newService[e.target.name] = e.target.value;
        setInfo(newService);
    };
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        console.log(newFile)
        setFile(newFile);
    };
    console.log(info)
    console.log(file)
    const onSubmit = () => {
        const formData = new FormData();
        // console.log(serviceInfo);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('author', info.author);

        fetch('https://infinite-meadow-06277.herokuapp.com/addGhostStory', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // handleServiceUpdate();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h5>Info:{info?.title + ' ' + info?.description}</h5>
            <form onSubmit={handleSubmit(onSubmit)} className='event-form'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label for='title'>Author name</label>
                            <input
                                {...register("author")}
                                name="author"
                                onBlur={handleBlur}
                                className='form-control'
                                name='author'
                                placeholder='Author name'
                                type='text'
                            />
                            {errors.author && <p>{errors.author.message}</p>}
                        </div>
                        <div className='form-group'>
                            <label for='title'>Service Title</label>
                            <input
                                {...register("title")}
                                name="title"
                                onBlur={handleBlur}
                                className='form-control'
                                name='title'
                                placeholder='Post title'
                                type='text'
                            />
                            {errors.title && <p>{errors.title.message}</p>}
                        </div>
                        <div className='form-group'>
                            <label for='description'>Description</label>
                            <textarea
                                {...register("description")}
                                name="description"
                                onBlur={handleBlur}
                                className='form-control'
                                name='description'
                                placeholder='Post title'
                                rows='5'
                            ></textarea>

                            {errors.description && <p>{errors.description.message}</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='imageUpload'>Cover image</label>
                        <div class='form-group'>
                            <label
                                htmlFor='imageUpload'
                                className='file-upload btn btn-outline-success btn-block w-50'
                            >
                                <CloudUploadIcon style={{ fontSize: 20 }} />
                                Upload Image
                                <input
                                   onChange={handleFileChange}
                                   id='imageUpload'
                                   name='imageUpload'
                                   type='file'
                                   
                                />
                                {errors.imageUpload && <p>{errors.imageUpload.message}</p>}
                            </label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div class='text-right'>
                            <button type='submit' className='btn btn-success'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
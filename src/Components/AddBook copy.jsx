import axios from 'axios'
import React, { useState } from 'react'

const AddBook = () => {

    // const [formData, setFormData] = useState({
    //     title: "",
    //     author: "",
    //     year: 0
    // })

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")

    const handleSubmit = async(e) => {
            e.preventDefault();

            try{
                const responce = await axios.post(`${REACT_APP_API}/api/books`,
                    {title, author, year}
                )
                console.log(responce)
            }
            catch(err){
                console.log(err)
            }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Title
                    </label>
                    <input
                        type='text'
                        name="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}

                    />
                </div>
                <div>
                    <label>
                        Author
                    </label>
                    <input
                        type='text'
                        name="Author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}

                    />
                </div>
                <div>
                    <label>
                        Year
                    </label>
                    <input
                        type='text'
                        name="Year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}

                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddBook

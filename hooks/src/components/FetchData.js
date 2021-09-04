import React, { useEffect , useState} from 'react'
import axios from 'axios'

function FetchData() {
    const [post,setPost] = useState({})
    const[id, setId] = useState(1)
    const[idBtnClick, setIdBtnClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtnClick} `)
            .then(res => {
                setPost(res.data)
                console.log(res)
            })
            .catch(err => {console.log(err)})
    }, [idBtnClick])

    const handleClick = () => {
        setIdBtnClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <h2>Data from API  <br/> 
             <button type="button" onClick={handleClick}>Show New Post</button>
            </h2>
            <h3>{post.title}
                {/* {posts.map(post => <li key={post.id}>{post.title}</li>)} */}
            </h3>
        </div>
    )
}

export default FetchData

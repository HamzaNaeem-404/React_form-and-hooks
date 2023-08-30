import { useState } from "react"

// import "./post.css"
const Form = (props) => {
    const [formData , setData] = useState({
        name: "Ali", 
    });
   
    const handleDisplay = () => {
        console.log(formData)
    }
    return (
        <>
            <form>
                <label>Name</label>
                <input onChange={(e)=>{setData({...formData , name: e.target.value})}}  type="text" value={formData.name}></input>
                <br/>
                <label>Email</label>
                <input onChange={(e)=>{setData({...formData , email: e.target.value})}} type="email"></input>
                <br/>
                <label>Password</label>
                <input onChange={(e)=>{setData({...formData , passowrd: e.target.value})}} type="password"></input>
                <br/>
            </form>

            <button onClick={handleDisplay}>Display</button>
        </>
    )
}

export default Form
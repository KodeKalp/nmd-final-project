import axios from 'axios';
import React, { useState } from 'react'

const UrlShort = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  
  const handleSubmit = async() =>{
    console.log("Hellos");

    try {
        const res = await axios.post("http://localhost:3111/api/url",{
            "originalUrl": url
        })
        console.log(res.data);
        setShortUrl(res.data.randomStr)
        
    } catch (error) {
        
    }
    
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px' }}>
      
      <input 
        type='text'
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        placeholder='https://example.com/your-long-url'
        style={{
          width: '300px',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '14px'
        }}
      />

      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
        onClick={handleSubmit}
      >
        Short url
      </button>

        {shortUrl && <a 
        href={`http://localhost:3111/myshorturl/${shortUrl}`}>
            
            http://localhost:3111/myshorturl/{shortUrl}</a>}
    </div>
  )
}

export default UrlShort

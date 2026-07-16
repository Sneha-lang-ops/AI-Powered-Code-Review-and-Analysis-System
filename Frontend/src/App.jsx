import { useState , useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setcode] = useState(`function sum() {
    return 1 + 1
    }`)

   const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode(){

    try{
    const response = await axios.post(
      "http://localhost:3000/ai/get-review", 
      { code }
    );

    console.log("Response:", response);
console.log("Data:", response.data);

    setReview(response.data.review);

   }
   catch (error) {
  console.error(error);

  setReview(`# Error

${error.response?.data?.message || error.message}`);
}
}

  return (
    <>
    <main>
      <div className="left">
      <div className="code">
        
        <textarea
  value={code}
  onChange={(e) => setcode(e.target.value)}
  style={{
    width: "100%",
    height: "100%",
    background: "#1e1e1e",
    color: "white",
  }}
/>

      </div>
      <div 
       onClick={reviewCode}
      className="review">Review</div>
      </div>
      <div className="right">
      <Markdown
      rehypePlugins={[ rehypeHighlight ]}
      >{review}</Markdown>
      </div>

    </main>
    </>
  )
}

function sum(){
  return 1 + 1
}

export default App

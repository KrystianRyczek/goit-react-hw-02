import { useState } from "react"
import { Description } from './Description'
import { Option } from './Option'
import { Feedback } from './Feedback'
import { Notification } from './Notification'

const opinionTags = ["good", "neutral", "bad"]

const feedbacks ={
                  good: 0,
                  neutral:0,
                  bad:0,
                }

opinionTags.map((opinionTag)=>{
  const savedClicks = window.localStorage.getItem(opinionTag);
        if (savedClicks !== null) {
          return feedbacks[opinionTag] = parseInt(savedClicks);
        }
        window.localStorage.setItem(opinionTag, 0)
})

const localStorageUpdate = (opinionTags, clicks)=>{
  opinionTags.map((opinionTag)=>{
    window.localStorage.setItem(opinionTag, clicks[opinionTag])
  })
}
function App() {
  
  const [clicks, setClicks] = useState(feedbacks);
  
  const Feedbacks= ()=> {
    for (const key in clicks) {
    if(clicks[key]) return true
  }};

const handleClick = (name) => {
  event.preventDefault()
  if (name=="reset"){
    setClicks({
                good: 0,
                neutral:0,
                bad:0,
              })
    localStorageUpdate(opinionTags, clicks)
    return
  }
  setClicks({...clicks, [name] : clicks[name] + 1})
  localStorageUpdate(opinionTags, clicks)
};

  return (
    <>
      <Description/>
      <Option
      handleClick={handleClick}
      opinionTags={opinionTags}
      enableReset={Feedbacks()}/>
      {Feedbacks() 
      ? <Feedback
      statValue={clicks}
      /> 
      : <Notification/>}
    </>
  )
}

export default App

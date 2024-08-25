import { useState } from "react"
import { Description } from './Description'
import { Option } from './Option'
import { Feedback } from './Feedback'
import { Notification } from './Notification'




function App() {

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
})

const Feedbacks= ()=> {
  for (const key in feedbacks) {
    if(feedbacks[key]) return true
}
};

const [clicks, setClicks] = useState(0);



const handleClick = (event) => {
  event.preventDefault()
  setClicks(clicks+1)
  if (event.target.id=="reset"){
    opinionTags.map((opinionTag)=>{window.localStorage.setItem(opinionTag, 0)})
    return
  }
  opinionTags.map((opinionTag)=>{
    if (event.target.id==opinionTag){
      const savedClicks = window.localStorage.getItem(opinionTag);
      if (savedClicks !== null) {
        return  window.localStorage.setItem(opinionTag, parseInt(savedClicks) + 1)
      }
      return window.localStorage.setItem(opinionTag, 1)
    }
  })
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
      statValue={feedbacks}
      /> 
      : <Notification/>}
    </>
  )
}

export default App

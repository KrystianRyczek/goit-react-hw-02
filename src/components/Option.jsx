
const Btn = ({name, handleClick})=>{
    return  (
        <button onClick={(event)=>handleClick({event, name})} id={name.toLowerCase()}>{name}</button>
      );
}

const BtnReset = ({name, handleClick})=>{
    return  (
        <button onClick={(event)=>handleClick({event, name})} id="reset">Reset</button>
      );
}


export const Option =({opinionTags, enableReset, handleClick})=>{
                          return  (
                                      <form>
                                            {opinionTags.map((opinionTag)=>{
                                              return <Btn
                                                      key={opinionTag}
                                                      name={opinionTag}
                                                      handleClick={handleClick}
                                                      />})}
                                            {enableReset && <BtnReset
                                            name="reset"
                                            handleClick={handleClick}
                                            />}
                                      </form>
                                  );
} 




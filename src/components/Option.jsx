
const Btn = ({name, handleClick})=>{
    return  (
        <button onClick={handleClick} id={name.toLowerCase()}>{name}</button>
      );
}

const BtnReset = ({handleClick})=>{
    return  (
        <button onClick={handleClick} id="reset">Reset</button>
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
                                                      //varnames={btnNames}
                                                      />})}
                                            {enableReset && <BtnReset
                                            handleClick={handleClick}
                                            />}
                                      </form>
                                  );
} 




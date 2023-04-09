function testMiddle({dispatch,getState}) {
  return (next) => {
    return (action) => {
        console.log('PREV STATE',getState())
         next(action)
        console.log('NEXT STATE',getState())
        console.log("------------------------")
    }
  }
}

export default testMiddle;
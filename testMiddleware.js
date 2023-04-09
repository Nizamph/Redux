function testMiddle({dispatch,getState}) {
  return (next) => {
    return (action) => {
        console.log(getState())
         next(action)
        console.log(getState())
        console.log("------------------------")
    }
  }
}

export default testMiddle;
function testMiddle(store) {
  return (next) => {
    return (action) => {
         console.log("hello",action)
         next(action)
    }
  }
}

export default testMiddle;
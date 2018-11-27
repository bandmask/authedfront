const getPlugins = store => {
  store.subscribe(mutation => {
    console.log(`%cmutation: ${mutation.type}`, 'color: green;', mutation.payload)
  })

  store.subscribeAction(action => {
    console.log(`%caction: ${action.type}`, 'color: blue;', action.payload)
  })
}

export default getPlugins

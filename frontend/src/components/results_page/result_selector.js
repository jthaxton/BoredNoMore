export const selectRestaurant = (restaurantsArray) => {
  if (Object.keys(restaurantsArray).length === 0) {return {}}

  const selectRestaurant = restaurantsArray[Math.floor(Math.random() * restaurantsArray.length)]

  return ({
    'name': selectRestaurant.name,
    'url': selectRestaurant.url,
    'address': selectRestaurant.location.display_address.join(' '),
    'image_url': selectRestaurant.image_url
  })
}

export const selectEvent = (eventsArray) => {
  if (Object.keys(eventsArray).length === 0) {
    return {}
  }

  const selectEvent = eventsArray[Math.floor(Math.random() * eventsArray.length)]

  const selectEventAddress = selectEvent._embedded.venues[0]
  
  const selectEventAddressString = 
    selectEventAddress.name + ' ' +
    Object.values(selectEventAddress.address).join(' ') + ' ' +
    selectEventAddress.city.name + ' ' +
    selectEventAddress.state.stateCode

  return ({
    'name': selectEvent.name,
    'url': selectEvent.url,
    'address': selectEventAddressString,
    'image_url': selectEvent.images[0].url
  })
}
export const getStoreList = () => (
  fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
    .then((response) => (
      response.json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
  )

export const fetchGamesByTitle = (gameTitle) => (
  fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=60`)
    .then((response) => (
      response.json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
        ))
  )

export const fetchGameById = (gameId) => (
  fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`)
    .then((response) => (
      response.json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
        ))
  )

export async function fetchSpaceships(){
  const response = await fetch(`${import.meta.env.VITE_API_URL}/starships`)
  if (response.status === 200) {
    const json = await response.json()
    const results = await json.results

    let spaceships = []

    for (let index = 0; index < results.length; index++) {
      const element = results[index];
      const spaceship = await fetchSpaceship(element.url)
      spaceships.push(spaceship)
      
    }
    return spaceships
  }
  else {
    return []
  }
}

export async function fetchSpaceship(url: string){
  console.log('Hi')
  const response = await fetch(url)
  if (response.status === 200) {
    const json = await response.json()
    const result = await json.result.properties
    return result
  }
  else {
    return []
  }
}
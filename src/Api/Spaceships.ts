export async function fetchSpaceships(){
  const results = await fetchAllSpaceshipsPages(`${import.meta.env.VITE_API_URL}/starships`)
  let spaceships = []

  for (let index = 0; index < results.length; index++) {
    const element = results[index];
    const spaceship = await fetchSpaceship(element.url)
    spaceships.push(spaceship)
    
  }
  return spaceships
}

export async function fetchSpaceship(url: string){
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

export async function fetchAllSpaceshipsPages(url: string): Promise<any[]>{
  const response = await fetch(url)
  let results: any[] = []

  if (response.status === 200) {
    const json = await response.json()
    results.push(...await json.results)

    if (json.next != null) {
      return [...results, ... await fetchAllSpaceshipsPages(json.next)]
    }
    
    return results
  }
  else {
    return results
  }
}
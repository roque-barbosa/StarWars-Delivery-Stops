export function stopsCalc(mgtl:number, consumables: string, distance: number){
  const consumption = consumableToHours(consumables)
  const travelTimeHours = distance / mgtl
  const stops = travelTimeHours / consumption
  if (isNaN(stops)) {
    return 'Unknow'
  }
  return Math.trunc(stops)
  
}

export function consumableToHours(consumables: string) {
  let [time, period]: any[] = consumables.split(" ")

  time = Number(time)

  let total_hours = 0

  if (period == 'years' || period == 'year') {
    total_hours = 365 * 24 * time
  } else if (period == 'months' || period == 'month') {
    total_hours = 30 * 24 * time
  }
  else if (period == 'weeks' || period == 'week') {
    total_hours = 7 * 24 * time
  }
  else if (period == 'days' || period == 'day') {
    total_hours = 1 * 24 * time
  }
  else if (period == 'hours' || period == 'hour') {
    total_hours = 1 * 1 * time
  }
  return total_hours
}

export async function calcAllStops(spaceships: any[], distance:number){
  let results: any[] = []

  for (let index = 0; index < spaceships.length; index++) {
    const element = spaceships[index];
    results.push({
      name: element.name,
      stops: stopsCalc(element.MGLT, element.consumables, distance)
    })
  }
  return results
}

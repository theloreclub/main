export async function parseItinerary(text: string){
  // TODO: implement real Claude API call using process.env.CLAUDE_API_KEY
  // For now, attempt a very small heuristic parse and return a best-effort structure
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean)
  const first = lines[0] || ''
  const destination = (first.match(/in\s+([A-Za-z ,]+)/i) || [])[1] || null

  // naive day detection
  const day_plan: any[] = []
  let currentDay: any = null
  for(const line of lines){
    const m = line.match(/^day\s*(\d+)[:\-\.]?/i)
    if(m){
      if(currentDay) day_plan.push(currentDay)
      currentDay = { day: Number(m[1]), title: line, items: [] }
      continue
    }
    if(currentDay){
      const it = { time: null, name: line, type: null, address: null, notes: null }
      currentDay.items.push(it)
    }
  }
  if(currentDay) day_plan.push(currentDay)

  return {
    category: null,
    destination,
    duration_days: day_plan.length || null,
    group_size: null,
    budget_tier: null,
    vibe: [],
    day_plan,
    detected_addons: {}
  }
}

export default parseItinerary

export type ListingCreateBody = {
  title: string
  category: string
  destination?: string
  duration_days?: number
  group_size?: number
  base_price: number
  description?: string
  hero_image_path?: string
  vibe_tags?: string[]
}

// Type definitions for blog-related data

export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  excerpt?: string
  createdAt: string
  author?: {
    name: string
  }
  content: {
    html: string
  }
}
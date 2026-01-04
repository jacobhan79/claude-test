// GraphQL queries for blog posts

export const GET_BLOG_POSTS = `
  query Posts {
    posts {
      id
      title
      slug
      date
      excerpt
      createdAt
      author {
        name
      }
      content {
        html
      }
    }
  }
`

export const GET_SINGLE_POST = `
  query GetSinglePost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      date
      excerpt
      createdAt
      author {
        name
      }
      content {
        html
      }
    }
  }
`
export interface Project {
  name: string
  description: string
  image: string
  link: string | null
}

export const makeProject = (
  name: string,
  description: string,
  image: string,
  link?: string
) => {
  const p: Project = {
    name: name,
    description: description,
    image: image,
    link: link ? link : null
  }
  return p
}

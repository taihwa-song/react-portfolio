export interface Contact {
  text: string
  email: string
  linkedin: string | null
  github: string | null
}

export const makeContact = (
  text: string,
  email: string,
  linkedin?: string,
  github?: string
) => {
  const c: Contact = {
    text: text,
    email: email,
    linkedin: linkedin ? linkedin : null,
    github: github ? github : null
  }
  return c
}

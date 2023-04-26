export interface About {
  key: string
  messages: string[]
}
export interface Profile {
  name: string
  desc: string
  pastRoles: string[]
  futureRoles: string[]
  linkedin: string
  image: string
  abouts: About[]
}

export const makeProfile = (
  name: string,
  desc: string,
  pastRoles: string[],
  futureRoles: string[],
  linkedin: string,
  image: string,
  abouts: About[]
) => {
  const p: Profile = {
    name: name,
    desc: desc,
    pastRoles: pastRoles,
    futureRoles: futureRoles,
    linkedin: linkedin,
    image: image,
    abouts: abouts
  }
  return p
}

export const makeAbout = (key: string, messages: string[]) => {
  const a: About = {
    key: key,
    messages: messages
  }
  return a
}

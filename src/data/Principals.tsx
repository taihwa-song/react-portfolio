export interface Principal {
  title: string
  content: string
}

export interface Principals {
  header: string
  desc: string
  principals: Principal[]
}

export const makePrincipals = (header: string, desc: string, principals: Principal[]) => {
  const p: Principals = {
    header: header,
    desc: desc,
    principals: principals
  }
  return p
}

export const makePrincipal = (title: string, content: string) => {
  const p: Principal = {
    title: title,
    content: content
  }
  return p
}

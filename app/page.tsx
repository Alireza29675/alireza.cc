const text = `
{
  "title": "Alireza Sheikholmolouki | Personal Website",
  "description": "Hmm... do I really need a personal website?",
  "social": {
    "github": "https://github.com/Alireza29675",
    "linkedin": "https://www.linkedin.com/in/alireza-sheikholmolouki/",
    "twitter": "https://twitter.com/Alireza29675",
    "instagram": "https://www.instagram.com/everlookneversee/",
  }
}
`

export default async function Home() {
  const replaceLinks = (text: string) => {
    const links = text.match(/https?:\/\/[^\s]+/g)
    if (!links) return text
    links.forEach(link => {
      text = text.replace(link, `<a href="${link}" target="_blank">${link}</a>`)
    })
    return text
  }

  return (
    <pre dangerouslySetInnerHTML={{ __html: replaceLinks(text) }} />
  )
}
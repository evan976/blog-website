import { marked, Renderer } from 'marked'
import hljs from './highlight'

marked.setOptions({
  renderer: new Renderer(),
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'javascript'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

const renderer = {
  heading(text: any, level: any, raw: string) {
    const escapedText = raw.toLowerCase().replace(/[^a-zA-Z0-9\u4E00-\u9FA5]+/g, '-')
    return `
      <h${level} id=${escapedText} alt=${escapedText} title=${escapedText}>${text}</h${level}>
    `
  },
  paragrap(text: any) {
    return `<p>${text}</p>`
  },
}

marked.use({ renderer })

const markdownToHTML = (content: string) => {
  if (typeof content !== 'string') {
    return ''
  }
  return marked(content)
}

export default markdownToHTML

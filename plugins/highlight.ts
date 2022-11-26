import type { LanguageFn } from 'highlight.js'
import hljs from 'highlight.js/lib/core'

import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import css from 'highlight.js/lib/languages/css'
import dart from 'highlight.js/lib/languages/dart'
import go from 'highlight.js/lib/languages/go'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import less from 'highlight.js/lib/languages/less'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
import stylus from 'highlight.js/lib/languages/stylus'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'

const languages: Record<string, LanguageFn> = {
  java,
  c,
  cpp,
  python,
  javascript,
  typescript,
  dart,
  go,
  xml,
  css,
  less,
  scss,
  stylus,
}

Object.keys(languages).forEach(name => hljs.registerLanguage(name, languages[name]))

export default hljs

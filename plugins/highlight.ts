import hljs from 'highlight.js/lib/core'
import type { LanguageFn } from 'highlight.js'

import java from 'highlight.js/lib/languages/java'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import dart from 'highlight.js/lib/languages/dart'
import go from 'highlight.js/lib/languages/go'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import less from 'highlight.js/lib/languages/less'
import scss from 'highlight.js/lib/languages/scss'
import stylus from 'highlight.js/lib/languages/stylus'

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

Object.keys(languages).forEach((name) => hljs.registerLanguage(name, languages[name]))

export default hljs

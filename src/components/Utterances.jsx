import CONFIG from 'morethan-log.config'
import { useEffect } from 'react'
const Utterances = ({ issueTerm }) => {
  useEffect(() => {
    const theme = 'github-light'
    // 'github-dark'
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', theme)
    Object.keys(CONFIG.utterances.config).forEach((key) => {
      script.setAttribute(key, CONFIG.utterances.config[key])
    })
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  })
  return (
    <>
      <div id="comments" className="md:-ml-16">
        <div className="utterances-frame"></div>
      </div>
    </>
  )
}

export default Utterances

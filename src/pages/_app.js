import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@styles/globals.css'
import '@styles/notion.css'
import CONFIG from 'morethan-log.config'
import dynamic from 'next/dynamic'
import { LocaleProvider } from '@libs/locale'
import Scripts from '@components/Scripts'

const Gtag = dynamic(() => import('@components/Gtag'), { ssr: false })
const Theme = dynamic(() => import('@components/Theme'), { ssr: false })

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  // theme가 dark 이거나, 로컬스토리지에 테마가 없으면서 다크테마로 설정되어있는경우

  return (
    <>
      <Scripts />
      <LocaleProvider>
        <>
          <Theme />
          {CONFIG.isProd && CONFIG?.googleAnalytics?.enable === true && <Gtag />}
          {getLayout(<Component {...pageProps} />)}
        </>
      </LocaleProvider>
    </>
  )
}

export default MyApp

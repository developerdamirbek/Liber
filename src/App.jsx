import { Audiobooks } from './components/audiobooks/audiobooks'
import { Banner } from './components/banner/banner'
import { Categories } from './components/categories'
import { Newbooks } from './components/newbooks'
import { Services } from './components/services/services'
import { MainLayout}  from './layout/main-layout'
function App() {

  return (
    <>
      <MainLayout>
        <Banner/>
        <Services/>
        <Categories/>
        <Newbooks/>
        <Audiobooks/>
      </MainLayout>
    </>
  )
}

export default App

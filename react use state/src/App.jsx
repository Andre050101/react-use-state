import { useState } from 'react'
import './index.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import ButtonListComponent from './components/ButtonListComponent.jsx'
import DescriptionComponent from './components/DescriptionComponent.jsx'
import languages from './languages.js'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <div>
      <HeaderComponent />
      <ButtonListComponent languages={languages} selectedLanguage={selectedLanguage} onSelectLanguage={setSelectedLanguage} />
      <DescriptionComponent language={selectedLanguage} />
    </div>
  )
}

export default App;

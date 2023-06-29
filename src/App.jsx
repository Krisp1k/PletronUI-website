import Background from "./Background"

import HeaderImg from "./assets/img.png"
import GithubImg from "./assets/github-mark-white.png"

import "./Anims.css"

function Prikazy() {
  const array = [
    {
      name: "klan",
      description: "Zobrazí aktuální členy daného klanu"
    },
    {
      name: "cr",
      description: "Zobrazí pozice černých rytířů na serveru a jejich artefakty"
    },
    {
      name: "pocitadlo",
      description: "Počítadlo, které vypočítá, v jaký čas se artefakt rozpadne na základě aktuálních procent."
    },
    {
      name: "purge",
      description: "Smaže poslední zprávy v kanálu"
    },
    {
      name: "mock",
      description: "To je tajné, ale použij to na svého kamaráda 🤫"
    },
    {
      name: "kittycannon",
      description: "Máš rád kočičky?"
    },
    {
      name: "kick",
      description: "Vyhodí hráče ze serveru"
    },
    {
      name: "ban",
      description: "ZaBANuje hráče na serveru, asi jako LP tebe v PH"
    },
  ]

  return (
    <div className="prikazy-container">
      {
        array.map((item, index) => {
          return (
            <div className="prikazy-item" key={index} style={{
              animation: `FadeFromLeft 0.5s ease-in-out backwards`,
              animationDelay: `${1 + index * 0.25}s`
            }}>
              <span className='prikaz'>/{item.name}</span>
              <span className='prikaz-desc'> - {item.description}</span>
            </div>
          )
        })
      }
    </div>
  )
}

function App() {

  return (
    
    <div className='allpage'>
      <Background />
      <div className="container">
        <header>
            <h1 style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `0.05s`
            }}>PletronUI</h1>
            <p style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `0.25s`
            }}>Váš každodenní pomocník pro hraní Pána Hradu integrovaný do Discordu.</p>
        </header>
        <main>
          <section>
            <div>
              <img src={HeaderImg} alt="Ukázka PletronUI bota" className='header-img' style={{
              animation: `ZoomIn 0.5s ease-in-out backwards`,
              animationDelay: `0.25s`
            }}/>
            </div>
          </section>
          <section>
            <h2 style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `0.75s`
            }}>Ukázka příkazů</h2>
            <p style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `0.85s`
            }}>(nejen pro obsah z Pána Hradu)</p>
            <Prikazy />
          </section>
          <section>
            <h2 style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `3s`
            }}>A jak si ho vlastně můžu užít?</h2>
            <p style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `3.1s`
            }}>Bohužel, BOT je momentálně ve fázi vývoje a je dostupný pouze pro uzavřenou skupinu lidí.</p>
            <p style={{
              animation: `FadeFromTop 0.5s ease-in-out backwards`,
              animationDelay: `3.2s`
            }}>Pokud máš zájem BOTa si vyzkoušet, napiš mi na Discord (@krisp1k) a třeba se domluvíme.</p>
          </section>
        </main>
        <footer> 
          <div style={{
            animation: `FadeFromTop 0.5s ease-in-out backwards`,
            animationDelay: `3.3s`
          }}>
            <p>Made by Krisp1k</p>
            <p>
              <a href="https://github.com/Krisp1k/PletronUI" className='icon-holder' target='blank'>
                <img src={GithubImg} alt="GitHub" className='icon' />
              </a>
            </p>
            <p>Autor BOTa nevlastní žádná práva ke scriptům ze hry Pán Hradu, který BOT využívá pro sběr dat. Majitelem těchto scriptů je autor Pána Hradu Zdeněk Pletka</p>
            <p>Stejně tak autor BOTa nevlastní žádná práva ke hře samotné.</p>
          </div>
        </footer>
      </div>
      
    </div>
  )
}

export default App

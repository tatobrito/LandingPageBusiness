import { Button } from "./components/Button"

function App() {
  return (
    <> 
    <div className="bg-dark-background">
      <h1 className="text-3xl font-graphik text-primary">Hello Word Vite + React!</h1>
      <Button>Primary Background</Button>
      <Button variant="secondary">Secondary Background</Button>
      <Button isBold>Blond Text Primary Background</Button>
      <Button isBold variant="secondary">Blond Text with Secondary Background</Button>
    </div>
    </>
  )
}

export default App

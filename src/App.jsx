import { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import ZodiacMenu from "./components/ZodiacMenu"
import MessagePage from "./components/MessagePage"

export default function App() {
  const [stage, setStage] = useState("loading")
  const [zodiac, setZodiac] = useState(null)
  const [page, setPage] = useState(1)

  if (stage === "loading")
    return <LoadingScreen onFinish={() => setStage("menu")} />

  if (stage === "menu")
    return <ZodiacMenu onSelect={(z) => {
      setZodiac(z)
      setPage(1)
      setStage("message")
    }} />

  return (
    <MessagePage
      zodiac={zodiac}
      page={page}
      onNext={() => setPage(page + 1)}
    />
  )
}

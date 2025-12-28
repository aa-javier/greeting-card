import { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import CategoryMenu from "./components/CategoryMenu"
import PinInput from "./components/PinInput"
import MessagePage from "./components/MessagePage"

export default function App() {
  const [stage, setStage] = useState("loading")
  const [category, setCategory] = useState(null)
  const [page, setPage] = useState(1)

  if (stage === "loading")
    return <LoadingScreen onFinish={() => setStage("menu")} />

  if (stage === "menu")
    return <CategoryMenu onSelect={(c) => {
      setCategory(c)
      setStage("pin")
    }} />

  if (stage === "pin")
    return (
      <PinInput
        category={category}
        onBack={() => setStage("menu")}
        onSuccess={() => {
          setPage(1)
          setStage("message")
        }}
      />
    )

  return (
    <MessagePage
      category={category}
      page={page}
      onNext={() => setPage(page + 1)}
    />
  )
}

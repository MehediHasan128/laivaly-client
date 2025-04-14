import { RouterProvider } from "react-router-dom"
import { router } from "./routes/UserRoutes"

function App() {

  return (
    <div className="select-none">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

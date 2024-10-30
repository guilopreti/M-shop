import { useEffect } from "react"
import { createContext, useState } from "react"

export const RegisterContext = createContext([])

export const RegisterProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("@MotorShop:users")) || { userList: [] }
  )

  useEffect(() => {
    if (users.userList) {
      localStorage.setItem("@MotorShop:users", JSON.stringify(users))
    }
  }, [users])

  return (
    <RegisterContext.Provider value={{ users, setUsers }}>
      {children}
    </RegisterContext.Provider>
  )
}

import { doLogout } from "@/app/actions"
const LogOut = () => {
  return (
    <div>
      <form action={doLogout}>
        <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">
          Logout
        </button>
      </form>
    </div>
  )
}

export default LogOut
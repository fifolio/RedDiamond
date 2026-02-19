import { Link, useLocation } from "react-router-dom"

export default function Navigation() {
  const { pathname } = useLocation()

  return (
    <nav className="border-b border-border bg-background mb-5">
      <div className="px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-lg text-foreground hover:text-blue-500 transition-colors">
          DataCenter
        </Link>
        <div className="flex gap-8">
          <Link
            to="/users"
            className={`text-sm font-medium transition-colors ${pathname === '/users'
              ? 'text-blue-500'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Users
          </Link>
          <Link
            to="/posts"
            className={`text-sm font-medium transition-colors ${pathname === '/posts'
              ? 'text-blue-500'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Posts
          </Link>
        </div>
      </div>
    </nav>
  )
}

import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function UsersCard() {
    return (
        <Link
            to="/users"
            className="group block p-8 border border-border rounded-lg hover:border-blue-500 transition-all hover:shadow-lg"
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-blue-500/10 transition-colors">
                    <Users className="h-6 w-6 text-blue-500" />
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Users</h2>
            <p className="text-muted-foreground mb-4">
                Browse and search through all users. View detailed information including contact details and company information.
            </p>
            <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:gap-3 transition-all">
                View Users
                <ArrowRight className="h-4 w-4" />
            </div>
        </Link>
    )
}
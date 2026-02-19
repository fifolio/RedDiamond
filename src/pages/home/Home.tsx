import { Header, PostsCard, UsersCard } from "@/components";

export default function Home() {
    return (
        <div className="mb-9">
            <div className="mx-auto max-w-7xl px-6 py-15">
                <Header />
            </div>
            <div className="flex flex-col md:flex-row gap-8 px-6">
                <div className="flex-1">
                    <UsersCard />
                </div>
                <div className="flex-1">
                    <PostsCard />
                </div>
            </div>
        </div>
    )
}
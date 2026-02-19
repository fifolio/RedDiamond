import { useLoading } from "@/stores";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export default function PostsData({ postsData }: { postsData: undefined | null | [] }) {

    const { isLoading } = useLoading();

    return isLoading ? (
        <div className="mt-30 mx-auto w-max">
            <SyncLoader size={10} color="skyblue" />
        </div>
    ) : (
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-8">
            {postsData === null ? (
                <p className="text-gray-500">Failed to load posts data.</p>
            ) : postsData?.length === 0 ? (
                <p className="text-gray-500">No posts found.</p>
            ) :
                postsData?.map((post: any, index: number) => (
                    <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md border border-border p-6 hover:shadow-lg transition-shadow">
                        {/* Post Header */}
                        <div className="mb-4 w-fit">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-block bg-primary/10 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                                    Post #{post.id}
                                </span>
                                <span className="text-muted-foreground text-sm">by User {post.userId}</span>
                            </div>
                            <Link to={`/posts/${post.id}`} className="hover:underline">
                                <h2 className="text-xl font-bold text-foreground leading-tight">{post.title}</h2>
                            </Link>
                        </div>

                        {/* Post Body */}
                        <div className="border-t border-border pt-4">
                            <p className="text-gray leading-relaxed whitespace-pre-wrap text-sm">
                                {post.body}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

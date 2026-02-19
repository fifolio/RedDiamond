import { GET_post } from "@/services";
import { useLoading } from "@/stores";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export default function PostDetails() {
    const { isLoading, setIsLoading } = useLoading();
    const { id } = useParams();
    const [postData, setPostData] = useState<any>(null);

    useEffect(() => {
        setIsLoading(true);
        GET_post(id).then((data) => {
            if (data) {
                document.title = `DataCenter | ${data.title}`;
                setPostData(data);
            }
        }).catch((error) => {
            console.error("Error fetching post details:", error);
            setPostData(null);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [id, setIsLoading]);

    return isLoading ? (
        <div className="mt-30 mx-auto w-max">
            <SyncLoader size={10} color="skyblue" />
        </div>
    ) : postData ? (
        <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border max-w-2xl mx-auto">
                <div className="mb-6 pb-4 border-b border-border w-full">
                    <Link to="/posts" className="text-sm text-blue-500 hover:underline mb-2 inline-block">← Back to posts</Link>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{postData.title}</h1>
                    <p className="text-sm text-muted-foreground">Post ID: {postData.id} • <Link to={`/users/${postData.userId}`} className="text-blue-500 hover:underline">Author {postData.userId}</Link></p>
                </div>

                <div className="prose max-w-none mt-6 text-foreground">
                    <p>{postData.body}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <p className="text-gray-500">Failed to load post details.</p>
        </div>
    );
}
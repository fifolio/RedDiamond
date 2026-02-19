import { PageHeader, PostsData } from "@/components"
import { Input } from "@/components/ui/input";
import { GET_posts } from "@/services";
import { useLoading, usePostsData } from "@/stores";
import { useEffect, useState } from "react";

export default function Posts() {
    document.title = "DataCenter | Posts"

    const { postsData, setPostsData } = usePostsData() as { postsData: undefined | null | Array<{ title: string }>; setPostsData: (data: any) => void };
    const { setIsLoading } = useLoading();
    const [search, setSearch] = useState<string>('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredPosts = postsData?.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));


    useEffect(() => {
        setIsLoading(true);
        GET_posts().then((data) => {
            if (data) {
                setPostsData(data);
            }
        }).catch((error) => {
            console.error("Error fetching posts data:", error);
            setPostsData(null);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [])

    return (
        <>
            <PageHeader title="Posts" subtitle="Browse all posts" />
            <Input onChange={handleChange} placeholder="Search by title..." className="max-w-125" />

            <PostsData postsData={filteredPosts as [] | null | undefined} />
        </>
    )
}
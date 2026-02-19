import { PageHeader, UsersData } from "@/components"
import { Input } from "@/components/ui/input"
import { GET_users } from "@/services"
import { useLoading, useUsersData } from "@/stores"
import { useEffect, useState } from "react"


export default function Users() {
    document.title = "DataCenter | Users"

    const { usersData, setUsersData } = useUsersData() as { usersData: undefined | null | Array<{ name: string }>; setUsersData: (data: any) => void };
    const { setIsLoading } = useLoading();
    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredUsers = usersData?.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        setIsLoading(true);
        GET_users().then((data) => {
            if (data) {
                setUsersData(data);
            }
        }).catch((error) => {
            console.error("Error fetching users data:", error);
            setUsersData(null);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <PageHeader title="Users" subtitle="View all users" />
            <Input onChange={handleChange} placeholder="Search by name..." className="max-w-125" />

            <UsersData usersData={filteredUsers as [] | null | undefined} />
        </div>
    )
}
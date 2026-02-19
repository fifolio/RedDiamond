import { GET_user } from "@/services";
import { useLoading } from "@/stores";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react";

export default function UserDetails() {
    const { isLoading, setIsLoading } = useLoading();
    const { id } = useParams();
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        setIsLoading(true);
        GET_user(id).then((data) => {
            if (data) {
                document.title = `DataCenter | ${data.name}`;
                setUserData(data);
            }
        }).catch((error) => {
            console.error("Error fetching user details:", error);
            setUserData(null);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [id, setIsLoading]);

    return isLoading ? (
        <div className="mt-30 mx-auto w-max">
            <SyncLoader size={10} color="skyblue" />
        </div>
    ) : userData ? (
        <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-8 border border-border max-w-2xl mx-auto">
                <div className="mb-8 pb-6 border-b border-border w-fit">
                    <Link to="/users" className="text-sm text-blue-500 hover:underline mb-2 inline-block">← Back to users</Link>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{userData.name}</h2>
                    <p className="text-blue-500 text-sm font-medium">@{userData.username}</p>
                </div>

                <div className="flex sm:flex-row flex-col space-y-8 sm:space-y-0 justify-between mb-8">
                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <a href={`mailto:${userData.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="break-all">{userData.email}</span>
                            </a>
                            <a href={`tel:${userData.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>{userData.phone}</span>
                            </a>
                            <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                                <Globe className="w-5 h-5 text-primary shrink-0" />
                                <span>{userData.website}</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Address</h3>
                        <div className="flex gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div className="text-foreground space-y-1">
                                <p className="font-medium">{userData.address?.street}</p>
                                <p>{userData.address?.suite}</p>
                                <p>{userData.address?.city}, {userData.address?.zipcode}</p>
                                <p className="text-xs text-muted-foreground mt-2">Coordinates: {userData.address?.geo?.lat}, {userData.address?.geo?.lng}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Building2 className="w-6 h-6 text-blue-500 shrink-0" />
                        <h3 className="text-lg font-bold text-foreground">Company</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Name</p>
                            <p className="text-foreground font-medium">{userData.company?.name}</p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Focus</p>
                            <p className="text-foreground text-sm leading-relaxed">{userData.company?.catchPhrase}</p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Mission</p>
                            <p className="text-foreground text-sm leading-relaxed">{userData.company?.bs}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <p className="text-gray-500">Failed to load user details.</p>
        </div>
    );
}
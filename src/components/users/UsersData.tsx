import { useLoading } from "@/stores";
import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export default function UsersData({ usersData }: { usersData: undefined | null | [] }) {

    const { isLoading } = useLoading();

    return isLoading ? (
        <div className="mt-30 mx-auto w-max">
            <SyncLoader size={10} color="skyblue" />
        </div>
    ) : (
        <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {usersData === null ? (
                <p className="text-gray-500">Failed to load users data.</p>
            ) : usersData?.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) :
                usersData?.map((user: any, index: number) => (
                    <div key={index}>

                        <div className="bg-card rounded-lg shadow-lg p-8 border border-border max-w-2xl mx-auto">
                            {/* Header */}
                            <div className="mb-8 pb-6 border-b border-border w-fit">
                                <Link to={user.id.toString()} className="hover:underline">
                                    <h2 className="text-2xl font-bold text-foreground mb-1">
                                        {user.name}
                                    </h2>
                                </Link>
                                <p className="text-blue-500 text-sm font-medium">@{user.username}</p>
                            </div>

                            <div className="flex sm:flex-row flex-col space-y-8 sm:space-y-0 justify-between mb-8">

                                {/* Contact Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-3">
                                        <a
                                            href={`mailto:${user.email}`}
                                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                                        >
                                            <Mail className="w-5 h-5 text-primary shrink-0" />
                                            <span className="break-all">{user.email}</span>
                                        </a>
                                        <a
                                            href={`tel:${user.phone}`}
                                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                                        >
                                            <Phone className="w-5 h-5 text-primary shrink-0" />
                                            <span>{user.phone}</span>
                                        </a>
                                        <a
                                            href={`https://${user.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                                        >
                                            <Globe className="w-5 h-5 text-primary shrink-0" />
                                            <span>{user.website}</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Address Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                                        Address
                                    </h3>
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div className="text-foreground space-y-1">
                                            <p className="font-medium">{user.address.street}</p>
                                            <p>{user.address.suite}</p>
                                            <p>
                                                {user.address.city}, {user.address.zipcode}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Company Section */}
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <Building2 className="w-6 h-6 text-blue-500 shrink-0" />
                                    <h3 className="text-lg font-bold text-foreground">Company</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                            Name
                                        </p>
                                        <p className="text-foreground font-medium">{user.company.name}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                            Focus
                                        </p>
                                        <p className="text-foreground text-sm leading-relaxed">
                                            {user.company.catchPhrase}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                            Mission
                                        </p>
                                        <p className="text-foreground text-sm leading-relaxed">
                                            {user.company.bs}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

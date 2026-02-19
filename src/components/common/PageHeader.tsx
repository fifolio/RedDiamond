export default function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="py-4 space-y-2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
    )
}
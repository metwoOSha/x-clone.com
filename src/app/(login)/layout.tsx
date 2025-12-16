export default function LoginLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <main>
            {children}
            {modal}
        </main>
    );
}

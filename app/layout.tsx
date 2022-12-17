import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const header = (
        <header>
          <Link href="/">
          <h1>Blog of wisdom</h1>
          </Link>
            <p>Welcome, chosen ones!</p>

        </header>
    )

    const footer = (
        <footer>
            <h3>Developed by Mr. Brainy</h3>
        </footer>
    )
  return (
    <html>
      <head></head>
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  );
}

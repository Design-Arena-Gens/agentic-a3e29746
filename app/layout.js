export const metadata = {
  title: 'Hi - Welcome',
  description: 'A modern web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

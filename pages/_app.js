import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
     <Component {...pageProps} />
     <style jsx global>{`
        body {
          background-image: url("/pages/Images/background3.jpg");
        }
     `}</style>
    </>
  )
}

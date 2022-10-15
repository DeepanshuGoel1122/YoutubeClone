import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetCustom = ({
   title = 'Youtube Clone',
   description = 'a project made with youtube api and react js',
}) => {
   return (
      <HelmetProvider>
      <Helmet>
         <title>{title}</title>
         <meta name='description' content={description} />
         <meta property='og:locale' content='en_US' />
         <meta property='og:type' content='website' />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={description} />
      </Helmet>
      </HelmetProvider>
   )
}

export default HelmetCustom

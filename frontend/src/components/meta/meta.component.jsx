import { Helmet } from 'react-helmet';


const Meta = ({content}) => {
  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopster - {content}</title>
      </Helmet>
  );
}

export default Meta;

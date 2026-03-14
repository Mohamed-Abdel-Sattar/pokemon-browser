import type { FC } from 'react';

import { Helmet } from 'react-helmet';

interface TwitterProps {
  type?: string;
  username?: string | null;
  title: string;
  desc: string;
  image?: string;
}
const Twitter: FC<TwitterProps> = ({ type = 'summary_large_image', username = null, title, desc }) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
);

export default Twitter;

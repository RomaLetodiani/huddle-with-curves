import { ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  title: string;
  desc: string;
};

const Rates = (props: Props) => {
  console.log(props);
  return <div>Rates</div>;
};

export default Rates;

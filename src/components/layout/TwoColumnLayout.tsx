type Props = {
  src: string;
  title: string;
  desc: string;
  direction: 'left' | 'right';
};

const TwoColumnLayout = (props: Props) => {
  console.log(props);
  return <div>TwoColumnLayout</div>;
};

export default TwoColumnLayout;

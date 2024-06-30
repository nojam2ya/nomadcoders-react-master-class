import { Circle, Wrap } from '@src/boxes/VariantsBox/style';

const parentVars = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      delayChildren: 0.9,
      staggerChildren: 0.2,
    },
  },
};

const childVars = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};

const VariantsBox = () => {
  return (
    <Wrap variants={parentVars} initial="start" animate="end">
      {[0, 1, 2, 3].map((item) => (
        <Circle key={item} variants={childVars} />
      ))}
    </Wrap>
  );
};

export default VariantsBox;

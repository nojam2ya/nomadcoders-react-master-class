import { useState } from 'react';
import { Box, Grid, Overlay, Wrap } from './style';
import { AnimatePresence } from 'framer-motion';

const Board = () => {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrap>
      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <Box key={i} layoutId={i + ''} onClick={() => setId(i + '')} />
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            onClick={() => setId(null)}
          >
            <Box layoutId={id} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrap>
  );
};

export default Board;

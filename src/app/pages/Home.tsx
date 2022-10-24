import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Typed from 'typed.js';
import links from './Links';

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLSpanElement>(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME!;
  }, [pathname]);

  useEffect(() => {
    const options = {
      strings: [
        'I&#39;m a Software Engineer &#x1F601;',
        'I&#39;m a Blockchain Engineer &#x1F607;',
        '<i>I&#39;m not a great programmer; I&#39;m just a good programmer with great habits.</i>',
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={6}>
        <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={2}>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography variant="h3">
                &#x1F44B; Hi! I&#39;m {import.meta.env.VITE_APP_NAME}.
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography variant="subtitle1" gutterBottom>
                <span style={{ whiteSpace: 'pre' }} ref={el} />
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projets',
    total: 10,
    content: 'De beaux projets avec une belle rentabilité',
  },
  {
    label: 'Clients satisfaits',
    total: 10,
    content: 'Nos clients parlent de nous',
  },
  {
    label: "années d'experience",
    total: 3,
    content: 'Que nous mettons à votre service',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt="landing about"
        src="/assets/images/marketing/marketing_post_hero.jpg"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            A notre sujet
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Qui sommes nous
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            La Maison du Loueur est une entreprise spécialisée dans l&apos;investissement immobilier
            locatif. Nous nous chargeons de toutes les étapes du processus, de la recherche du bien
            immobilier à son ameublement. Notre objectif est d&apos;aider les investisseurs à réussir
            leur investissement immobilier locatif. Nous proposons une gamme de services clé en
            main.
          </Typography>

          {/* <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Lean more
          </Button> */}
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

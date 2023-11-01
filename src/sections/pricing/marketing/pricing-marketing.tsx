import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IPricingMarketingProps } from 'src/types/pricing';

import PlanCard from './pricing-marketing-card';

// ----------------------------------------------------------------------

type Props = {
  plans: IPricingMarketingProps[];
};

export default function PricingMarketing({ plans }: Props) {
  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Tarifs
          </Typography>

          <Typography variant="h2">Découvrez nos tarifs</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Choisissez le plan idéal pour vos besoins.
            <br /> Vous aurez toujours la possibilité de le modifier
          </Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.license} plan={plan} />
        ))}
      </Box>
    </Container>
  );
}

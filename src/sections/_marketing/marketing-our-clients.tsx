import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import Carousel, { useCarousel } from 'src/components/carousel';

import { IBrandProps } from 'src/types/brand';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

// ----------------------------------------------------------------------

type Props = {
  cities: IBrandProps[];
};

export default function MarketingOurClients({ cities }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    speed: 5000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Carousel {...carousel.carouselSettings}>
        {cities.map((city) => (
          <Grid
            container
            spacing={2}
            key={city.id}
            sx={{ display: 'flex !important', flexDirection: 'row !important' }}
            component="span"
          >
            <Grid item xs={4} component="span">
              <Image src={city.image} alt={city.name} width={24} height={24} />
            </Grid>
            <Grid item xs={8} component="span">
              <Typography>{city.name}</Typography>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
}

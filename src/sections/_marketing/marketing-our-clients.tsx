import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import SvgColor from 'src/components/svg-color';
import Carousel, { useCarousel } from 'src/components/carousel';

import { IBrandProps } from 'src/types/brand';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

// ----------------------------------------------------------------------

type Props = {
  cities: IBrandProps[];
};

export default function MarketingOurClients({ cities }: Props) {
  console.log(cities);
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
          <Grid container spacing={2} key={city.id}>
            <Grid xs={4} key={city.id}>
              <Image src={city.image} alt={city.name} width={30} height={30} />
            </Grid>
            <Grid xs={8} key={city.id}>
              <Typography>{city.name}</Typography>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
}

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

import { ICourseProps } from 'src/types/course';

import { IProjet } from 'src/_mock/projets';
import ElearningCourseItem from '../list/elearning-course-item';

// ----------------------------------------------------------------------

type Props = {
  projects: IProjet[];
};

export default function ElearningLandingFeaturedCourses({ projects }: Props) {
  console.log(projects);
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'flex-end' }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack spacing={3} flexGrow={1}>
          <Typography variant="h2">Nos projets</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Découvrez nos récents projets ainsi que leurs profitabilité
          </Typography>
        </Stack>

        {mdUp && <CarouselArrows spacing={2} onNext={carousel.onNext} onPrev={carousel.onPrev} />}
      </Stack>

      <Box
        sx={{
          position: 'relative',
          ml: { md: -2 },
          width: { md: 'calc(100% + 32px)' },
        }}
      >
        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              left: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(mdUp && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(mdUp && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {projects &&
              projects.map((project) => (
                <Box
                  key={project.id}
                  sx={{
                    px: 2,
                    pt: { xs: 8, md: 10 },
                    pb: { xs: 10, md: 15 },
                  }}
                >
                  <ElearningCourseItem project={project} vertical />
                </Box>
              ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

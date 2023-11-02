import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

import { ICourseProps } from 'src/types/course';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
  vertical?: boolean;
};

function SlackUnit({ title, amount }: { title: string; amount?: number }) {
  return (
    <Stack
      spacing={1.5}
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
    >
      <Stack spacing={0.5} direction="row" alignItems="center">
        <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
        <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
          {title}
        </Typography>
        <Box sx={{ typography: 'h6' }}></Box>
        <Stack direction="row" sx={{ typography: 'subtitle2' }}>
          {amount && amount}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default function ElearningCourseItem({ course, vertical }: Props) {
  const {
    slug,
    level,
    profitability,
    teachers,
    coverUrl,
    category,
    totalCost,
    ourCost,
    rentPrice,
    projectDuration,
    projectFormulaChosen,
    bestSeller,
    totalHours,
    description,
  } = course;

  console.log(course);

  return (
    <Card
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      <Box sx={{ flexShrink: { sm: 0 } }}>
        <Image
          alt={slug}
          src={coverUrl}
          sx={{
            height: 1,
            objectFit: 'cover',
            width: { sm: 240 },
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>

      {bestSeller && (
        <Label
          color="warning"
          variant="filled"
          sx={{
            top: 12,
            left: 12,
            position: 'absolute',
            textTransform: 'uppercase',
          }}
        >
          Best Seller
        </Label>
      )}

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {category}
            </Typography>

            <Typography variant="h4">{profitability + '%'}</Typography>
          </Stack>

          <Stack spacing={1}>
            <Link component={RouterLink} href={paths.eLearning.course} color="inherit">
              <TextMaxLine variant="h6" line={1}>
                {slug}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              sx={{
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            >
              {description}
            </TextMaxLine>
          </Stack>
        </Stack>

        <SlackUnit title="Coût total" amount={totalCost} />
        <SlackUnit title="Location mensuelle" amount={rentPrice} />

        <Stack direction="row" alignItems="center">
          <Avatar src={teachers[0]?.avatarUrl} />

          <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
            {teachers[0]?.name}
          </Typography>

          {teachers?.length > 0 && (
            <Link underline="always" color="text.secondary" variant="body2">
              + {teachers?.length} teachers
            </Link>
          )}
        </Stack>

        <Divider
          sx={{
            borderStyle: 'dashed',
            display: { sm: 'none' },
            ...(vertical && {
              display: 'block',
            }),
          }}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-around" 
          sx={{ color: 'text.disabled', '& > *:not(:last-child)': { mr: 2.5 } }}
        >
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${projectDuration} jours`}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Image
              alt="icon"
              src={
                (projectFormulaChosen === 'basic' && '/assets/icons/pricing/ic_plan_basic03.svg') ||
                (projectFormulaChosen === 'starter' &&
                  '/assets/icons/pricing/ic_plan_starter03.svg') ||
                '/assets/icons/pricing/ic_plan_premium03.svg'
              }
              sx={{ mr: 1, width: 20, height: 20 }}
            />
            plan : {projectFormulaChosen}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

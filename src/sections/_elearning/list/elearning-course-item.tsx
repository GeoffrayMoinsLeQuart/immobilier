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
import { IconButton, Tooltip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IProjet } from 'src/_mock/projets';

// ----------------------------------------------------------------------

type Props = {
  project: IProjet;
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

export default function ElearningCourseItem({ project, vertical }: Props) {
  const {
    id,
    title,
    description,
    fullAddress,
    type_habitation,
    superficie,
    particularites,
    etage,
    prix_achat,
    frais_agence,
    cout_notaire,
    cout_mobilier,
    cout_travaux,
    frais_banque,
    frais_banque_garantie,
    montant_pret,
    taux_interet,
    duree_pret,
    taux_assurance,
    loyer_mensuel,
    taxe_fonciere,
    charge_copro,
    frais_comptable,
    assurance_pno,
    assurance_gli,
    cfe,
    autres_charges,
    chauffage,
    dpe,
    ges,
    duree_projet_apres_signature,
    formule_choisie,
    images_avant,
    images_apres,
    rentabilite_nette,
    rentabilite_brute
  } = project;

  console.log(project);

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
          alt={id.toString()}
          src={images_apres.chambre1![0]}
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

      {/* {bestSeller && (
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
      )} */}

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {type_habitation}
            </Typography>

            <Tooltip title="Rentabilité nette du projet" sx={{ cursor: 'pointer' }}>
              <Typography variant="h4">{rentabilite_nette + '%'}</Typography>
            </Tooltip>
            <Tooltip title="Rentabilité brute du projet" sx={{ cursor: 'pointer' }}>
              <Typography variant="h4">{rentabilite_brute + '%'}</Typography>
            </Tooltip>
          </Stack>

          <Stack spacing={1}>
            <Link component={RouterLink} href={paths.eLearning.course} color="inherit">
              <TextMaxLine variant="h6" line={1}>
                {title}
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

        <SlackUnit title="Coût total" amount={prix_achat} />
        <SlackUnit title="Location mensuelle" amount={loyer_mensuel} />

        {/* <Stack direction="row" alignItems="center">
          <Avatar src={teachers[0]?.avatarUrl} />

          <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
            {teachers[0]?.name}
          </Typography>

          {teachers?.length > 0 && (
            <Link underline="always" color="text.secondary" variant="body2">
              + {teachers?.length} teachers
            </Link>
          )} 
        </Stack>*/}

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
            <Tooltip title="Durée du projet">
              <IconButton>
                <AccessTimeIcon />
              </IconButton>
            </Tooltip>
            {`${duree_projet_apres_signature} jours`}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Tooltip title="Plan sélectionné">
              <Image
                alt="icon"
                src={
                  (formule_choisie === 'basic' && '/assets/icons/pricing/ic_plan_basic03.svg') ||
                  (formule_choisie === 'starter' &&
                    '/assets/icons/pricing/ic_plan_starter03.svg') ||
                  '/assets/icons/pricing/ic_plan_premium03.svg'
                }
                sx={{ mr: 1, width: 20, height: 20, cursor: 'pointer' }}
              />
            </Tooltip>
            plan : {formule_choisie}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

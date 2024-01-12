import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import { ICourseProps } from 'src/types/course';

import ElearningCourseItem from './elearning-course-item';

// ----------------------------------------------------------------------

type Props = {
  courses: ICourseProps[];
};

export default function ElearningCourseListSimilar() {}

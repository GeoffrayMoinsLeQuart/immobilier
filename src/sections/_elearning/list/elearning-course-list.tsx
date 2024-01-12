import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { ICourseProps } from 'src/types/course';

import ElearningCourseItem from './elearning-course-item';
import ElearningCourseItemSkeleton from './elearning-course-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  courses: ICourseProps[];
  loading?: boolean;
};

export default function ElearningCourseList() {}

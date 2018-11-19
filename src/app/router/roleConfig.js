import Loadable from 'react-loadable';

const roleList = Loadable({
  loader: () => import('@/pages/Page404'),
  loading: ContentLoader
});

export default [
  {
    path: '/role/list',
    component: roleList,
  },
  {
    path: '/role/update',
    component: roleUpdate,
  },
  {
    path: '/role/detail',
    component: roleDetail,
  },
]
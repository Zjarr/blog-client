import React from 'react';

import { DetailBlogPage } from '../blog/detail';
import { ListBlogPage } from '../blog/list';
import { DetailCategoryPage } from '../category/detail';
import { ListCategoryPage } from '../category/list';
import { DetailImagePage } from '../image/detail';
import { ListImagePage } from '../image/list';
import { NotFoundPage } from '../not-found';
import { EditProfilePage } from '../profile/edit';
import { ViewProfilePage } from '../profile/view';
import { SummaryPage } from '../summary';

export const DashboardSwitch: React.FC<IDashboardSwitch> = ({ action, param, section }) => {
  const profileComponentSwitch = (action?: string | null): React.ReactElement => {
    if (action === 'edit') return <EditProfilePage />;
    if (!action) return <ViewProfilePage />;

    return <NotFoundPage />;
  };

  const blogsComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'add' || action === 'view' || action === 'edit') return <DetailBlogPage action={action} param={param} />;
    if (!action) return <ListBlogPage />;

    return <NotFoundPage />;
  };

  const categoriesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'add' || action === 'view' || action === 'edit') return <DetailCategoryPage action={action} param={param} />;
    if (!action) return <ListCategoryPage />;

    return <NotFoundPage />;
  };

  const imagesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'add' || action === 'view' || action === 'edit') return <DetailImagePage action={action} param={param} />;
    if (!action) return <ListImagePage />;

    return <NotFoundPage />;
  };

  const componentToRender = (section: string | null, action?: string | null, param?: string | null): React.ReactElement => {
    if (section === 'dashboard') return <SummaryPage />;

    if (section === 'profile') return profileComponentSwitch(action);
    if (section === 'blogs') return blogsComponentSwitch(action, param);
    if (section === 'categories') return categoriesComponentSwitch(action, param);
    if (section === 'images') return imagesComponentSwitch(action, param);

    return <NotFoundPage />;
  };

  return componentToRender(section, action, param);
};

interface IDashboardSwitch {
  action: string | null;
  section: string | null;
  param?: string | null;
}

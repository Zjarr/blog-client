import React from 'react';

import { ListBlogPage } from '../blog/list';
import { ListCategoryPage } from '../category/list';
import { ListImagePage } from '../image/list';
import { NotFoundPage } from '../not-found';
import { SummaryPage } from '../summary';
import { ViewProfilePage } from '../profile/view';
import { EditProfilePage } from '../profile/edit';

export const DashboardSwitch: React.FC<IDashboardSwitch> = ({ action, param, section }) => {
  const profileComponentSwitch = (action?: string | null): React.ReactElement => {
    if (action === 'edit') return <EditProfilePage />;
    if (!action) return <ViewProfilePage />;

    return <NotFoundPage />;
  };

  const blogsComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'add' || action === 'edit' || action === 'view') return <h1>Blogs {action} {param}</h1>;
    if (!action) return <ListBlogPage />;

    return <NotFoundPage />;
  };

  const categoriesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'add' || action === 'edit' || action === 'view') return <h1>Categories {action} {param}</h1>;
    if (!action) return <ListCategoryPage />;

    return <NotFoundPage />;
  };

  const imagesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'add' || action === 'edit' || action === 'view') return <h1>Images {action} {param}</h1>;
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

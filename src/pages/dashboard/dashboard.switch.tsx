import React from 'react';

import { ListBlogPage } from '../blog/list';
import { ListCategoryPage } from '../category/list';
import { ListImagePage } from '../image/list';
import { NotFoundPage } from '../not-found';
import { ListRolePage } from '../role/list';
import { SummaryPage } from '../summary';
import { ListUserPage } from '../user/list';
import { ProfileUserPage } from '../user/profile';

export const DashboardSwitch: React.FC<IDashboardSwitch> = ({ action, param, section }) => {
  const profileComponentSwitch = (action?: string | null): React.ReactElement => {
    if (!action) return <ProfileUserPage />;

    return <NotFoundPage />;
  };

  const blogsComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Blogs: View {param}</h1>;
    if (action === 'add') return <h1>Blogs: Add</h1>;
    if (!action) return <ListBlogPage />;

    return <NotFoundPage />;
  };

  const categoriesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Categories: View {param}</h1>;
    if (action === 'add') return <h1>Categories: Add</h1>;
    if (!action) return <ListCategoryPage />;

    return <NotFoundPage />;
  };

  const imagesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Images: View {param}</h1>;
    if (action === 'add') return <h1>Images: Add</h1>;
    if (!action) return <ListImagePage />;

    return <NotFoundPage />;
  };

  const usersComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Users: View {param}</h1>;
    if (action === 'add') return <h1>Users: Add</h1>;
    if (!action) return <ListUserPage />;

    return <NotFoundPage />;
  };

  const rolesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Roles: View {param}</h1>;
    if (action === 'add') return <h1>Roles: Add</h1>;
    if (!action) return <ListRolePage />;

    return <NotFoundPage />;
  };

  const componentToRender = (section: string | null, action?: string | null, param?: string | null): React.ReactElement => {
    if (!section) return <SummaryPage />;

    if (section === 'profile') return profileComponentSwitch(action);
    if (section === 'blogs') return blogsComponentSwitch(action, param);
    if (section === 'categories') return categoriesComponentSwitch(action, param);
    if (section === 'images') return imagesComponentSwitch(action, param);
    if (section === 'users') return usersComponentSwitch(action, param);
    if (section === 'roles') return rolesComponentSwitch(action, param);

    return <NotFoundPage />;
  };

  return componentToRender(section, action, param);
};

interface IDashboardSwitch {
  action: string | null;
  section: string | null;
  param?: string | null;
}

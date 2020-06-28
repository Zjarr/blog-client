import React from 'react';

import { ListBlogPage } from '../blog/list';
import { NotFoundPage } from '../not-found';
import { SummaryPage } from '../summary';

export const DashboardSwitch: React.FC<IDashboardSwitch> = ({ action, param, section }) => {
  const profileComponentSwitch = (action?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Profile: View Profile</h1>;
    if (!action) return <h1>Profile</h1>;

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
    if (!action) return <h1>Categories</h1>;

    return <NotFoundPage />;
  };

  const assetsComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Assets: View {param}</h1>;
    if (action === 'add') return <h1>Assets: Add</h1>;
    if (!action) return <h1>Assets</h1>;

    return <NotFoundPage />;
  };

  const usersComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Users: View {param}</h1>;
    if (action === 'add') return <h1>Users: Add</h1>;
    if (!action) return <h1>Users</h1>;

    return <NotFoundPage />;
  };

  const rolesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Roles: View {param}</h1>;
    if (action === 'add') return <h1>Roles: Add</h1>;
    if (!action) return <h1>Roles</h1>;

    return <NotFoundPage />;
  };

  const componentToRender = (section: string | null, action?: string | null, param?: string | null): React.ReactElement => {
    if (!section) return <SummaryPage />;

    if (section === 'profile') return profileComponentSwitch(action);
    if (section === 'blogs') return blogsComponentSwitch(action, param);
    if (section === 'categories') return categoriesComponentSwitch(action, param);
    if (section === 'assets') return assetsComponentSwitch(action, param);
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

import React from 'react';

export const DashboardSwitch: React.FC<IDashboardSwitch> = ({ action, param, section }) => {
  const profileComponentSwitch = (action?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Profile: View Profile</h1>;
    if (!action) return <h1>Profile</h1>;

    return <h1>Profile: Not Found</h1>;
  };

  const blogsComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Blogs: View {param}</h1>;
    if (action === 'add') return <h1>Blogs: Add</h1>;
    if (!action) return <h1>Blogs</h1>;

    return <h1>Blogs: Not Found</h1>;
  };

  const categoriesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Categories: View {param}</h1>;
    if (action === 'add') return <h1>Categories: Add</h1>;
    if (!action) return <h1>Categories</h1>;

    return <h1>Categories: Not Found</h1>;
  };

  const assetsComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Assets: View {param}</h1>;
    if (action === 'add') return <h1>Assets: Add</h1>;
    if (!action) return <h1>Assets</h1>;

    return <h1>Assets: Not Found</h1>;
  };

  const usersComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Users: View {param}</h1>;
    if (action === 'add') return <h1>Users: Add</h1>;
    if (!action) return <h1>Users</h1>;

    return <h1>Users: Not Found</h1>;
  };

  const rolesComponentSwitch = (action?: string | null, param?: string | null): React.ReactElement => {
    if (action === 'view') return <h1>Roles: View {param}</h1>;
    if (action === 'add') return <h1>Roles: Add</h1>;
    if (!action) return <h1>Roles</h1>;

    return <h1>Roles: Not Found</h1>;
  };

  const componentToRender = (section: string | null, action?: string | null, param?: string | null): React.ReactElement => {
    if (!section) return <h1>Dashboard</h1>;

    if (section === 'profile') return profileComponentSwitch(action);
    if (section === 'blogs') return blogsComponentSwitch(action, param);
    if (section === 'categories') return categoriesComponentSwitch(action, param);
    if (section === 'assets') return assetsComponentSwitch(action, param);
    if (section === 'users') return usersComponentSwitch(action, param);
    if (section === 'roles') return rolesComponentSwitch(action, param);

    return <h1>Not Found</h1>;
  };

  return componentToRender(section, action, param);
};

interface IDashboardSwitch {
  action: string | null;
  section: string | null;
  param?: string | null;
}

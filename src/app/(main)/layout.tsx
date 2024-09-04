import React from 'react';

import AuthLayout from '@/modules/core/components/AuthLayout';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default MainLayout;

import React, { Suspense } from 'react';

import AuthLayout from '@/modules/core/components/AuthLayout';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <AuthLayout>
      <Suspense fallback={<p>Loading..</p>}>{children}</Suspense>
    </AuthLayout>
  );
};

export default MainLayout;

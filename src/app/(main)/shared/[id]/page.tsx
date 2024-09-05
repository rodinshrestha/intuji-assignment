import React from 'react';

import Shared from '@/modules/Shared';
import { fetchSharedTeam } from '@/modules/team-generator/actions/team-generator-action';

type PageType = {
  params: {
    id: string;
  };
};

const SharedPage = async ({ params }: PageType) => {
  const { id = '' } = params || {};
  const data = await fetchSharedTeam(id);

  return <Shared data={data?.data || null} />;
};

export default SharedPage;

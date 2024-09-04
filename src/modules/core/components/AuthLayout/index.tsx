'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import clsx from 'clsx';

import { route } from '@/lib/route';

import { Container } from '../Container';
import { Row } from '../Row';
import { Col } from '../Col';
import Typography from '../Typography';

import { StyledMain } from './style';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const segments = useSelectedLayoutSegments();

  return (
    <StyledMain>
      <aside className="sidebar-wrapper">
        {route.map((x) => {
          const isActive = segments.includes(x.slug);
          return (
            <Link href={`/${x.slug}`} key={x.id}>
              <Typography
                variant="h6"
                className={clsx('side-bar-item', { active: isActive })}
              >
                {x.title}
              </Typography>
            </Link>
          );
        })}
      </aside>
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </StyledMain>
  );
};

export default AuthLayout;

'use client';

import React from 'react';

import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { InfinitySpin } from 'react-loader-spinner';

import useOutsideClick from '@/core/hooks/useOutsideClick';

import Overlay from '../Overlay';

import { StyledDiv } from './style';

interface IModal {
  title?: string;
  className?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  loader?: boolean;
  overlayClick?: boolean;
  search?: React.ReactNode;
}

const Modal = ({
  title,
  className,
  open,
  onClose,
  children,
  maxWidth = '820px',
  loader = false,
  search,
  overlayClick = true,
}: IModal) => {
  const style = {
    maxWidth: maxWidth,
  };

  React.useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  const ref = React.useRef(null);

  useOutsideClick(ref, overlayClick ? onClose : () => {});

  return (
    <>
      {open &&
        createPortal(
          <>
            <Overlay zIndex={9} position="fixed" />
            <StyledDiv
              className={clsx('modal fade', className, { open: 'show' })}
            >
              <div className="modal-dialog" style={style} ref={ref}>
                <div className="modal-content">
                  <div className="modal-header">
                    <span
                      className="close-btn"
                      onClick={onClose}
                      aria-hidden="true"
                    >
                      X
                    </span>

                    {title && (
                      <div className="modal-title">
                        <h3 className="h3 title">{title}</h3>
                      </div>
                    )}
                  </div>

                  {search ? <div className="modal-search">{search}</div> : null}
                  <div className="modal-body">
                    {loader ? (
                      <div className="loader-container">
                        <InfinitySpin width="200" color="#4fa94d" />
                      </div>
                    ) : (
                      children
                    )}
                  </div>
                </div>
              </div>
            </StyledDiv>
          </>,
          document.body as HTMLElement
        )}
    </>
  );
};

export default Modal;

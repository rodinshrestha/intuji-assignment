'use client';
import React from 'react';

import { Rating } from 'react-simple-star-rating';
import { useFormik } from 'formik';
import clsx from 'clsx';

import Modal from '@/modules/core/components/Modal';
import InputField from '@/modules/core/components/InputField';
import Button from '@/modules/core/components/Button';
import Typography from '@/modules/core/components/Typography';

import { addPlayerSchema, AddPlayerSchemaType } from '../../add-player-schema';

import { StyledDiv } from './style';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  rating: number;
};

const EditPlayerModal = ({ isOpen, onClose, name, rating }: Props) => {
  const formik = useFormik<AddPlayerSchemaType>({
    initialValues: {
      fullname: name,
      rating: rating.toString(),
    },
    enableReinitialize: true,
    validationSchema: addPlayerSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose} title="Update Player">
      <StyledDiv>
        <div className="input-wrapper">
          <InputField
            label="Full Name"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            error={!!formik.errors.fullname}
            errorMsg={formik.errors?.fullname}
            touched={formik.touched.fullname}
          />

          <div className="rating-field-wrapper">
            <span
              title="rating"
              id="rating"
              className={clsx({
                error: formik.errors.rating && formik.touched.rating,
              })}
            >
              Rating
            </span>
            <Rating
              onClick={(e) => {
                formik.setFieldValue('rating', e);
              }}
              initialValue={Number(formik.values.rating)}
            />

            {formik.errors.rating && formik.touched.rating && (
              <Typography variant="span" className="error">
                {formik.errors.rating}
              </Typography>
            )}
          </div>

          <div className="button-group">
            <Button
              variant="contained"
              size="lg"
              type="submit"
              disabled={!formik.dirty}
              isLoading
              onClick={formik.submitForm}
            >
              Update
            </Button>
            <Button variant="outline" size="lg" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default EditPlayerModal;

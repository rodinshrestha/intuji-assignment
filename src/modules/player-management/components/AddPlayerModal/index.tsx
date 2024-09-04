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
};

const AddPlayerModal = ({ isOpen, onClose }: Props) => {
  const formik = useFormik<AddPlayerSchemaType>({
    initialValues: {
      fullname: '',
      rating: '',
    },
    enableReinitialize: true,
    validationSchema: addPlayerSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose} title="Add Player">
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
              onClick={() => formik.handleSubmit()}
            >
              Save
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

export default AddPlayerModal;

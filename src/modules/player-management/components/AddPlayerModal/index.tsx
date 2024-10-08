import React from 'react';

import { Rating } from 'react-simple-star-rating';
import { useFormik } from 'formik';
import clsx from 'clsx';

import Modal from '@/modules/core/components/Modal';
import InputField from '@/modules/core/components/InputField';
import Button from '@/modules/core/components/Button';
import Typography from '@/modules/core/components/Typography';
import toastAlert from '@/modules/core/utils/toast';

import { addPlayerSchema, AddPlayerSchemaType } from '../../add-player-schema';
import { createPlayer } from '../../actions/player-actions';

import { StyledDiv } from './style';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddPlayerModal = ({ isOpen, onClose }: Props) => {
  const [loader, setLoader] = React.useState(false);
  const formik = useFormik<AddPlayerSchemaType>({
    initialValues: {
      playerName: '',
      rating: '',
    },
    enableReinitialize: true,
    validationSchema: addPlayerSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      setLoader(true);
      createPlayer(values)
        .then(() => {
          toastAlert('Player Created', 'success');
          onClose();
        })
        .catch(() => {
          toastAlert('Error', 'error');
        })
        .finally(() => {
          setLoader(false);
        });
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose} title="Add Player">
      <StyledDiv>
        <div className="input-wrapper">
          <InputField
            label="Player Name"
            name="playerName"
            value={formik.values.playerName}
            onChange={formik.handleChange}
            error={!!formik.errors.playerName}
            errorMsg={formik.errors?.playerName}
            touched={formik.touched.playerName}
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
              isLoading={loader}
              disabled={loader}
            >
              Save
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onClose}
              disabled={loader}
            >
              Cancel
            </Button>
          </div>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default AddPlayerModal;

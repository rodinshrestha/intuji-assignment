'use client';
import React from 'react';

import { useFormik } from 'formik';

import Modal from '@/modules/core/components/Modal';
import InputField from '@/modules/core/components/InputField';
import Button from '@/modules/core/components/Button';
import toastAlert from '@/modules/core/utils/toast';

import { AddTeamSchemaType, addTeamSchema } from '../../add-team-schema';
import { updateTeam } from '../../actions/team-server-action';

import { StyledDiv } from './style';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  teamName: string;
  id: string;
};

const EditTeamModal = ({ isOpen, onClose, teamName, id }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const formik = useFormik<AddTeamSchemaType>({
    initialValues: {
      teamName: teamName,
    },
    enableReinitialize: true,
    validationSchema: addTeamSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      setLoader(true);
      updateTeam(id, values)
        .then(() => {
          toastAlert('Team updated', 'success');
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
    <Modal open={isOpen} onClose={onClose} title="Update Team">
      <StyledDiv>
        <div className="input-wrapper">
          <InputField
            label="Full Name"
            name="teamName"
            value={formik.values.teamName}
            onChange={formik.handleChange}
            error={!!formik.errors.teamName}
            errorMsg={formik.errors?.teamName}
            touched={formik.touched.teamName}
          />

          <div className="button-group">
            <Button
              variant="contained"
              size="lg"
              type="submit"
              disabled={!formik.dirty || loader}
              isLoading={loader}
              onClick={formik.submitForm}
            >
              Update
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

export default EditTeamModal;

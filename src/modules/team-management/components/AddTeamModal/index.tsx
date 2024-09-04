import React from 'react';

import { useFormik } from 'formik';

import Modal from '@/modules/core/components/Modal';
import InputField from '@/modules/core/components/InputField';
import Button from '@/modules/core/components/Button';

import { addTeamSchema, AddTeamSchemaType } from '../../add-team-schema';
import { createTeam } from '../../actions/team-server-action';

import { StyledDiv } from './style';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddTeamModal = ({ isOpen, onClose }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const formik = useFormik<AddTeamSchemaType>({
    initialValues: {
      teamName: '',
    },
    enableReinitialize: true,
    validationSchema: addTeamSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      setLoader(true);
      createTeam(values)
        .then(() => onClose())
        .finally(() => {
          setLoader(false);
        });
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose} title="Add Team">
      <StyledDiv>
        <div className="input-wrapper">
          <InputField
            label="Team Name"
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
              onClick={() => formik.handleSubmit()}
              disabled={loader}
              isLoading={loader}
              type="submit"
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

export default AddTeamModal;

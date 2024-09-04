import * as Yup from 'yup';

export type AddTeamSchemaType = {
  teamName: string;
};

export const addTeamSchema = Yup.object().shape({
  teamName: Yup.string().required('Firstname is required'),
});

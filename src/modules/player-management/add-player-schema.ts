import * as Yup from 'yup';

export type AddPlayerSchemaType = {
  playerName: string;
  rating: string;
};

export const addPlayerSchema = Yup.object().shape({
  playerName: Yup.string().required('Firstname is required'),
  rating: Yup.string().required('Rating is required'),
});

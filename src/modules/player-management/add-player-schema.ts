import * as Yup from 'yup';

export type AddPlayerSchemaType = {
  fullname: string;
  rating: string;
};

export const addPlayerSchema = Yup.object().shape({
  fullname: Yup.string().required('Firstname is required'),
  rating: Yup.string().required('Rating is required'),
});

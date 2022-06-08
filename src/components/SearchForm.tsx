import { Form, Formik, Field } from 'formik'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const validationSchema = yup.object({
  keyword: yup.string().required('Keyword is required'),
})

const initialValues = {
  keyword: '',
}

export type SearchFormValues = {
  keyword: string
}

type SearchFormProps = {
  onSubmit: (values: SearchFormValues) => void
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <Stack direction="row" spacing={2}>
          <Field name="keyword">
            {({
             field,
             meta,
           }: any) => (
             <TextField
               placeholder="Type in a country name"
               error={meta.touched && Boolean(meta.error)}
               helperText={meta.touched && meta.error}
               {...field}
             />
           )}
          </Field>
          <Button type="submit" variant="contained">Search</Button>
        </Stack>
      </Form>
    </Formik>
  )
}

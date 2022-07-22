import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps
} from 'formik';

interface PageOneValues {
    firstName: string;
    lastName: string;
}


export const PageOne: React.FC<{}> = () => {
    const initialValues: PageOneValues = {
        firstName: '',
        lastName: ''}

    return (
        <div>
            <h1>Page One Content</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log({ values, actions })
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="First Name" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
    );
};
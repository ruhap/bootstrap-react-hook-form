import { z } from "zod";
import { CustomForm } from "./components/form/form";
import FormInput from "./components/form/input";
import { Button, Container } from "react-bootstrap";
import { FieldErrors } from "react-hook-form";

const schema = z.object({
  firstName: z.string().min(5),
  lastName: z.string().min(3),
});

export type FormValues = z.infer<typeof schema>;

function App() {
  const onSubmit = async (values: FormValues) => {
    console.log("App onSubmit", values);
  };

  const onError = async (error: FieldErrors<FormValues>) => {
    console.log("App error", error);
  };

  return (
    <CustomForm
      onSubmit={onSubmit}
      onError={onError}
      schema={schema}
      defaultValues={{
        firstName: "",
        lastName: "",
      }}
    >
      {({ formState: { isSubmitting }, getValues }) => (
        <Container>
          <FormInput label="First Name" name="firstName" />
          <FormInput label="Last Name" name="lastName" />
          {JSON.stringify(getValues())}
          <Button
            // isDisabled={isSubmitting}
            // isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Container>
      )}
    </CustomForm>
  );
}

export default App;

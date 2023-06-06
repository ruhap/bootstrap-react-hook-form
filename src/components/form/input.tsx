import { useFormContext, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";

interface FormInputProps {
  label?: string;
  name: string;
}

const FormInput = ({ label, name, ...props }: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Form.Group className="mb-3" controlId={name}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
              {...props}
              {...field}
              type="text"
              name={name}
              isValid={!!error}
            />
          </Form.Group>
        );
      }}
    />
  );
};

export default FormInput;

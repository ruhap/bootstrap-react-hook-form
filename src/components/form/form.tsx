import {
  useForm,
  FormProvider,
  type FieldValues,
  type UseFormReturn,
  type SubmitHandler,
  type SubmitErrorHandler,
  type DeepPartial,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "react-bootstrap/Form";

interface FormProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  schema: z.ZodTypeAny;
  children: (methods: UseFormReturn<T>) => React.ReactNode;
  defaultValues: DeepPartial<T> | undefined;
}

export const CustomForm = <T extends FieldValues>({
  onSubmit,
  onError,
  schema,
  defaultValues,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        {children(methods)}
      </Form>
    </FormProvider>
  );
};

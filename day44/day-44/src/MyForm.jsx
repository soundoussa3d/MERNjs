import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  message: z.string().min(10),
});

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission with validated data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>} 
      <br />
      
      <input type="email" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      <br />
      <textarea {...register('message')} />
      {errors.message && <p>{errors.message.message}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default MyForm;
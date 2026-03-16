import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all'
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('username', {
                    required: {value: true, message:'name is required'},
                    // pattern: {
                    //     value: /\w+/,
                    //     message: 'wrong name'
                    // }
                    minLength:{value:4, message:'wrong name'}
                })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label><input type="text" {...register('password', {
                    required: true,
                    minLength: {value: 3, message: 'password must be at least 3 characters'},
                    maxLength: {value: 8, message: 'password must be maximum 8 characters'},
                })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label><input type="number" {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1, message: 'age is too small'},
                    max: {value: 100, message: 'age is too big'}
                })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;